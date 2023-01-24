import { Input } from "components";
export default {
  title: "social_login/Input",
  component: Input,
};

export const SampleInput = (args) => <Input {...args} />;
SampleInput.args = {
  type: "text",
  shape: "RoundedBorder8",
  variant: "FillWhiteA700",
  size: "md",
  wrapClassName: "w-[300px]",
  className: "w-full",
  placeholder: "placeholder",
};
