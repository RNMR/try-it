import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

import {
  NzAvatarModule, NzTableModule, NzProgressModule, NzCarouselModule, NzRadioModule,
  NzDrawerModule, NzSwitchModule, NzDropDownModule, NzInputModule, NzBadgeModule,
  NzFormModule , NzLayoutModule , NzBackTopModule , NzSelectModule , NzCheckboxModule,
  NzStepsModule, NzButtonModule, NzPageHeaderModule, NzTagModule, NzTabsModule,
  NzModalModule, NzAlertModule, NzTimelineModule, NzPopoverModule, NzMenuModule,
  NzToolTipModule,
  NzNotificationModule,
  NzIconModule,
  NzDatePickerModule,
  NzMessageModule,
  NzInputNumberModule,
} from 'ng-zorro-antd'

const MODULES = [
  NzAvatarModule,
  NzTableModule,
  NzProgressModule,
  NzCarouselModule,
  NzRadioModule,
  NzDrawerModule,
  NzDropDownModule,
  NzInputModule,
  NzBadgeModule,
  NzFormModule,
  NzLayoutModule,
  NzBackTopModule,
  NzSelectModule,
  NzCheckboxModule,
  NzStepsModule,
  NzButtonModule,
  NzPageHeaderModule,
  NzTagModule,
  NzTabsModule,
  NzModalModule,
  NzAlertModule,
  NzTimelineModule,
  NzSwitchModule,
  NzPopoverModule,
  NzMenuModule,
  NzToolTipModule,
  NzNotificationModule,
  NzIconModule,
  NzDatePickerModule,
  NzMessageModule,
  NzInputNumberModule,
]
registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ...MODULES,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
