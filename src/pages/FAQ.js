import { Box } from "@mui/material";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { Header } from "../components";
import { useColors } from "../theme";

const AccordionItem = ({ summary, details }) => {
  const { colors } = useColors();

  return (
    <Accordion
      sx={{
        borderRadius: "10px",
        backgroundColor: `${colors.primary[400]}80`,
        backdropFilter: "blur(10px)",
        "&:before": {
          height: "0 !important",
        },
        my: "5px",
      }}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography
          color={colors.greenAccent[500]}
          variant="h5"
          fontWeight="semi-bold"
        >
          {summary}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography color={colors.grey[100]}>{details}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

const FAQ = () => {
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
      <AccordionItem
        summary=" An Important Question"
        details=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget."
      />
      <AccordionItem
        summary=" An Important Question"
        details=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget."
      />
      <AccordionItem
        summary=" An Important Question"
        details=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget."
      />
      <AccordionItem
        summary=" An Important Question"
        details=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget."
      />
      <AccordionItem
        summary=" An Important Question"
        details=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget."
      />
    </Box>
  );
};

export default FAQ;
