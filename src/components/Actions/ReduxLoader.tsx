import {Box, CircularProgress} from "@mui/material";

export const ReduxLoader = () => {
    return(
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", p: 5}}> <CircularProgress color="info" /></Box>
    )
}