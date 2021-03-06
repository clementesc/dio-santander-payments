import { Component, Input, OnInit } from '@angular/core';
import { ParcelOption } from '../models/parcel-option.interface';
import { PaymentOption } from '../models/payment-option.interface';
import { PaymentWays } from '../models/payment-ways.enum';
import { Utils } from '../utils';

@Component({
    selector: 'app-payment',
    templateUrl: './payment.component.html',
    styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {

    private calculationOptions = {
        paymentWayDiscount: 0,
        couponDiscount: 0,
        tax: {
            taxValue: 0,
            months: 0,
        },
    }
    
    @Input() public totalValue: number = 0;

    public calculatedValue = 0;

    public isCreditCardPayment = false;

    constructor() {}

    ngOnInit(): void {
        this.calculateTotal();
    }

    public updatePaymentWay(paymentOption: PaymentOption): void {
        this.calculationOptions.paymentWayDiscount = paymentOption.discount;
        this.isCreditCardPayment = paymentOption.value === PaymentWays.CREDIT_CARD;
        this.calculateTotal();
    }

    public updateParcel(parcelOption: ParcelOption): void {
        this.calculationOptions.tax.months = parcelOption.value;
        this.calculationOptions.tax.taxValue = parcelOption.tax;
        this.calculateTotal();
    }

    private calculateTotal(): void {
        this.calculatedValue = new Utils().calculaDesconto(this.totalValue,
            this.calculationOptions.couponDiscount + this.calculationOptions.paymentWayDiscount);
        this.calculatedValue = this.calculatedValue + new Utils().calculaJurosSimples(this.totalValue,
            this.calculationOptions.tax.taxValue, this.calculationOptions.tax.months).juros;
    }
}   
