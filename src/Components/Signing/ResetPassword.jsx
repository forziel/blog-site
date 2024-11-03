import { sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";
import Header from "../Home/Header/Header";
import { TextField } from "@mui/material";
import { auth } from "./Firebase";
import { useState } from "react";

const ResetPassword = () => {

    const [email, setEmail] = useState("");
  const forgottenPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Emailinizi ve spam klasörünüzü kontrol ediniz.");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };
  return (
    <>
      <Header />
      <section
        className="w-screen h-full flex items-center justify-center"
        style={{ paddingTop: "25vh" }}
      >
        <div className=" bg-gray-100 gap-14 w-2/5 p-12 flex flex-col  justify-center rounded-3xl">
          <div className="up-text flex items-center justify-center">
            <span className=" text-4xl font-medium">Şifrenizi Sıfırlayın</span>
          </div>

          <div className="mail-şifre flex flex-col gap-8">
            <TextField
              id="Email"
              style={{ width: "100%" }}
              label="E-mail"
              variant="outlined"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
            />
          </div>
          <button onClick={forgottenPassword} className="w-full bg-gray-800 text-gray-100 py-4 text-lg tracking-wider">
            Sıfırla
          </button>
        </div>
      </section>
    </>
  );
};

export default ResetPassword;
