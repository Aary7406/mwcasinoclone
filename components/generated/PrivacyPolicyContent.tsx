type Row = Record<string, string>;

const PRIVACYPOLICYCONTENT_LIST: Row[] = [
  {
    "t0": "Your privacy is important to us, and we are committed to protecting your personal information. We will be clear and open about why we collect your personal information and how we use it. Where you have choices or rights, we will explain these to you."
  },
  {
    "t0": "This Privacy Policy explains how Mega Casino World uses your personal information when you are using one of our websites."
  },
  {
    "t0": "If you do not agree with any statements contained within this Privacy Policy, please do not proceed any further on our website. Please be aware that registering an account on our website, placing bets and transferring funds will be deemed confirmation of your full agreement with our Terms and Conditions and our Privacy Policy. You have the right to cease using the website at any time; however, we may still be legally required to retain some of your personal information."
  },
  {
    "t0": "We may periodically make changes to this Privacy Policy and will notify you of these changes by posting the modified terms on our platforms. We recommend that you revisit this Privacy Policy regularly."
  }
];

const PRIVACYPOLICYCONTENT_LIST1: Row[] = [
  {
    "t0": "We use your personal information to enable you to use our websites, to set up your account, participate in the online sports book, casino and to provide you with customer service assistance."
  },
  {
    "t0": "To provide our products and services, we share your information with external organizations working on our behalf. Further information can be found in the Sharing Information section."
  },
  {
    "t0": "This category covers the essential activities required in order for us to provide you with the services you use or have signed up for. If you don’t want your information used in this way, your option is to not use our services and close your account."
  },
  {
    "t0": "Mega Casino World will use your identification document and/or proof of address to check your details in order for us to protect our users from fraudulent behavior and to promote responsible gambling."
  },
  {
    "t0": "We may conduct a security review at any time to validate the registration data provided by you and to verify your use of the services and your financial transactions for potential breach of our Terms and Conditions and of applicable law. Security reviews may include but are not limited to ordering a credit report and/or otherwise verifying the information you provide against third- party databases."
  }
];

export default function PrivacyPolicyContent() {
  return (
    <div className="container">
      <div className="row">
        <div style={{"marginTop":"20px"}}>
          <h1 className="text-center text-title">
            Privacy Policy
          </h1>
          <div>
            <div>
              {PRIVACYPOLICYCONTENT_LIST.map((it, i) => (
                <p key={i}>
                  {it.t0}
                </p>
              ))}
              <h2>
                Who is in control of your information?
              </h2>
              <p>
                {"Throughout this Privacy Policy, Mega Casino World together with our subsidiaries and affiliates (collectively, “we” or “us” or “our”) control the ways your Personal Data is collected and the purposes for which your Personal Data is used by Mega Casino World, acting as the “data controller” for the purposes of applicable European data protection legislation."}
              </p>
              <h2>
                Our Data Protection Officer
              </h2>
              <p>
                {"If you have concerns or would like any further information about how Mega Casino World handles your personal information, you can contact our Data Protection Officer at "}
                <a href="mailto:info@casinomcw.com">
                  info@casinomcw.com
                </a>
                .
              </p>
              <h2>
                Information we collect about you
              </h2>
              <h3>
                Personally identifiable information
              </h3>
              <p>
                You provide this information to us in the process of setting up an account, placing bets and using the services of the website. This information is required to give you access to certain parts of our website and related services.
              </p>
              <p>
                This data is collected when you:
                <br />
                {"• Register an account with Mega Casino World;"}
                <br />
                {"• Voluntarily provide it when using the website;"}
                <br />
                {"• Personally disclose the information in public areas of the website; and"}
                <br />
                {"• Provide it when you contact our customer support team"}
              </p>
              <p>
                The information includes your:
                <br />
                {"• Username;"}
                <br />
                {"• First name and surname;"}
                <br />
                {"• Email address;"}
                <br />
                {"• Residential address;"}
                <br />
                {"• Phone number;"}
                <br />
                {"• Billing address;"}
                <br />
                {"• Identification documents;"}
                <br />
                {"• Proof of address documents;"}
                <br />
                {"• Transaction history;"}
                <br />
                {"• Website usage preferences;"}
                <br />
                {"• Any other information you provide us when using our platforms; and"}
                <br />
                {"• Credit/debit card details, or other payment information"}
              </p>
              <p>
                The information is also required for billing purposes and for the protection of minors. You can amend and update this information by contacting Customer Support. This data is for internal use only and is never passed to any third parties except those stated below.
              </p>
              <h3>
                Telephone Calls
              </h3>
              <p>
                Telephone calls to and from our Customer Contact Centre are recorded for training and security purposes along with the resolution of any queries arising from the service you received.
              </p>
              <h3>
                Social Features of Our Products
              </h3>
              <p>
                If you choose to participate in any of the social features that we provide with our products (such as chat rooms) Mega Casino World may store records or otherwise process this data.
              </p>
              <h3>
                Non-personally identifiable information and traffic analysis
              </h3>
              <p>
                Mega Casino World strives to make our website as user friendly as possible and easy to find on the Internet. Mega Casino World collects data on how you use the site, which does not identify you personally. When you interact with the services, our servers keep an activity log unique to you that collects certain administrative and traffic information including: source IP address, time of access, date of access, web page(s) visited, language use, software crash reports and type of browser used. This information is essential for the provision and quality of our services.
              </p>
              <h3>
                Cookies
              </h3>
              <p>
                Mega Casino World uses cookies to ensure our website works efficiently and to enhance your visits to our platforms. Further information can be found in our Cookie Policy.
              </p>
              <h2>
                How and why we use your personal information
              </h2>
              <p>
                We use your personal information in a range of ways that fall into the following categories:
                <br />
                {"• To provide you with the products or services you have requested;"}
                <br />
                {"• To meet our legal or regulatory obligations;"}
                <br />
                {"• To monitor our website performance; and"}
                <br />
                {"• To provide you with marketing information"}
              </p>
              <p>
                Your rights over your personal information differ according to which category and lawful basis this fall into. This section provides more information about each category, the rights it gives you, and how to exercise these rights. These rights are in bold following each category.
              </p>
              <h3>
                Providing our products and services
              </h3>
              {PRIVACYPOLICYCONTENT_LIST1.map((it, i) => (
                <p key={i}>
                  {it.t0}
                </p>
              ))}
              <h3>
                To monitor our website performance
              </h3>
              <p>
                As detailed above, we use cookies and traffic analysis in order to improve the performance of our website and services available. We have a legitimate interest in carrying out these activities and we ensure that we minimize any impact on your privacy.
              </p>
              <p>
                {"You have the ‘right to object’ to activities carried out for our legitimate interest if you believe your right to privacy outweighs our legitimate business interests. However, as the activities involved are central to our business, if you wish to object further than managing your cookies this may mean you need to close your account."}
              </p>
              <h3>
                Marketing
              </h3>
              <p>
                If you have given us your consent to do so, we will send you offers and promotions via email, SMS or online. We do not share your information with third parties for them to use for their own marketing.
              </p>
              <p>
                You have the right to withdraw consent or update your marketing preferences at any time.
              </p>
              <h2>
                Your rights
              </h2>
              <h3>
                Your rights to rectification
              </h3>
              <p>
                {"If you believe the personal information we hold on you is incorrect, you have the right for this to be rectified. For any information that cannot be updated through My Account, please contact "}
                <a href="mailto:info@casinomcw.com">
                  info@casinomcw.com
                </a>
                .
              </p>
              <h3>
                Your right to request a copy of your personal information
              </h3>
              <p>
                {"If you would like a copy of the personal information we hold about you, you should request it through live chat or by emailing "}
                <a href="mailto:info@casinomcw.com">
                  info@casinomcw.com
                </a>
                {" and we will provide you with a form to complete. The form is not compulsory but helps us to provide you with the information you are looking for in a timely manner. To ensure the security of your personal information, we will ask you for valid proof of identity and once we’ve received it we will provide our response within one month. If your request is unusually complex and likely to take longer than a month, we will let you know as soon as we can and tell you how long we think it will take, such request may also incur an administration cost."}
              </p>
              <h3>
                Your right of erasure
              </h3>
              <p>
                You can request us to erase your personal data where there is no compelling reason to continue processing. This right only applies in certain circumstances; it is not a guaranteed or absolute right.
              </p>
              <p>
                The right to erasure does not apply if processing is necessary for one of the following reasons: to exercise the right of freedom of expression and information; to comply with a legal obligation; for the performance of a task carried out in the public interest or in the exercise of official authority; for archiving purposes in the public interest, scientific research historical research or statistical purposes where erasure is likely to render impossible or seriously impair the achievement of that processing; or *for the establishment, exercise or defense of legal claims.
              </p>
              <h2>
                Sharing your personal information
              </h2>
              <p>
                We may disclose your Personal Data to third parties:
                <br />
                {"• If we are under a duty to disclose or share your personal information in order to comply with any legal or regulatory obligation;"}
                <br />
                {"• In order to enforce or apply the terms of this notice or any other agreements;"}
                <br />
                {"• To assist us in providing you with the products and services you request, including but not limited to third party software providers;"}
                <br />
                {"• If, in our sole determination, you are found to have cheated or attempted to defraud us, or other users of the service in any way including but not limited to game manipulation or payment fraud;"}
                <br />
                {"• For the purpose of research on the prevention of addiction (this data will be made anonymous)"}
                <br />
                {"• To protect the rights, property or safety of us, our customers or others; and"}
                <br />
                {"• Where we have received your permission for us to do so."}
              </p>
              <p>
                Personal Information collected on the services may be stored and processed in any country in which we or our affiliates, suppliers or agents maintain facilities. By using our services, you expressly consent to any transfer of information outside of your country. When we transfer any part of your Personal Data outside the EEA or adequate jurisdictions we will take reasonable steps to ensure that it is treated as securely as it is within the EEA or adequate jurisdictions.
              </p>
              <p>
                These steps include but are not limited to the following:
                <br />
                {"• Binding corporate rules;"}
                <br />
                {"• Model contracts; or"}
                <br />
                {"• US/EU privacy shield"}
              </p>
              <h2>
                Security
              </h2>
              <p>
                We understand the importance of security and the techniques needed to secure information. We store all of the Personal Information we receive directly from you in an encrypted and password protected database residing within our secure network behind active state-of-the-art firewall software. (Our Services support SSL Version 3 with 128-bit encryption). We also take measures to ensure our subsidiaries, agents, affiliates and suppliers employ adequate security measures.
              </p>
              <h2>
                Retention
              </h2>
              <p>
                We retain personal information for as long as we reasonably require it for legal or business purposes. In determining data retention periods, Mega Casino World takes into consideration local laws, contractual obligations, and the expectations and requirements of our customers. When we no longer need your personal information, we securely delete or destroy it.
              </p>
              <h2>
                Third-Party Practices
              </h2>
              <p>
                We cannot ensure the protection of any information that you provide to a third-party online site that links to or from the services or any information collected by any third party administering our affiliate program (if applicable) or any other program, since these third-party online sites are owned and operated independently from us. Any information collected by these third parties is governed by the privacy policy, if any, of such third party. Our web site may contain links to other web sites, which are outside our control and are not covered by this Privacy Policy. If you access other sites using the links provided, the operators of these sites may collect information from you which will be used by them in accordance with their privacy policy, which may differ from ours. We are not responsible solely the operators of these websites shall be responsible for their functionality or possible errors on the linked sites.
              </p>
              <h2>
                Analytics Google
              </h2>
              <h3>
                Analytics (Google Inc.)
              </h3>
              <p>
                {"Google Analytics is a web analysis service provided by Google Inc. (“Google”). Google utilizes the Data collected to track and examine the use of Mega Casino World, to prepare reports on its activities and share them with other Google services. Google may use the Data collected to contextualize and personalize the ads of its own advertising network. Personal Data collected: Cookies and Usage Data."}
              </p>
              <h2>
                Disclaimer
              </h2>
              <p>
                {"The Services operate ‘AS-IS’ and ‘AS-AVAILABLE’ without liability of any kind. We are not responsible for events beyond our direct control. Due to the complex and ever-changing nature of our technology and business, we cannot guarantee, nor do we claim that there will be error-free performance regarding the privacy of your Personal Information, and we will not be liable for any indirect, incidental, consequential or punitive damages relating to the use or release of said Personal Information."}
              </p>
              <h2>
                Changes to our Privacy Statement
              </h2>
              <p>
                We may update this policy from time to time, so please review it frequently. If any material changes are made to this Privacy Policy we will use reasonable endeavors to inform you in advance by email, notice on the Website or other agreed communications channels. We will communicate the changes to you in advance, giving an appropriate amount of time for you to consider and understand the changes before they become effective. We will not enforce material changes to the Privacy Policy without your express consent. If you decline to accept the changes to the Privacy Policy, or otherwise do not accept the changes within the time period, we may not be able to continue to provide some or all products and services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
