import { ThemeProvider } from "@mui/system";
import { theme } from "../../styes/theme/index";
import {
  Button,
  Box,
  IconButton,
} from "../../utils/material-ui/materialComponents";
import {
  BsSliders,
  AiOutlineFire,
  AiOutlineArrowUp,
} from "../../utils/Icons/Icons";
import { useState } from "react";
const SortandFilter = () => {
  const [modal, setModal] = useState(false);
  const openmodal = () => {
    setModal((prev) => !prev);
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            gap: 2,
            p: 1,
          }}
        >
          {modal ? (
            <Box
              sx={{
                border: 1,
                borderRadius: 3,
                borderColor: "border.main",
                width: "25rem",
                p: 1,
                zIndex: 3,
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                bgcolor: "#19191B",
                boxShadow: 24,
                textAlign: "center",
              }}
            >
              <Button type="submit" variant="text" size="medium">
                trending
                <AiOutlineFire />
              </Button>

              <Button type="submit" variant="text" size="medium">
                Latest
                <AiOutlineArrowUp />
              </Button>
            </Box>
          ) : null}
          <IconButton
            onClick={openmodal}
            color="primary"
            aria-label="upload picture"
            component="span"
            sx={{
              p: 2,
            }}
          >
            <BsSliders />
          </IconButton>
        </Box>
      </ThemeProvider>
    </>
  );
};

export { SortandFilter };
