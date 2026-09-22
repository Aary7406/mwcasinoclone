type Row = Record<string, string>;

const FAQCONTENT_LIST: Row[] = [
  {
    "cls": "nav-item active",
    "t0": "Deposit"
  },
  {
    "cls": "nav-item",
    "t0": "Withdrawal"
  },
  {
    "cls": "nav-item",
    "t0": "My Account"
  },
  {
    "cls": "nav-item",
    "t0": "Technical"
  },
  {
    "cls": "nav-item",
    "t0": "Customer Care"
  },
  {
    "cls": "nav-item",
    "t0": "Others"
  },
  {
    "cls": "nav-item",
    "t0": "Sportsbook"
  },
  {
    "cls": "nav-item",
    "t0": "Casino"
  },
  {
    "cls": "nav-item",
    "t0": "Slots"
  },
  {
    "cls": "nav-item",
    "t0": "Table"
  },
  {
    "cls": "nav-item",
    "t0": "Lottery"
  },
  {
    "cls": "nav-item",
    "t0": "MCW App"
  }
];

const FAQCONTENT_LIST1: Row[] = [
  {
    "href0": "/bd/en/faq/how-to-deposit-via-usdt",
    "t0": "How To Deposit via USDT"
  },
  {
    "href0": "/bd/en/faq/how-to-deposit-via-local-bank",
    "t0": "How to Deposit via Local Bank"
  },
  {
    "href0": "/bd/en/faq/how-to-claim-your-bonus-mobile",
    "t0": "How To Claim your Bonus (Mobile)?"
  },
  {
    "href0": "/bd/en/faq/how-to-claim-your-bonus-desktop",
    "t0": "How To Claim your Bonus (Desktop)?"
  },
  {
    "href0": "/bd/en/faq/mcw-deposit-issue-mobile",
    "t0": "MCW Deposit Issue (Mobile)"
  },
  {
    "href0": "/bd/en/faq/mcw-deposit-issue-pc",
    "t0": "MCW Deposit Issue (PC)"
  },
  {
    "href0": "/bd/en/faq/how-long-does-it-take-to-process-my-deposit",
    "t0": "How long does it take to process my deposit?"
  },
  {
    "href0": "/bd/en/faq/what-currencies-do-you-accept",
    "t0": "What currencies do you accept?"
  },
  {
    "href0": "/bd/en/faq/what-should-i-do-if-i-am-having-a-problem-making-a-deposit",
    "t0": "What should I do if I am having a problem making a deposit?"
  },
  {
    "href0": "/bd/en/faq/what-are-the-minimum-and-maximum-deposit-amounts",
    "t0": "What are the minimum and maximum deposit amounts?"
  },
  {
    "href0": "/bd/en/faq/what-deposit-methods-we-accept",
    "t0": "What deposit methods we accept?"
  },
  {
    "href0": "/bd/en/faq/what-payment-gateway-options-do-we-have",
    "t0": "What payment gateway options do we have?"
  },
  {
    "href0": "/bd/en/faq/are-there-any-deposit-fees",
    "t0": "Are there any deposit fees?"
  },
  {
    "href0": "/bd/en/faq/how-do-transactions-work-through-our-payment-methods",
    "t0": "How do transactions work through our payment methods?"
  },
  {
    "href0": "/bd/en/faq/how-do-I-deposit-via-bKash",
    "t0": "How do I deposit via bKash?"
  },
  {
    "href0": "/bd/en/faq/how-do-I-deposit-via-rocket",
    "t0": "How do I deposit via Rocket?"
  },
  {
    "href0": "/bd/en/faq/how-do-I-deposit-via-bank-transfer",
    "t0": "How do I deposit via Bank Transfer?"
  },
  {
    "href0": "/bd/en/faq/how-do-I-deposit-via-usdt",
    "t0": "How do I deposit via USDT?"
  },
  {
    "href0": "/bd/en/faq/how-can-I-check-my-deposit-status",
    "t0": "How can I check my deposit status?"
  },
  {
    "href0": "/bd/en/faq/why-is-my-deposit-pending",
    "t0": "Why is my deposit pending?"
  },
  {
    "href0": "/bd/en/faq/why-was-my-deposit-rejected",
    "t0": "Why was my deposit rejected?"
  },
  {
    "href0": "/bd/en/faq/what-should-I-do-if-my-deposit-is-not-credited",
    "t0": "What should I do if my deposit is not credited?"
  },
  {
    "href0": "/bd/en/faq/is-account-verification-required",
    "t0": "Is account verification required?"
  },
  {
    "href0": "/bd/en/faq/how-do-I-complete-kyc-verification",
    "t0": "How do I complete KYC verification?"
  },
  {
    "href0": "/bd/en/faq/can-I-deposit-using-unregistered-number",
    "t0": "Can I deposit using unregistered number?"
  },
  {
    "href0": "/bd/en/faq/how-do-I-claim-the-welcome-bonus",
    "t0": "How do I claim the welcome bonus?"
  },
  {
    "href0": "/bd/en/faq/what-are-the-bonus-wagering-requirements",
    "t0": "What are the bonus wagering requirements?"
  },
  {
    "href0": "/bd/en/faq/Is-my-payment-information-secure",
    "t0": "Is my payment information secure?"
  },
  {
    "href0": "/bd/en/faq/what-should-I-do-if-I-deposit-an-amount-lower-than-the-minimum-deposit-requirement",
    "t0": "What should I do if I deposit an amount lower than the minimum deposit requirement?"
  },
  {
    "href0": "/bd/en/faq/how-do-I-contact-support",
    "t0": "How do I contact support?"
  },
  {
    "href0": "/bd/en/faq/can-I-deposit-using-a-third-party-number-in-atp-deposit-channel",
    "t0": "Can I deposit using a third-party number in ATP Deposit Channel?"
  },
  {
    "href0": "/bd/en/faq/how-do-I-deposit-via-nagad",
    "t0": "How do I deposit via Nagad?"
  }
];

export default function FaqContent() {
  return (
    <div className="container faq-contents">
      <div className="row">
        <div style={{"marginTop":"20px"}}>
          <div className="bx01">
            <h1 className="text-center">
              How can we help you today?
            </h1>
            <div className="d-flex justify-content-center align-items-center">
              <form className="w-100" style={{"maxWidth":"600px"}}>
                <div className="input-group input-group-lg">
                  <input className="form-control" placeholder="Search or type your question here..." type="text" value="" />
                </div>
              </form>
            </div>
          </div>
          <div className="bx02 pt-5">
            <p className="text-center text-muted">
              These are some of the most common questions and answers about MCW. If you couldn't find your question in the list below, please contact our Customer Support.
            </p>
            <div className="container py-4">
              <ul className="nav nav-pills justify-content-center mb-4">
                {FAQCONTENT_LIST.map((it, i) => (
                  <li key={i} className={it.cls}>
                    <button className="nav-link">
                      {it.t0}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="tab-content">
                <div className="list-group">
                  {FAQCONTENT_LIST1.map((it, i) => (
                    <a key={i} href={it.href0}>
                      {it.t0}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
