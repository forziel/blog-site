import { toast } from "react-toastify";
import { auth } from "./Firebase";
import { signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setMenuItems } from "../Slices/BlogSlice";
import { LoggedInMenu } from "./MenuItems/LoggedInMenu";
export const SignOut = () => {
  toast.success("başarıyla çıkış yapıldı.");
  signOut(auth);
  const dispatch = useDispatch();
  dispatch(setMenuItems(LoggedInMenu));

} 