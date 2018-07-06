import { WalletService } from './wallet.service';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletComponent } from './wallet.component';
import { WalletListComponent } from './wallet-list/wallet-list.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { DepositModalComponent } from './wallet-list/deposit-modal/deposit-modal.component';
import { WithdrawalModalComponent } from './wallet-list/withdrawal-modal/withdrawal-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DepositviewComponent } from './depositview/depositview.component';
import { FormsModule } from '@angular/forms';
import { HelpComponent } from './help/help.component';
import { SharedModule } from '../../shared/modules/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './store/reducers';
import { effects } from './store/effects';
import { OwnCoinThumbnailComponent } from './own-coin-thumbnail/own-coin-thumbnail.component';
import { OtherCoinThumbnailComponent } from './other-coin-thumbnail/other-coin-thumbnail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: WalletComponent }
    ]),
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forFeature('walletList', reducers),
    EffectsModule.forFeature(effects),
  ],
  declarations: [WalletComponent, WalletListComponent, TransactionListComponent, DepositModalComponent, WithdrawalModalComponent, HelpComponent, DepositviewComponent, OwnCoinThumbnailComponent, OtherCoinThumbnailComponent],
  entryComponents: [DepositModalComponent, WithdrawalModalComponent],
  providers: [WalletService]
})
export class WalletModule {
}
