import React from "react";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import BackgroundList from "../components/BackGround/BackGround";
import ContactForm from "../components/Actions/Contact/ContactForm";
import Footer from "../components/Landing/Footer";
import LandingPage from "../components/Landing/Landing";
import NavBar from "../components/Nav/Navbar";
import ProyectsList from "../components/Projects/Projects";
import SkillList from "../components/Skills/skillsList";
import { getAuth, onAuthStateChanged, getIdTokenResult } from "firebase/auth";
import { useAppDispatch, useAppSelector } from "../hooks/hooksRedux";
import { authSetter } from "../redux/portfolio/actions";

export const AppRouter = () => {
  const dispatch = useAppDispatch();

  const isAuthenticated = useAppSelector((state) => state.global.isAuth);

  useEffect(() => {
    const auth = getAuth();

    onAuthStateChanged(auth, async (user) => {
      if (user) {
        // El usuario está autenticado

        // Obtenemos el token de Firebase
        const idTokenResult = await getIdTokenResult(user);

        // Obtenemos la fecha de expiración del token
        const expirationTime = parseInt(idTokenResult.expirationTime);

        // Verificamos si el token ha expirado
        const currentTime = new Date().getTime();
        if (expirationTime < currentTime) {
          dispatch(authSetter(false));
          // El token ha expirado, el usuario debe volver a iniciar sesión
          // Puedes redirigir al usuario a la página de inicio de sesión
        } else {
          // El token aún es válido, el usuario sigue autenticado

          dispatch(authSetter(true));
        }
      } else {
        // El usuario no está autenticado
        dispatch(authSetter(false));
      }
    });
  }, []);

  return (
    <div>
      <NavBar />
      <LandingPage />
      <ProyectsList />
      <SkillList />
      <BackgroundList />
      <ContactForm />
      <Footer />
    </div>
  );
};
