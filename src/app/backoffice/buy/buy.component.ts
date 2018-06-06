import { switchMap, filter } from 'rxjs/operators';
import { getAuthUserId } from './../../store/selectors/auth.selectors';
import { WalletRequest, AssetsRequest } from './../../store/actions/wallets.action';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { of, Observable } from 'rxjs';
@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  assets$: Observable<any>;
  wallets$: Observable<any>;

  constructor(
    private _store: Store<StoreStates>
  ) { }

  ngOnInit() {
    this.assets$ = this._store.select('assets');
    this.wallets$ = this._store.select('wallets');

    this._store.select(getAuthUserId)
    .pipe(
      filter((id: string | null) => Boolean(id))
    )
    .subscribe((id) => {
      this._store.dispatch(new WalletRequest(id));
      this._store.dispatch(new AssetsRequest());
    });
  }

}
