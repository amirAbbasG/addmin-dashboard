import { Box } from "@mui/material";

import { useColors } from "../../theme";

const GlassBox = ({
  children,
  height = "72vh",
  sx = {},
  bgOpacity = "60",
  ...otherProps
}) => {
  const { colors } = useColors();

  return (
    <Box
      height={height}
      backgroundColor={`${colors.primary[400]}${bgOpacity}`}
      borderRadius="10px"
      padding={{ xs: "5px", md: "10px" }}
      sx={{ backdropFilter: "blur(10px)", ...sx }}
      {...otherProps}
    >
      {children}
    </Box>
  );
};

export default GlassBox;
