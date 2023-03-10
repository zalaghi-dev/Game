import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useContext } from "react";
import { PlayedGamesData } from "../constants/PlayedGamesData";
import { PalleteContext } from "../Context/PalleteContext";
const PlayedGames = () => {
  const {primary} = useContext(PalleteContext);
  return (
    <Box color="whitesmoke" mt={2} p={3}>
      <Typography fontWeight="light" variant="h3">
        Most Played games
      </Typography>
      <br />
      <Typography variant="h5" lineHeight={2}>
        <Grid container justifyContent="center">
          {PlayedGamesData.map((game) => (
            <Grid
              bgcolor="black"
              key={game.name}
              xs={12}
              md={5}
              display="flex"
              px={2}
              m={1}
              alignItems="center"
              border={`2px solid ${primary}`}
              borderRadius="0px 30px"
            >
              <img width="50" height="50" src={game.icon} alt={game.name} />
              <Typography variant="h6" p={2}>
                {game.name}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Typography>
    </Box>
  );
};

export default PlayedGames;
