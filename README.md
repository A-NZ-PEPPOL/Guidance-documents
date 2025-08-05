# Guidance documents
Within this Site are a range of guides that will support the development of an A-NZ compliant Peppol Access Point or Service Metadata Publisher. 

# A-NZ PEPPOL FRAMEWORK GUIDANCE NOTE

# Including WET and LCT on an Invoice  
**Guidance Note 01**

📄 Download the Word version from [here](https://github.com/A-NZ-PEPPOL/Guidance-documents/raw/refs/heads/Dev-GN-2025/GuidanceNote01_WETandLCT_v1.0.2.docx)

| Issue Date       | Version |
|------------------|---------|
| 09 December 2024 | 1.0.2   |

| Effective From    | Artefacts Impacted                                      |
|-------------------|----------------------------------------------------------|
| 09 December 2024  | PINT A-NZ Billing and Self-billing specifications        |

---

## Background  
The purpose of this document is to provide guidance on how sending and receiving businesses should manage **Wine Equalisation Tax (WET)** and **Luxury Car Tax (LCT)** information in Australia using the invoice syntax in the **PINT A-NZ specifications (Billing & Self-billing)**.

---

## Issue  
PINT A-NZ specifications support one tax scheme: **Goods and Services Tax (GST)**. However, in Australia, two other types of tax may appear on an invoice in addition to GST:

- **Wine Equalisation Tax (WET)**
- **Luxury Car Tax (LCT)**

### Key Differences Between WET and LCT:

- GST applies to **WET-inclusive** amounts, but **LCT-exclusive** amounts.
- LCT calculations require the **threshold and indexation**, which may update annually.
- Invoices for motor vehicles usually include other charges that impact total payable amounts, such as **stamp duty** and **car registration fees**.

---

## Guidance  
This document describes solutions to manage WET and LCT using existing elements in the **PINT A-NZ data model**.

The proposed approach does **not affect** the PINT A-NZ specifications but aims to provide sending and receiving businesses a **consistent approach** to manage WET and LCT. Unless an alternative approach is agreed between the sending and receiving businesses, users should follow this guidance note to maximise **straight-through processing and automation**.

---

## WET  
The WET amount can be displayed as an **additional charge** for the relative wine item, using the UBL element:


## Feedback
Please do not hesitate to get in touch if you have any feedback on ways we can improve this repository.
* The New Zealand Peppol Authority - [support@nzpeppol.govt.nz](mailto:support@nzpeppol.govt.nz)
* The Australian Peppol Authority - [einvoicing@ato.gov.au](mailto:einvoicing@ato.gov.au)
