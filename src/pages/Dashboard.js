import { Box, Button, IconButton, Typography } from "@mui/material";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";

import { useColors } from "../theme";
import { mockTransactions } from "../data/mockData";
import {
  Header,
  BarChart,
  LineChart,
  GeographyChart,
  StatBox,
  GlassBox,
  ProgressCircle,
} from "../components";

const ItemBox = ({ children, colSpan, ...otherProps }) => (
  <GlassBox
    bgOpacity="70"
    gridColumn={colSpan}
    sx={{ colSpan }}
    height="auto"
    display="flex"
    alignItems="center"
    justifyContent="center"
    {...otherProps}
  >
    {children}
  </GlassBox>
);

const Dashboard = () => {
  const { colors } = useColors();

  return (
    <Box>
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </Box>

      <Box>
        <Button
          sx={{
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
            borderRadius: "10px",
          }}
        >
          <DownloadOutlinedIcon sx={{ mr: "10px" }} />
          Download Reports
        </Button>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
        mt="10px"
      >
        {/* ROW 1 */}
        <ItemBox colSpan={{ xs: "span 12", sm: "span 6", lg: "span 3" }}>
          <StatBox
            title="12,361"
            subtitle="Emails Sent"
            progress="0.75"
            increase="+14%"
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[400], fontSize: "26px" }}
              />
            }
          />
        </ItemBox>

        <ItemBox colSpan={{ xs: "span 12", sm: "span 6", lg: "span 3" }}>
          <StatBox
            title="431,225"
            subtitle="Sales Obtained"
            progress="0.50"
            increase="+21%"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[400], fontSize: "26px" }}
              />
            }
          />
        </ItemBox>

        <ItemBox colSpan={{ xs: "span 12", sm: "span 6", lg: "span 3" }}>
          <StatBox
            title="32,441"
            subtitle="New Clients"
            progress="0.30"
            increase="+5%"
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[400], fontSize: "26px" }}
              />
            }
          />
        </ItemBox>

        <ItemBox colSpan={{ xs: "span 12", sm: "span 6", lg: "span 3" }}>
          <StatBox
            title="1,325,134"
            subtitle="Traffic Received"
            progress="0.80"
            increase="+43%"
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[400], fontSize: "26px" }}
              />
            }
          />
        </ItemBox>

        {/* ROW 2 */}
        <ItemBox
          colSpan={{ xs: "span 12", md: "span 8" }}
          gridRow="span 2"
          display="block"
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Revenue Generated
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[400]}
              >
                $59,342.32
              </Typography>
            </Box>

            <IconButton>
              <DownloadOutlinedIcon
                sx={{ fontSize: "26px", color: colors.greenAccent[400] }}
              />
            </IconButton>
          </Box>

          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </ItemBox>

        <ItemBox
          colSpan={{ xs: "span 12", md: "span 4" }}
          gridRow="span 2"
          overflow="auto"
          display="inline-block"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`2px solid ${colors.grey[200]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Recent Transactions
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`1px solid ${colors.grey[400]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[400]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="10px"
              >
                ${transaction.cost}
              </Box>
            </Box>
          ))}
        </ItemBox>

        {/* ROW 3 */}
        <ItemBox
          colSpan={{ xs: "span 12", md: "span 6", lg: "span 4" }}
          gridRow="span 2"
          p="30px"
          display="inline-block"
        >
          <Typography variant="h5" fontWeight="600">
            Campaign
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="125" />
            <Typography
              variant="h5"
              color={colors.greenAccent[400]}
              sx={{ mt: "15px" }}
            >
              $48,352 revenue generated
            </Typography>
            <Typography>Includes extra misc expenditures and costs</Typography>
          </Box>
        </ItemBox>

        <ItemBox
          colSpan={{ xs: "span 12", md: "span 6", lg: "span 4" }}
          gridRow="span 2"
          p="30px"
          display="inline-block"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
            Geography Based Traffic
          </Typography>
          <Box height="200px">
            <GeographyChart isDashboard={true} />
          </Box>
        </ItemBox>

        <ItemBox
          colSpan={{ xs: "span 12", lg: "span 4" }}
          gridRow="span 2"
          display="inline-block"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Sales Quantity
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </ItemBox>
      </Box>
    </Box>
  );
};

export default Dashboard;
