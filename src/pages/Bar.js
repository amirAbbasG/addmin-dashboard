import { Box } from "@mui/material";

import { BarChart, GlassBox, Header } from "../components";

const Bar = () => {
  return (
    <Box m={{ xs: 0, md: "20px" }}>
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <GlassBox>
        <BarChart />
      </GlassBox>
    </Box>
  );
};

export default Bar;
