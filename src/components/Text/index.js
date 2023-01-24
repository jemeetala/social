import React from "react";
const variantClasses = {
  h1: "font-bold sm:text-[26px] md:text-[28px] text-[30px]",
  h2: "font-bold sm:text-[18px] md:text-[20px] text-[22px]",
  h3: "font-bold text-[16px]",
  h4: "text-[14px]",
  h5: "text-[12px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
