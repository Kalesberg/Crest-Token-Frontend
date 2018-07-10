import {ChangeDetectionStrategy, Component, Input, ViewChild} from '@angular/core';
import {ScrollbarComponent} from 'ngx-scrollbar';

@Component({
  selector: 'app-backoffice-table',
  templateUrl: './backoffice-table.component.html',
  styleUrls: ['./backoffice-table.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BackofficeTableComponent {
  @Input() dashboardTableHead;
  @Input() rounds;
  @Input() columns;
  @Input() scroll;

  @ViewChild(ScrollbarComponent) scrollRef: ScrollbarComponent;

  changeCoinString(str) {
    if (str === 'btc') {
      return 'Bitcoin';
    } else if (str === 'eth') {
      return 'Ethereum';
    } else if (str) {
      return str;
    }
  }
}
