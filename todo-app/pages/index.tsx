import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  Checkbox,
  Container,
  Grid,
  Paper,
  Stack,
  TextField,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { OpreationButton } from "../components/molecules/OparationButton";
import { TodoContainer } from "../components/organisms/TodoContainer";
import { BaseButton } from "../components/atoms/Button";
import { red } from "@mui/material/colors";

const TOP = () => {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth={"xs"}>
        <Box m={3} className={classes.box}>
          <Stack direction={"row"}>
            <TextField className={classes.textField} variant={"outlined"} />
            <BaseButton className="" text="追加" />
          </Stack>
        </Box>
      </Container>

      <Container>
        <TodoContainer />
      </Container>
    </>
  );
};

export default TOP;

const useStyles = makeStyles({
  box: {
    justifyContent: "center",
    alignItems: "center",
  },
  textField: {
    width: "100%",
  },
});
