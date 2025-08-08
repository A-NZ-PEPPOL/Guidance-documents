<p align="center">
  <img src="assets/header.jpg" alt="Header Image" width="100%">
</p>

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
The purpose of this document is to provide guidance on how sending and receiving businesses should manage **Wine Equalisation Tax (WET)** and **Luxury Car Tax (LCT)** information in Australia using the invoice syntax in the **[PINT A-NZ](https://docs.peppol.eu/poac/aunz/) specifications (Billing & Self-billing)**.

---

## Issue  
PINT A-NZ specifications support one tax scheme: **Goods and Services Tax (GST)**. However, in Australia, two other types of tax may appear on an invoice in addition to GST: **Wine Equalisation Tax ([WET](https://www.ato.gov.au/business/wine-equalisation-tax/))** and **Luxury Car Tax ([LCT](https://www.ato.gov.au/Business/Business-activity-statements-(BAS)/Luxury-car-tax-(LCT)/))**

The key differences between WET and LCT include:

- GST applies to **WET-inclusive** amounts, but **LCT-exclusive** amounts.
- LCT calculations require the **threshold and indexation**, which may update annually.
- Invoices for motor vehicles usually include other charges that impact total payable amounts, such as **stamp duty** and **car registration fees**.

---

## Guidance  
This document describes solutions to manage WET and LCT using existing elements in the **PINT A-NZ data model**.

The proposed approach does **not affect** the PINT A-NZ specifications but aims to provide sending and receiving businesses a **consistent approach** to manage WET and LCT. Unless an alternative approach is agreed between the sending and receiving businesses, users should follow this guidance note to maximise **straight-through processing and automation**.

---

## WET

The WET amount can be displayed as an additional charge for the relative wine item, using the UBL element:

`cac:InvoiceLine/cac:AllowanceCharge/cbc:Amount` ([IBT-141](https://docs.peppol.eu/poac/aunz/pint-aunz/trn-invoice/semantic-model/ibt-141/)).

To specify the additional charge is for WET, it is recommended to :

- Use `"ZZZ"` for `cbc:AllowanceChargeReasonCode` ([IBT-140](https://docs.peppol.eu/poac/aunz/pint-aunz/trn-invoice/semantic-model/ibt-140/))
- Include `"WET"` in `cbc:AllowanceChargeReason` ([IBT-139](https://docs.peppol.eu/poac/aunz/pint-aunz/trn-invoice/semantic-model/ibt-139/)).

This approach ensures the applied WET amounts are associated with the related wine sales.

📎 Refer to **Appendix 1** for detailed examples.

---

## LCT

The LCT amount, and other applicable charges (such as stamp duty, registration fee, and vehicle insurance fee), should each be displayed using an additional line:

- Put the amount in `cac:InvoiceLine/cbc:LineExtensionAmount` ([IBT-131](https://docs.peppol.eu/poac/aunz/pint-aunz/trn-invoice/semantic-model/ibt-131/)).
- Use `cac:InvoiceLine/cbc:Note` ([IBT-127](https://docs.peppol.eu/poac/aunz/pint-aunz/trn-invoice/semantic-model/ibt-127/)) to describe the amount included in the invoice line, e.g. LCT.
- For LCT and other charges where GST is not applicable:
  - Use `"GST"` as the tax scheme
  - Use code `"E"` (exempt from tax) in `cac:ClassifiedTaxCategory` ([IBG-30](https://docs.peppol.eu/poac/aunz/pint-aunz/trn-invoice/semantic-model/ibg-30/)).
- It is recommended to use `"ZZZ"` from the [UNCL7143](https://docs.peppol.eu/poac/aunz/pint-aunz/trn-invoice/codelist/UNCL7143/) item type identification code list for:
  `cac:InvoiceLine/cac:Item/cac:CommodityClassification/cbc:ItemClassificationCode` ([IBT-158](https://docs.peppol.eu/poac/aunz/pint-aunz/trn-invoice/semantic-model/ibt-158/))
  to assist with automation of the processing of LCT.

📎 Refer to **Appendix 2** for detailed examples.

> **Note:** Using the described approach above, the document-level WET or LCT amount will not be separately included and will need to be calculated and displayed by the receiving software.

---


## Appendix A – Wine Equalisation Tax Example

### Scenario:

| Wine price per item | Quantity | WET amount (29%) | GST (10% of WET inclusive amount) |
|---------------------|----------|------------------|-----------------------------------|
| \$500               | 4        | \$580            | \$258                             |

### XML Example:

```xml
<cac:TaxTotal>
    <cbc:TaxAmount currencyID="AUD">258.00</cbc:TaxAmount> <!-- 10% of WET inclusive amount -->
    <cac:TaxSubtotal>
        <cbc:TaxableAmount currencyID="AUD">2580.00</cbc:TaxableAmount>
        <cbc:TaxAmount currencyID="AUD">258.00</cbc:TaxAmount>
        <cac:TaxCategory>
            <cbc:ID>S</cbc:ID>
            <cbc:Percent>10</cbc:Percent>
            <cac:TaxScheme>
                <cbc:ID>GST</cbc:ID>
            </cac:TaxScheme>
        </cac:TaxCategory>
    </cac:TaxSubtotal>
</cac:TaxTotal>

<cac:LegalMonetaryTotal>
    <cbc:LineExtensionAmount currencyID="AUD">2580.00</cbc:LineExtensionAmount>
    <cbc:TaxExclusiveAmount currencyID="AUD">2580.00</cbc:TaxExclusiveAmount>
    <cbc:TaxInclusiveAmount currencyID="AUD">2838.00</cbc:TaxInclusiveAmount>
    <cbc:PayableAmount currencyID="AUD">2838.00</cbc:PayableAmount>
</cac:LegalMonetaryTotal>

<cac:InvoiceLine>
    <cbc:ID>1</cbc:ID>
    <cbc:Note>Bulk White Wine</cbc:Note>
    <cbc:InvoicedQuantity unitCode="E99">4</cbc:InvoicedQuantity>
    <cbc:LineExtensionAmount currencyID="AUD">2580.00</cbc:LineExtensionAmount>

    <cac:AllowanceCharge>
        <cbc:ChargeIndicator>true</cbc:ChargeIndicator> <!-- WET charge -->
        <cbc:AllowanceChargeReasonCode>ZZZ</cbc:AllowanceChargeReasonCode> <!-- Recommended WET charge code -->
        <cbc:AllowanceChargeReason>WET</cbc:AllowanceChargeReason> <!-- WET charge reason -->
        <cbc:Amount currencyID="AUD">580</cbc:Amount> <!-- WET amount (29% of (PriceAmount x InvoicedQuantity)) -->
    </cac:AllowanceCharge>

    <cac:Item>
        <cbc:Description>Wine</cbc:Description>
        <cbc:Name>White Wine</cbc:Name>
        <cac:ClassifiedTaxCategory>
            <cbc:ID>S</cbc:ID>
            <cbc:Percent>10</cbc:Percent>
            <cac:TaxScheme>
                <cbc:ID>GST</cbc:ID>
            </cac:TaxScheme>
        </cac:ClassifiedTaxCategory>
    </cac:Item>

    <cac:Price>
        <cbc:PriceAmount currencyID="AUD">500</cbc:PriceAmount>
    </cac:Price>
</cac:InvoiceLine>
</Invoice>
```

---

## Appendix B – Luxury Car Tax

### Scenario:

| Car Price | Quantity | *Threshold | *LCT Taxable Amount | LCT Amount |
|-----------|----------|------------|---------------------|------------|
| \$100,000 | 1        | \$75,526   | (100k - 75,526) × 10/11 = \$22,249.10 | \$7,342.20 |

> *Formula: (33%) × 10/11 × [Luxury car tax value – luxury car tax threshold]*

### XML Example

```xml
<cac:TaxTotal>
    <cbc:TaxAmount currencyID="AUD">10000</cbc:TaxAmount>
    <cac:TaxSubtotal>
        <cbc:TaxableAmount currencyID="AUD">100000</cbc:TaxableAmount>
        <cbc:TaxAmount currencyID="AUD">10000</cbc:TaxAmount>
        <cac:TaxCategory>
            <cbc:ID>S</cbc:ID>
            <cbc:Percent>10</cbc:Percent>
            <cac:TaxScheme>
                <cbc:ID>GST</cbc:ID>
            </cac:TaxScheme>
        </cac:TaxCategory>
    </cac:TaxSubtotal>

    <cac:TaxSubtotal>
        <cbc:TaxableAmount currencyID="AUD">11582.90</cbc:TaxableAmount>
        <cbc:TaxAmount currencyID="AUD">0.00</cbc:TaxAmount>
        <cac:TaxCategory>
            <cbc:ID>E</cbc:ID>
            <cbc:Percent>0</cbc:Percent>
            <cac:TaxScheme>
                <cbc:ID>GST</cbc:ID>
            </cac:TaxScheme>
        </cac:TaxCategory>
    </cac:TaxSubtotal>
</cac:TaxTotal>

<cac:LegalMonetaryTotal>
    <cbc:LineExtensionAmount currencyID="AUD">111582.90</cbc:LineExtensionAmount>
    <cbc:TaxExclusiveAmount currencyID="AUD">111582.90</cbc:TaxExclusiveAmount>
    <cbc:TaxInclusiveAmount currencyID="AUD">121582.90</cbc:TaxInclusiveAmount>
    <cbc:PayableAmount currencyID="AUD">121582.90</cbc:PayableAmount>
</cac:LegalMonetaryTotal>

<cac:InvoiceLine>
    <cbc:ID>1</cbc:ID>
    <cbc:Note>Porche 911 Carrera</cbc:Note> <!-- Use to describe the amount included -->
    <cbc:InvoicedQuantity unitCode="E99">1</cbc:InvoicedQuantity>
    <cbc:LineExtensionAmount currencyID="AUD">100000</cbc:LineExtensionAmount>
    <cbc:AccountingCost>Luxury Car Cost</cbc:AccountingCost>

    <cac:Item>
        <cbc:Description>Luxury Car</cbc:Description>
        <cbc:Name>Porche 911 Carrera</cbc:Name>
        <cac:ClassifiedTaxCategory>
            <cbc:ID>S</cbc:ID>
            <cbc:Percent>10</cbc:Percent>
            <cac:TaxScheme>
                <cbc:ID>GST</cbc:ID>
            </cac:TaxScheme>
        </cac:ClassifiedTaxCategory>
    </cac:Item>

    <cac:Price>
        <cbc:PriceAmount currencyID="AUD">100000</cbc:PriceAmount>
        <cac:AllowanceCharge>
            <cbc:ChargeIndicator>false</cbc:ChargeIndicator>
            <cbc:Amount currencyID="AUD">0.00</cbc:Amount>
            <cbc:BaseAmount currencyID="AUD">100000</cbc:BaseAmount>
        </cac:AllowanceCharge>
    </cac:Price>
</cac:InvoiceLine>

<cac:InvoiceLine>
    <cbc:ID>2</cbc:ID>
    <cbc:Note>LCT</cbc:Note> <!-- Use to describe the amount included -->
    <cbc:InvoicedQuantity unitCode="C62">1</cbc:InvoicedQuantity>
    <cbc:LineExtensionAmount currencyID="AUD">7342.20</cbc:LineExtensionAmount> <!-- LCT amount -->

    <cac:Item>
        <cbc:Description>LCT Tax Payable</cbc:Description>
        <cbc:Name>LCT</cbc:Name>
        <cac:CommodityClassification>
            <cbc:ItemClassificationCode listID="ZZZ">LCT</cbc:ItemClassificationCode> <!-- Recommended LCT code for automation of processing -->
        </cac:CommodityClassification>
        <cac:ClassifiedTaxCategory>
            <cbc:ID>E</cbc:ID>
            <cbc:Percent>0</cbc:Percent>
            <cac:TaxScheme>
                <cbc:ID>GST</cbc:ID>
            </cac:TaxScheme>
        </cac:ClassifiedTaxCategory>
    </cac:Item>

    <cac:Price>
        <cbc:PriceAmount currencyID="AUD">7342.20</cbc:PriceAmount>
    </cac:Price>
</cac:InvoiceLine>

<cac:InvoiceLine> <!-- Additional line item for stamp duty, registration fees etc -->
    <cbc:ID>3</cbc:ID>
    <cbc:Note>LCT</cbc:Note> <!-- Use to describe the amount included -->
    <cbc:InvoicedQuantity unitCode="C62">1</cbc:InvoicedQuantity>
    <cbc:LineExtensionAmount currencyID="AUD">4240.70</cbc:LineExtensionAmount>

    <cac:Item>
        <cbc:Description>Stamp Duty Payable</cbc:Description>
        <cbc:Name>Stamp Duty</cbc:Name>
        <cac:CommodityClassification>
            <cbc:ItemClassificationCode listID="ZZZ">Stamp Duty</cbc:ItemClassificationCode> <!-- Recommended code for automation -->
        </cac:CommodityClassification>
        <cac:ClassifiedTaxCategory>
            <cbc:ID>E</cbc:ID>
            <cbc:Percent>0</cbc:Percent>
            <cac:TaxScheme>
                <cbc:ID>GST</cbc:ID>
            </cac:TaxScheme>
        </cac:ClassifiedTaxCategory>
    </cac:Item>

    <cac:Price>
        <cbc:PriceAmount currencyID="AUD">4240.70</cbc:PriceAmount>
    </cac:Price>
</cac:InvoiceLine>
</Invoice>
```

---

## Version History

| Version | Date       | Change Description |
|---------|------------|--------------------|
| 1.0     | 08/10/2019 | Initial published version |
| 1.0.1   | 06/02/2020 | Correction of LCT example (Appendix B)<br> Use "ZZZ" as ItemClassificationCode<br> Improve AccountingCost exemplars |
| 1.0.2   | 09/02/2024 | Updated artefact references to the PINT A-NZ specification<br> Editorial changes for clarification |
