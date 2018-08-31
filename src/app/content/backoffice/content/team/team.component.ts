import { environment } from '../../../../../environments/environment';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { MatDialog } from '@angular/material';
import { PopupComponent } from '../buy/popup/popup.component';
import { GetReferralUsers } from './store/actions/referrals-users.action';
import { IRootState } from '../../../../store/reducers';
import { getReferralUsers, getTotalCommission } from './store/selectors/referralUsers.selector';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.sass']
})
export class TeamComponent implements OnInit, OnDestroy {

  public referrals$!: Observable<User[]>;
  public totalCommission$!: Observable<number>;
  public source;
  public referralLink1;
  public referralLink2;
  public userSubscription!: Subscription;
  public loader$!: Observable<boolean>;
  public view: string = 'referrals';
  public copyButton = {
    name: 'Copy address',
    class: 'emptyGreen'
  };

  public isActive: Boolean = false;

  public constructor(
    private _store: Store<IRootState>,
    private _dialog: MatDialog
  ) {
  }

  public ngOnInit(): void {
    this.referrals$ = this._store.select(getReferralUsers);
    this.totalCommission$ = this._store.select(getTotalCommission);

    this.loader$ = this._store.select('referrals', 'referralUsers', 'isLoading');
    this._store.dispatch(new GetReferralUsers());

    this.userSubscription = this._store.select('backoffice', 'user', 'referralHash')
      .subscribe((referralHash: string) => {
        this.referralLink1 = `${environment.domain}/pre-ico?ref=${referralHash}`;
        this.referralLink2 = `${environment.domain}/special-video?ref=${referralHash}`;
      });
  }

  public openPopupCopyAddress() {
    this._dialog.open(PopupComponent, {
      data: {
        iconClose: 'icon-close',
        iconClass: 'icon-tick',
        message: 'The address has been copied to the clipboard',
      }
    });
  }

  public appendSource(link: string) {
    return this.source && this.source.trim() ? (link + '&subid=' + this.source.trim()) : link;
  }

  public ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  public toggleClass() {
    this.isActive = !this.isActive;
  }
}
