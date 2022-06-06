import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';


export default function FullWidthTextField({ handleChange }) {
  return (
    <Box
      sx={{
        position: "absolute",
        width: "325px",
        height: "40px",
        left: "1002px",
        top: "30px",
        background: "#F9F9F9",
        outline: "none",
        border: "none",
      }}
    >
      <TextField
        fullWidth
        size="small"
        label="Поиск"
        id="fullWidth"
        onChange={handleChange}
        sx={{
          outline: "none",
          border: "none",
          borderRadius: "0px",
        }}
      />
      <IconButton
        type="submit"
        sx={{
          p: "10px",
          position: "absolute",
          display: "flex",
          top: "0px",
          left: "270px",
        }}
        aria-label="Поиск"
      >
        <SearchIcon />
      </IconButton>
    </Box>
  );
}