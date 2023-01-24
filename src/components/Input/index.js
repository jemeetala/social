import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  FillWhiteA700: "bg-white_A700",
  FillGray100: "bg-gray_100",
  OutlineGray5006c: "border border-gray_500_6c border-solid",
  srcFillWhiteA700: "bg-white_A700",
};
const shapes = {
  RoundedBorder8: "rounded-radius8",
  RoundedBorder12: "rounded-radius12",
  srcRoundedBorder12: "rounded-radius12",
};
const sizes = {
  sm: "p-[16px]",
  md: "pb-[14px] pt-[18px] px-[14px]",
  lg: "pb-[19px] pt-[23px] px-[19px]",
  smSrc: "p-[21px] sm:px-[20px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf([
    "RoundedBorder8",
    "RoundedBorder12",
    "srcRoundedBorder12",
  ]),
  variant: PropTypes.oneOf([
    "FillWhiteA700",
    "FillGray100",
    "OutlineGray5006c",
    "srcFillWhiteA700",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "smSrc"]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "",
  variant: "",
  size: "",
};

export { Input };
