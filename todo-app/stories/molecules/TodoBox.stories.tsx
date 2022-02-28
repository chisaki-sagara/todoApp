import { ComponentStory } from "@storybook/react";
import { OpreationButton } from "../../components/molecules/OparationButton";
import { TodoBox } from "../../components/molecules/TodoBox";

export default {
  title: "molecules/todoBox",
  component: TodoBox,
};

const Template: ComponentStory<typeof TodoBox> = (args) => <TodoBox />;

export const Primary = Template.bind({});
Primary.args = {};
