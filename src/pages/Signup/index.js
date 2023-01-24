import React from "react";

import { Img, Text, Button, Input } from "components";

const SignupPage = () => {
  return (
    <>
      <div className="bg-gray_100 flex font-inter h-[1024px] mx-[auto] relative w-[100%]">
        <div className="h-[1024px] my-[auto] md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] md:w-[100%] sm:w-[100%] w-[58%]">
          <Img
            src="images/img_image.png"
            className="h-[1024px] m-[auto] object-cover w-[100%]"
            alt="Image"
          />
          <div className="absolute flex flex-col h-[max-content] inset-[0] items-center justify-center m-[auto] w-[27%]">
            <Text
              className="text-left text-white_A700 w-[auto]"
              as="h1"
              variant="h1"
            >
              Hello!
            </Text>
            <Text
              className="font-medium mt-[14px] text-left text-white_A700 w-[auto]"
              as="h4"
              variant="h4"
            >
              Already have an account?
            </Text>
            <Button className="bg-indigo_A200 cursor-pointer font-bold mt-[30px] py-[21px] rounded-radius29 text-[14px] text-center text-white_A700 w-[100%]">
              Login
            </Button>
          </div>
        </div>
        <div
          className="bg-cover bg-no-repeat flex flex-col items-center justify-end ml-[-45px] my-[auto] p-[48px] md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] sm:px-[20px] md:px-[40px] w-[46%] z-[1]"
          style={{ backgroundImage: "url('images/img_sidebar.svg')" }}
        >
          <div className="flex flex-col items-start justify-start mt-[52px] md:w-[100%] sm:w-[100%] w-[63%]">
            <Img
              src="images/img_standardcollection.svg"
              className="h-[41px] w-[41px]"
              alt="StandardCollection"
            />
            <div className="flex flex-col gap-[18px] items-start justify-start mt-[53px] md:w-[100%] sm:w-[100%] w-[58%]">
              <Text
                className="text-gray_900 text-left w-[auto]"
                as="h2"
                variant="h2"
              >
                Create an account
              </Text>
              <Text
                className="font-medium text-gray_500 text-left w-[auto]"
                as="h4"
                variant="h4"
              >
                Sign up to continue{" "}
              </Text>
            </div>
            <div className="flex flex-col gap-[24px] items-center justify-start mt-[63px] w-[100%]">
              <div className="flex flex-col gap-[14px] items-start justify-start w-[100%]">
                <Text
                  className="font-bold text-gray_900 text-left tracking-ls1 uppercase w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  name
                </Text>
                <Input
                  className="font-medium pb-[14px] pl-[15px] sm:pr-[20px] pr-[35px] pt-[18px] text-[14px] placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
                  wrapClassName="border border-gray_500_6c border-solid rounded-radius8 w-[100%]"
                  name="Group1487"
                  placeholder="Anne Carry"
                ></Input>
              </div>
              <div className="flex flex-col gap-[14px] items-start justify-start w-[100%]">
                <Text
                  className="font-bold text-gray_900 text-left tracking-ls1 uppercase w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  email
                </Text>
                <Input
                  className="font-medium p-[0] text-[14px] placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
                  wrapClassName="border border-gray_500_6c border-solid flex pb-[14px] pt-[18px] px-[15px] rounded-radius8 w-[100%]"
                  type="email"
                  name="email"
                  placeholder="anne.carry@mail.com"
                  suffix={
                    <Img
                      src="images/img_icon_checkcircle.svg"
                      className="ml-[35px] my-[auto]"
                      alt="Icon/Check-Circle"
                    />
                  }
                ></Input>
              </div>
              <div className="flex flex-col gap-[14px] items-start justify-start w-[100%]">
                <Text
                  className="font-bold text-gray_900 text-left tracking-ls1 uppercase w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Password
                </Text>
                <Input
                  className="font-medium p-[0] text-[14px] placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
                  wrapClassName="border border-gray_500_6c border-solid flex pb-[14px] pt-[18px] px-[15px] rounded-radius8 w-[100%]"
                  type="password"
                  name="Group1485"
                  placeholder="Password@123"
                  suffix={
                    <Img
                      src="images/img_icon_eye.svg"
                      className="ml-[35px] my-[auto]"
                      alt="Icon/Eye"
                    />
                  }
                ></Input>
              </div>
            </div>
            <Button className="bg-indigo_A200 cursor-pointer font-bold mt-[40px] py-[22px] rounded-radius29 text-[14px] text-center text-white_A700 w-[100%]">
              Create an account
            </Button>
            <div className="flex flex-col gap-[34px] justify-start mt-[33px] w-[100%]">
              <Text
                className="font-normal md:ml-[0] sm:ml-[0] ml-[117px] not-italic text-gray_500 text-left w-[auto]"
                as="h5"
                variant="h5"
              >
                Or connect with socials
              </Text>
              <div className="flex flex-col gap-[20px] items-center justify-start w-[100%]">
                <div className="bg-indigo_600 flex flex-col items-center justify-start p-[20px] rounded-radius29 w-[100%]">
                  <div className="flex flex-row items-center justify-center md:w-[100%] sm:w-[100%] w-[60%]">
                    <Img
                      src="images/img_iconfacebook.svg"
                      className="h-[18px] w-[18px]"
                      alt="IconFacebook"
                    />
                    <Text
                      className="font-bold ml-[3px] text-left text-white_A700 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Connect with Facebook
                    </Text>
                  </div>
                </div>
                <Button
                  className="bg-gray_900 flex items-center justify-center px-[35px] py-[21px] rounded-radius29 sm:px-[20px] text-center w-[100%]"
                  leftIcon={
                    <Img
                      src="images/img_icon_apple_18X18.svg"
                      className="mr-[5px] text-center"
                      alt="Icon/Apple"
                    />
                  }
                >
                  <div className="bg-transparent cursor-pointer font-bold text-[14px] text-left text-white_A700 w-[100%]">
                    Connect with Apple
                  </div>
                </Button>
                <Button
                  className="border-2 border-gray_500_66 border-solid flex items-center justify-center px-[35px] py-[21px] rounded-radius29 sm:px-[20px] text-center w-[100%]"
                  leftIcon={
                    <Img
                      src="images/img_icon_google.svg"
                      className="mr-[4px] text-center"
                      alt="Icon/Google"
                    />
                  }
                >
                  <div className="bg-transparent cursor-pointer font-bold text-[14px] text-gray_900 text-left w-[100%]">
                    Connect with Google+
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
