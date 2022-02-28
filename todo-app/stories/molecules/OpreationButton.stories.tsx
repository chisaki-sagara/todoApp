import { makeStyles } from "@mui/styles";
import { ComponentStory } from "@storybook/react";
import { BaseButton } from "../../components/atoms/Button";
import { OpreationButton } from "../../components/molecules/OparationButton";

export default {
  title: "molecules/opreationButton",
  Comment: OpreationButton,
};
const Template: ComponentStory<typeof OpreationButton> = (args) => (
  <OpreationButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
