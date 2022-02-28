import { Card, Checkbox, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const TodoBox = () => {
  const classes = useStyles();
  return (
    <Grid container style={{ width: "100%" }}>
      <Grid item style={{ margin: "auto" }} xs={15}>
        <Card className={classes.card}>
          <Grid item style={{ margin: "auto" }} xs={10}>
            <Checkbox className={classes.checkBox} defaultChecked />
          </Grid>
          <Grid item style={{ margin: "auto" }} xs={10}>
            AAA
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles({
  card: {
    display: "flex",
    width: "100%",
    height: "100%",
    margin: "auto",
  },
  checkBox: {
    flexGrow: 2,
  },
});
