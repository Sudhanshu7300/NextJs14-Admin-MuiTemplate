"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
const Footer = () => {
  return (
    <Box sx={{ pt: 6, textAlign: "center" }}>
      <Typography>©sudhanshu{new Date().getFullYear()}</Typography>
    </Box>
  );
};

export default Footer;
