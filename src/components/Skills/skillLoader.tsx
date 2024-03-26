import * as React from "react";

import { Skeleton, Typography, Box, Grid } from "@mui/material";

const CardLoader = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-around"
      borderRadius={3}
      margin={1}
 
      sx={{
        width: { xs: "35%", sm: "23%", md: "17%" },
        "&:hover": {

          cursor: "pointer",
        },
      }}
    >
      <Skeleton width={100} height={100} sx={{ borderRadius: 3 }} />
    </Box>
  );
};

export default CardLoader;
