import { db } from "@/database/config"
import { doc, getDoc } from "firebase/firestore"
import { ref } from "vue";

let error = ref('');
let blog = ref(null)
let load = async (id) => {
    try {
        // create docRef
        const docRef = doc(db, 'blogs', id);
        // get doc
        const res = await getDoc(docRef);
        if (res) {
            blog.value = {...res.data(),id:res.id};
        } else {
            throw new Error("Blog not found");
        }
    } catch (err) {
        error.value = err.message
    }
}

let getBlog = () => {
    return {error,load,blog}
}
export default getBlog;