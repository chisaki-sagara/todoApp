import { Stack } from "@mui/material";
import { OpreationButton } from "../molecules/OparationButton";
import { TodoBox } from "../molecules/TodoBox";

export const TodoContainer = () => {
  return (
    <Stack direction={"row"}>
      <TodoBox />
      <OpreationButton />
    </Stack>
  );
};
