public with sharing class AccountListControllerLwc {
    public AccountListControllerLwc() {

    }

    @AuraEnabled(cacheable=true)
    public static List<Account> queryAccountsByEmployeeNumber(Integer numberOfEmployees) {
        return [
            SELECT Name
            FROM Account
            WHERE NumberOfEmployees >= :numberOfEmployees
            ];
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> queryAccountsByRevenue(Decimal annualRevenue) {
        return [SELECT Id, Name FROM Account WHERE AnnualRevenue >= :annualRevenue];
    }
}