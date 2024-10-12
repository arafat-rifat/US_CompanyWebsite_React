import { useState } from "react";
import Container from "../CommonLayout/Container";
import RevealOnScroll from "../CommonLayout/RevealOnScroll";

const WelcomeBluetalecast = ({ title1, title2, className }) => {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <RevealOnScroll>
      <section className="bg-[#00040D]">
        <Container>
          <div className=" pt-[50px] pb-[50px] laptop:pt-[100px] laptop:pb-[100px] px-[20px] laptop:px-[43px]">
            <div className="flex flex-col laptop:flex-row justify-between  items-start desktop:items-center">
              {/* heading */}
              <div className="flex flex-col  gap-[20px]">
                <p className="text-[#666666] font-light text-[18px] laptop:text-[24px]">
                  /Bluetelecast
                </p>
                <h3 className="text-[#FFFFFF] text-[24px] laptop:text-[52px] font-thin  max-w-[353px] laptop:max-w-[680px] desktop:max-w-[760px]">
                  <span className="text-[#8F969D]">{title1} &nbsp;</span>
                  <span className={className}>{title2}</span>
                </h3>
              </div>

              {/* Links */}

              <div className="flex flex-col gap-[16px] pt-[30px] laptop:pt-[0px]">
                {[
                  {
                    name: "LinkedIn",
                    url: "https://www.linkedin.com/company/bluetelecast-software-company/?viewAsMember=true",
                  },
                  {
                    name: "Facebook",
                    url: "https://www.facebook.com/profile.php?id=61563483914394",
                  },
                  {
                    name: "Dribbble",
                    url: "https://dribbble.com/Bluetelecast",
                  },
                  {
                    name: "Instagram",
                    url: "https://www.instagram.com/bluetelecast/",
                  },
                ].map((link, index) => (
                  <h3
                    key={index}
                    className={`text-[24px] laptop:text-[52px] font-thin ${
                      activeLink === link.name
                        ? "text-gray-700"
                        : "text-[#FFFFFF]"
                    }`}
                  >
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => handleLinkClick(link.name)}
                      className={`hover:text-gray-700 transition duration-200`}
                    >
                      {link.name}
                    </a>
                  </h3>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </RevealOnScroll>
  );
};

export default WelcomeBluetalecast;
