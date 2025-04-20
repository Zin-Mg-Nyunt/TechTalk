import { auth } from "@/database/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ref } from "vue";
import errorHandler from "./errorHandler";

let error = ref(null);
let loginAcc = async(email,password) => {
    try {
        let userCredential = await signInWithEmailAndPassword(auth, email, password)
        if (!userCredential) {
            throw new Error("Login failed. Please try again.");
        }
        return userCredential.user;
    } catch (err) {
        error.value = errorHandler(err.code)
    }
};
let useLogin = () => {
    return {error,loginAcc}
}
export default useLogin;