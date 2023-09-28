import { Box, Typography } from "@mui/material";

import { useColors } from "../../theme";
import ProgressCircle from "./ProgressCircle";

const StatBox = ({ title, subtitle, icon, progress, increase }) => {
  const { colors } = useColors();

  return (
    <Box width="100%" m={{ xs: "0 15px", md: "0 30px" }}>
      <Box display="flex" justifyContent="space-between">
        <Box>
          {icon}
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            {title}
          </Typography>
        </Box>
        <Box>
          <ProgressCircle progress={progress} />
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="2px">
        <Typography
          variant="h5"
          sx={{ color: colors.greenAccent[400], fontWeight: "bold" }}
        >
          {subtitle}
        </Typography>
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{ color: colors.greenAccent[400], fontWeight: "bold" }}
        >
          {increase}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatBox;
