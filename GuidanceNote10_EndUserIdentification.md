---
title: GN10_End User Identification
---

<p align="center">
  <img src="assets/header.jpg" alt="Header Image" width="100%">
</p>


# A-NZ PEPPOL FRAMEWORK GUIDANCE NOTE

# End User Identification  
**Guidance Note 10**

📄 Download the Word version from [here](https://github.com/A-NZ-PEPPOL/Guidance-documents/raw/refs/heads/Dev-GN-2025/GuidanceNote10_EndUserIdentification_v1.0.docx)

| Issue Date     | Version |
|----------------|---------|
| 10 June 2022   | 1.0     |

| Effective From | Artefacts Impacted         |
|----------------|----------------------------|
| December 2022  | Replaces Guidance Notes 4–6 |

---

## Introduction 

This guidance note provides instructions on how Service Providers who
provide Access Point (AP) and Service Metadata Publisher (SMP) services
in Australia and New Zealand can meet the requirements of End User
Identification in the Peppol environment.

Reliability in the identity of end-users provides confidence and trust
in the Peppol network. Adequate identity verification and validation by
Service Providers reduces the risk of fraudulent behaviour which impacts
End Users and can damage the reputation of the network and ultimately,
is detrimental to all parties.

Comprehensive and adequate End User identification considers:

- New End User:

  - that the person representing an entity is who they say they are, and

  - that the person is authorised to represent the entity, and

  - that the entity is legitimate, and the details are accurate.

- Existing End User:

  - triggers that may prompt re-checking the information, and

  - periodic re-checking.

The requirements in this document create a baseline level of validation.
A-NZ Peppol Authorities have been, and continue to, work with Service
Providers to strengthen End User identification as the network matures.

This guidance note should be read in conjunction with *Guidance Note 09
Peppol Directory* available on
[GitHub](https://github.com/A-NZ-PEPPOL/Guidance-documents).

This guidance note replaces *Guidance Note 04 Know Your Customer*,
*Guidance Note 05 ABN Validation* and *Guidance Note 06 NZBN
Validation*. These are now obsolete.

## OpenPeppol Internal Regulations 

Policy for End User identification in OpenPeppol can be found in Section
3.3.1 of the [OpenPeppol Internal
Regulations](https://openpeppol.atlassian.net/wiki/spaces/AF/pages/2756771841/New+Peppol+Agreements+and+accompanying+documents)
(IR).

SPs remain responsible for the correctness of all End User (senders and
receivers) information for the time during which they provide Peppol
Services to them, directly or indirectly through intermediaries.

## Tools

### Australian Business Register (ABR) 

The Australia Business Number (ABN), the End User's name, and other
associated registration details are available on the Australian Business
Register (ABR).

There are options to check and validate details against information on
the ABR, including Web Services and Lookup tools to support integration
into system solutions:

- [ABN Lookup Web
  Services](https://abr.business.gov.au/Tools/WebServices)

- [ABN Lookup tools](https://abr.business.gov.au/Tools/AbnLookup)

- [ABR website search](https://abr.business.gov.au)

- [ATO app](https://abr.business.gov.au/Tools/AtoApp)

### New Zealand Business Number Register (NZBNR) 

The New Zealand Business Number (NZBN), the End User's name, and other
primary business data is available on the NZBN register.

The tools available to check and validate details against the
information on the NZBNR include:

- [NZBN Business Search](https://www.nzbn.govt.nz/)

- [NZBN
  Business-Match](https://www.nzbn.govt.nz/using-the-nzbn/nzbn-services/)
  (for validating existing customer lists)

- [NZBN
  API](https://api.business.govt.nz/api/apis/info?name=NZBN&version=v4&provider=mbiecreator)

- [Further information on NZBN
  services](https://www.nzbn.govt.nz/using-the-nzbn/nzbn-services/) --
  including NZBN Watchlists and Alerts for when business details change.

### Global Location Numbers (GLNs)

The Global Location Number (GLN) is used to identify locations and legal
entities. This unique identifier is comprised of a GS1 Company Prefix,
Location Reference, and Check Digit[^1].

GLN lookup is available on the GS1 website:

- [Search for GLN](https://gepir.gs1.org/index.php/search-by-gln) --
  ensure search returns "query successful"

## Guidance

### Requirements for Service Providers

1.  Documented End User identification process (**Mandatory**)

> Service Providers (SPs) must have a documented process for identifying
> and verifying End User information which includes:

- How information is collected and verified,

- How any data discrepancies will be handled,

- How requests for changes to key information will be managed, and

  - e.g. reverifying the End User where the email address changes.

- How suspicious activity will be managed.

  - e.g. verify the details where there is more than one user with the
    same identifier, or where the identifier has been changed in the
    system.

2.  End User authorisation (**Mandatory**)

> SPs must ensure they are authorised to grant access to the Peppol
> Network to the End User.

3.  Collect and verify End User information

> [*3.3.1 of Internal
> Regulations*](https://openpeppol.atlassian.net/wiki/spaces/AF/pages/2756771841/New+Peppol+Agreements+and+accompanying+documents#B2.-Internal-Regulations-on-the-Use-of-the-Peppol-Network)
>
> Before providing access to the Peppol Network, SPs must collect and
> verify End User information as follows:

i.  Legal Identifier (**Mandatory**)

| **Identifier** | **Requirement**                                                                 |
|----------------|----------------------------------------------------------------------------------|
| ABN<br>ICD:0151 | SPs must ensure that the End User's ABN is valid:<br><br> - ABN meets the algorithm using the formula provided on the [Australian Business Register website](https://abr.business.gov.au/Help/AbnFormat), and<br><br> - ABN has been confirmed as "active" on the ABR. |
| NZBN<br>ICD:0088<br>Cty:NZ | SPs must ensure that the End User's NZBN has been confirmed as "registered" on the NZBNR. |


ii. Legal Name (**Mandatory**)

| **Identifier** | **Requirement**                                                                 |
|----------------|----------------------------------------------------------------------------------|
| ABN:           | SPs must ensure that the name of the End User matches one of the names (entity name, business name, or trading name[^2]) associated with the entity on the ABR.<br><br>Where there is a mismatch, the End User should be contacted and asked to update their details (with the Service Provider, [ABR](https://mygovid.gov.au/AuthSpa.UI/index.html#login), or both) to ensure the name matches before registering / updating their details in the Peppol Directory. The End User may choose which of their names they want to use in the Peppol Directory.<br><br>Note, minor deviations (e.g. spaces, case, abbreviations etc.) may be accepted at the discretion of the Service Provider. |
| NZBN:          | Service Providers must ensure that the name of the End User matches a name (trading name or legal business name) listed on the NZBNR prior to adding a new entry into the Peppol Directory.<br><br>If there is a mismatch, the End User should be contacted and asked to update their details (with the Service Provider, [NZBNR](https://www.nzbn.govt.nz/manage-your-nzbn/), or both) to ensure the name matches before registering / updating their details in the Peppol Directory. The End User may choose which of their names they want to use in the Peppol Directory.<br><br>Note, minor deviations (e.g. spaces, case, minor abbreviations etc.) may be accepted at the discretion of the Service Provider. |


iii. Legal address, country, and territory (**Mandatory**)

  | **Identifier** | **Requirement**                                           |
|----------------|-----------------------------------------------------------|
| ABN:           | Validation of the ABN via the ABR will satisfy this requirement. |
| NZBN:          | Validation of the NZBN via the NZBNR will satisfy this requirement. |


iv. Peppol Dataset Type(s) (**Mandatory**)

| **Identifier** | **Requirement**                                                                 |
|----------------|----------------------------------------------------------------------------------|
| All            | SPs must ensure that the information on the End User's ability to receive Peppol Dataset Type(s) is collected before the SP registers them with that capability. |

v. Identifiers (**Mandatory**)

| **Identifier** | **Requirement**                                                                 |
|----------------|----------------------------------------------------------------------------------|
| All            | SPs must ensure the trading name or legal name is known for each Peppol identifier that they provide Peppol services to. |

vi. Contact Information (**Mandatory**)

| **Identifier** | **Requirement**                                                                 |
|----------------|----------------------------------------------------------------------------------|
| All            | SPs must ensure that valid client contact details have been collected for the End User, including a confirmed email and phone number. |

vii. Proof of Ownership (**Recommended**)

| **Identifier** | **Requirement**                                                                 |
|----------------|----------------------------------------------------------------------------------|
| All            | SPs should ensure reasonable efforts have been made to establish that the information has been provided by the entity.<br><br>Possible options include:<br><br> - Information from other authorisation processes or evidence of existing business activity (e.g. ATO, [Cloud Authentication and Authorisation (CAA)](https://softwaredevelopers.ato.gov.au/Cloud_Software_Authentication_and_Authorisation), bank, tax agent, utility bills, rates bills)<br><br> - Communication via the entity's email address<br><br> - Confirmation via telephone number matching details on the entity's official website<br><br> - Confirmation against information from a public register to identify listed office holders of the entity (e.g., ASIC registers in Australia, Companies Register in New Zealand) |

viii. Intermediaries (**Mandatory**)

| **Identifier** | **Requirement**                                                                 |
|----------------|----------------------------------------------------------------------------------|
| All            | SPs must collect information on any intermediaries used by the End User to access the Peppol Network.<br><br>The SP must ensure that the legal identifier, legal name, and country of these intermediaries is verified. |

4.  Re-verify/check End User identification information annually
    (**Mandatory**)

> [*3.3.1 of Internal
> Regulations*](https://openpeppol.atlassian.net/wiki/spaces/AF/pages/2756771841/New+Peppol+Agreements+and+accompanying+documents#B2.-Internal-Regulations-on-the-Use-of-the-Peppol-Network)
>
> SPs must ensure that items under *Collect and verify End User
> information* (requirement 3) are re-verified/checked on an annual
> basis.

---

### Migration Plan

| Guidance Notes                            | Before 01/07/2022 | After 01/07/2022 | After 01/01/2023 |
|------------------------------------------|-------------------|------------------|------------------|
| 04 Know your customer guidance note      | Mandatory         | Mandatory        | Phased out       |
| 05 ABN Validation guidance note          | Mandatory         | Mandatory        | Phased out       |
| 06 NZBN Validation guidance note         | Mandatory         | Mandatory        | Phased out       |
| 10 End User Identification guidance note | Optional          | Optional         | Mandatory        |

---

## Further information

Whilst most SPs won't be governed by these documents or guidelines, they
may provide useful information on best practice.

- [Australia -
  AUSTRAC](https://www.austrac.gov.au/business/how-comply-and-report-guidance-and-resources/customer-identification-and-verification/customer-identification-know-your-customer-kyc)
  (Customer identification: Know your customer (KYC) for reporting
  entities under the *Anti-Money Laundering and Counter-Terrorism
  Financing Act 2006*)

- [Australia -- Australian Taxation
  Office](https://www.ato.gov.au/Tax-professionals/Your-practice/Tax-and-BAS-agents/Strengthening-client-verification-guidelines/)
  (Strengthening client verification guidelines for tax professionals)

- [Australia -- Tax Practitioners
  Board](https://www.tpb.gov.au/tpb-practice-note-tpbpn-52022-proof-identity-requirements-client-verification)
  (Proof of identity requirements for client verification for tax
  practitioners)

- [New Zealand -- Financial Markets
  Authority](https://www.fma.govt.nz/compliance/guidance-library/identity-verification-code-of-practice/)
  (Identity Verification Code of Practice for reporting entities under
  the New Zealand *Anti-*Money *Laundering and Countering Financing of
  Terrorism Act 2009*)

- [New Zealand -- Department of Internal
  Affairs](https://www.dia.govt.nz/AML-CFT-Information-for-Accountants)
  (Guideline for accountants for complying with the *Anti-Money
  Laundering and Countering Financing of Terrorism Act 2009*)

---

### Version history

| Version | Date          | Change                  |
|---------|---------------|--------------------------|
| 1.0     | 10 June 2022  | Initial published version |

---

[^1]: [An Introduction to the Global Location Number (GLN)
    (gs1us.org)](https://www.gs1us.org/DesktopModules/Bring2mind/DMX/Download.aspx?Command=Core_Download&EntryId=158&language=en-US&PortalId=0&TabId=134)

[^2]: Note: From 1 November 2023, ABN Lookup will [not display trading
    names](https://abr.business.gov.au/FAQ/Names) and will only display
    registered business names.
