import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Stack from "@mui/material/Stack";
import Rightbar from "./components/Rightbar";
import SideBar from "./components/SideBar";
// import Feed from "./components/Feed";
import Post from "./components/Post";
import Add from "./components/Add";
import { Box, ThemeProvider, createTheme } from "@mui/material";


const App = () => {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Box bgcolor={"background.default"} color={"text.prrimary"}>
          <Navbar />

          <Stack direction="row" spacing={2} justifyContent="space-around">
            <SideBar setMode={setMode} mode={mode} />
            <Post />
            <Rightbar />
          </Stack>
          <Add />
        </Box>
      </ThemeProvider>
    </>
  );
};

export default App;
