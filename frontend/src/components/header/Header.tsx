import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Sun from "@mui/icons-material/LightMode";
import Moon from "@mui/icons-material/DarkMode";
import "./Header.scss";

const Header = () => {
  const [dark, isDark] = useState(false);
  return (
    <div>
      <Box>
        <AppBar position="relative">
          <Toolbar>
            <NavLink
              className="navlink"
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "normal",
              })}
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className="navlink"
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "normal",
              })}
              to="/auth"
            >
              Login
            </NavLink>
            <NavLink
              className="navlink"
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "normal",
              })}
              to="/contact"
            >
              Contact
            </NavLink>
            <Box onClick={() => isDark(!dark)} className="mode">
              {dark ? <Moon /> : <Sun />}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Header;
