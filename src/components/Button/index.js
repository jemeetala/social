import React from "react";
import PropTypes from "prop-types";

const shapes = {
  icbRoundedBorder12: "rounded-radius12",
  icbRoundedBorder8: "rounded-radius8",
  RoundedBorder12: "rounded-radius12",
  RoundedBorder4: "rounded-radius4",
  CircleBorder29: "rounded-radius29",
  RoundedBorder8: "rounded-radius884",
  RoundedBorder15: "rounded-radius1516",
};
const variants = {
  icbFillWhiteA70033: "bg-white_A700_33",
  icbFillWhiteA700: "bg-white_A700",
  icbOutlineWhiteA70033: "border-2 border-solid border-white_A700_33",
  icbOutlineWhiteA700331_2: "outline outline-[1px] outline-white_A700_33",
  icbFillIndigoA20033: "bg-indigo_A200_33",
  icbFillRedA200: "bg-red_A200",
  icbFillLightblue20033: "bg-light_blue_200_33",
  icbFillGreen400: "bg-green_400",
  icbFillIndigoA200: "bg-indigo_A200",
  icbOutlineGray50066: "border-2 border-gray_500_66 border-solid",
  icbOutlineGray50033: "border-2 border-gray_500_33 border-solid",
  icbFillGray100: "bg-gray_100",
  icbFillWhiteA70099: "bg-white_A700_99",
  icbFillGray900: "bg-gray_900",
  icbFillWhiteA70066: "bg-white_A700_66",
  FillLightblue200: "bg-light_blue_200",
  FillWhiteA70033: "bg-white_A700_33",
  FillRedA200: "bg-red_A200",
  OutlineGray50066: "border-2 border-gray_500_66 border-solid",
  FillGreen400: "bg-green_400",
  FillIndigoA200: "bg-indigo_A200",
  FillGray50033: "bg-gray_500_33",
  FillGray100: "bg-gray_100",
  FillGray10090: "bg-gray_100_90",
  FillWhiteA700: "bg-white_A700",
  FillGray1006c: "bg-gray_100_6c",
  FillGray900: "bg-gray_900",
  OutlineGray50033: "border-2 border-gray_500_33 border-solid",
  OutlineGray5006c: "border-2 border-gray_500_6c border-solid",
  FillGray50048: "bg-gray_500_48",
};
const sizes = {
  smIcn: "p-[7px]",
  mdIcn: "p-[12px]",
  lgIcn: "p-[15px]",
  xlIcn: "p-[20px]",
  sm: "p-[4px]",
  md: "p-[8px]",
  lg: "p-[12px]",
  xl: "p-[22px] sm:px-[20px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "icbRoundedBorder12",
    "icbRoundedBorder8",
    "RoundedBorder12",
    "RoundedBorder4",
    "CircleBorder29",
    "RoundedBorder8",
    "RoundedBorder15",
  ]),
  variant: PropTypes.oneOf([
    "icbFillWhiteA70033",
    "icbFillWhiteA700",
    "icbOutlineWhiteA70033",
    "icbOutlineWhiteA700331_2",
    "icbFillIndigoA20033",
    "icbFillRedA200",
    "icbFillLightblue20033",
    "icbFillGreen400",
    "icbFillIndigoA200",
    "icbOutlineGray50066",
    "icbOutlineGray50033",
    "icbFillGray100",
    "icbFillWhiteA70099",
    "icbFillGray900",
    "icbFillWhiteA70066",
    "FillLightblue200",
    "FillWhiteA70033",
    "FillRedA200",
    "OutlineGray50066",
    "FillGreen400",
    "FillIndigoA200",
    "FillGray50033",
    "FillGray100",
    "FillGray10090",
    "FillWhiteA700",
    "FillGray1006c",
    "FillGray900",
    "OutlineGray50033",
    "OutlineGray5006c",
    "FillGray50048",
  ]),
  size: PropTypes.oneOf([
    "smIcn",
    "mdIcn",
    "lgIcn",
    "xlIcn",
    "sm",
    "md",
    "lg",
    "xl",
  ]),
};
Button.defaultProps = { className: "", shape: "", variant: "", size: "" };

export { Button };
