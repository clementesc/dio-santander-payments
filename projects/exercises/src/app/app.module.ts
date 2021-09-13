import { LOCALE_ID, NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import ptBr from '@angular/common/locales/pt';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentWaysComponent } from './payment-ways/payment-ways.component';
import { CreditCardComponent } from './credit-card/credit-card.component';

// registerLocaleData(ptBr);

@NgModule({
    declarations: [
        AppComponent,
        PaymentComponent,
        PaymentWaysComponent,
        CreditCardComponent,
    ],
    imports: [
        BrowserModule,
        // FormsModule,
    ],
    providers: [
        // { provide: LOCALE_ID, useValue: 'pt-BR' }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
