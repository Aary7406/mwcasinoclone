type Row = Record<string, string>;

const AMLPOLICYCONTENT_LIST: Row[] = [
  {
    "t0": "Valid photo card driving license; or"
  },
  {
    "t0": "Valid passport; and"
  },
  {
    "t0": "Recent utility bills or bank statements (within the last 3 months)"
  }
];

const AMLPOLICYCONTENT_LIST1: Row[] = [
  {
    "t0": "Always keep a secure online list of all registered Users."
  },
  {
    "t0": "retain transactional and identification documentation as defined in the law’s regulations and guidance notes."
  },
  {
    "t0": "provide initial and ongoing training to all relevant staffs so that they are aware of the procedures and their personal responsibilities in respect of identifying Users, monitoring User activities, record-keeping and reporting any suspicious/unusual transactions."
  },
  {
    "t0": "ensure that this policy is maintained and developed in line with evolving statutory and regulatory obligation and advice from the relevant authorities."
  },
  {
    "t0": "to the extent possible, examine with special attention, the background and purpose of any large or complex transactions and any transactions which are highly possible to be related to money laundering or funding of terrorism."
  },
  {
    "t0": "report any suspicion or knowledge of money laundering or terrorism financing to the LGA or required by law to the government agency responsible for the collection, collation, processing, analysis and dissemination of information with a view to prevent money laundering and combat the funding of terrorism."
  },
  {
    "t0": "cooperate with all relevant administrative, enforcement and judicial authorities in their endeavor to detect and prevent criminal activity."
  }
];

const AMLPOLICYCONTENT_LIST2: Row[] = [
  {
    "t0": "only allow registration of Users where the true beneficial owner of the User Account is known."
  },
  {
    "t0": "not accept cash from Users. Funds may be received from Users only by any of the following methods: electronic transfer, wire transfer cheques, debit cards, credit cards, and any other method."
  },
  {
    "t0": "not register a User who is under eighteen (18) years of age."
  },
  {
    "t0": "only register a single User Account in the name of a particular person: multi- account practices are strictly prohibited."
  },
  {
    "t0": "transfer payments of winnings or refunds back to the same route from where the funds originated, where possible."
  },
  {
    "t0": "reject a wager unless a User Account has been established in the name of the User and there are sufficient funds in the User Account to cover the amount of the wager."
  },
  {
    "t0": "reject a wager unless the funds required to cover the wagering amount is provided in an approved way."
  },
  {
    "t0": "reject Users residing or playing from non-reputable jurisdictions."
  },
  {
    "t0": "reject payments to a User until the User’s identity, age and place of residence have been verified."
  },
  {
    "t0": "where it deems necessary, verify creditworthiness of the User with third parties who previously provided any information on the User."
  },
  {
    "t0": "immediately cancel a User’s registration if it becomes aware that an existing User has provided false information when completing the due diligence process. Aurora Holdings N.V will also not accept registration of such Users."
  }
];

export default function AmlPolicyContent() {
  return (
    <div className="container">
      <div className="row">
        <div style={{"marginTop":"20px"}}>
          <h1 className="text-center text-title">
            Anti-Money Laundering Policy
          </h1>
          <div>
            <div>
              <h4>
                Objective of the Policy
              </h4>
              <p>
                {"Aurora Holdings N.V. is fully committed to be constantly vigilant to prevent money laundering and combat the financing of terrorism in order to manage and minimize regulatory, legal, and reputational risks. Aurora Holdings N.V. is also committed to previous serious crime and to deploy a “Know Your Customer” which is an integral part of its Anti-Money Laundering (AMLA) compliance."}
              </p>
              <p>
                Aurora Holdings N.V. commits to always safeguard its reputation and protect its operations and organizations from all the threat of money laundering, funding of terrorist and other criminal activities. Aurora Holdings N.V. will endeavor to keep itself updated with all initiatives to prevent money laundering and financing of terrorism on both a national and international level.
              </p>
              <h4>
                Obligations
              </h4>
              <p>
                1. In order to adhere to the regulations, requirements, and guidance notes of the Prevention of Money Laundering Act, Aurora Holdings N.V shall as a minimum:
              </p>
              <ul>
                <li>
                  appoint one of its senior officers as the designated Money Laundering Reporting Officer (MLRO) whose responsibilities will include the duties required by the law’s regulations and guidance notes.
                </li>
                <li>
                  perform due diligence during the User registration process according to the General Terms and Conditions. This will aid in identifying any user who intends to use the services of Aurora Holdings N.V and ensuring that they are of permitted age.
                </li>
                <li>
                  {"proof of photo identity accepted are: "}
                  <ul>
                    <li>
                      National identity card; or
                    </li>
                  </ul>
                  <ul>
                    {AMLPOLICYCONTENT_LIST.map((it, i) => (
                      <li key={i}>
                        {it.t0}
                      </li>
                    ))}
                  </ul>
                </li>
                {AMLPOLICYCONTENT_LIST1.map((it, i) => (
                  <li key={i}>
                    {it.t0}
                  </li>
                ))}
              </ul>
              <p>
                2. In addition, Aurora Holdings N.V shall:
              </p>
              <ul>
                {AMLPOLICYCONTENT_LIST2.map((it, i) => (
                  <li key={i}>
                    {it.t0}
                  </li>
                ))}
              </ul>
              <p>
                {" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
