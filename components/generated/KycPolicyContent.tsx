type Row = Record<string, string>;

const KYCPOLICYCONTENT_LIST: Row[] = [
  {
    "t0": "SDD",
    "t1": " — simplified due diligence is used in instances of extremely low-risk transactions that do not meet the required thresholds"
  },
  {
    "t0": "CDD",
    "t1": " — customer due diligence is the standard for due diligence checks, used in most cases for verification and identification"
  },
  {
    "t0": "EDD",
    "t1": " — Enhanced Due Diligence is used for high-risk customers, large transactions or special cases."
  }
];

const KYCPOLICYCONTENT_LIST1: Row[] = [
  {
    "t0": "Austria"
  },
  {
    "t0": "France and it’s territories"
  },
  {
    "t0": "Germany"
  },
  {
    "t0": "Netherlands and it’s territories"
  },
  {
    "t0": "Spain"
  },
  {
    "t0": "Union of Comoros"
  },
  {
    "t0": "United Kingdom"
  },
  {
    "t0": "USA and it’s territories"
  },
  {
    "t0": "All FATF Blacklisted countries,"
  },
  {
    "t0": "any other jurisdictions deemed prohibited by Anjouan Offshore Financial Authority."
  }
];

const KYCPOLICYCONTENT_LIST2: Row[] = [
  {
    "t0": "Austria"
  },
  {
    "t0": "France and it’s territories"
  },
  {
    "t0": "Germany"
  },
  {
    "t0": "Netherlands and it’s territories"
  },
  {
    "t0": "Spain"
  },
  {
    "t0": "Union of Comoros"
  },
  {
    "t0": "United Kingdom"
  },
  {
    "t0": "USA and it’s territories"
  },
  {
    "t0": "All FATF Blacklisted countries,"
  },
  {
    "t0": "any other jurisdictions deemed prohibited by Anjouan Offshore Financial Authority."
  }
];

export default function KycPolicyContent() {
  return (
    <div className="container">
      <div className="row">
        <div style={{"marginTop":"20px"}}>
          <h1 className="text-center text-title">
            KYC Policy
          </h1>
          <div>
            <div>
              <p>
                <strong>
                  Last updated: 02.07.2024
                </strong>
              </p>
              <p>
                {"The Company adheres to and complies with “Know your customer” principles, which aim to prevent financial crime and money laundering through client identification and due diligence."}
              </p>
              <p>
                {"The Company reserves the right, at any time, to ask for any KYC documentation it deems necessary to determine the identity and location of a user in "}
                <a href="https://mcwlink.co/mcwguidebd">
                  https://mcwlink.co/mcwguidebd
                </a>
                . We reserve the right to restrict the service, payment, or withdrawal until identity is sufficiently determined, or for any other reason in our sole discretion based on the legal framework.
              </p>
              <p>
                We take a risk-based approach and perform strict due diligence checks and ongoing monitoring of all clients, customers, and transactions. As per the money laundering regulations, we utilize three stages of due diligence checks, depending on the risk, transaction, and customer type.
              </p>
              {KYCPOLICYCONTENT_LIST.map((it, i) => (
                <p key={i}>
                  <strong>
                    {it.t0}
                  </strong>
                  {it.t1}
                </p>
              ))}
              <p>
                {"Separately and in addition to the above, when a user requests a withdrawal of any amount inside the "}
                <a href="https://mcwlink.co/mcwguidebd">
                  https://mcwlink.co/mcwguidebd
                </a>
                {" or attempts to or completes a transaction that is deemed suspicious, then it is compulsory for them to complete the full KYC process."}
              </p>
              <p>
                During this process, the user will have to input some basic details about themselves and then upload
              </p>
              <p>
                1) A copy of Government Issued Photo ID (in some cases front and back depending on the ID document)
                <br />
                2) A selfie of themselves holding the ID doc
                <br />
                3) A bank statement/Utility Bill
              </p>
              <h2>
                {"Guideline for the “KYC Process”"}
              </h2>
              <p>
                <strong>
                  1) Proof of ID
                </strong>
                <br />
                a. Signature Is there
                <br />
                b. Country is not one of the following Restricted Countries:
              </p>
              <ul>
                {KYCPOLICYCONTENT_LIST1.map((it, i) => (
                  <li key={i}>
                    {it.t0}
                  </li>
                ))}
              </ul>
              <p>
                c. Full Name matches client’s name
                <br />
                d. Document does not expire in the next 3 months
                <br />
                e. Owner is over 18 years of age
              </p>
              <p>
                <strong>
                  2) Proof of Residence
                </strong>
                <br />
                a. Bank Statement or Utility Bill
                <br />
                b. Country is not one of the following Restricted Countries:
              </p>
              <ul>
                {KYCPOLICYCONTENT_LIST2.map((it, i) => (
                  <li key={i}>
                    {it.t0}
                  </li>
                ))}
              </ul>
              <p>
                c. Full Name matches client’s name and is same as in proof of ID.
                <br />
                d. Date of Issue: In the last 3 months
              </p>
              <p>
                <strong>
                  3) Selfie with ID
                </strong>
                <br />
                a. Holder is the same as in the ID document above
                <br />
                {"b. ID document is the same as in “1”. Make sure photo/ID number is the same"}
              </p>
              <h2>
                {"Notes on the “KYC Process”"}
              </h2>
              <p>
                1) When the KYC process is unsuccessful then the reason is documented and a support ticket is created in the system. The ticket number along with an explanation is communicated back to the user.
                <br />
                2) Once all proper documents are in our possession then the account gets approved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
