import Image from "next/image";
import React from "react";
import SignUpForm from "@/components/forms/SignUpForm";

const SignUp: React.FC = () => {
  return (
    <>
      <section className="h-screen w-full bg-white dark:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] dark:from-primary-light dark:to-primary-dark transition-colors duration-500 ">
        {/* <Header_for_many /> */}

        <div className="desktop flex md:justify-between md:gap-x-8 items-center h-full relative max-container px-2 sm:px-4 lg:px-8">
          {/* Form | Signin */}
          <SignUpForm />
          {/* Desktop image by right */}
          <div className="hidden min-[850px]:flex h-full w-full rounded-full  items-center max-w-[818px]">
            <Image
              src="/MacBookPro1.webp"
              alt="sign in Desktop"
              width={1000}
              height={500}
            />
          </div>
        </div>

        {/* image_bellow_all */}
        <div className="fixed right-0 -bottom-40 min-[850px]:hidden z-0 overflow-hidden">
          <Image
            src="/Mobile/mobile_back.png"
            alt="backgroud_ng_for_mobile"
            width={700}
            height={500}
            className="h-[739.363px] w-[850px] max-sm:w-[684.675px]"
          />
        </div>
      </section>
    </>
  );
};

export default SignUp;
