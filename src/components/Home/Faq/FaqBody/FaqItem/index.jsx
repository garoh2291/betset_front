import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";

import React from "react";

export const FaqItem = ({ head, body }) => {
  return (
    <Accordion
      sx={{
        mt: 1,
        backgroundColor: "#f8f8fc",
        boxShadow: "none",
      }}
      className="accordion_item"
    >
      <AccordionSummary
        expandIcon={<AddIcon color="success" />}
        aria-controls="panel2a-content"
        id="panel2a-header"
      >
        <Typography>{head}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography sx={{ fontSize: { md: "1.5vw", lg: "1vw", xl: "20px" } }}>
          {body}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};
