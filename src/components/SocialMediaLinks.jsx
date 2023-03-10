import { Button, Typography } from "@mui/material";
import { SocialMedia } from "../constants/SocialMedia";
const SocialMediaLinks = () => {
  return (
    <>
      {SocialMedia.map((el) => (
        <Button
          key={el.name}
          href={el.link}
          size="large"
          color="primary"
          target="_blank"
          variant="text"
        >
          <Typography variant="h4">{el.icon}</Typography>
        </Button>
      ))}
    </>
  );
};

export default SocialMediaLinks;
