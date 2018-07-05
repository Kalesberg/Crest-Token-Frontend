import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SettingsComponent} from './settings.component';
import {PasswordComponent} from './password/password.component';
import {TwoFactorAuthComponent} from './two-factor-auth/two-factor-auth.component';
import {PersonalInformationComponent} from './personal-information/personal-information.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LableDirective} from '../../lable.directive';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path: '', component: SettingsComponent}
    ])
  ],
  declarations: [
    SettingsComponent,
    PasswordComponent,
    TwoFactorAuthComponent,
    PersonalInformationComponent,
    LableDirective
  ]
})
export class SettingsModule {
}
