import { db } from "@/database/config"
import { addDoc, collection } from "firebase/firestore"
import { ref } from "vue"

let addBlog = (collectionName) => {
    let error = ref(null)
    let saveBlog = async(blogData) => {
        try {
            await addDoc(collection(db,collectionName),blogData)
        } catch (err) {
            error.value = err.message
            console.log(error.value)
        }
    }

    return {error,saveBlog}
}
export default addBlog;