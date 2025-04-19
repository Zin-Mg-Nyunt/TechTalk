import { auth } from "@/database/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref } from "vue";
import errorHandler from './errorHandler';

let error = ref('');

let signUp = async (email,password,userName) => {
    try {
        let res = await createUserWithEmailAndPassword(auth, email, password)
        if (!res) {
            throw new Error("Couldn't create user");
        }
        
        await updateProfile(res.user, { displayName: userName })
        return res.user;
        //If signUp() function is not returning res.user, then user will be undefined, so if (user) is false — even though the user was created.
    } catch (err) {
        error.value=errorHandler(err.code)
    }
}

let useSignup = () => {
    return {error,signUp}
}
export default useSignup;