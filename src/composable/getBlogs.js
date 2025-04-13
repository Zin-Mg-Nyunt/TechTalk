import { db } from "@/database/config";
import { collection, doc, onSnapshot, orderBy, query } from "firebase/firestore";
import { ref } from "vue"

let getBlogs = () => {
    let error = ref(null);
    let blogs = ref([]);
    let load = () => {
        try {
            // fetch blogs with onSnapshot

            // create collection
            const collectionName = collection(db, 'blogs');

            // create query
            const q = query(collectionName, orderBy('created_at', 'desc'));

            // set up real-time listener
            onSnapshot(q, snapshot => {
                blogs.value = snapshot.docs.map(doc=>{
                    return {id:doc.id,...doc.data()}
                }
                )
            })
        } catch (error) {
            console.log(error.message)
        }
    }
    return {error,blogs,load}
}
export default getBlogs;