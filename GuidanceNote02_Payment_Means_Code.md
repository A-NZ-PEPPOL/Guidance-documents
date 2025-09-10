---
title: GN02_Payment means and use of the UNCL4461 code list
---

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

| ID&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;            | Lvl | Attribute name                    | Cardinality | Description                                                                                      |
|------------|-----|---------------------------------|-------------|------------------------------------------------------------------------------------------------|
| IBG-16    | 1   | [cac:PaymentMeans](https://docs.peppol.eu/poac/aunz/pint-aunz/trn-invoice/semantic-model/ibg-16/)                 | 0..n        | A group of business terms providing information about the payment.                             |
| IBT-081   | 2   | [cbc:PaymentMeansCode](https://docs.peppol.eu/poac/aunz/pint-aunz/trn-invoice/semantic-model/ibt-081/)             | 1..1        | The means, expressed as code, for how a payment is expected to be or has been settled.          |
| IBT-082   | 3   | [@name](https://docs.peppol.eu/poac/aunz/pint-aunz/trn-invoice/semantic-model/ibt-082/)                           | O           | The means, expressed as text, for how a payment is expected to be or has been settled.          |
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

| **PaymentMeans**                                            |                                             |
|:--------------------------------------------------|:----------------------------------------------------|
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

---

## New Zealand

In New Zealand, it is common business practice to provide the combined bank account details (Bank, Branch, Account Number, Suffix), shown as a 16-digit number.

| **PaymentMeans**                                            |                                             |
|:--------------------------------------------------|:----------------------------------------------------|
| **PaymentMeans/PaymentMeansCode**                 | 30                                                  |
| **PaymentMeans/PaymentMeansCode/@name**           | Credit transfer                                     |
| **PaymentMeans/PaymentID**                        | 88827661226 (_customer/payment reference number_)   |
| **PaymentMeans/PayeeFinancialAccount/ID**         | 0205000632487000 (_Combined NZ Bank/Branch/Account number, Suffix_) |
| **PaymentMeans/PayeeFinancialAccount/Name**       | ABC Ltd. (_account name_)                           |

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
---

## Direct Debit 

The following example demonstrates how the PINT A-NZ data model can be
used to convey the required information to support direct debit to a
domestic bank in Australia.

| **PaymentMeans**                                                  |                                                                      |
|:------------------------------------------------------------------|:---------------------------------------------------------------------|
| **PaymentMeans/PaymentMeansCode**                                 | 49                                                                   |
| **PaymentMeans/PaymentMeansCode/@name**                           | Direct debit                                                         |
| **PaymentMeans/PaymentID**                                        | 88827661226 *(customer/payment reference number)*                    |
| **PaymentMeans/PaymentMandate/ID**                                | 324875423 *(direct debit authority reference)*                       |
| **PaymentMeans/PaymentMandate/PayerFinancialAccount/ID**          | 324875423 *(account number)*                                         |


```xml
<cac:PaymentMeans> <!-- Direct Debit -->
  <cbc:PaymentMeansCode name="Direct debit">49</cbc:PaymentMeansCode>
  <cbc:PaymentID>88827661226</cbc:PaymentID> <!-- customer reference number -->
  <cac:PaymentMandate>
    <cbc:ID>324875423</cbc:ID> <!-- direct debit authority reference -->
    <cac:PayerFinancialAccount>
      <cbc:ID>324875423</cbc:ID> <!-- Account number -->
    </cac:PayerFinancialAccount>
  </cac:PaymentMandate>
</cac:PaymentMeans>

```

---

## New Payments Platform (NPP), PayID, PayTo

The [New Payments Platform](https://nppa.com.au/) (NPP) enables
real-time payments and provides a platform for service providers, such
as Osko, for payment transfers between NPP-enabled financial
institutions.

1.  **Credit Transfer using a PayID**

The NPP allows the use of an addressing alias, named
‘[PayID](https://nppa.com.au/payid/)’, to direct payments to a Payee’s
bank account.

PayID is currently only used in Australia, and payees must register for
a PayID (e.g. using ABN, email or mobile phone number) with their
financial Institution.

The type of PayID is specified using the following codes:

- “EMAL”: Email Address

- “TELI”: Telephone Number

- “AUBN”: Australian Business Number

- “ORGN”: Organisational Identifier

Some NPPA participants may require customers to specify the type of
PayID.

The following example demonstrates how the PINT A-NZ data model can be
used to convey the required information to support NPP payment services
in Australia using a PayID.

| **PaymentMeans**                                                  |                                                                      |
|:------------------------------------------------------------------|:---------------------------------------------------------------------|
| **PaymentMeans/PaymentMeansCode**                                 | 30                                                                   |
| **PaymentMeans/PaymentMeansCode/@name**                           | Credit transfer                                                      |
| **PaymentMeans/PaymentID**                                        | 626538876 *(customer/payment reference number)*                      |
| **PaymentMeans/PayeeFinancialAccount/ID**                         | payee@business1.com.au *(PayID may be an email address, ABN, mobile phone number etc.)* |
| **PaymentMeans/PayeeFinancialAccount/FinancialInstitutionBranch/ID** | NPP-EMAL\*                                                         |

\*The sender should specify “NPP” in the
“…FinancialInstitutionBranch/ID” field to enable automation for the
buyer. The sender can optionally specify the type of PayID using the
format in the example above.

```xml
<cac:PaymentMeans> <!-- New Payments Platform -->
  <cbc:PaymentMeansCode name="Credit transfer">30</cbc:PaymentMeansCode>
  <cbc:PaymentID>626538876</cbc:PaymentID> <!-- customer reference number -->
  <cac:PayeeFinancialAccount>
    <cbc:ID>payee@business1.com.au</cbc:ID> <!-- PayID -->
    <cac:FinancialInstitutionBranch>
      <cbc:ID>NPP-EMAL</cbc:ID> <!-- Name of payment channel -->
    </cac:FinancialInstitutionBranch>
  </cac:PayeeFinancialAccount>
</cac:PaymentMeans>
```

2.  **NPP Payment Arrangement – PayTo**

The [“PayTo” service](https://www.auspayplus.com.au/brands/payto)
(previously known as Mandated Payments Service), is a digital payment
solution that enables customers to pre-authorise third parties to
initiate real-time payments from their bank accounts in advance of any
payments being processed. Authorisation is captured in the creation of a
digital payment arrangement, referred to as a ‘PayTo agreement’.

The following example demonstrates how the PINT A-NZ data model can be
used to convey the required information to support an NPP ‘PayTo
agreement’ into a domestic bank account in Australia. The inclusion of
the MandateID will advise the customer about the debit of funds from the
nominated bank account or enable instruction on behalf of an authorised
party.

| **PaymentMeans**                                                  |                                                                      |
|:------------------------------------------------------------------|:---------------------------------------------------------------------|
| **PaymentMeans/PaymentMeansCode**                                 | 49                                                                   |
| **PaymentMeans/PaymentMeansCode/@name**                           | Direct debit                                                         |
| **PaymentMeans/PaymentID**                                        | 88827661226 *(customer reference number)*                            |
| **PaymentMeans/PaymentMandate/ID**                                | 324875423 *(MandateID/direct debit authority reference/PayTo Agreement)* |


```xml
<cac:PaymentMeans> <!-- Direct Debit -->
  <cbc:PaymentMeansCode name="Direct debit">49</cbc:PaymentMeansCode>
  <cbc:PaymentID>88827661226</cbc:PaymentID> <!-- customer reference number -->
  <cac:PaymentMandate>
    <cbc:ID>324875423</cbc:ID> <!-- Mandate reference identifier -->
  </cac:PaymentMandate>
</cac:PaymentMeans>
```

---

## Using a Payment Website (URI)

A seller may provide a URL/URI directing the buyer to use a website to
make a payment.

The following example demonstrates how the PINT A-NZ data model can be
used to map a URL/URI.

| **PaymentMeans**                                                  |                                                                      |
|:------------------------------------------------------------------|:---------------------------------------------------------------------|
| **PaymentMeans/PaymentMeansCode**                                 | 30                                                                   |
| **PaymentMeans/PaymentMeansCode/@name**                           | Credit transfer                                                      |
| **PaymentMeans/PaymentID**                                        | 1000000001 *(customer/payment reference number)*                     |
| **PaymentMeans/PayeeFinancialAccount/ID**                         | https://www.yourwebsiteexample.com.au/pay |
| **PaymentMeans/PayeeFinancialAccount/Name**                       | Supplier ABC                                                         |
| **PaymentMeans/PayeeFinancialAccount/FinancialInstitutionBranch/ID** | URI\*                                                              |

\*The sender should specify “URI” in the
“…FinancialInstitutionBranch/ID” field to enable automation for the
buyer.


```xml
<cac:PaymentMeans>
  <cbc:PaymentMeansCode>30</cbc:PaymentMeansCode>
  <cbc:PaymentID>PaymentReferenceNumber</cbc:PaymentID>
  <cac:PayeeFinancialAccount>
    <cbc:ID>https://www.yourwebsiteexample.com.au/pay</cbc:ID> <!-- Website URL -->
    <cbc:Name>Supplier ABC</cbc:Name> <!-- Account name -->
    <cac:FinancialInstitutionBranch>
      <cbc:ID>URI</cbc:ID> <!-- Indicates that the above website can be used to make a payment -->
    </cac:FinancialInstitutionBranch>
  </cac:PayeeFinancialAccount>
</cac:PaymentMeans>
```
---

## BPAY 

BPAY is a commonly used payment method in Australia, supported through
the banking system. The payee needs to provide a biller code and the
customer reference number to facilitate the transaction.

The following example demonstrates how the PINT A-NZ data model can be
used to map BPAY details.

| **PaymentMeans**                                                  |                                                                      |
|:------------------------------------------------------------------|:---------------------------------------------------------------------|
| **PaymentMeans/PaymentMeansCode**                                 | 30                                                                   |
| **PaymentMeans/PaymentMeansCode/@name**                           | Credit transfer                                                      |
| **PaymentMeans/PaymentID**                                        | 1000000001 *(customer/payment reference number)*                     |
| **PaymentMeans/PayeeFinancialAccount/ID**                         | 12345 *(biller code)*                                                |
| **PaymentMeans/PayeeFinancialAccount/Name**                       | ABC Ltd.                                                             |
| **PaymentMeans/PayeeFinancialAccount/FinancialInstitutionBranch/ID** | BPAY\*                                                             |

\*The sender should specify “BPAY” in the
“…FinancialInstitutionBranch/ID” field to enable automation for the
buyer.


```xml
<cac:PaymentMeans> <!-- BPay -->
  <cbc:PaymentMeansCode name="Credit transfer">30</cbc:PaymentMeansCode>
  <cbc:PaymentID>1000000001</cbc:PaymentID> <!-- Customer reference number (CRN) -->
  <cac:PayeeFinancialAccount>
    <cbc:ID>12345</cbc:ID> <!-- Biller code -->
    <cbc:Name>ABC Ltd.</cbc:Name> <!-- Account name -->
    <cac:FinancialInstitutionBranch>
      <cbc:ID>BPAY</cbc:ID> <!-- Name of payment channel -->
    </cac:FinancialInstitutionBranch>
  </cac:PayeeFinancialAccount>
</cac:PaymentMeans>
```

---

## Post Billpay

Post Billpay is a service provided by Australia Post which allows the
payment of a bill at any Australia Post outlet.

The following example demonstrates how the PINT A-NZ data model can be
used to map the required Post Billpay attributes, specifically the
biller code and the customer reference number.

| **PaymentMeans**                                                  |                                                                      |
|:------------------------------------------------------------------|:---------------------------------------------------------------------|
| **PaymentMeans/PaymentMeansCode**                                 | 30                                                                   |
| **PaymentMeans/PaymentMeansCode/@name**                           | Credit transfer                                                      |
| **PaymentMeans/PaymentID**                                        | 10354223016196642 *(customer/payment reference number (CRN))*        |
| **PaymentMeans/PayeeFinancialAccount/ID**                         | 4041 *(biller code)*                                                 |
| **PaymentMeans/PayeeFinancialAccount/Name**                       | ABC Ltd.                                                             |
| **PaymentMeans/PayeeFinancialAccount/FinancialInstitutionBranch/ID** | Post BillPay\*                                                    |

\*The sender should specify “Post BillPay” in the
“…FinancialInstitutionBranch/ID” field to enable automation for the
buyer.


```xml
<cac:PaymentMeans> <!-- Post Billpay -->
  <cbc:PaymentMeansCode name="Credit transfer">30</cbc:PaymentMeansCode>
  <cbc:PaymentID>10354223016196642</cbc:PaymentID> <!-- customer reference number -->
  <cac:PayeeFinancialAccount>
    <cbc:ID>4041</cbc:ID> <!-- Biller code -->
    <cbc:Name>ABC Ltd.</cbc:Name> <!-- Account name -->
    <cac:FinancialInstitutionBranch>
      <cbc:ID>Post Billpay</cbc:ID> <!-- Name of payment channel -->
    </cac:FinancialInstitutionBranch>
  </cac:PayeeFinancialAccount>
</cac:PaymentMeans>
```

---

## Credit card

The following example demonstrates how the PINT A-NZ data model can be
used to map Credit card payment details.

| **PaymentMeans**                                                  |                                                                      |
|:------------------------------------------------------------------|:---------------------------------------------------------------------|
| **PaymentMeans/PaymentMeansCode**                                 | 54                                                                   |
| **PaymentMeans/PaymentMeansCode/@name**                           | Credit card                                                          |
| **PaymentMeans/PaymentID**                                        | 9387439 *(customer/payment reference number (CRN))*                  |
| **PaymentMeans/CardAccount/PrimaryAccountNumberID**               | 3236 *(Last 4 digits of payment card number)*                        |
| **PaymentMeans/CardAccount/NetworkID**                            | *(Syntax required element only. Use value NA)*                       |
| **PaymentMeans/CardAccount/HolderName**                           | Card holders name                                                    |

```xml
<cac:PaymentMeans> <!-- Credit card -->
  <cbc:PaymentMeansCode name="Credit card">54</cbc:PaymentMeansCode>
  <cbc:PaymentID>9387439</cbc:PaymentID> <!-- customer reference number -->
  <cac:CardAccount>
    <cbc:PrimaryAccountNumberID>3236</cbc:PrimaryAccountNumberID> <!-- Payment card number -->
    <cbc:NetworkID>NA</cbc:NetworkID>
    <cbc:HolderName>Card holders name</cbc:HolderName>
  </cac:CardAccount>
</cac:PaymentMeans>
```

**Note: Only the last 4 digits** of a credit card number should be
provided in the
*cac:PaymentMeans/cac:CardAccount/cbc:PrimaryAccountNumberID*
([IBT-087)](https://docs.peppol.eu/poac/aunz/pint-aunz/trn-invoice/semantic-model/ibt-087/)
field to comply with the [Payment Card Industry Data Security Standard
(PCI DSS)](https://www.pcisecuritystandards.org/).

The mandatory field cac:*PaymentMeans/cac:CardAccount/cbc:NetworkID* is
a Syntax element only and not mapped to a business term. The value ‘NA’
should be used.

#### 
---

## Version history

<table>
<colgroup>
<col style="width: 17%" />
<col style="width: 25%" />
<col style="width: 57%" />
</colgroup>
<thead>
<tr>
<th><strong>Version</strong></th>
<th><strong>Date</strong></th>
<th><strong>Change</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>1.0</td>
<td>09/10/2019</td>
<td>Initial published version</td>
</tr>
<tr>
<td>1.1</td>
<td>15/05/2020</td>
<td><p>Updated sections that refer to New Payment Platform (NPP).</p>
<p>Included minor editorial corrections and for
<em>cbc:PaymentMeans</em> element group.</p>
<p>Included additional example for Direct Debit.</p></td>
</tr>
<tr>
<td>1.2</td>
<td>23/09/2021</td>
<td><p>Editorial changes for clarification.</p>
<p>Included additional information for scenarios:</p>
<ul>
<li><p>NPP – PayID types, PayTo functionality</p></li>
<li><p>Use of NZ bank account number</p></li>
<li><p>Payment URL</p></li>
<li><p>Credit Card payment</p></li>
</ul></td>
</tr>
<tr>
<td>1.3</td>
<td>21 November 2022</td>
<td>Updated document classification.</td>
</tr>
<tr>
<td>1.4</td>
<td>09 December 2024</td>
<td><p>Updated artefact references to the PINT A-NZ specification.</p>
<p>Editorial changes for clarification.</p></td>
</tr>
<tr>
<td>1.5</td>
<td>09 June 2025</td>
<td>Updated Credit Transfer section to include information on
Confirmation of Payee verification</td>
</tr>
</tbody>
</table>


