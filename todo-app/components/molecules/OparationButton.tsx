import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { BaseButton } from "../atoms/Button";

interface Props {
  className?: string;
}

export const OpreationButton: React.FC<Props> = ({ className }) => {
  const classes = useStyles();
  return (
    <Box className={classes.box + "" + className}>
      <BaseButton className={classes.button} text="編集" />
      <BaseButton className="" text="削除" />
    </Box>
  );
};

const useStyles = makeStyles({
  box: {
    display: "grid",
    flexGrow: 1,
    textAlign: "right",
  },
  button: {
    backgroundColor: "red",
  },
});
