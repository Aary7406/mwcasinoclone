type Row = Record<string, string>;

const SECURITYCONTENT_LIST: Row[] = [
  {
    "t0": "Cookies are used to analyze website traffic to further improve our website services."
  },
  {
    "t0": "Used to gather information which will be used for the MCW affiliate program."
  },
  {
    "t0": "Analyze how users move inside the website and collect information about how visitors use our site. MCW use this information to compile reports and help us improve our service."
  }
];

const SECURITYCONTENT_LIST1: Row[] = [
  {
    "t0": "This will allow us to recognize you as a returning visitor and display your preferred content."
  },
  {
    "t0": "Used to speed up and enhance your experience of our services offered."
  },
  {
    "t0": "Cookies are used for online chat services to provide support to our visitors."
  },
  {
    "t0": "MCW particularly uses session and persistent type of cookies. Session cookies which expires upon session logout and persistent which can be stored in your browser for a minute up to years depending on specific type of cookies."
  }
];

export default function SecurityContent() {
  return (
    <div className="container">
      <div className="row">
        <div style={{"marginTop":"20px"}}>
          <h1 className="text-center text-title">
            Mega Casino World (MCW) Security
          </h1>
          <div>
            <div>
              <p>
                We maintain the utmost available means to ensure that your information remains safe with us. All information is transferred using encryption technologies and once stored on our servers, it is maintained safe using the latest Firewall technologies available today. Both our web site and software use all available means to maintain data accuracy and privacy and to protect your data from being misused and/or lost.
              </p>
              <p>
                If you have any other questions or concerns regarding data privacy and security please do not hesitate to contact our Customer Support at any time, 24 hours a day, and 7 days a week. Our Customer Support representatives will be more than happy to assist you.
              </p>
              <h4>
                Cookies Policy
              </h4>
              <p>
                MCW aims to give you the best service and user experience at all times. One of our ways to deliver this is by the use of Cookies.
              </p>
              <h4>
                {"What is a “Cookie”?"}
              </h4>
              <p>
                A Cookie, also known as browser or tracking cookie sends a small piece of information sent by a web server to a web browser which enables the server to collect information from the browser. When you load a particular website, cookies are created and every time the user goes back to the same website, the browser retrieves and sends collected information to the website’s server.
              </p>
              <p>
                Cookies are used to help users navigate their websites efficiently and perform certain functions. Due to their core role of enhancing/enabling usability or site processes, disabling cookies may prevent users from using certain function of websites.
              </p>
              <h4>
                How MCW use Cookies
              </h4>
              <p>
                Generally, MCW use cookies to improve user experience. To give you a better view and understanding, we provided below how cookies are used on our websites.
              </p>
              <h4>
                Tracking and Analysis
              </h4>
              {SECURITYCONTENT_LIST.map((it, i) => (
                <p key={i}>
                  {it.t0}
                </p>
              ))}
              <h4>
                Functionality
              </h4>
              {SECURITYCONTENT_LIST1.map((it, i) => (
                <p key={i}>
                  {it.t0}
                </p>
              ))}
              <h4>
                How to manage cookies
              </h4>
              <p>
                You can always configure your browser if you wish to disable, delete stop storing cookies on your computer by deleting or altering your browser’s privacy setting. However please do note that disabling cookies may affect some services or features we offer.
              </p>
              <h4>
                MCW Official
              </h4>
              <p>
                {"Please be wary of unlicensed and unregulated entities attempting to replicate MCW websites with malicious intentions. These fake websites are not associated with MCW in any way and are beyond our control and protection. For the highest security standards, only play at Official MCW websites. For more information, visit "}
                <a href="https://mcwlink.co/mcwguidebd">
                  https://mcwlink.co/mcwguidebd
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
