import { ComponentStory } from "@storybook/react";
import { OpreationButton } from "../../components/molecules/OparationButton";
import { TodoContainer } from "../../components/organisms/TodoContainer";

export default {
  title: "organisms/todoContainer",
  component: TodoContainer,
};

const Template: ComponentStory<typeof TodoContainer> = (args) => (
  <TodoContainer />
);

export const Primary = Template.bind({});
Primary.args = {};
