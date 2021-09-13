import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PaymentOption } from '../models/payment-option.interface';
import { PaymentWays } from '../models/payment-ways.enum';

@Component({
    selector: 'app-payment-ways',
    templateUrl: './payment-ways.component.html',
    styleUrls: ['./payment-ways.component.scss'],
})
export class PaymentWaysComponent implements OnInit {
    public selectedPaymentOption = PaymentWays.CREDIT_CARD;
    @Output() public paymentWayChange: EventEmitter<PaymentOption> = new EventEmitter<PaymentOption>();

    public paymentOptions: Array<PaymentOption> = [
        { display: 'Pix (5,0% de desconto)', value: 'pix', discount: 5 },
        { display: 'Cartão de Crédito', value: 'credit-card', discount: 0 },
        { display: 'PayPal (3,0% de desconto)', value: 'pay-pal', discount: 3 },
        { display: 'Boleto (2,5% de desconto)', value: 'boleto', discount: 2.5 },
    ];

    constructor() {}

    ngOnInit(): void {
        this.updatePaymentWay();
    }

    public updatePaymentWay(): void {
        const paymentOption = this.paymentOptions.find((option) => {
            return option.value === this.selectedPaymentOption
        });

        if (paymentOption !== undefined){
            this.paymentWayChange.emit(paymentOption);
        }
    }
}
