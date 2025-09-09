---
title: GN8_Peppol Participant, Party, Process and Document Identifiers
---

<p align="center">
  <img src="assets/header.jpg" alt="Header Image" width="100%">
</p>

# A-NZ PEPPOL FRAMEWORK GUIDANCE NOTE

# Peppol Participant, Party, Process and Document Identifiers

**Guidance note 08**

📄 Download the Word version from [here](https://github.com/A-NZ-PEPPOL/Guidance-documents/raw/refs/heads/Dev-GN-2025/GuidanceNote08_Identifiers_v1.1.4.docx)

| Issue date       | Version |
|------------------|---------|
| 09 December 2024 | 1.1.4   |

| Effective from    | Artefacts impacted                                      |
|-------------------|----------------------------------------------------------|
| 09 December 2024  | Peppol specifications used in the PINT A-NZ context      |

---

# Introduction

The purpose of this guidance note is to provide clarification on how Service Providers should use identifiers when implementing the specifications. This guidance note must be read in conjunction with other relevant [Peppol documentation](https://docs.peppol.eu/edelivery/) that provides specific requirements and instructions.

This document is intended to draw together concepts that are described and specified in various specifications, and illustrate the practical application thereof; however, it is important to note that this document is not a specification and that the Peppol documentation takes precedence over this guidance. Examples within this document are non-normative.

---

## Background

Participant and party identifiers serve various functions in the Peppol network and Australian and New Zealand (A-NZ) Peppol implementation. These include, but are not limited to:

- routing a message without opening the document (payload),
- internally routing a document within an entity,
- identifying parties of a transaction, and
- providing identifier data to assist trading partners to ascertain an entity's legal and/or tax status and meeting any legislative requirements by doing so.

Peppol documentation also specifies the construct of identifiers for defined business processes and exchangeable business documents. This guidance note aims to provide clarification on the use of identifiers within the Peppol network in the Peppol International (PINT) A-NZ context and does not replace or supersede the [Peppol documentation](https://docs.peppol.eu/edelivery/).

---

## Terminology

### Participant and Party

In accordance with the [Peppol policy for use of identifiers](https://docs.peppol.eu/edelivery/), this guidance note uses the term 'Participant' to refer to an entity that participates in the eDelivery network, and uses the term 'Party' to refer to a business entity referred to in business documents.

### Document

In the context of this guidance note, a 'Document' refers to a business document, for example an invoice, which is specified by a relevant Peppol [Business Interoperability Specification (BIS)](https://peppol.org/documentation/technical-documentation/post-award-documentation/) based on UBL and is sometimes referred to as the 'message payload'. A BIS specifies the value for the document type in *cbc:CustomizationID*.

For example, the [A-NZ invoice specification](https://github.com/A-NZ-PEPPOL/A-NZ-PEPPOL-BIS-3.0) has:

| **cbc:CustomizationID** | **urn:cen.eu:en16931:2017#conformant#urn:fdc:peppol.eu:2017:poacc:billing:international:aunz:3.0** |
|-------------------------|----------------------------------------------------------------------------------------------------|

The [Peppol International (PINT) A-NZ Billing specification](https://docs.peppol.eu/poac/aunz/) has:

| **cbc:CustomizationID** | **urn:peppol:pint:billing-1@aunz-1** |
|-------------------------|--------------------------------------|


### Process

In the context of this guidance note, a 'Process' refers to a broader business process context, in which transactions occur (e.g. transmitting of business documents) and indicates how the document is to be processed through the receiving participant's systems.

Each BIS defines a business process where the business document applies. For example, The *Ordering* business process includes the *Order* and *Order Response* transactions, while the *Order Only* process includes *Order* transaction only.

A BIS specifies the value for the Process type in *cbc:ProfileID*.

For example, the [A-NZ invoice specification](https://github.com/A-NZ-PEPPOL/A-NZ-PEPPOL-BIS-3.0) has:


| cbc:ProfileID | urn:fdc:peppol.eu:2017:poacc:billing:01:1.0 |
|---------------|---------------------------------------------|

The [PINT A-NZ Billing specification](https://docs.peppol.eu/poac/aunz/) has:


| cbc:ProfileID | urn:peppol:bis:billing |
|---------------|------------------------|


---

# Guidance

## eDelivery Identifier Relationships

There are three 'layers' of a Peppol message:

- The AS4 messaging protocol described in the [Peppol AS4 Profile](https://docs.peppol.eu/edelivery/)
- The Standard Business Document Header (SBDH) described in the [Peppol EDN Business Message Envelope (SBDH)](https://docs.peppol.eu/edelivery/)
- The enclosed UBL Document (message payload) described in [Business Interoperability Specifications](https://peppol.org/documentation/technical-documentation/post-award-documentation/)

Identifiers used in each layer are discussed in the following sections.

Importantly, there is a relationship between AS4, SBDH and UBL (document/payload). These are shown in the two tables below, followed by descriptions of the terms. Note that the SBDH scope is repeated at least twice - once for Document type and once for Process, and these are each described in the tables below.

### Document type

The AS4 Action, SBDH Scope (document type identifier) and UBL CustomizationID are aligned as follows:

| Area           | Identifier         | General form                                                      |
|----------------|--------------------|-------------------------------------------------------------------|
| AS4            | Action             | {scheme}::{namespace}::{doc-type}##{CustomizationID}::{version}   |
| SBDH (Document type scope block) | Type <br> InstanceIdentifier <br> Identifier | DOCUMENTID<br>{namespace}::{doc-type}##{CustomizationID}::{version}<br>{scheme} |
| Document (UBL) | CustomizationID    | {CustomizationID}                                                |

### Process

The AS4 Service, SBDH Scope (process identifier) and UBL ProfileID are aligned as follows:

| Area           | Identifier         | General form                                                      |
|----------------|--------------------|-------------------------------------------------------------------|
| AS4            | Service<br>Service@type | {ProfileID}<br>{scheme}                                      |
| SBDH (Process scope block) | Type<br>InstanceIdentifier<br>Identifier | PROCESSID<br>{ProfileID}<br>{scheme} |
| Document (UBL) | ProfileID          | {ProfileID} 

**Where:**

**scheme (Document type):**  
document type identifier scheme e.g. `busdox-docid-qns` or `peppol-doctype-wildcard` as defined by Policy 16 (more details in the following sections in this document).

**namespace:**  
document element namespace URI e.g. for Peppol UBL invoices the value is `urn:oasis:names:specification:ubl:schema:xsd:Invoice-2`

**doc-type:**  
document element local name e.g. `Invoice`

**CustomizationID:**  
identifies the BIS e.g. `urn:peppol:pint:billing-1@aunz-1`

**version:**  
document type version e.g. `2.1`

**DOCUMENTID:**  
code used to indicate the envelope scope elements that specify the document type identifier, reserved SBDH attribute `DOCUMENTID`

**ProfileID:**  
process identifiers defining the orchestrations in which business documents are exchanged e.g. for Peppol invoicing, the value is `urn:peppol:bis:billing`

**scheme (Process):**  
process identifier scheme e.g. `cenbii-procid-ubl` as defined by Policy 24 (more details in the following sections in this document).

**PROCESSID:**  
code used to indicate the envelope scope elements that specify the process identifier, reserved SBDH attribute `PROCESSID`

> Note that the UBL does NOT convey the document/process schemes.

Please refer to the Peppol eDelivery network [guidance and specification documents](https://peppol.org/documentation/technical-documentation/edelivery-documentation/), including [code lists](https://docs.peppol.eu/edelivery/codelists/) for further details.

---

## Document Type Identifier

Document profiles are required for the transmission of inbound and outbound transactions via the Peppol network.  
A document profile consists of a document identifier and a process profile.  
The document identifier indicates which documents can be exchanged,  
the process profile indicates which process should be used during the transfer of a message.

The PINT A-NZ Billing specification supports the document profiles of the General PINT Invoice and Credit Note.

A receiver needs to be registered on the SMP with receiving capabilities for Invoice and Credit Note,  
in order to receive both document types as different identifiers are used in the AS4/SBDH namespace and doc-type  
for an invoice/credit note. (*Highlighted below*).

**Credit Note specific identifier**  
**namespace:** document element namespace URI  
`urn:oasis:names:specification:ubl:schema:xsd:CreditNote-2`

**doc-type:** document element local name `CreditNote`

A sender can use the SMP to identify what document types can be handled by a specific participant identifier and whether they support receiving of the document type credit note, in addition to invoice.

---

## Identifiers within eDelivery

### Peppol Identifier Schemes

The identifier schemes are defined in the [Peppol policy for use of identifiers](https://docs.peppol.eu/edelivery/):

- **Policy 5** – Participant identifiers meta scheme is `iso6523-actorid-upi`
- **Policy 16** – Document type identifier scheme must be one of the following: `busdox-docid-qns` or `peppol-doctype-wildcard`
- **Policy 24** – Process identifier scheme is `cenbii-procid-ubl`

---

### AS4 and SBDH

Both the AS4 and the SBDH components need to identify relevant participants/parties and the business process and document type.


|              |              | AS4                                                                                          | SBDH                                                                                         |
|--------------|--------------|-----------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| Participant Access Points (Corners 2 and 3 in a 4-corner topology) | Field        | eb:To and eb:From                                                                             | NA                                                                                           |
|                              | Identifier    | AP certificate                                                                                |                                                                                              |
|                              | Party.type    | urn:fdc:peppol.eu:2017:identifiers:ap                                                         |                                                                                              |
|                              | Reference     | Section 4.5, Peppol AS4 Profile                                                               |                                                                                              |
| Participant Business entities accessing (corners 1 and 4 in a 4-corner topology) | Field        | …/eb:Property @name = "originalSender" and "finalRecipient"                                   | Sender/Identifier<br>Receiver/Identifier                                                     |
|                              | Identifier    | XXXX:AAAAAAAA<br>Where ‘XXXX’ is the type of participant identifier (e.g. 0088 for GLN, or 0151 for ABN), and ‘AAAAAAAA’ is the actual identifier. | Same as AS4 (XXXX:AAAAAAAA)                                                                  |
|                              | Scheme        | @type="iso6523-actorid-upis"                                                                  | @Authority="iso6523-actorid-upis"                                                            |
|                              | Reference     | Peppol policy for use of identifiers<br>Section 4.9, Peppol AS4 Profile                       | Peppol EDN Business Message Envelope (SBDH)                                                  |
| Process (BIS)                | Field        | eb:CollaborationInfo/eb:Service                                                               | BusinessScope/Scope/InstanceIdentifier                                                       |
|                              | Identifier    | ProfileID defined in BIS                                                                      | ProfileID defined in BIS                                                                     |
|                              | Type          | cenbii-procid-ubl                                                                             | Same as AS4 (cenbii-procid-ubl)                                                              |
|                              | Reference     | Section 4.6, Peppol AS4 Profile                                                               | Peppol EDN Business Message Envelope (SBDH)                                                  |
| Document (BIS)               | Field        | eb:CollaborationInfo/eb:Action                                                                | BusinessScope/Scope/InstanceIdentifier                                                       |
|                              | Identifier    | «scheme»::«document type id value»<br>i.e. {scheme}::{namespace}::{doc-type}##{CustomizationID}::{version} | document type id value<br>i.e. {namespace}::{doc-type}##{CustomizationID}::{version}         |
|                              | Scheme        | busdox-docid-qns                                                                              | Same as AS4                                                                                  |
|                              | Reference     | Section 4.6, Peppol AS4 Profile<br>Section 5, Peppol policy for use of identifiers            | Peppol EDN Business Message Envelope (SBDH)<br>Section 5, Peppol policy for use of identifiers |
| Document (BIS)               | Field        | eb:CollaborationInfo/eb:Action                                                                | BusinessScope/Scope/InstanceIdentifier                                                       |
|                              | Identifier    | «scheme»::«document type id value»<br>i.e. {scheme}::{namespace}::{doc-type}##{CustomizationID}::{version} | document type id value<br>i.e. {namespace}::{doc-type}##{CustomizationID}::{version}         |
|                              | Scheme        | peppol-doctype-wildcard                                                                       | Same as AS4                                                                                  |
|                              | Reference     | Section 4.6, Peppol AS4 Profile<br>Section 5, Peppol policy for use of identifiers            | Peppol EDN Business Message Envelope (SBDH)<br>Section 5, Peppol policy for use of identifiers |


**Refer to Section 3 for non-normative examples.**

---

## Business identifiers within Peppol documents

Integrity of end-user identity is crucial to maintain confidence and
trust in the Peppol network, and there are generally three groups of
party identifiers in a Peppol BIS document for an entity: a legal
identifier, a tax registration / status identifier, and an end point ID.

- EndpointID (cbc:EndpointID) refers to a party's electronic address for
  delivering a business document. In the A-NZ context, this may be the
  Australian Business (ABN) or New Zealand Business Number (NZBN) or
  another global or commercial identifier, and should only be used for
  the purpose of transmitting a message/document.

- Tax registration / status identifier (see below)

- Legal identifiers and tax identifiers can both uniquely identify a
  business entity, however, may be issued by separate authorities and/or
  may be required for different legal, regulatory and reporting
  purposes.

---

#### Legal identifiers

For Australian and New Zealand entities, ABN and NZBN must be used as
the primary identifier for identifying the seller or buyer's legal
presence.

According to the [Peppol policy on use of
identifiers](https://docs.peppol.eu/edelivery/), all identifier schemes
should use [the ISO 6523 ICD list
(](https://docs.peppol.eu/poac/pint/v1.0.2/pint/trn-invoice/codelist/eas/)Policy
13).

Although the *schemeID* attribute is optional according to the syntax,
legal identifiers are mandated by the PINT A-NZ invoice specification,
being ABN (0151) or NZBN (0088) and must be used in the
*cac:PartyLegalEntity group* where both the supplier and the buyer are
in Australia or New Zealand.

---

#### Tax identifiers

When issuing a tax invoice, Australian entities should use their ABN as
their tax identifier unless making a taxable sale from a branch that is
separately registered for GST, in which case the tax invoice must show
the registration number of the GST branch (which incorporates the ABN of
the parent entity followed by the 3 digit branch number).

In New Zealand, when a GST registered organisation makes a taxable sale
and issues a Tax Invoice, the New Zealand GST number must be entered as
the value.

---

#### Party and participant identifiers within Peppol documents

The PINT A-NZ specification syntax provides multiple elements for party identification purposes. To maximise automation, the following recommendations should be followed:

1.  ***cbc:EndPointID***

An EndpointID (cbc:EndpointID) must be provided for certain parties. Where provided, the EndpointID must have a schemeID attribute coded
according to the [Electronic Address Scheme (EAS) code list](https://docs.peppol.eu/poac/pint/v1.0.2/pint/trn-invoice/codelist/eas/).

In the A-NZ context, ABN and NZBN are expected to be commonly used however businesses may have different arrangements, and the EndpointID
should NOT be used for the purpose of legal/tax/sub-entity identification of a business entity.

2.  ***cac:PartyIdentification/cbc:ID***

The PINT A-NZ specifications allow the option for one or more business identifiers to be provided for a 'party', in addition to an ABN or NZBN.

Recommendation:

- Unless otherwise agreed between the supplier and buyer, the schemeID
  should be populated (using the [ISO 6523 code
  list](https://docs.peppol.eu/poac/pint/v1.0.2/pint/trn-invoice/codelist/ICD/)) to maximise automation. This also aligns with the [Peppol policy for
  use of identifiers](https://docs.peppol.eu/edelivery/).

- When using an identifier that is not recognised by the [ISO 6523 code
  list](https://docs.peppol.eu/poac/pint/v1.0.2/pint/trn-invoice/codelist/ICD/), the buyer and seller should reach agreement on the type and format of identifiers that should be used, and the schemeID attribute should not be populated. If there is no such agreement, the receiving participant may choose to effectively ignore the value, however, should not reject the document purely because the value cannot be recognised.

3.  ***cbc:BuyerReference and cbc:OrderReference/cbc:ID***

 Although both *cbc:BuyerReference*
 [(IBT-010)](https://docs.peppol.eu/poac/pint/v1.0.2/pint/trn-invoice/semantic-model/ibt-010/)
 and *cac:OrderReference*
 [(IBT-013)](https://docs.peppol.eu/poac/pint/v1.0.2/pint/trn-invoice/semantic-model/ibt-013/)
 are optional in the PINT A-NZ specifications, a business rule requires
 that either a purchase order reference or a buyer reference must be
 populated.

 The two elements are semantically different, however both are used to
 drive automatic matching and straight through processing.

Recommendation:

- *cbc:BuyerReference* is buyer-assigned and advised to the supplier to
  support automation of internal routing and/or processing by the
  buyer.\
  Where neither a Purchase order or buyer reference is available, it is
  recommened that *cbc:BuyerReference/cbc/:ID be populated with either
  'BUYER_REFERENCE' or 'NA'.*\
  Invoice number is **not** a recommended default value as, being an
  alphanumeric value, it could look like a purchase order reference
  number and may cause exceptions by receiving systems attempting to
  match to a PO.

- *cbc:OrderReference/cbc:ID is to reference a corresponding purchase
  order.* When neither a purchase order nor a buyer reference is
  available, it is recommended that *cbc:OrderReference/cbc/:ID be
  populated with 'NA'.*

4.  ***cac:PartyTaxScheme/cbc:CompanyID***

 This element group is used in the following parties to provide the
 entity's tax (GST) registration identifier.

- supplier (cac:AccountingSupplierParty)

- customer (cac:AccountingCustomerParty)

- tax representative (cac:TaxRepresentativeParty)

 This element section is optional. However, both Australia and New
 Zealand may require the GST identifier in certain circumstances.

 For example, in Australia when an entity's branch that is separately
 registered for GST makes a taxable sale and issues a tax invoice, the
 registration number of the GST branch must be displayed, which
 incorporates the ABN of the parent entity (by attaching the 3 digit
 branch number at the end of the ABN, e.g. 51824753556001).

 In New Zealand, when a GST registered organisation makes a taxable
 sale and issues a tax Invoice, the New Zealand GST number must be
 entered as the value e.g. 049086982.

 The presentation of the NZ GST number may include hyphens and the NZ
 GST number may have a leading zero to fulfil the 8-digit format as the
 hyphens and leading zero are optional.

---

## Open Issues

**Identifying sub-entities or branches within a legal business entity in
SMP**

The current Peppol framework allows only one SMP record per business
identifier/document relationship (e.g. each unique business identifier
can have only one Access Point (AP) address recorded for the PINT A-NZ
invoice document).

There may be situations where a business entity needs to record multiple
endpoints to receive the same document type (e.g. invoice) such as:

- Decentralised processing where different branches within a business
  entity use different software service providers

- A business uses a number of software 'add-ons' provided by different
  service providers to process different 'types' of invoices and connect
  to different receiving APs.

The system architecture for businesses in such situations may preclude
the option of having a single AP receive all documents for the business
entity and route accordingly e.g. using data from within the message
payload, or by sending to a centralised system that will then route the
information.

Given that the entity's ABN or NZBN can only be used to record a single
end-point, these situations can be accommodated by businesses
registering and maintaining multiple identifiers for the same legal
entity, e.g. through the use of commercial identifiers such as Global
location numbers (GLNs) or Data Universal Numbering System (DUNS).

The New Zealand Peppol Authority recognises that there is a need for
unique identifiers for different parts of an organisation and are
actively working to develop a standardised solution. A-NZ accredited
service providers will be kept informed as this work progresses. Service
providers are encouraged to share with the NZ Peppol Authority any use
cases that illustrate the need for additional NZ identifiers, in order
to inform the design of the solution.

---

## Wildcard Scheme changes

**Wildcard Scheme**

The wildcard document type identifer scheme (DTIS), introduced in
version 4.2 of the Peppol Policy for Use of Identifiers, become
mandatory to support across the network in January 2024. The PINT
Billing specificiations are the first to use the wildcard scheme

Currently Peppol eDelivery, using the busdox scheme, allows for a 1:1
relationship between published receiver capabilities and document
specifications. The wildcard scheme allows a 1:n relationship between
published receiver capabilities and supported document specialisations.

The design of the wildcard scheme also allows recipients to use a single
receiver capability including a wildcard (e.g. pint:billing-1\*) to
advertise where they can receive any specialisations of the PINT (e.g.
urn:peppol:pint:billing-1@aunz-1, urn:peppol:pint:billing-1@jp-1 etc.).

From May 2025, as introduced in version 4.3 of the Peppol Policy for Use
of Identifers, all PINT BIS (including PINT A-NZ) will only support
wildcard DTIS, with Busdox DTIS no longer supported. In addition, the
semantics of wildcard DTIS will be updated to support exact match.

---

# Examples

The following are non-normative examples illustrating the use of various
fields.

## ebMS/AS4 - Participant related fields

```xml
<eb:PartyInfo>
   <eb:From>
      <eb:PartyId type="urn:fdc:peppol.eu:2017:identifiers:ap">POP000123</eb:PartyId>
      <eb:Role>http://docs.oasis-open.org/ebxml-msg/ebms/v3.0/ns/core/200704/initiator</eb:Role>
   </eb:From>
   <eb:To>
      <eb:PartyId type="urn:fdc:peppol.eu:2017:identifiers:ap">POP000987</eb:PartyId>
      <eb:Role>http://docs.oasis-open.org/ebxml-msg/ebms/v3.0/ns/core/200704/responder</eb:Role>
   </eb:To>
</eb:PartyInfo>
<eb:MessageProperties>
   <eb:Property name="originalSender" type="iso6523-actorid-upis">0151:36342015855</eb:Property>
   <eb:Property name="finalRecipient" type="iso6523-actorid-upis">0151:61970632495</eb:Property>
</eb:MessageProperties>
<eb:PayloadInfo>
```

---

## ebMS/AS4 – Document related fields

**PINT A-NZ Invoice**

```xml
<eb:CollaborationInfo>
   <eb:AgreementRef>urn:fdc:peppol.eu:2017:agreements:tia:ap_provider</eb:AgreementRef>
   <eb:Service type="cenbii-procid-ubl">urn:peppol:bis:billing</eb:Service>
   <eb:Action>peppol-doctype-wildcard::urn:oasis:names:specification:ubl:schema:xsd:Invoice-2::Invoice##urn:peppol:pint:billing-1@aunz-1::2.1</eb:Action>
   <eb:ConversationId>...</eb:ConversationId>
</eb:CollaborationInfo>
```

**PINT A-NZ Self-billed Invoice**

```xml
<eb:CollaborationInfo>
   <eb:AgreementRef>urn:fdc:peppol.eu:2017:agreements:tia:ap_provider</eb:AgreementRef>
   <eb:Service type="cenbii-procid-ubl">urn:peppol:bis:billing</eb:Service>
   <eb:Action>peppol-doctype-wildcard::urn:oasis:names:specification:ubl:schema:xsd:Invoice-2::Invoice##urn:peppol:pint:billing-1@aunz-1::2.1</eb:Action>
   <eb:ConversationId>...</eb:ConversationId>
</eb:CollaborationInfo>
```

**ebMS/AS4 message header for MessageLevelResponse**

```xml
<eb:CollaborationInfo>
   <eb:AgreementRef>urn:fdc:peppol.eu:2017:agreements:tia:ap_provider</eb:AgreementRef>
   <eb:Service type="cenbii-procid-ubl">urn:fdc:peppol.eu:poacc:bis:mlr:3</eb:Service>
   <eb:Action>busdox-docid-qns::urn:oasis:names:specification:ubl:schema:xsd:ApplicationResponse-2::ApplicationResponse##urn:fdc:peppol.eu:poacc:trns:mlr:3::2.1</eb:Action>
   <eb:ConversationId>...</eb:ConversationId>
</eb:CollaborationInfo>
```

---


## Standard Business Document Header (SBDH)
Note that for consistency with the [Peppol EDN Business Message Envelope (SBDH)](https://docs.peppol.eu/edelivery/), this non-normative example does not explicitly specify the namespace prefix.

```xml
<StandardBusinessDocumentHeader>
  <HeaderVersion>1.0</HeaderVersion>
  <Sender>
    <Identifier Authority="iso6523-actorid-upis">0151:36342015855</Identifier>
  </Sender>
  <Receiver>
    <Identifier Authority="iso6523-actorid-upis">0151:61970632495</Identifier>
  </Receiver>
  <DocumentIdentification>
    <Standard>urn:oasis:names:specification:ubl:schema:xsd:Invoice-2</Standard>
    <TypeVersion>2.1</TypeVersion>
    <InstanceIdentifier>e5e2ca2a-9331-4189-accc-8c9ebba47180</InstanceIdentifier>
    <Type>Invoice</Type>
    <CreationDateAndTime>2020-04-20T11:07:33</CreationDateAndTime>
  </DocumentIdentification>
  <BusinessScope>
    <Scope>
      <Type>DOCUMENTID</Type>
      <InstanceIdentifier>urn:oasis:names:specification:ubl:schema:xsd:Invoice-2::Invoice##urn:peppol:pint:billing-1@aunz-1#urn:peppol:bis:billingInstanceIdentifier</InstanceIdentifier>
      <Identifier>peppol-doctype-wildcard</Identifier>
    </Scope>
    <Scope>
      <Type>PROCESSID</Type>
      <InstanceIdentifier>urn:fdc:peppol.eu:2017:poacc:billing:01:1.0</InstanceIdentifier>
      <Identifier>cenbii-procid-ubl</Identifier>
    </Scope>
  </BusinessScope>
</StandardBusinessDocumentHeader>

```

---

# Glossary

| **Term**                          | **Definition**                                                                                                                                                     |
|----------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Access Point (AP)**            | Service provider within the Peppol eDelivery network that sends and/or receives Peppol BIS documents.                                                             |
| **Business document**            | Message payload exchanged between Access Points.                                                                                                                  |
| **Business Interoperability Specification (BIS)** | Describes the schema, business rules, codes tables etc. of a business document. In this context, BIS refers both to Peppol PINT BIS and to jurisdiction-specific specifications such as the PINT A-NZ Invoice Specification. |
| **Document header/envelope**     | SBDH – Standard Business Document Header.                                                                                                                         |
| **Document payload**             | The part of transmitted data that is the actual intended message.                                                                                                 |
| **Participant**                  | Entity that participates in the eDelivery network such as a business entity or a branch of a business.                                                           |
| **Participant identifier**       | Identification of a technical entity in the Peppol eDelivery network which can be used in transport documents and (where needed) in business documents.          |
| **Party**                        | Business entity referred to in business documents.                                                                                                                |
| **Party identifier**             | Identification of a business entity which is usually only used in business documents.                                                                             |
| **PINT**                         | Specification prepared in accordance with the Peppol INTernational model.                                                                                         |
| **Service Metadata Locator (SML)** | Defines which Service Metadata Publisher (SMP) to use for finding out the capabilities and delivery details of any Peppol participant.                         |
| **Service Metadata Publisher (SMP)** | Publishes the receiving capabilities (delivery addresses, business processes and document types supported, etc.) for participants.                          |
| **Universal Business Language (UBL)** | A common XML library of business documents governed by [OASIS](https://www.oasis-open.org/committees/tc_home.php?wg_abbrev=ubl).                                                                                              |

---


