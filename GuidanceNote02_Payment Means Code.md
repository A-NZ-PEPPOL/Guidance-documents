<p align="center">
  <img src="assets/header.jpg" alt="Header Image" width="100%">
</p>

# A-NZ PEPPOL FRAMEWORK GUIDANCE NOTE

# Payment means and use of the UNCL4461 code list
**Guidance Note 02**

📄 Download the Word version from [here](https://github.com/A-NZ-PEPPOL/Guidance-documents/raw/refs/heads/Dev-GN-2025/GuidanceNote02_Payment%20Means%20Code_1.5.docx)

| Issue Date   | Version |
|--------------|---------|
| 09 June 2025 | 1.5     |

| Effective From | Artefacts Impacted |
|----------------|--------------------|
| 09 June 2025   | PINT A-NZ Billing and Self-billing specifications |

---

## Introduction

The purpose of this document is to provide instructions on how commonly used payment methods in Australia and New Zealand (A-NZ), that do not appear in the [payment means code list (UNCL4461)](https://docs.peppol.eu/poac/aunz/pint-aunz/trn-invoice/codelist/UNCL4461/), should be implemented in the [PINT A-NZ](https://docs.peppol.eu/poac/aunz/) (Billing and Self-billing) messages.

> **Note:** The PINT A-NZ specifications support common business practice by allowing multiple (different) payment methods to be included in an invoice/credit note (`cac:PaymentMeans` [(IBG-16)](https://docs.peppol.eu/poac/aunz/pint-aunz/trn-invoice/semantic-model/ibg-16/)).

---

## Issue

The current [UNCL4461 code list](https://docs.peppol.eu/poac/aunz/pint-aunz/trn-invoice/codelist/UNCL4461/) used in the PINT A-NZ specifications for element `cac:PaymentMeans/cbc:PaymentMeansCode` [(IBT-081)](https://docs.peppol.eu/poac/aunz/pint-aunz/trn-invoice/semantic-model/ibt-081/) does not cover some frequently used payment methods or channels in A-NZ. For example; BPAY, BPAY View, Post Billpay, a website URL / URI or other payment channels using the new payment platform (NPP).


Each payment method requires a different set of information to be provided. For example, BPAY requires the biller code and reference number to be supplied. Guidance is therefore required to specify how the information should be conveyed in existing elements. 

---

## Guidance
The recommended solution, described in the sections below, explains how to utilise existing Payment Means Codes to identify the payment platform used and map the customer-specific information to the relevant invoice elements.

The PINT A-NZ specifications include the following fields for Payment Means:

| ID      | Lvl | Attribute name                    | Cardinality | Description                                                                                      |
|---------|-----|---------------------------------|-------------|------------------------------------------------------------------------------------------------|
| IBG-16  | 1   | [cac:PaymentMeans](https://docs.peppol.eu/poac/aunz/pint-aunz/trn-invoice/semantic-model/ibg-16/)                 | 0..n        | A group of business terms providing information about the payment.                             |
| IBT-081 | 2   | [cbc:PaymentMeansCode](https://docs.peppol.eu/poac/aunz/pint-aunz/trn-invoice/semantic-model/ibt-081/)             | 1..1        | The means, expressed as code, for how a payment is expected to be or has been settled.          |
| IBT-082 | 3   | [@name](https://docs.peppol.eu/poac/aunz/pint-aunz/trn-invoice/semantic-model/ibt-082/)                           | O           | The means, expressed as text, for how a payment is expected to be or has been settled.          |
| IBT-083 | 2   | [cbc:PaymentID](https://docs.peppol.eu/poac/aunz/pint-aunz/trn-invoice/semantic-model/ibt-083/)                   | 0..1        | A textual value used to establish a link between the payment and the Invoice, issued by the Seller. Used for creditor's critical reconciliation information. This information element helps the Seller to assign an incoming payment to the relevant payment process. |
| IBG-18  | 2   | [cac:CardAccount](https://docs.peppol.eu/poac/aunz/pint-aunz/trn-invoice/semantic-model/ibg-18/)                 | 0..1        | A group of business terms providing information about card used for payment contemporaneous with invoice issuance. |
| IBT-087 | 3   | [cbc:PrimaryAccountNumberID](https://docs.peppol.eu/poac/aunz/pint-aunz/trn-invoice/semantic-model/ibt-087/)      | 1..1        | The Primary Account Number (PAN) of the card used for payment. In accordance with card payments security standards, an invoice should never include a full card primary account number. |
|         | 3   | [cbc:NetworkID](https://docs.peppol.eu/poac/aunz/pint-aunz/trn-invoice/syntax/cac-PaymentMeans/cac-CardAccount/cbc-NetworkID/)                  | 1..1        | This is a syntax required field.  Use value ‘NA’                                                |
| IBT-088 | 3   | [cbc:HolderName](https://docs.peppol.eu/poac/aunz/pint-aunz/trn-invoice/semantic-model/ibt-088/)                 | 0..1        | The name of the payment card holder.                                                           |
| IBG-17  | 2   | [cac:PayeeFinancialAccount](https://docs.peppol.eu/poac/aunz/pint-aunz/trn-invoice/semantic-model/ibg-17/)       | 0..1        | A group of business terms to specify credit transfer payments.                                 |
| IBT-084 | 3   | [cbc:ID](https://docs.peppol.eu/poac/aunz/pint-aunz/trn-invoice/semantic-model/ibt-084/)                         | 1..1        | A unique identifier of the financial payment account, at a payment service provider, to which payment should be made. Such as IBAN or BBAN.<br><br>**Note:** For New Zealand, this should hold the full 16 digit bank account number. |
| IBT-085 | 3   | [cbc:Name](https://docs.peppol.eu/poac/aunz/pint-aunz/trn-invoice/semantic-model/ibt-085/)                       | 0..1        | The name of the payment account, at a payment service provider, to which payment should be made. |
|         | 3   | [cac:FinancialInstitutionBranch](https://docs.peppol.eu/poac/aunz/pint-aunz/trn-invoice/syntax/cac-PaymentMeans/cac-PayeeFinancialAccount/cac-FinancialInstitutionBranch/cbc-ID/) | 0..1        |                                                                                                |
| IBT-086 | 4   | [cbc:ID](https://docs.peppol.eu/poac/aunz/pint-aunz/trn-invoice/semantic-model/ibt-086/)                        | 1..1        | An identifier for the payment service provider where a payment account is located. Such as a BIC or a national clearing code where required. No identification scheme Identifier to be used. |
| IBG-19  | 2   | [cac:PaymentMandate](https://docs.peppol.eu/poac/aunz/pint-aunz/trn-invoice/semantic-model/ibg-19/)             | 0..1        | A group of business terms to specify a direct debit.                                           |
| IBT-089 | 3   | [cbc:ID](https://docs.peppol.eu/poac/aunz/pint-aunz/trn-invoice/semantic-model/ibt-089/)                        | 0..1        | Unique identifier assigned by the Payee for referencing the direct debit mandate.<br><br>**Note:** This element may be used to notify the buyer of an ordinary direct debit. SEPA is not relevant in Australia or New Zealand. |
|         | 3   | [cac:PayerFinancialAccount](https://docs.peppol.eu/poac/aunz/pint-aunz/trn-invoice/syntax/cac-PaymentMeans/cac-PaymentMandate/cac-PayerFinancialAccount/)       | 0..1        |                                                                                                |
| IBT-091 | 4   | [cbc:ID](https://docs.peppol.eu/poac/aunz/pint-aunz/trn-invoice/semantic-model/ibt-091/)                        | 1..1        | The account to be debited by the direct debit.                                                |

---

## Common Payment Means
 
### Credit transfer (30)
 
Credit transfer is one of the most common payment means. Payment channels such as BPAY, BPAY View and Post Billpay fall into this category.
 
This document provides guidance on how to include payment channel-specific fields (e.g. Biller Code or PayID) as the PINT A-NZ specifications do not define how to use these fields.
 
It is recommended to include the payee’s account name ([IBT-085](https://docs.peppol.eu/poac/aunz/pint-aunz/trn-invoice/semantic-model/ibt-085/)) to enable Confirmation of Payee verification to be completed.  For more information on Confirmation of Payee initiatives, refer to [Australian Payments Plus](https://www.auspayplus.com.au/confirmation-payee) or [GetVerified](https://www.getverified.co.nz/) for New Zealand.
 
### Direct debit (49)
 
Where a direct debit has been agreed between a supplier and buyer, it is recommended to use code ‘49 - Direct Debit’. Direct debit is a payment, via Direct Entry, where the account holder (payer) authorises another bank (that of the payee) to debit a fixed or variable amount directly from the payer’s bank account.
 
When using code ‘49’, an invoice should have only one occurrence of `*cac:PaymentMeans*`. ([IBG-16](https://docs.peppol.eu/poac/aunz/pint-aunz/trn-invoice/semantic-model/ibg-16/)) The direct debit reference number (`*cac:PaymentMandate/cbc:ID*`) ([IBT-089](https://docs.peppol.eu/poac/aunz/pint-aunz/trn-invoice/semantic-model/ibt-089/)) must also be included. If it is not relevant or not available, it is suggested to put “`NA`” in the field.
 
An example is provided below.

---
 
# UBL examples
 
## Credit transfer
 
A credit transfer is a payment where the account holder authorises the bank to pay a fixed or variable amount directly to a supplier’s bank account.
 
These payments are commonly made using a Bank State Branch (BSB) and Account number. An account name is often required for verification.
 
The following example demonstrates how the PINT A-NZ data model can be used to convey the required information to support a credit transfer to a domestic bank.


---

## Australia:

|   |   |
|---|---|
| **PaymentMeans**                                                     |                                          |
| **PaymentMeans/PaymentMeansCode**                                    | 30                                              |
| **PaymentMeans/PaymentMeansCode/@name**                              | Credit transfer                                 |
| **PaymentMeans/PaymentID**                                           | 88827661226 (_customer/payment reference number_) |
| **PaymentMeans/PayeeFinancialAccount/ID**                            | 324875423 (_account number_)                    |
| **PaymentMeans/PayeeFinancialAccount/Name**                          | ABC Ltd. (_account name_)                       |
| **PaymentMeans/PayeeFinancialAccount/FinancialInstitutionBranch/ID** | 205536 (_BSB_)                                  |


```xml
<cac:PaymentMeans><!-- Domestic credit transfer -->
  <cbc:PaymentMeansCode name="Credit transfer">30</cbc:PaymentMeansCode>
  <cbc:PaymentID>88827661226</cbc:PaymentID><!-- customer reference number -->
  <cac:PayeeFinancialAccount>
    <cbc:ID>324875423</cbc:ID><!-- Bank account number -->
    <cbc:Name>ABC Ltd.</cbc:Name><!-- Account name -->
    <cac:FinancialInstitutionBranch>
      <cbc:ID>205536</cbc:ID><!-- Bank state branch -->
    </cac:FinancialInstitutionBranch>
  </cac:PayeeFinancialAccount>
</cac:PaymentMeans>
```


## New Zealand

In New Zealand, it is common business practice to provide the combined bank account details (Bank, Branch, Account Number, Suffix), shown as a 16-digit number.

|   |   |
|---|---|
| **PaymentMeans**                          |                                               |
| **PaymentMeans/PaymentMeansCode**                                    | 30                                              |
| **PaymentMeans/PaymentMeansCode/@name**                              | Credit transfer                                 |
| **PaymentMeans/PaymentID**                                           | 88827661226 (_customer/payment reference number_) |
| **PaymentMeans/PayeeFinancialAccount/ID**                            | 0205000632487000 (_Combined NZ Bank/Branch/Account number, Suffix_) |
| **PaymentMeans/PayeeFinancialAccount/Name**                          | ABC Ltd. (_account name_)                       |

```xml
<cac:PaymentMeans><!-- Direct Debit -->
  <cbc:PaymentMeansCode name="Direct debit">49</cbc:PaymentMeansCode>
  <cbc:PaymentID>88827661226</cbc:PaymentID><!-- customer reference number -->
  <cac:PaymentMandate>
    <cbc:ID>324875423</cbc:ID><!-- direct debit authority reference -->
    <cac:PayerFinancialAccount>
      <cbc:ID>324875423</cbc:ID><!-- Account number -->
    </cac:PayerFinancialAccount>
  </cac:PaymentMandate>
</cac:PaymentMeans>

```

