# A-NZ PEPPOL FRAMEWORK GUIDANCE NOTE

# Payment means and use of the UNCL4461 code list
**Guidance Note 02**

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


| ID       | Lvl | Attribute name                  | Cardinality | Description |
|----------|-----|----------------------------------|-------------|-------------|
| IBG-16   | 1   | cac:PaymentMeans                 | 0..n        | A group of business terms providing information about the payment. |
| IBT-081  | 2   | cbc:PaymentMeansCode             | 1..1        | The means, expressed as code, for how a payment is expected to be or has been settled. |
| IBT-082  | 3   | @name                            | O           | The means, expressed as text, for how a payment is expected to be or has been settled. |
| IBT-083  | 2   | cbc:PaymentID                    | 0..1        | A textual value used to establish a link between the payment and the Invoice, issued by the Seller. Used for creditor's critical reconciliation information. This information element helps the Seller to assign an incoming payment to the relevant payment process. |
| IBG-18   | 2   | cac:CardAccount                  | 0..1        | A group of business terms providing information about card used for payment contemporaneous with invoice issuance. |
| IBT-087  | 3   | cbc:PrimaryAccountNumberID       | 1..1        | The Primary Account Number (PAN) of the card used for payment. In accordance with card payments security standards, an invoice should never include a full card primary account number. |
|          | 3   | cbc:NetworkID                    | 1..1        | This is a syntax required field. Use value ‘NA’ |
| IBT-088  | 3   | cbc:HolderName                   | 0..1        | The name of the payment card holder. |
| IBG-17   | 2   | cac:PayeeFinancialAccount        | 0..1        | A group of business terms to specify credit transfer payments. |
| IBT-084  | 3   | cbc:ID                           | 1..1        | A unique identifier of the financial payment account, at a payment service provider, to which payment should be made. Such as IBAN or BBAN. |
|          |     |                                  |             | **Note:** For New Zealand, this should hold the full 16 digit bank account number. |
| IBT-085  | 3   | cbc:Name                         | 0..1        | The name of the payment account, at a payment service provider, to which payment should be made. |
|          | 3   | cac:FinancialInstitutionBranch   | 0..1        |  |
| IBT-086  | 4   | cbc:ID                           | 1..1        | An identifier for the payment service provider where a payment account is located. Such as a BIC or a national clearing code where required. No identification scheme Identifier to be used. |
| IBG-19   | 2   | cac:PaymentMandate               | 0..1        | A group of business terms to specify a direct debit. |
| IBT-089  | 3   | cbc:ID                           | 0..1        | Unique identifier assigned by the Payee for referencing the direct debit mandate. |
|          |     |                                  |             | **Note:** This element may be used to notify the buyer of an ordinary direct debit. SEPA is not relevant in Australia or New Zealand. |
|          | 3   | cac:PayerFinancialAccount        | 0..1        |  |
| IBT-091  | 4   | cbc:ID                           | 1..1        | The account to be debited by the direct debit. |


---

## Common Payment Means

### Credit Transfer (Code: 30)

Includes payment channels like BPAY, BPAY View, Post Billpay.  
Recommended to include payee’s account name (`IBT-085`) for Confirmation of Payee verification.

### Direct Debit (Code: 49)

Use when a direct debit agreement exists.  
Only one occurrence of `cac:PaymentMeans` (IBG-16) should be used.  
Include `cac:PaymentMandate/cbc:ID` (IBT-089). If unavailable, use `"NA"`.

---

## UBL Examples

### Australia – Credit Transfer

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
