import Container from "../CommonLayout/Container";
import RevealOnScroll from "../CommonLayout/RevealOnScroll";
import WelcomePackCart from "../CommonLayout/WelcomePackCart";

const WelcomePackSection = () => (
  <RevealOnScroll>
    <section className="bg-[#E8F0F9]">
      <Container>
        <div className="grid  grid-cols-1 laptop:grid-cols-3 gap-[16px] pb-[50px] laptop:pb-[100px] px-8 desktop:px-0">
          <WelcomePackCart
            num="01"
            title="Growth Opportunities"
            subtitle="Joining Bluetelecast means being part of an exciting journey with ample opportunities for growth and advancement. As we expand our operations and take on new projects, you'll have the chance to develop new skills, take on leadership roles, and shape the future of the company."
          />
          <WelcomePackCart
            num="02"
            title="Hands-On Experience"
            subtitle="At Bluetelecast, you'll have the opportunity to work on meaningful projects from day one. Get ready to roll up your sleeves and dive into real-world software development challenges, gaining valuable hands-on experience and honing your technical expertise along the way."
          />
          <WelcomePackCart
            num="03"
            title="Supportive Leadership"
            subtitle="Our leadership team is here to support you every step of the way. Whether you need guidance, mentorship, or just someone to bounce ideas off of, you can count on our leaders to provide the support and encouragement you need to succeed."
          />
          <WelcomePackCart
            num="04"
            title="Opportunity to Shape the Future"
            subtitle="As a member of the Bluetelecast team, you'll have the opportunity to shape the future direction of the company. Your ideas, feedback, and contributions will help shape our products, services, and company culture as we continue to grow and innovate."
          />
          <WelcomePackCart
            num="05"
            title="Recognition and Appreciation"
            subtitle="Your hard work and dedication won't go unnoticed at Bluetelecast. We believe in recognizing and appreciating our team members for their contributions, whether it's through shout-outs in team meetings, spot bonuses, or other forms of appreciation.
"
          />
          <WelcomePackCart
            num="06"
            title="Impactful Work"
            subtitle="Every member of the Bluetelecast team plays a vital role in our success. By joining us, you'll have the opportunity to make a real impact, contributing to the development of innovative software solutions that solve real-world problems and delight our clients."
          />
        </div>
      </Container>
    </section>
  </RevealOnScroll>
);

export default WelcomePackSection;
