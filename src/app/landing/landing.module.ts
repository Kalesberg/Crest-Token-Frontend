import {NO_ERRORS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LandingComponent} from './landing.component';
import {RouterModule} from "@angular/router";
import { HeaderComponent } from './header/header.component';
import { WhatTokenComponent } from './what-token/what-token.component';
import { WhyTokenComponent } from './why-token/why-token.component';
import { TokenSaleComponent } from './token-sale/token-sale.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: LandingComponent
      }
    ])
  ],
  declarations: [LandingComponent, HeaderComponent, WhatTokenComponent, WhyTokenComponent, TokenSaleComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class LandingModule {
}
