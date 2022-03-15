import React from 'react';
import { Header, AuthSection, AuthForm, Footer } from "../../components";
import "./Auth.scss";

const Auth = () => {
  return (
    <div>
      <Header />
      <AuthSection />
      <AuthForm />
      <Footer />
    </div>
  )
}

export default Auth;