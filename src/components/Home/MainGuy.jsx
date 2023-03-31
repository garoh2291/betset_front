import { Box, Button, Typography } from "@mui/material";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { langContext } from "../../context";

const MainGuy = () => {
  const { t } = useTranslation();
  const { lang } = useContext(langContext);

  return (
    <Box
      sx={{
        width: "100vw",
        height: {
          xs: "calc(100vh - 60px)",
          sm: "calc(100vh - 60px)",
          md: "calc(100vh - 60px)",
          lg: "calc(100vh - 62px)",
          // xl: "calc(100vh - 186px)",
        },
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
      }}
    >
      <Box
        sx={{
          width: "calc(100vw - 8vh)",

          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Box sx={{ paddingBottom: { md: "5vh", lg: "5vh", xl: "5vh" } }}>
          <Typography
            sx={{
              fontWeight: "bold",

              fontSize: { md: "7vw", lg: "7vw", xl: "130px" },
              lineHeight: "0.9",
              color: "#AF1616",
            }}
            variant={lang === "en" ? "h3" : "h3"}
          >
            <b> {t(`main.prediction1`)}</b>
          </Typography>
          <Typography
            sx={{
              fontWeight: "300",
              fontSize:
                lang === "en"
                  ? { md: "7vw", lg: "7vw", xl: "122px" }
                  : { md: "4vw", lg: "4vw", xl: "60px" },
              lineHeight: lang === "en" ? "0.9" : "1.7",
              color: "#AF1616",
            }}
            variant="h5"
          >
            <span>{t(`main.prediction2`)}</span>
          </Typography>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: { md: "7vw", lg: "7vw", xl: "130px" },
              lineHeight: "0.9",
              color: "#AF1616",
            }}
            variant={lang === "en" ? "h3" : "h3"}
          >
            <b>{t(`main.prediction3`)}</b>
          </Typography>
          <Typography
            sx={{
              fontSize: { md: "1.9vw", lg: "1.9vw", xl: "35.5px" },

              color: "#AF1616",
            }}
          >
            {t(`main.prediction4`)}
          </Typography>
        </Box>
        <Button
          size="large"
          sx={{
            marginTop: "2em",
            border: "1px solid #AF1616",
            color: "#AF1616",
            borderRadius: "100px",
            fontWeight: "bold",
            transition: ".5s ease",
            textTransform: "capitalize",
            fontSize: { lg: "1.2vw", xl: "30px" },
            "&:hover": {
              border: "1px solid #AF1616",
              background: "#AF1616",
              color: "white",
            },
          }}
          variant="outlined"
        >
          {t(`main.button`)}
        </Button>
      </Box>
    </Box>
  );
};

export default MainGuy;
