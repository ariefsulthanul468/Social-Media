import React, { useState } from "react";
import { Tooltip, Box, Typography, Stack, Button } from "@mui/material";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Modal from "@mui/material/Modal";
import styled from "styled-components";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import {
  EmojiEmotions,
  PersonAdd,
  VideoCameraBack,
  Image,
  DateRange,
} from "@mui/icons-material";
import ButtonGroup from "@mui/material/ButtonGroup";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginLeft: "10px",
  marginBottom: "10px",
});

const Add = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Tooltip
        onClick={handleOpen}
        title="Add"
        sx={{
          position: "fixed",
          bottom: "20px",
          left: { xs: "calc(50%)", md: "30px" },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>

      <StyledModal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          bgcolor={"background.default"}
          color={"text.prrimary"}
          width="400px"
          height="300px"
         
          borderRadius={"10px"}
          padding="25px"
        >
          <Typography variant="h6" color={"gray"} textAlign={"center"}>
            Create Post
          </Typography>

          <UserBox>
            <Avatar
              alt="Remy Sharp"
              src="https://mui.com/static/images/avatar/1.jpg"
            />
            <Typography>Sulthanul Arief</Typography>
          </UserBox>

          <TextField
            sx={{ width: "100%", justifyContent: "center" }}
            multiline
            id="standard-multiline-static"
            label="What's on your mind"
            rows={2}
            variant="standard"
          />

          <Stack
            direction="row"
            spacing={2}
            sx={{ marginTop: "10px", mb: "3" }}
          >
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
            sx={{ marginTop: "10px", mb: "3" }}
            fullWidth
          >
            <Button>Post</Button>
            <Button>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
