import React from "react";
import { ThemeProvider } from "@mui/system";
import { theme } from "../../styes/theme/index";
import { Typography, Box } from "../../utils/material-ui/materialComponents";

const SuggestedUsers = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box
       
          sx={{
            position: "sticky",
            top: 0,
            bgcolor: "#18191A",
            zIndex: 2,
            paddingTop:2
          }}
        >
          <Typography variant="h6" sx={{ color: "common.white" }}>
            Follow requests
          </Typography>

        <Box
          sx={{
            p: 1,
            backgroundColor: "#242526",
            mt: 10,
            borderRadius: "10px",
          }}
        >
          hy
        </Box>
        </Box>

      </ThemeProvider>
    </>
  );
};
export { SuggestedUsers };
