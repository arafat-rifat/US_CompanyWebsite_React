import Container from "../CommonLayout/Container";
import OurTeamCart from "../CommonLayout/OurTeamCart";
import RevealOnScroll from "../CommonLayout/RevealOnScroll";
import faheem from "../../assets/teamPicture/Faheem_Resize2.jpeg";
import faisal from "../../assets/teamPicture/Fisal-Resize.jpg";
import jorry from "../../assets/teamPicture/Jorry-Resize.jpg";
import samsour from "../../assets/teamPicture/resize-A-Samsour.jpg";
import Quaize from "../../assets/teamPicture/Resize-Quaize.png";
import Susan from "../../assets/teamPicture/Susan-Resize.jpeg";
import ArrowRightWhite from "../../assets/Arrow - Right white.png";
import ArrowRightBlack from "../../assets/Arrow - Right 3.png";
import { Link } from "react-router-dom";

const handleLinkClick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Enables smooth scrolling
  });
};

const TeamCartSection = () => (
  <RevealOnScroll>
    <section className="bg-[#E8F0F9]">
      <Container>
        <div className="flex flex-col items-center justify-center pt-[75px] pb-[65px] gap-[64px]">
          <div className="grid grid-cols-1 laptop:grid-cols-3 items-center gap-4 ">
            <OurTeamCart
              Name=" Faheem Momand"
              Designation="Chief Executive Officer"
              src={faheem}
            />
            <OurTeamCart
              Name=" Fiasal Khan"
              Designation="Director of Technical Projects"
              src={faisal}
            />
            <OurTeamCart
              Name=" Jorry Dorelian"
              Designation="Chief Operating Officer "
              src={jorry}
            />
            <OurTeamCart
              Name=" A Samsour"
              Designation="Head of Product"
              src={samsour}
            />
            <OurTeamCart
              Name=" Qais A Rashid"
              Designation="Chief Marketing Officer"
              src={Quaize}
            />
            <OurTeamCart
              Name=" Susan Caplan"
              Designation="Chief People Officer"
              src={Susan}
            />
          </div>

          {/* This is For Button */}

          <Link to="/career">
            <div className="flex items-center group " onClick={handleLinkClick}>
              <button className="text-[#FFFFFF] text-[24px] px-[32px] py-[15px] bg-[#191C23] group-hover:bg-white group-hover:shadow-2xl group-hover:text-black duration-300 rounded-[34px]">
                Join Our Team
              </button>
              <button className="px-[27px] py-[13px] bg-[#191C23] group-hover:bg-white rounded-[30px] hover:shadow-2xl duration-300">
                <img
                  src={ArrowRightWhite}
                  alt="Right arrow icon"
                  className="group-hover:hidden "
                />
                <img
                  src={ArrowRightBlack}
                  alt="Right arrow icon"
                  className="hidden group-hover:block "
                />
              </button>
            </div>
          </Link>
        </div>
      </Container>
    </section>
  </RevealOnScroll>
);

export default TeamCartSection;
