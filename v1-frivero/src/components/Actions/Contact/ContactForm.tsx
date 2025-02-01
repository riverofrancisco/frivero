import React, { useState, useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Button, Fade, Typography, InputAdornment } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import Alert from "@mui/material/Alert";
import { useAppSelector } from "../../../hooks/hooksRedux";

import AccountCircle from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";

const { REACT_APP_publicKey, REACT_APP_templateID, REACT_APP_serviceID } =
  process.env;

export interface Contacts {
  name: string;
  lastName: string;
  mail: string;
  message: string;
}

export default function ContactForm() {
  //// LANGUAGE
  const currentLanguage = useAppSelector((state) => state.global.language);
  const [id, setId] = useState("Contact");

  //// INPUTS
  const [name, setName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const CONTENT: Contacts = {
    name: name,
    lastName: lastName,
    mail: email,
    message: message,
  };

  //// VALIDATIONS
  //EMAIL
  const [validEmail, setValidEmail] = useState(true);
  const regexWhite = new RegExp(
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  );
  function validateEmail() {
    if (regexWhite.test(email)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  }

  //BUTTON
  const [submiteable, setSubmiteable] = useState(false);

  function isSubmiteable() {
    if (!name) {
      setSubmiteable(false);
    } else if (!lastName) {
      setSubmiteable(false);
    } else if (!email || !validEmail) {
      setSubmiteable(false);
    } else if (!message) {
      setSubmiteable(false);
    } else {
      setSubmiteable(true);
    }
  }

  useEffect(() => {
    isSubmiteable();
    if (currentLanguage === "en") {
      setId("Contact");
    } else if (currentLanguage === "es") {
      setId("Contacto");
    }
  });

  ////ALERT
  const [showAlert, setShowAlert] = useState(false);

  ////SUBMIT
  emailjs.init(`${REACT_APP_publicKey}`);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(CONTENT);
    emailjs
      .send(`${REACT_APP_serviceID}`, `portfolio1`, {
        message: `${message}`,
        client_name: `${name}`,
        client_lastName: `${lastName}`,
        email: `${email}`,
      })
      .then(
        (response: EmailJSResponseStatus) => {
          alert("Email sent successfully!");
          setShowAlert(true);
          setTimeout(() => {
            setShowAlert(false);
          }, 3000);
          setName("");
          setLastName("");
          setEmail("");
          setMessage("");
        },
        (error: EmailJSResponseStatus) => {
          alert("Error sending email:, " + error);
        }
      );
  };

  return (
    <Grid
      container
      my={5}
      id={id}
      display="flex"
      justifyContent="center"
      key="contact-form"
      py={2}
      sx={{ px: { xs: 1, sm: 0 } }}
    >
      <Grid item borderRadius={5} sx={{ boxShadow: 8 }}>
        <Grid item display="flex" justifyContent="center" alignItems="center">
          <Box my={3} maxWidth="90%" display="flex" flexDirection="column">
            <form onSubmit={handleSubmit}>
              <Box maxWidth="100%" display="flex" flexDirection="column">
                <Box
                  display="flex"
                  alignItems="end"
                  justifyContent="space-between"
                  width="100%"
                >
                  <AccountCircle sx={{ color: "action.active", my: 1.5 }} />
                  <TextField
                    name="from_name"
                    required
                    id="name"
                    label="Name"
                    variant="standard"
                    sx={{ m: 1, width: "48%" }}
                    value={name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setName(e.target.value)
                    }
                  />
                  <TextField
                    name="last_name"
                    required
                    id="lastName"
                    label="Last Name"
                    variant="standard"
                    sx={{ m: 1, width: "48%" }}
                    value={lastName}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setLastName(e.target.value)
                    }
                  />
                </Box>

                <Box display="flex" alignItems="end" width="100%">
                  <EmailIcon
                    sx={{ color: "action.active", my: validEmail ? 1.5 : 4 }}
                  />
                  <TextField
                    name="email"
                    required
                    error={!validEmail}
                    helperText={!validEmail && "Please enter a valid email"}
                    onBlur={validateEmail}
                    id="email"
                    label="Email"
                    variant="standard"
                    sx={{ m: 1, width: "100%" }}
                    value={email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setEmail(e.target.value)
                    }
                  />
                </Box>

                <TextField
                  name="message"
                  required
                  id="message"
                  label="Message"
                  variant="filled"
                  multiline
                  rows={8}
                  sx={{ my: 1, width: "100%" }}
                  value={message}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setMessage(e.target.value)
                  }
                />

                <Button
                  type="submit"
                  variant="contained"
                  color="info"
                  endIcon={<SendIcon />}
                  disabled={!submiteable}
                  sx={{
                    my: 1,
                    width: "70%",
                    py: 1.5,
                    alignSelf: "center",
                    borderRadius: 5,
                  }}
                >
                  <Typography variant="button">
                    {currentLanguage === "en"
                      ? "Send Message"
                      : "Enviar Mensaje"}
                  </Typography>
                </Button>
                <Fade in={showAlert}>
                  <Alert severity="success" sx={{ borderRadius: 5 }}>
                    {currentLanguage === "en"
                      ? "Message sent successfully!"
                      : "¡Mensaje enviado correctamente!"}
                  </Alert>
                </Fade>
              </Box>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}
