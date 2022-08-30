import { MenuItem, Select } from "@mui/material";
import React from "react";
import { Am, Us } from "react-flags-select";
import "./styles.css";

export const SelectLang = ({ languageHandler }) => {
  return (
    <Select
      defaultValue={"en"}
      sx={{ border: 0 }}
      className="country_wrap"
      onChange={languageHandler}
    >
      <MenuItem className="country_select" value={"en"}>
        <Us />
      </MenuItem>
      <MenuItem className="country_select" value={"am"}>
        <Am />
      </MenuItem>
    </Select>
  );
};
