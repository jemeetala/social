import React from "react";

import { Img, Button, Text, Input, Line } from "components";

const SettingsPage = () => {
  return (
    <>
      <div className="bg-gray_100 flex flex-col font-inter items-center justify-start mx-[auto] w-[100%]">
        <div className="flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-center justify-between w-[100%]">
          <aside className="md:hidden sm:hidden md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] w-[12%]">
            <div className="bg-indigo_A200 flex flex-col items-center justify-start p-[45px] sm:px-[20px] md:px-[40px] w-[100%]">
              <Img
                src="images/img_standardcollection_48X48.svg"
                className="h-[48px] w-[48px]"
                alt="StandardCollection"
              />
              <Button className="bg-white_A700_33 flex h-[48px] items-center justify-center mt-[101px] p-[12px] rounded-radius12 w-[48px]">
                <Img
                  src="images/img_home_1.svg"
                  className="h-[24px] w-[24px]"
                  alt="Home"
                />
              </Button>
              <Button className="bg-white_A700_33 flex h-[48px] items-center justify-center mt-[40px] p-[12px] rounded-radius12 w-[48px]">
                <Img
                  src="images/img_calendar_48X48.svg"
                  className="h-[24px] w-[24px]"
                  alt="Calendar"
                />
              </Button>
              <Button className="bg-white_A700_33 flex h-[48px] items-center justify-center mt-[40px] p-[12px] rounded-radius12 w-[48px]">
                <Img
                  src="images/img_message_48X48.svg"
                  className="h-[24px] w-[24px]"
                  alt="Message"
                />
              </Button>
              <Button className="bg-white_A700_33 flex h-[48px] items-center justify-center mt-[40px] p-[12px] rounded-radius12 w-[48px]">
                <Img
                  src="images/img_user.svg"
                  className="h-[24px] w-[24px]"
                  alt="User"
                />
              </Button>
              <Button className="bg-white_A700 flex h-[48px] items-center justify-center mt-[40px] p-[12px] rounded-radius12 w-[48px]">
                <Img
                  src="images/img_settings_1.svg"
                  className="h-[24px] w-[24px]"
                  alt="Settings"
                />
              </Button>
              <Button className="border-2 border-solid border-white_A700_33 flex h-[48px] items-center justify-center mb-[15px] mt-[322px] p-[15px] rounded-radius12 w-[48px]">
                <Img
                  src="images/img_logout_48X48.svg"
                  className="h-[18px] w-[18px]"
                  alt="Logout"
                />
              </Button>
            </div>
          </aside>
          <div className="flex flex-col items-start justify-start md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] md:w-[100%] sm:w-[100%] w-[44%]">
            <Text
              className="text-gray_900 text-left w-[auto]"
              as="h2"
              variant="h2"
            >
              Account Informations
            </Text>
            <div className="flex flex-col items-center justify-start mt-[64px] md:w-[100%] sm:w-[100%] w-[86%]">
              <div className="flex sm:flex-col flex-row sm:gap-[30px] items-center justify-between w-[100%]">
                <Img
                  src="images/img_avatar.png"
                  className="h-[128px] md:h-[auto] sm:h-[auto] object-cover rounded-radius36 w-[128px]"
                  alt="Avatar"
                />
                <div className="flex flex-col gap-[24px] items-start justify-start md:w-[100%] sm:w-[100%] w-[71%]">
                  <Text
                    className="text-gray_500 text-left w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Profile Picture
                  </Text>
                  <div className="flex flex-row items-center justify-between w-[100%]">
                    <Button className="bg-light_blue_200 cursor-pointer font-bold font-inter min-w-[48%] py-[21px] rounded-radius29 text-[14px] text-center text-white_A700 w-[max-content]">
                      Replace
                    </Button>
                    <Button
                      className="border-2 border-gray_500_66 border-solid flex items-center justify-center min-w-[48%] px-[35px] py-[22px] rounded-radius12 sm:px-[20px] text-center w-[max-content]"
                      leftIcon={
                        <Img
                          src="images/img_icon_bin.svg"
                          className="mr-[7px] text-center"
                          alt="Icon/Bin"
                        />
                      }
                    >
                      <div className="bg-transparent cursor-pointer font-bold font-sfprodisplay min-w-[48%] text-[14px] text-left text-red_A200 w-[max-content]">
                        Delete
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <Text
              className="mt-[60px] text-gray_500 text-left w-[auto]"
              as="h3"
              variant="h3"
            >
              Basic Information
            </Text>
            <div className="flex flex-col items-center justify-start mt-[36px] w-[100%]">
              <div className="md:gap-[20px] sm:gap-[20px] gap-[30px] grid md:grid-cols-1 sm:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-[100%]">
                <div className="flex flex-col gap-[15px] items-start justify-start w-[100%]">
                  <Text
                    className="font-bold text-gray_900 text-left tracking-ls1 uppercase w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    name
                  </Text>
                  <Input
                    className="font-medium pb-[14px] pl-[15px] sm:pr-[20px] pr-[35px] pt-[18px] text-[14px] placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
                    wrapClassName="bg-white_A700 rounded-radius8 w-[100%]"
                    name="Group1481"
                    placeholder="Anne Carry"
                  ></Input>
                </div>
                <div className="flex flex-col gap-[14px] items-start justify-start w-[100%]">
                  <Text
                    className="font-bold text-gray_900 text-left tracking-ls1 uppercase w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    username
                  </Text>
                  <Input
                    className="font-medium p-[0] text-[14px] placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
                    wrapClassName="bg-white_A700 flex pb-[14px] pt-[19px] px-[15px] rounded-radius8 w-[100%]"
                    name="Group1480"
                    placeholder="annecarry"
                    suffix={
                      <Img
                        src="images/img_icon_checkcircle_18X18.svg"
                        className="ml-[35px] my-[auto]"
                        alt="Icon/Check-Circle"
                      />
                    }
                  ></Input>
                </div>
                <div className="flex flex-col gap-[15px] items-start justify-start w-[100%]">
                  <Text
                    className="font-bold text-gray_900 text-left tracking-ls1 uppercase w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Email
                  </Text>
                  <Input
                    className="font-medium pb-[14px] pl-[15px] sm:pr-[20px] pr-[35px] pt-[18px] text-[14px] placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
                    wrapClassName="bg-white_A700 rounded-radius8 w-[100%]"
                    name="email"
                    placeholder="anne.carry@mail.com"
                  ></Input>
                </div>
                <div className="flex flex-col gap-[15px] items-start justify-start w-[100%]">
                  <Text
                    className="font-bold text-gray_900 text-left tracking-ls1 uppercase w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    birthday
                  </Text>
                  <Input
                    className="font-medium p-[0] text-[14px] placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
                    wrapClassName="bg-white_A700 flex pb-[13px] pt-[18px] px-[15px] rounded-radius8 w-[100%]"
                    name="month"
                    placeholder="January 25, 1991"
                    suffix={
                      <Img
                        src="images/img_iconcheck_14X14.svg"
                        className="ml-[35px] my-[auto]"
                        alt="Icon/Arrow-Down"
                      />
                    }
                  ></Input>
                </div>
              </div>
            </div>
            <Line className="bg-gray_500_6c h-[1px] mt-[40px] w-[100%]" />
            <div className="flex flex-col items-center justify-start mt-[43px] w-[100%]">
              <div className="md:gap-[20px] sm:gap-[20px] gap-[30px] grid md:grid-cols-1 sm:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-[100%]">
                <div className="flex flex-col gap-[14px] items-start justify-start w-[100%]">
                  <Text
                    className="font-bold text-gray_900 text-left tracking-ls1 uppercase w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Country
                  </Text>
                  <Input
                    className="font-medium p-[0] text-[14px] placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
                    wrapClassName="bg-white_A700 flex px-[15px] py-[16px] rounded-radius8 w-[100%]"
                    name="Group1476"
                    placeholder="United States"
                    suffix={
                      <Img
                        src="images/img_iconcheck_14X14.svg"
                        className="ml-[35px] my-[auto]"
                        alt="Icon/Arrow-Down"
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
                    state
                  </Text>
                  <Input
                    className="font-medium p-[0] text-[14px] placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
                    wrapClassName="bg-white_A700 flex px-[15px] py-[16px] rounded-radius8 w-[100%]"
                    name="Group1475"
                    placeholder="California"
                    suffix={
                      <Img
                        src="images/img_iconcheck_14X14.svg"
                        className="ml-[35px] my-[auto]"
                        alt="Icon/Arrow-Down"
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
                    City
                  </Text>
                  <Input
                    className="font-medium p-[0] text-[14px] placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
                    wrapClassName="bg-white_A700 flex px-[15px] py-[16px] rounded-radius8 w-[100%]"
                    name="Group1477"
                    placeholder="San Francisco"
                    suffix={
                      <Img
                        src="images/img_iconcheck_14X14.svg"
                        className="ml-[35px] my-[auto]"
                        alt="Icon/Arrow-Down"
                      />
                    }
                  ></Input>
                </div>
              </div>
            </div>
            <Button className="bg-green_400 cursor-pointer font-bold min-w-[29%] mt-[64px] py-[21px] rounded-radius29 text-[14px] text-center text-white_A700 w-[max-content]">
              Save Changes
            </Button>
          </div>
          <div
            className="bg-cover bg-no-repeat flex flex-col gap-[45px] justify-start p-[40px] md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] sm:px-[20px] md:w-[100%] sm:w-[100%] w-[36%]"
            style={{ backgroundImage: "url('images/img_side.svg')" }}
          >
            <div className="h-[48px] md:ml-[0] sm:ml-[0] ml-[319px] mt-[5px] relative w-[27%]">
              <Img
                src="images/img_image_29.png"
                className="absolute h-[48px] inset-y-[0] my-[auto] object-cover right-[0] rounded-radius12 w-[48px]"
                alt="Image One"
              />
              <div className="bg-light_blue_200 flex flex-col h-[48px] items-center justify-start my-[auto] p-[13px] rounded-radius12 w-[48px]">
                <Text
                  className="text-left text-white_A700 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  1
                </Text>
              </div>
              <div className="absolute flex flex-row font-sfprodisplay h-[max-content] inset-[0] items-center justify-center m-[auto] w-[100%]">
                <Button className="bg-light_blue_200 cursor-pointer font-bold h-[48px] py-[12px] rounded-radius12 sm:text-[18.32px] md:text-[20.32px] text-[22.32px] text-center text-white_A700 w-[48px]">
                  1
                </Button>
                <Img
                  src="images/img_avatar_48X48.png"
                  className="h-[48px] md:h-[auto] sm:h-[auto] object-cover rounded-radius12 w-[48px]"
                  alt="Avatar One"
                />
              </div>
            </div>
            <div className="flex flex-col gap-[40px] items-start justify-start mb-[288px] md:ml-[0] sm:ml-[0] ml-[25px] mr-[204px] md:w-[100%] sm:w-[100%] w-[48%]">
              <Text
                className="text-left text-white_A700 w-[auto]"
                as="h2"
                variant="h2"
              >
                Settings
              </Text>
              <div className="flex flex-col font-sfprodisplay gap-[40px] items-start justify-start w-[100%]">
                <div className="flex flex-row gap-[15px] items-center justify-start md:w-[100%] sm:w-[100%] w-[74%]">
                  <Button className="bg-white_A700 flex h-[48px] items-center justify-center p-[12px] rounded-radius12 w-[48px]">
                    <Img
                      src="images/img_buttonicon_4.svg"
                      className="h-[22px] w-[22px]"
                      alt="ButtonIcon"
                    />
                  </Button>
                  <Text
                    className="text-left text-white_A700 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    My Account
                  </Text>
                </div>
                <div className="flex flex-row gap-[15px] items-center justify-start md:w-[100%] sm:w-[100%] w-[77%]">
                  <Button className="border-2 border-gray_500_66 border-solid flex h-[48px] items-center justify-center p-[12px] rounded-radius12 w-[48px]">
                    <Img
                      src="images/img_buttonicon_5.svg"
                      className="h-[22px] w-[22px]"
                      alt="ButtonIcon One"
                    />
                  </Button>
                  <Text
                    className="text-left text-white_A700 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Notifications
                  </Text>
                </div>
                <div className="flex flex-row gap-[15px] items-center justify-start md:w-[100%] sm:w-[100%] w-[85%]">
                  <Button className="border-2 border-gray_500_66 border-solid flex h-[48px] items-center justify-center p-[12px] rounded-radius12 w-[48px]">
                    <Img
                      src="images/img_buttonicon_6.svg"
                      className="h-[22px] w-[22px]"
                      alt="ButtonIcon Two"
                    />
                  </Button>
                  <Text
                    className="text-left text-white_A700 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Activity History
                  </Text>
                </div>
                <div className="flex flex-row gap-[15px] items-center justify-start w-[100%]">
                  <Button className="border-2 border-gray_500_66 border-solid flex h-[48px] items-center justify-center p-[12px] rounded-radius12 w-[48px]">
                    <Img
                      src="images/img_buttonicon_7.svg"
                      className="h-[22px] w-[22px]"
                      alt="ButtonIcon Three"
                    />
                  </Button>
                  <Text
                    className="text-left text-white_A700 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Billing and Payment
                  </Text>
                </div>
                <div className="flex flex-row gap-[15px] items-center justify-start md:w-[100%] sm:w-[100%] w-[96%]">
                  <Button className="border-2 border-gray_500_66 border-solid flex h-[48px] items-center justify-center p-[12px] rounded-radius12 w-[48px]">
                    <Img
                      src="images/img_buttonicon_8.svg"
                      className="h-[22px] w-[22px]"
                      alt="ButtonIcon Four"
                    />
                  </Button>
                  <Text
                    className="text-left text-white_A700 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Security & Privacy
                  </Text>
                </div>
                <div className="flex flex-row gap-[15px] items-center justify-start md:w-[100%] sm:w-[100%] w-[48%]">
                  <Button className="border-2 border-gray_500_66 border-solid flex h-[48px] items-center justify-center p-[12px] rounded-radius12 w-[48px]">
                    <Img
                      src="images/img_buttonicon_9.svg"
                      className="h-[22px] w-[22px]"
                      alt="ButtonIcon Five"
                    />
                  </Button>
                  <Text
                    className="text-left text-white_A700 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Help
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsPage;
