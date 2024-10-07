import React from "react";
import Navbar from "../CommonLayout/Navbar";
import Hero from "../CommonLayout/Hero";
import Container from "../CommonLayout/Container";

const HeaderPrivacyAndPolicy = () => {
  return (
    <>
      <div className="bg-other-bg bg-cover bg-top">
        <Navbar />
        <Hero>
          <Container>
            {/* Left Information */}
            <div className="items-center laptop:items-start  pt-[128px] pb-[96px] px-[20px] desktop:px-0">
              <h1 className="text-[#FFFFFF] font-thin leading-[88px] text-[36px] tab:text-[56px] laptop:text-[80px]">
                Privacy And Policy
              </h1>
            </div>
          </Container>
        </Hero>
      </div>
    </>
  );
};

export default HeaderPrivacyAndPolicy;
