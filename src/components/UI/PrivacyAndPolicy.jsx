import Container from "../CommonLayout/Container";

const PrivacyAndPolicy = () => {
  return (
    <section className="bg-[#E8F0F9]">
      <Container>
        <div className="flex flex-col items-center justify-center pt-[75px] pb-[75px]">
          <div className="pb-[40px] border-b border-[#8F969D]">
            <p className="text-[18px] max-w-[850px] pb-10">
              This privacy statement explains the collection and utilization of
              personal data by Bluetelecast. Last updated on 02/20/2023.
            </p>
            {/* Introduction */}
            <h3 className="text-[32px] text-[#191C23]">
              Identity and Purpose:
            </h3>
            <p className="text-[18px]  max-w-[850px] pt-[20px] pb-10">
              We are Bluetelecast, a US-based software development and IT
              consulting services company, boasting a team of over 120 Software
              developer and Programmer globally. As you peruse this document,
              you are navigating our digital interface, representing our
              company. Our commitment is to offer you an exceptional experience,
              provide relevant materials, address queries promptly, and maintain
              the seamless functioning of our website. Achieving this relies on
              your collaboration through the sharing of personal data.
              Acknowledging the sensitivity of this information, we place a high
              value on your privacy. To alleviate any concerns, we have
              formulated this privacy policy, detailing every facet of our
              interaction with your personal data.
            </p>
            {/* 2. Intellectual Property Rights */}
            <h3 className="text-[32px] text-[#191C23] pt-[40px]">
              Data Collection:
            </h3>
            <p className="text-[18px]  max-w-[850px] pt-[20px] pb-10">
              Bluetelecast collects data to furnish you with direct feedback on
              our services. This includes information you provide through forms
              like 'Contact Us,' 'Office 365 Migration Calculator,' 'QLEAN
              Download,' and 'Ask Author.' Additionally, we utilize technologies
              like cookies and receive error reports or usage data from software
              on your device. We also acquire data from third parties,
              safeguarding it as per the practices detailed in this statement.
              Current third-party sources include service providers determining
              location via IP address, partners in co-branded services, and
              publicly-available sources. You have the option to decline
              providing personal data, but failure to furnish necessary data for
              a service, feature, or feedback may restrict access.
            </p>

            {/* 3. Restrictions */}
            <h3 className="text-[32px] text-[#191C23] pt-[40px]">
              Collected Data:
            </h3>
            <p className="text-[18px]  max-w-[850px] pt-[20px] pb-10">
              The data collected may include:
              <br />
              Name and contact data (first and last name, work email, phone
              number, company name).
              <br />
              Demographic data (country, preferred language).
              <br />
              Website data (visitor behavior patterns, network configuration,
              error reports, performance data). <br />
              Please note, refrain from sharing unnecessary personal data, such
              as payment details, in the 'Contact Us' form description section.
              Our website is not intended for children, and we do not knowingly
              collect data related to them.
            </p>
            {/* 4. Your Privacy */}
            <h3 className="text-[32px] text-[#191C23]">
              Purpose of Data Collection:
            </h3>
            <p className="text-[18px]  max-w-[850px] pt-[20px]">
              Bluetelecast collects data for communication, advertising, website
              analysis, technical troubleshooting, and enhancing user
              experience. To uphold privacy, we incorporate technological and
              procedural safeguards, securing the data we collect in a dedicated
              database. You can opt for email subscriptions and choose
              communication preferences.
            </p>
            {/* 5. No warranties */}
            <h3 className="text-[32px] text-[#191C23]">Data Sharing:</h3>
            <p className="text-[18px]  max-w-[850px] pt-[20px] pb-10">
              We share information with our Development Center to handle your
              requests. The Development Center adheres to our privacy and
              security requirements and cannot use received personal data for
              other purposes. We may disclose personal data in response to legal
              processes, to protect customers, or to uphold Bluetelecast's
              rights. Links to third-party products on our website are subject
              to their privacy statements.
            </p>
            {/* 6. Limitation of liability */}
            <h3 className="text-[32px] text-[#191C23]">User Rights:</h3>
            <p className="text-[18px]  max-w-[850px] pt-[20px] pb-[40px]">
              You have the right to view, amend, or delete your personal
              information. This includes requesting updates, opting out of
              marketing communications, recalling consent, and requesting data
              erasure.
            </p>
            {/* 6. Limitation of liability */}
            <h3 className="text-[32px] text-[#191C23]">
              Cookies and Similar Technologies:
            </h3>
            <p className="text-[18px]  max-w-[850px] pt-[20px] pb-[40px]">
              Bluetelecast uses cookies and similar technologies for security,
              storing provided information, and gathering website statistics.
              You can control cookies through your browser settings.
            </p>
            {/* 6. Limitation of liability */}
            <h3 className="text-[32px] text-[#191C23]">Security Measures:</h3>
            <p className="text-[18px]  max-w-[850px] pt-[20px] pb-[40px]">
              Various security technologies and procedures are employed to
              protect personal data from unauthorized access, disclosure, or
              use.
            </p>
            {/* 6. Limitation of liability */}
            <h3 className="text-[32px] text-[#191C23]">Data Retention:</h3>
            <p className="text-[18px]  max-w-[850px] pt-[20px] pb-[40px]">
              Personal data is retained as long as necessary for services,
              feedback, or legal obligations. Actual retention periods depend on
              data type, sensitivity, and legal requirements.
            </p>
            {/* 6. Limitation of liability */}
            <h3 className="text-[32px] text-[#191C23]">Policy Changes:</h3>
            <p className="text-[18px]  max-w-[850px] pt-[20px] pb-[40px]">
              This privacy statement will be updated as needed, reflecting terms
              amendments or customer feedback. Changes will be indicated by the
              "last updated" date.
            </p>
          </div>
          {/* Contruct Us Part */}
          <div className="pt-[40px] ">
            <h3 className="text-[32px] text-[#191C23]">Contact Us:</h3>
            <p className="text-[18px]  max-w-[850px] pt-[20px]">
              For privacy concerns, complaints, or questions, contact us&nbsp;
              <a className=" underline underline-offset-1 text-blue-800">
                Info@bluetelecast.com
              </a>{" "}
              . We respond within 7 Business days.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PrivacyAndPolicy;
