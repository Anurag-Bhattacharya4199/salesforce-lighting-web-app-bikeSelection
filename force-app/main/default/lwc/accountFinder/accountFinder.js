import { LightningElement, track, wire } from 'lwc';
import queryAccountsByRevenue from '@salesforce/apex/AccountListControllerLwc.queryAccountsByRevenue';

export default class AccountFinder extends LightningElement {
    @track annualRevenue = null;

    handleChange(event) {
        this.annualRevenue = event.target.value;
    }

    reset() {
        this.annualRevenue = null;
    }

    @wire(queryAccountsByRevenue, { annualRevenue: '$annualRevenue' })
    wiredAccounts({ error, data }) {
        if (data) {
            this.accounts = data;
        } else if (error) {
            this.accounts = undefined;
            // Handle error
        }
    }
}