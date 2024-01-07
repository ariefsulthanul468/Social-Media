import React from 'react'
import { Box } from "@mui/material";
import Feed from './Feed';

const Post = () => {
  return (
    <Box flex={4} p={2}>
       <Feed />
       <Feed />
       <Feed />
       <Feed />
       <Feed />
       <Feed />
       <Feed />
    </Box>
  )
}

export default Post