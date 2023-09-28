import { Box } from "@mui/material";

import { Header, PieChart, GlassBox } from "../components";

const Pie = () => {
  return (
    <Box m={{ xs: 0, md: "20px" }}>
      <Header title="Pie Chart" subtitle="Simple Pie Chart" />
      <GlassBox>
        <PieChart />
      </GlassBox>
    </Box>
  );
};

export default Pie;
