import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-payment',
    templateUrl: './payment.component.html',
    styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {
    totalValue: number = 10;

    constructor() {}

    ngOnInit(): void {}
}
