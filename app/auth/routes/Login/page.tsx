"use client";

import { useState } from "react";
import { AuthBg } from "../../_components/AuthBg/AuthBg";
import styles from "./page.module.css";
import { Inputbox } from "../../_components/Inputbox/Inputbox";
import { BackButton } from "@/Components/BackButton/BackButton";

const LoginPage = () => {
  const [variant, setVariant] = useState<"Login" | "Register">("Login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const changeVarient = () => {
    setVariant(variant === "Login" ? "Register" : "Login");
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (variant === "Login") {
      // login
      console.log({ email, password });
    } else {
      // register
      console.log({ name, email, password });
    }
  };

  return (
    <AuthBg>
      <div className={styles.Auth}>
        <div className={styles.AuthRow}>
          <form onSubmit={onSubmit} className={styles.Form}>
            <BackButton LinkText="Back to Home" LinkTo="/" />
            <h6>{variant === "Login" ? "Login Now" : "Register Now"}</h6>

            {variant === "Register" && (
              <Inputbox
                labelText="Your name"
                inputType="text"
                id="name"
                required
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            )}

            <Inputbox
              labelText="Your email"
              inputType="email"
              id="email"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />

            <Inputbox
              labelText="Your password"
              inputType="password"
              id="password"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />

            <button type="submit" className={styles.Btn}>
              {variant === "Login" ? "Login Now" : "Register Now"}
            </button>

            <p onClick={changeVarient}>
              {variant === "Login"
                ? "¿No tienes cuenta?"
                : "¿Ya tienes cuenta?"}
              <span>{variant === "Login" ? "Register Now" : "Login Now"}</span>
            </p>
          </form>
        </div>
      </div>
    </AuthBg>
  );
};

export default LoginPage;
