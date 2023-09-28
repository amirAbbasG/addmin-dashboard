import { Box } from "@mui/material";

import { GeographyChart, GlassBox, Header } from "../components";

const Geography = () => {
  return (
    <Box m={{ xs: 0, md: "20px" }}>
      <Header title="Geography" subtitle="Simple Geography Chart" />

      <GlassBox>
        <GeographyChart />
      </GlassBox>
    </Box>
  );
};

export default Geography;
