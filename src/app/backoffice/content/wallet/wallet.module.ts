import { WalletService } from './wallet.service';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletComponent } from './wallet.component';
import { WalletListComponent } from './wallet-list/wallet-list.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { DepositModalComponent } from './wallet-list/deposit-modal/deposit-modal.component';
import { WithdrawalModalComponent } from './wallet-list/withdrawal-modal/withdrawal-modal.component';
import { UiModule } from '../../../shared/module/ui/ui.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HelpComponent } from './help/help.component';
import { FormsModule } from '@angular/forms';
import { LableDirective } from '../../lable.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path: '', component: WalletComponent}
    ]),
    UiModule,
    ReactiveFormsModule,
  ],
  declarations: [WalletComponent, WalletListComponent, TransactionListComponent, DepositModalComponent, WithdrawalModalComponent, HelpComponent, LableDirective],
  entryComponents: [DepositModalComponent, WithdrawalModalComponent],
  providers: [WalletService]
})
export class WalletModule { }
