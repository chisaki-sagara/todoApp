import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BaseButton } from "../../components/atoms/Button";

export default {
  title: "atoms/Button",
  component: BaseButton,
} as ComponentMeta<typeof BaseButton>;

const Template: ComponentStory<typeof BaseButton> = (args) => (
  <BaseButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  variant: "outlined",
  text: "会員登録",
};
