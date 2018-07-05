import {WalletService} from './wallet.service';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WalletComponent} from './wallet.component';
import {WalletListComponent} from './wallet-list/wallet-list.component';
import {TransactionListComponent} from './transaction-list/transaction-list.component';
import {DepositModalComponent} from './wallet-list/deposit-modal/deposit-modal.component';
import {WithdrawalModalComponent} from './wallet-list/withdrawal-modal/withdrawal-modal.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../shared/modules/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: WalletComponent}
    ]),
    SharedModule,
    ReactiveFormsModule,
  ],
  declarations: [WalletComponent, WalletListComponent, TransactionListComponent, DepositModalComponent, WithdrawalModalComponent],
  entryComponents: [DepositModalComponent, WithdrawalModalComponent],
  providers: [WalletService]
})
export class WalletModule {
}
