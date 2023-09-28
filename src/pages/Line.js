import { Box } from "@mui/material";

import { GlassBox, Header, LineChart } from "../components";

const Line = () => {
  return (
    <Box m={{ xs: 0, md: "20px" }}>
      <Header title="Line Chart" subtitle="Simple Line Chart" />
      <GlassBox>
        <LineChart />
      </GlassBox>
    </Box>
  );
};

export default Line;
