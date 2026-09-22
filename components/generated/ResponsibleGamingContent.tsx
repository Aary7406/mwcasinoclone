type Row = Record<string, string>;

const RESPONSIBLEGAMINGCONTENT_LIST: Row[] = [
  {
    "t0": "Play for entertainment, not to make money."
  },
  {
    "t0": "Avoid chasing losses."
  },
  {
    "t0": "Establish limits for yourself."
  },
  {
    "t0": "Do not let gambling interfere with your daily responsibilities."
  },
  {
    "t0": "Never gamble unless you can cover losses."
  },
  {
    "t0": "Take breaks."
  }
];

const RESPONSIBLEGAMINGCONTENT_LIST1: Row[] = [
  {
    "t0": "Does gambling affect your work?"
  },
  {
    "t0": "Has gambling caused arguments with family/friends?"
  },
  {
    "t0": "Do you always return to win back your losses?"
  },
  {
    "t0": "Have you borrowed money to gamble?"
  },
  {
    "t0": "Do you see gambling as a source of income?"
  },
  {
    "t0": "Do you find it difficult to limit your gambling?"
  }
];

const RESPONSIBLEGAMINGCONTENT_LIST2: Row[] = [
  {
    "t0": "Gamblers Anonymous"
  },
  {
    "t0": "Gambling Therapy"
  },
  {
    "t0": "GamCare"
  }
];

const RESPONSIBLEGAMINGCONTENT_LIST3: Row[] = [
  {
    "t0": "Password protect computer, mobile, and/or tablet."
  },
  {
    "t0": "Do not leave device unattended when logged into your account."
  },
  {
    "t0": "Make sure all account details and credit cards are inaccessible to children."
  },
  {
    "t0": "Do not save passwords on your computer, write them down and keep somewhere out of reach."
  },
  {
    "t0": "Download filtering software (e.g. Net Nanny) to prevent minors from accessing inappropriate sites."
  }
];

export default function ResponsibleGamingContent() {
  return (
    <div className="container">
      <div className="row">
        <div style={{"marginTop":"20px"}}>
          <h1 className="text-center text-title">
            Responsible Gaming
          </h1>
          <div>
            <div>
              <p>
                Mega Casino World is here to provide an excellent and enjoyable gaming experience and recognize our responsibility in preventing problematic activity. We advise all players to take into account the following, and not game irresponsibly:
              </p>
              <ul>
                {RESPONSIBLEGAMINGCONTENT_LIST.map((it, i) => (
                  <li key={i}>
                    {it.t0}
                  </li>
                ))}
              </ul>
              <p>
                {"See the below questions. If your answer to the majority of them is “YES”, we advise you take action to prevent gambling from negatively impacting your life:"}
              </p>
              <ul>
                {RESPONSIBLEGAMINGCONTENT_LIST1.map((it, i) => (
                  <li key={i}>
                    {it.t0}
                  </li>
                ))}
              </ul>
              <h2>
                What to do?
              </h2>
              <p>
                Listed below are reputed organizations committed to helping those who struggle with gambling problems, and can be contacted at any time:
              </p>
              <ul>
                {RESPONSIBLEGAMINGCONTENT_LIST2.map((it, i) => (
                  <li key={i}>
                    {it.t0}
                  </li>
                ))}
              </ul>
              <h2>
                How we can help?
              </h2>
              <p>
                We advise all players who are concerned about their gambling behavior to take a break by excluding themselves from their gaming account. Self-exclusion will lock your account for a minimum of 6 months and no promotional material will be sent.
              </p>
              <p>
                Contact our experienced Customer Support team at any time to request this and they will kindly assist you. A 7 day cooling off period is also available. We recommend that you contact all other gambling sites where you have an account and request self-exclusion there also.
              </p>
              <h2>
                Underage gambling
              </h2>
              <p>
                Players must be of legal gambling age in their jurisdiction (at least 18+) in order to play at Site Name. It is their responsibility to be aware of the age restriction where they reside and play, and to confirm their legitimacy when creating an account at Site Name. We also advise parents to do the following:
              </p>
              <ul>
                {RESPONSIBLEGAMINGCONTENT_LIST3.map((it, i) => (
                  <li key={i}>
                    {it.t0}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
