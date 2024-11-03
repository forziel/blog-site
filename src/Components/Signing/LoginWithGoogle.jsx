import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaGoogle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setMenuItems } from "../Slices/BlogSlice";
import { LoggedInMenu } from "./MenuItems/LoggedInMenu";
import { AdminMenuItems } from "./MenuItems/AdminMenuItems";

const LoginWithGoogle = ({auth, email, setEmail, text, extras}) => {
    const navigate = useNavigate()
    const provider = new GoogleAuthProvider();
    const dispatch = useDispatch();
  const mailHandler = () => {
    signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    // const token = credential.accessToken;
    const user = result.user;
    
    setEmail(user.email)
    toast.success("Başarıyla giriş yapıldı")
    navigate("/")
    user.email=="aliguvenc04@gmail.com"?
        dispatch(setMenuItems(AdminMenuItems))
        :
        dispatch(setMenuItems(LoggedInMenu));
      ;
  }).catch((error) => {
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    toast.error(error.message)
    console.log(credential)
  });
  }
  return (
    <div onClick={mailHandler} className={`flex items-center justify-center gap-2 shadow-md px-8 py-2 rounded-md cursor-pointer ${extras} border-gray-300`} style={{backgroundColor:"#EDE8DC"}}>
        <FaGoogle />
    <span>{text}</span>
  </div>
  )
}

export default LoginWithGoogle
