import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

interface Props {
  className: string;
  text: string;
  variant?: "text" | "outlined" | "contained" | undefined;
}

export const BaseButton: React.FC<Props> = ({
  className,
  text,
  variant = "outlined",
}) => {
  const classes = useStyles();
  return (
    <Button className={classes.button + "" + className} variant={variant}>
      {text}
    </Button>
  );
};

const useStyles = makeStyles({
  button: {
    margin: "10px",
  },
});
