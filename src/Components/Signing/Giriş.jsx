import TextField from "@mui/material/TextField";
import Header from "../Home/Header/Header";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
//icons
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

//firebase
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase";
import { toast } from "react-toastify";
import LoginWithGoogle from "./LoginWithGoogle";
import { useDispatch } from "react-redux";
import { setMenuItems } from "../Slices/BlogSlice";
import { LoggedInMenu } from "./MenuItems/LoggedInMenu";
import { AdminMenuItems } from "./MenuItems/AdminMenuItems";

const Giriş = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginHandler = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        toast.success("Başarıyla giriş yapıldı");
        navigate("/");
        user.email=="aliguvenc04@gmail.com"?
        dispatch(setMenuItems(AdminMenuItems))
        :
        dispatch(setMenuItems(LoggedInMenu));
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <>
      <Header />
      <section
        className="w-screen flex items-center justify-center bg-light-primary dark:bg-dark-primary "

        style={{ height: "100vh", paddingTop:"5%" }}
      >
        <div className="gap-14 w-2/5 p-12 flex flex-col  justify-center  rounded-3xl bg-light-secondary dark:bg-dark-secondary" >
        
        {/* 
          LİGHT MODE
          MAİN COLOR #B7B7A4
            SECONDARY COLOR #EDE8DC
          DARK MODE
            MAİN COLOR #364135
            SECONDARY COLOR #C1B6A4

        */}
          <div className="up-text flex items-center">
            <div className="w-2/3 left-side flex flex-col gap-7 justify-center">
              <span className=" text-4xl font-medium">Bloğuma Hoşgeldin</span>
              <span className=" text-5xl font-semibold">Giriş Yap</span>
            </div>
            <div className=" flex flex-col justify-start items-start right-side w-1/3">
              <span className="text-lg font-medium text-gray-800">
                Hesabın yok mu?
              </span>
              <Link
                to={"/sign-in"}
                className=" text-base font-medium text-gray-500"
              >
                Kaydol
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-3 w-full justify-center items-center">
            <div className="brands w-full flex items-center justify-between">
              <LoginWithGoogle auth={auth} email={email} setEmail={setEmail} text={"Google ile giriş yap"} extras={"w-3/4"} />
              <span className="text-5xl text-black bg-gray-200 rounded-lg shadow-sm cursor-pointer">
                <FaSquareXTwitter />
              </span>
              <span className="text-5xl text-gray-200 bg-gray-200 rounded-lg shadow-sm cursor-pointer">
                <FaGithubSquare style={{ color: "333" }} />
              </span>
              <span className="text-5xl bg-gray-200 rounded-lg shadow-sm cursor-pointer">
                <FaFacebookSquare style={{ color: "1877f2" }} />
              </span>
            </div>
            <div className="w-full flex items-center gap-3 justify-center">
              <hr className="border-black flex flex-grow border-t "/>
              <span>veya</span>
              <hr className="border-black flex flex-grow border-t " />
            </div>
          </div>

          <div className="mail-şifre flex flex-col gap-8">
            <TextField
              id="Email"
              style={{ width: "100%" }}
              label="E-mail"
              variant="outlined"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <div className="flex flex-col items-end gap-2">
              <TextField
                id="şifre"
                label="Şifre"
                type="password"
                variant="outlined"
                style={{ width: "100%" }}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <Link to={"/resetPassword"}>şifremi unutum</Link>
            </div>
          </div>
          <button
            onClick={loginHandler}
            className="w-full bg-button-primary text-gray-100 py-4 text-lg dark:bg-dark-primary"

                // BUTON RENGİ #4D4F4E
          >
            Giriş Yap
          </button>
        </div>
      </section>
    </>
  );
};

export default Giriş;
