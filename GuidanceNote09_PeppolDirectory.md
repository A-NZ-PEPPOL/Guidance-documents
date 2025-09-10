---
title: GN09_Peppol Directory
---

<p align="center">
  <img src="assets/header.jpg" alt="Header Image" width="100%">
</p>

# A-NZ PEPPOL FRAMEWORK GUIDANCE NOTE

# Peppol Directory  
**Guidance Note 09**

📄 Download the Word version from [here](https://github.com/A-NZ-PEPPOL/Guidance-documents/raw/refs/heads/Dev-GN-2025/GuidanceNote09_PeppolDirectory_v1.0.docx)

| Issue Date     | Version |
|----------------|---------|
| 10 June 2022   | 1.0     |

| Effective From | Artefacts Impacted |
|----------------|--------------------|
| December 2022  | NIL                |

---

## Introduction

The Peppol Directory contains information about the receiving
capabilities of End Users participating in Peppol. Its purpose is to
support businesses to find their trading partners who are registered to
exchange documents with them. The reliability of the Peppol Directory
directly impacts its usefulness for this purpose.

Service Providers (SPs) are responsible for keeping this information
accurate and up to date.

This guidance has been developed to support the accuracy of Australian
and New Zealand data in the Peppol Directory.

This guidance note should be read in conjunction with *Guidance Note 10
End User Identification* available on
[GitHub](https://github.com/A-NZ-PEPPOL/Guidance-documents).

---

### Background

Analysis of Australian and New Zealand entries in the Peppol Directory
has found data quality issues including invalid identifiers, cancelled
identifiers, missing fields, and entries that do not correspond with
central registries. This undermines confidence in, and reduces the
reliability and usefulness of, the Peppol Directory.

---

### Requirement to register End Users in the Peppol Directory

In Australia and New Zealand, SPs are required to register and maintain
the receiving capability of End Users in the Peppol Directory. This is
defined in Australia's and New Zealand's [Peppol Authority Specific
Requirements](https://openpeppol.atlassian.net/wiki/spaces/AF/pages/2756772112/List+of+PA+Specific+Requirements+-+2022+update).

---

### OpenPeppol Internal Regulations

Section 4.6.3 of the OpenPeppol [Internal
Regulations](https://openpeppol.atlassian.net/wiki/spaces/AF/pages/2756771841/New+Peppol+Agreements+and+accompanying+documents)
requires the Service Provider to submit up to date and accurate
information to the SMP(s) in which their End Users' endpoints are
listed.

It also requires that a Service Provider who provides Peppol Addressing
and Lookup Services is responsible for:

- Maintaining the End User's information

- Ensuring the information is displayed accurately, and

- Following up with the service provider who has the primary
  relationship with the End User if there are issues with the
  information provided to the Peppol Directory.

---

## Tools

### Australian Business Register 

The Australia Business Number (ABN) and the End User's name and other
associated registration details are available on the Australian Business
Register (ABR).

There are tools available to check and validate details against the ABR
include:

- [ABN Lookup Web
  Services](https://abr.business.gov.au/Tools/WebServices)

- [ABN Lookup tools](https://abr.business.gov.au/Tools/AbnLookup)

- [ABR website search](https://abr.business.gov.au)

- [ATO app](https://abr.business.gov.au/Tools/AtoApp)

---

### New Zealand Business Number Register

The New Zealand Business Number (NZBN), the business's name and other
primary business data is available on the NZBN register.

The tools available to check and validate details against the NZBNR
include:

- [NZBN Business Search](https://www.nzbn.govt.nz/)

- [NZBN
  Business-Match](https://www.nzbn.govt.nz/using-the-nzbn/nzbn-services/)
  (for validating existing customer lists)

- [NZBN
  API](https://api.business.govt.nz/api/apis/info?name=NZBN&version=v4&provider=mbiecreator)

- [Further information on NZBN
  services](https://www.nzbn.govt.nz/using-the-nzbn/nzbn-services/) --
  including NZBN Watchlists and Alerts for when business details change.

---

### Global Location Numbers

The Global Location Number (GLN) is used to identify locations and legal
entities. This unique identifier is comprised of a GS1 Company Prefix,
Location Reference, and Check Digit[^1].

GLN lookup is available on the GS1 website:

- [Search for GLN](https://gepir.gs1.org/index.php/search-by-gln)

---

## Guidance

### Requirements for Service Providers

1.  End User Authorisation **(Mandatory)**

    SPs must ensure they are authorised to publish the End User in the
    Peppol Directory.

2.  Registrations and updates (**Mandatory**)

> [*4.6.3. of Internal
> Regulations*](https://openpeppol.atlassian.net/wiki/spaces/AF/pages/2756771841/New+Peppol+Agreements+and+accompanying+documents#B2.-Internal-Regulations-on-the-Use-of-the-Peppol-Network)

SPs must ensure the accuracy and completeness of End User information in
the Peppol Directory:

a.  Minimum required fields are completed

b.  Identifier is valid

c.  Name matches the central registry

| **Item**       | **Method**                                                                                              |
|----------------|---------------------------------------------------------------------------------------------------------|
| Minimum Required Fields | The following fields are mandatory in A-NZ: <br><br> - All fields listed as mandatory in the [Peppol Directory Specification](https://docs.peppol.eu/edelivery/directory/PEPPOL-EDN-Directory-1.1.1-2020-10-15.pdf), and <br><br> - Registration date <br><br> SPs should make efforts to fill out non-mandatory fields. |
| Valid Identifier | **ABNs** <br><br> A Peppol identifier with ICD value *0151* must be a valid ABN. <br><br> SPs are responsible for ensuring the End User's ABN is valid: <br><br> - ABN meets the algorithm using the formula provided on the [Australian Business Register website](https://abr.business.gov.au/Help/AbnFormat), and <br><br> - ABN has been confirmed as "active" on the ABR prior to adding the ABN to the Peppol Directory. <br><br> **NZBNs** <br><br> A Peppol identifier with ICD value *0088* and country code *NZ* must be a valid NZBN. <br><br> SPs are responsible for ensuring the End User's NZBN is valid: <br><br> - NZBN has been confirmed as "registered" on the NZBNR prior to adding the NZBN to the Peppol Directory. |
| Name match     | **ABNs** <br><br> SPs must ensure that the name of the End User matches a name (entity name, business name, or trading name[^2]) listed on the ABR prior to adding a new entry into the Peppol Directory. <br><br> If the name of the End User does not match a name listed in the ABR, the End User should be contacted and asked to update their details (with the SP, [ABR](https://mygovid.gov.au/AuthSpa.UI/index.html#login), or both) to ensure the name matches before registering / updating their details in the Peppol Directory. <br><br> Note, minor deviations (i.e. spaces, case, minor abbreviations etc.) may be accepted at the discretion of the SP. <br><br> **NZBNs** <br><br> SPs must ensure that the name of the End User matches a name (trading name or legal business name) listed on the NZBNR prior to adding a new entry into the Peppol Directory. <br><br> If the name of the End User does not match a name listed in the NZBNR, the End User should be contacted and asked to update their details (with the SP, [NZBNR](https://www.nzbn.govt.nz/manage-your-nzbn/), or both) to ensure the name matches before registering / updating their details in the Peppol Directory. <br><br> Note, minor deviations (i.e. spaces, case, minor abbreviations etc.) may be accepted at the discretion of the SP. |

3.  Periodic checking (**Mandatory**)

> [*3.3.1 of Internal
> Regulations*](https://openpeppol.atlassian.net/wiki/spaces/AF/pages/2756771841/New+Peppol+Agreements+and+accompanying+documents#B2.-Internal-Regulations-on-the-Use-of-the-Peppol-Network)

SPs must perform checks of all their End Users to confirm the details
remain valid and up to date:

a.  Minimum required fields are completed

b.  Identifier is valid

c.  Name matches the central registry

<!-- -->

4.  Updating inaccurate entries (**Mandatory**)

> [*4.6.3. of Internal
> Regulations*](https://openpeppol.atlassian.net/wiki/spaces/AF/pages/2756771841/New+Peppol+Agreements+and+accompanying+documents#B2.-Internal-Regulations-on-the-Use-of-the-Peppol-Network)

SPs must update End User details which are not accurate within 30 days
of identifying the error/inaccuracy.

5.  Removal of invalid entries (**Mandatory**)

> [*4.6.3. of Internal
> Regulations*](https://openpeppol.atlassian.net/wiki/spaces/AF/pages/2756771841/New+Peppol+Agreements+and+accompanying+documents#B2.-Internal-Regulations-on-the-Use-of-the-Peppol-Network)

SPs must remove any entries which they have published which no longer
valid (e.g. where the identifier is invalid or where the End User's
identifier is no longer 'active' or 'registered') from the Peppol
Directory within 30 days of identifying the invalid entry.

---

## Migration Plan

| Guidance Notes         | Before<br>01/07/2022 | After<br>01/07/2022 | After<br>01/01/2023 |
|------------------------|----------------------|----------------------|----------------------|
| 04 Know Your Customer<br>Guidance Note | Mandatory              | Mandatory              | Phased Out            |
| 09 Peppol Directory<br>Guidance Note   | Optional               | Optional               | Mandatory             |

---

## Version History

| Version | Date         | Change Description   |
|---------|--------------|----------------------|
| 1.0     | 1 April 2022 | First publication    |

[^1]: [An Introduction to the Global Location Number (GLN)
    (gs1us.org)](https://www.gs1us.org/DesktopModules/Bring2mind/DMX/Download.aspx?Command=Core_Download&EntryId=158&language=en-US&PortalId=0&TabId=134)

[^2]: Note: From 1 November 2023, ABN Lookup will [not display trading
    names](https://abr.business.gov.au/FAQ/Names) and will only display
    registered business names.
