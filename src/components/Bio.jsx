import { Typography } from "@mui/material";
import { BsFillCaretRightFill } from "react-icons/bs";

const Bio = () => {
  return (
    <>
      <Typography
        color="whitesmoke"
        textTransform="uppercase"
        variant="body1"
        pb={4}
      >
        The only true wisdom is in knowing you know nothing.
      </Typography>
      <Typography textAlign="left" color="white" lineHeight={3}>
        <Typography component="span" display="inline" color="primary">
          <BsFillCaretRightFill />{" "}
        </Typography>
        INTJ-A
        <br />
        <Typography component="span" display="inline" color="primary">
          <BsFillCaretRightFill />{" "}
        </Typography>
        JavaScript Fullstack Developer
        <br />
        <Typography component="span" display="inline" color="primary">
          <BsFillCaretRightFill />{" "}
        </Typography>
        2005-01-17
        <br />
        <Typography component="span" display="inline" color="primary">
          <BsFillCaretRightFill />{" "}
        </Typography>
        <a
          style={{ textDecoration: "none", color: "white" }}
          href="mailto:zalaghiamir948@hotmail.com"
        >
          zalaghiamir948@hotmail.com
        </a>
        <br />
        <Typography component="span" display="inline" color="primary">
          <BsFillCaretRightFill />{" "}
        </Typography>
        <a
          style={{ textDecoration: "none", color: "white" }}
          href="mailto:zalaghiamir948@gmail.com"
        >
          zalaghiamir948@gmail.com
        </a>
      </Typography>
      <br />
    </>
  );
};

export default Bio;
