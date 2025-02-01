import * as React from "react";
import {
  Button,
  Typography,
  Divider,
  Chip,
  Stack,
  Grid,
  Box,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
} from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import GppGoodIcon from "@mui/icons-material/GppGood";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Colours } from "../../Theme/theme";
import { useAppSelector } from "../../hooks/hooksRedux";
import { StringDecoder } from "string_decoder";
import { BgForm } from "../Forms/Background/BgForm";
import { SortableItem } from "../../interfaces/interfaces";

interface Props {
  background: any;
  currentLanguage: string;
  refresh: any;
}

const BGCard = ({ background, currentLanguage, refresh }: Props) => {
  ////GLOBAL STATES
  const mode = useAppSelector((state) => state.global.mode);
  const isAuth = useAppSelector((state) => state.global.isAuth);

  ////LOCAL STATES
  const [color, setColor] = React.useState(Colours.PaperDark);

  const handleColor = (statemode: string) => {
    if (statemode === "light") {
      setColor(Colours.PaperLight);
    } else {
      setColor(Colours.PaperDark);
    }
  };

  const handleLink = (link: string) => {
    if (link) window.open(link, "_blank");
  };

  React.useEffect(() => {
    handleColor(mode);
  }, [mode]);
  return (
    <Grid
      container
      sx={{ width: { xs: "100%" }, px: { xs: "1%", sm: "10%" }, my: 0.5 }}
    >
      <Grid item xs={12}>
        <Grid container display="flex" flexDirection="column">
          <Accordion sx={{ bgcolor: "transparent" }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Grid
                item
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  width: "100%",
                  justifyContent: "space-between",
                }}
              >
                <Grid
                  item
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "start",
                    justifyContent: "center",
                  }}
                >
                  {isAuth && (
                    <BgForm
                      bgItem={background}
                      isEditing={true}
                      currentLanguage={currentLanguage}
                      refresh={refresh}
                    />
                  )}

                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography variant="h6">
                      {background.degree[currentLanguage]}
                    </Typography>

                    <Typography variant="subtitle1" fontWeight={500}>
                      {background.institution[currentLanguage]}
                    </Typography>
                  </Box>
                </Grid>
                <Grid
                  item
                  sx={{
                    p: 1,
                  }}
                >
                  {" "}
                  <Box sx={{ display: "flex", alginItems: "center" }}>
                    {background.certificate !== "" && (
                      <Box alignSelf="center" p={0.5}>
                        <IconButton
                          size="small"
                          color="info"
                          onClick={() => handleLink(background.certificate)}
                        >
                          <GppGoodIcon />
                        </IconButton>
                      </Box>
                    )}

                    <Paper
                      elevation={3}
                      sx={{
                        bgcolor: color,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        p: 1,
                        borderRadius: 3,
                        "&:hover": {
                          cursor: "pointer",
                        },
                      }}
                    >
                      <img
                        width={130}
                        src={background.image}
                        alt={background.institution[currentLanguage]}
                        onClick={() => handleLink(background.link)}
                      />
                    </Paper>
                  </Box>
                </Grid>{" "}
              </Grid>
            </AccordionSummary>
            <AccordionDetails>
              <Divider variant="fullWidth" />
              <Grid
                item
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Typography gutterBottom variant="overline">
                  {background.timePeriod[currentLanguage]}
                </Typography>
              </Grid>

              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                }}
              >
                <Stack direction="row" sx={{ flexWrap: "wrap" }}>
                  {background.description[currentLanguage].map(
                    (des: SortableItem) => {
                      return (
                        <Chip
                          key={`CardDescription${des.name}`}
                          label={des.name}
                          icon={<DoneIcon />}
                          sx={{ m: 0.5 }}
                        />
                      );
                    }
                  )}
                </Stack>
              </Grid>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BGCard;
