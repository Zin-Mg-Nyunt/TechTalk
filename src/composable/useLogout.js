import { auth } from "@/database/config";
import { signOut } from "firebase/auth";

let logoutAcc = async () => {
    await signOut(auth)
}
let useLogout = () => {
    return logoutAcc;
}
export default useLogout;