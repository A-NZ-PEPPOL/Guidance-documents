---
title: GN11_Use of Tax Category Codes in Australia
---

<p align="center">
  <img src="assets/header.jpg" alt="Header Image" width="100%">
</p>

# A-NZ PEPPOL FRAMEWORK GUIDANCE NOTE

# Use of Tax Category Codes in Australia  
**Guidance Note 11**

📄 Download the Word version from [here](https://github.com/A-NZ-PEPPOL/Guidance-documents/raw/refs/heads/Dev-GN-2025/GuidanceNote11_TaxCategoryCodes_v1.2.docx)

| Issue Date       | Version |
|------------------|---------|
| 09 December 2024 | 1.2     |

| Effective From    | Artefacts Impacted                          |
|-------------------|---------------------------------------------|
| 09 December 2024  | PINT A-NZ Invoice and Self-billing specification |

---

## Introduction

The purpose of this document is to provide information for use of Peppol tax category codes for an Australian tax invoice or credit note.

### Issue

Peppol uses a subset of the UNCL5305 code list to specify the application of sales/consumption tax (e.g. VAT, GST) for an invoiced item. The PINT A-NZ specification has adopted the following tax category codes:

- **S** – Standard rate  
- **E** – Exempt from tax  
- **Z** – Zero rated goods  
- **G** – Free export item, tax not charged  
- **O** – Services outside scope of tax  

The Australian GST law does not specify GST categories using the UNCL5305 code list. Guidance is therefore required for Digital Service Providers and business end users to clarify the use of these codes for an Australian tax invoice or credit note.

---

## Guidance

| **Tax Code** | **Code Description**             | **Use**                                                                 |
|--------------|----------------------------------|-------------------------------------------------------------------------|
| S            | Standard rate                    | Use this code in the tax invoice for goods and services that are taxable and which attract a non-zero tax rate.<br><br>When using this code to charge tax, the corresponding tax rate shown on the invoice needs to be the legislated percentage, e.g. 10%.<br><br>If you are registered for GST, or required to be, the goods and services you sell in Australia are generally taxable unless they are GST-free or input taxed.<br><br>See [Taxable sales – GST in Australia](https://www.ato.gov.au/business/gst/when-to-charge-gst-(and-when-not-to)/taxable-sales/). |
| E            | Exempt from tax                  | Use this code for goods and services which are input taxed supplies in Australia and don't include GST in the price.<br><br>See [Input-taxed supplies in Australia](https://www.ato.gov.au/business/gst/when-to-charge-gst-(and-when-not-to)/input-taxed-sales/). |
| Z            | Zero rated goods                 | Use this code for goods and services that are GST-free supplies in Australia.<br><br>For GST-free exports, it is recommended to use tax category code G.<br><br>See [GST-free sales](https://www.ato.gov.au/business/gst/when-to-charge-gst-(and-when-not-to)/gst-free-sales/). |
| G            | Free export item, tax not charged | Use this code for GST-free exports of goods and other exports.<br><br>The goods and services which are sold or provided to customers in Australia must not be categorised under this code.<br><br>See [exports of goods](https://www.ato.gov.au/Business/GST/When-to-charge-GST-(and-when-not-to)/GST-free-sales/#exports), [other exports](https://www.ato.gov.au/business/gst/when-to-charge-gst-(and-when-not-to)/gst-free-sales/#Otherexports), and related information. |
| O            | Services outside scope of tax    | Use this code for goods and services which do not attract GST where invoices are issued by entities who are not registered and not required to be registered for GST in Australia.<br><br>See [Registering for GST](https://www.ato.gov.au/Business/GST/Registering-for-GST/). |

The following [tax category codes](https://docs.peppol.eu/poac/aunz/pint-aunz/trn-invoice/codelist/Aligned-TaxCategoryCodes/) are adopted by Australian eInvoicing and should be used for PINT A-NZ invoices and credit notes as described below:

## Version History

| Version | Date         | Change                                                                 |
|---------|--------------|------------------------------------------------------------------------|
| 0.1     | 27/04/2022   | Initial draft for review                                               |
| 1.0     | 27/05/2022   | Final version published                                                |
| 1.1     | 21/11/2022   | Updated document numbering to align with other Guidance Notes          |
| 1.2     | 09/11/2024   | Editorial updates for PINT A-NZ specification                          |
