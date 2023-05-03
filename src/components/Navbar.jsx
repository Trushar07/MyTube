import { Stack, Typography, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";
import { useTheme } from "@mui/material/styles";

const Navbar = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#000",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link
        to="/"
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <img src={logo} alt="logo" height={45} />
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ color: "red", ml: "20px" }}
          hidden={isSmallScreen}
        >
          Youtube
        </Typography>
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
