import Container from "../CommonLayout/Container";
import CrmCart from "../CommonLayout/CrmCart";
import RevealOnScroll from "../CommonLayout/RevealOnScroll";

const SalesForceCRM = () => (
  <RevealOnScroll>
    <section className="bg-[#00040D] py-[70px]">
      <Container>
        <div className="px-[20px] desktop:px-0">
          <div className="py-[50px] rounded-3xl laptop:rounded-[41px] bg-[#E8F0F9]">
            <div className="flex flex-col gap-[45px] px-[20px]">
              {/* Heading Salesforce CRM */}
              <h3 className="text-[17px] laptop:text-[64px] text-[#00040D]">
                Salesforce CRM
              </h3>
              {/* This div is for CRM cart */}
              <div className="flex  justify-center  gap-[16px] laptop:gap-[36px] px-[20px] laptop:px-[40px]">
                {/* 1st Cart */}
                <CrmCart bg="bg-CRM-bg1" />
                {/* 2st Cart */}
                <CrmCart bg="bg-CRM-bg2" />
                {/* 3st Cart */}
                <CrmCart bg="bg-CRM-bg3" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  </RevealOnScroll>
);

export default SalesForceCRM;
