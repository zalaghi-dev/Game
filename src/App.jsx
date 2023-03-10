import { Typography, CssBaseline, Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { RandomReveal } from "react-random-reveal";
import SocialMediaLinks from "./components/SocialMediaLinks";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import Bio from "./components/Bio";
import ImportantAccounts from "./components/ImportantAccounts";
import PlayedGames from "./components/PlayedGames";
import { ParticleOptions } from "./constants/ParticleOptions";
import ThemeLayout from "./ThemeLayout";
import MyLogo from "./assets/pic/MyLogo.png";
const App = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);
  const particlesLoaded = useCallback(async (container) => {
    // await console.log(container);
  }, []);
  return (
    <ThemeLayout>
      <Box bgcolor="#09090D">
        <CssBaseline />
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={ParticleOptions}
        />
        <Box position="relative">
          <Grid container height={{ xs: "", md: "100vh" }} alignItems="center">
            <Grid xs={12} md={8} textAlign={{ xs: "center", md: "left" }} p={4}>
              <Typography
                color="primary"
                my={2}
                fontFamily="BruceForever"
                variant="h2"
              >
                <RandomReveal
                  isPlaying
                  duration={2}
                  characters="Henry Allen"
                  revealEasing="easeOutQuad"
                />
              </Typography>
              <Bio />
              <SocialMediaLinks />
            </Grid>
            <Grid
              display={{ md: "block", xs: "none" }}
              textAlign="left"
              xs={12}
              md={4}
            >
              <img width="300" src={MyLogo} alt="Henry Logo" />
            </Grid>
          </Grid>
          <ImportantAccounts />
          <PlayedGames />
        </Box>
      </Box>
    </ThemeLayout>
  );
};

export default App;
