---
title: GN4_Know Your Customer
---

<p align="center">
  <img src="assets/header.jpg" alt="Header Image" width="100%">
</p>


# A-NZ PEPPOL FRAMEWORK GUIDANCE NOTE

# Know Your Customer (KYC)  
**Guidance Note 04**

📄 Download the Word version from [here](https://github.com/A-NZ-PEPPOL/Guidance-documents/raw/refs/heads/Dev-GN-2025/GuidanceNote04_KYC_v1.2.docx)

| Issue Date       | Version |
|------------------|---------|
| 15 November 2019 | 1.2     |

| Effective From    | Artefacts Impacted                                      |
|-------------------|----------------------------------------------------------|
| November 2019     | PEPPOL Compliance Policy, AP/SMP onboarding procedures   |

---

## Background  
This document provides guidance for Access Point (AP) Providers and Service Metadata Publisher (SMP) Providers in Australia and New Zealand to meet the **Know Your Customer (KYC)** requirements outlined in the **PEPPOL Compliance Policy**. It also includes recommended practices for accounting/invoicing software providers.

KYC validation:

- Ensures reliable identity of end-users  
- Enhances service experience  
- Mitigates risk of bad customer behavior  
- Protects against fraudulent misuse of business identity  

📎 Refer to the ABN and NZBN validation guidance notes for complementary requirements.

---

## Issue  
To maintain trust and integrity in the e-invoicing network, OpenPEPPOL requires all AP and SMP Providers to comply with KYC under Principle 8 of the Compliance Policy:

> *Each AP service provider must have a written service contract with its customers carrying forward the minimum requirements defined by OpenPEPPOL.*

Until formal minimum requirements are defined, this guidance note serves as the baseline for APs and SMPs operating in Australia and New Zealand.

---

## Guidance  
This section outlines the minimum KYC requirements for AP and SMP Providers.

### 1. Customer Identification (**Mandatory**)  
Providers must ensure KYC checks are performed directly or by contracted software providers. Documented processes must include:

- How information is collected and verified  
- How discrepancies are handled  

### 2. Verify Entity Registration (**Mandatory**)  
Validate identifiers and names via:

- [ABN – Australian Business Register](https://abr.business.gov.au)  
- [NZBN – New Zealand Business Number](https://www.nzbn.govt.nz/)  
- [GLN – GS1 Company Database](https://www.gs1.org/services/verified-by-gs1)  
- [DUNS – D-U-N-S Number Lookup](https://businesscredit.dnb.com/business-glossary/duns-number/)

> Existing customers must be verified within 18 months if not previously validated.

### 3. Verify Representative (**Recommended**)  
Suggested methods:

- Entity’s official contact channels  
- Public registers (e.g. ASIC, NZ Companies Register)  
- Confirmation from office holders  
- Evidence of business activity (e.g. bank, tax agent, utility bills)

### 4. Updating Key Information (**Mandatory**)  
If customer records are updated, repeat identification and verification steps.

---

## Roles and Responsibilities  

| Role                     | Responsibility                                                                 |
|--------------------------|--------------------------------------------------------------------------------|
| Organisation (End User)  | Provide accurate entity details and ensure authorised representatives act.     |
| Software Providers       | Implement KYC processes and perform regular checks for accuracy.               |
| Access Point Providers   | Apply KYC to contracted customers and verify upstream KYC checks.              |
| SMP Providers            | Validate KYC for end-users and accept updates only from contracted entities.   |

---

## Accounting/Invoice Software Providers (**Recommended**)  
Software providers should implement KYC checks and collaborate with AP and SMP Providers to ensure data integrity across the eDelivery network.

---

## Further Information  
- [Identity Verification Code of Practice 2013 – DIA](https://www.dia.govt.nz/pubforms.nsf/URL/AMLCFT_Amendment-to-IDVCOP-2013-FINAL-October-2013.pdf/$file/AMLCFT_Amendment-to-IDVCOP-2013-FINAL-October-2013.pdf)  
- [AML/CFT Guidance for Accountants – DIA](https://www.dia.govt.nz/AML-CFT-Information-for-Accountants#Prog-Guide)

---

## Version History  

| Version | Date             | Change                                |
|---------|------------------|----------------------------------------|
| 1.0     | 15 November 2019 | Initial published version              |
| 1.1     | 19 August 2024   | Updated broken links in v1.0           |
| 1.2     | 24 July 2025     | Updated broken links in v1.1           |
