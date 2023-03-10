import Steam from "../assets/svg/Steam.svg";
import Lol from "../assets/svg/Lol.svg";
import Grid from "@mui/material/Unstable_Grid2";
import { Box, Typography } from "@mui/material";
import { PalleteContext } from "../Context/PalleteContext";
import { useContext } from "react";
import { BsBoxArrowInDownLeft } from "react-icons/bs";
const ImportantAccounts = () => {
  const { primary } = useContext(PalleteContext);
  return (
    <Grid container p={5} justifyContent="space-around">
      <Grid xs={12} md={5} m={2}>
        <Box
          p={1}
          border={`2px solid ${primary}`}
          borderRadius="0px 30px"
          bgcolor="black"
          display="flex"
          flexWrap="wrap"
          alignItems="center"
        >
          <img
            style={{ padding: 4 }}
            width="70"
            height="70"
            src={Steam}
            alt="Steam"
          />
          <a
            href="https://steamcommunity.com/id/HenryAllen/"
            target="_blank"
            rel="noreferrer"
            alt="Steam Link"
            style={{ textDecoration: "none" }}
          >
            <Typography ml={2} color="whitesmoke" variant="h5">
              H3NRY
              <BsBoxArrowInDownLeft />
            </Typography>
          </a>
        </Box>
      </Grid>
      <Grid xs={12} md={5} m={2}>
        <Box
          p={1}
          border={`2px solid ${primary}`}
          borderRadius="0px 30px"
          bgcolor="black"
          display="flex"
          alignItems="center"
        >
          <img
            style={{ padding: 4 }}
            width="70"
            height="70"
            src={Lol}
            alt="Lol"
          />
          <Typography mx={2} color="white" variant="h5">
            H3nryAllen #EUW
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ImportantAccounts;
