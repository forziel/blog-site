import { FaGoogle } from "react-icons/fa";
import LoginWithGoogle from "./LoginWithGoogle";

import TextField from "@mui/material/TextField";
import Header from "../Home/Header/Header";
import { Link, useNavigate } from "react-router-dom";
//Firebase
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase";
import { useState } from "react";
import { toast } from "react-toastify";
const Kaydol = () => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const [mail, setMail] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const kaydolHandler = () => {
    password == passwordConfirm
      ? createUserWithEmailAndPassword(auth, mail, password)
          .then((userCredential) => {
            const user = userCredential.user;
            console.log(user.providerData[0].email)
            toast.success("Kullanıcı başarıyla oluşturuldu.")
            setPassword("")
            setPasswordConfirm("")
            setMail("")
            navigate("/")
          })
          .catch((error) => {
            toast.error(error.message)
          })
      : toast.error("şifreler aynı değil");
      
  };

  return (
    <>
      <Header />
      <section
        className="bg-light-primary dark:bg-dark-primary w-screen h-screen flex items-center justify-center"
        style={{ height: "100vh", paddingTop:"5%" }}
      >
        <div className="  bg-light-secondary dark:bg-dark-secondary gap-14 w-2/5 p-12 flex flex-col  justify-center rounded-3xl">
          <div className="up-text flex">
            <div className="w-2/3 left-side flex flex-col gap-7 justify-start dark:text-gray-200">
              <span className=" text-4xl font-medium">Bloğuma Hoşgeldin</span>
              <span className=" text-5xl font-semibold">Kayıt Ol</span>
            </div>
            <div className=" flex flex-col justify-start items-start right-side w-1/3">
              <span className="text-lg font-medium text-gray-800 dark:text-gray-100 dark:text">
                Zaten bir hesabın var mı?
              </span>
              <Link
                to={"/login"}
                className=" text-base font-medium text-gray-500 dark:text-gray-400"
              >
                Giriş yap
              </Link>
            </div>
          </div>
          <div className="brands">
            
            <LoginWithGoogle auth={auth} email={mail} setEmail={setMail} text={"Google ile kayıt ol"} extras={"pt-3 pb-3"} />
            
          </div>
          <div className="mail-şifre flex flex-col gap-8 dark:text-gray-100">
            <TextField
              color="secondary"
              id="Email"
              style={{ width: "100%" }}
              label="E-mail"
              variant="outlined"
              value={mail}
              onChange={(e) => {
                setMail(e.target.value)
              }}
            />
            <div className="flex flex-col gap-5">
              <TextField
                id="password"
                label="Şifre"
                type="password"
                variant="outlined"
                style={{ width: "100%" }}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <TextField
                id="passwordConfirm"
                label="Şifre Tekrarı"
                type="password"
                variant="outlined"
                style={{ width: "100%" }}
                value={passwordConfirm}
                onChange={(e) => {
                  setPasswordConfirm(e.target.value);
                }}
              />
            </div>
          </div>
            <button
              onClick={kaydolHandler}
              className="w-full  bg-button-primary text-gray-100 py-4 text-lg dark:bg-dark-primary"
            >
              Kayıt Ol
            </button>
        </div>
      </section>
    </>
  );
};
export default Kaydol;
