import { MenuItem, Select } from "@mui/material";
import React from "react";
import { Am, Us } from "react-flags-select";
import { getLang } from "../../helpers";
import "./styles.css";

export const SelectLang = ({ languageHandler }) => {
  console.log(getLang());
  return (
    <Select
      defaultValue={getLang()}
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
