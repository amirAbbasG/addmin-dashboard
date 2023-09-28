import React from "react";

import InputBase from "@mui/material/InputBase";
import { Box, IconButton } from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";

import { useColorModeContext, useColors } from "../../theme";

const TopBar = () => {
  const { colors, mode } = useColors();
  const { toggleColorMode } = useColorModeContext();

  const commonStyle = {
    backgroundColor: colors.primary[400],
    borderRadius: "10px",
  };

  return (
    <Box
      display="flex"
      flexDirection={{ xs: "column-reverse", sm: "row" }}
      justifyContent="space-between"
      //   alignItems={{ xs: "flex-end", sm: "center" }}
      mb="15px"
      pb="10px"
      gap="15px"
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        borderBottom: `1px solid ${colors.grey[100]}60`,
      }}
    >
      {/* SEARCH BAR */}
      <Box display="flex" sx={commonStyle}>
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box display="flex" gap={1} alignSelf={{ xs: "flex-end", sm: "center" }}>
        <IconButton sx={commonStyle} onClick={toggleColorMode}>
          {mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton sx={commonStyle}>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton sx={commonStyle}>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton sx={commonStyle}>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default TopBar;
