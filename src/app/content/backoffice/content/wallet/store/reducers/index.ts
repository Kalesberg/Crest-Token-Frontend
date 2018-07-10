import { ActionReducerMap } from '@ngrx/store';

import * as fromTransaction from './transactions.reducer';
import * as fromWithdrawal from './withdrawal.reducer';
import * as fromPurchase from './purchase.reducer';

export interface BackofficeState {
  transactions: any;
  withdrawal: any;
  purchase: any;
}

export const reducers: ActionReducerMap<BackofficeState> = {
  transactions: fromTransaction.reducer,
  withdrawal: fromWithdrawal.reducer,
  purchase: fromPurchase.reducer,
};
