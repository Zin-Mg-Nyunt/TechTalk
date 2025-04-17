<template>
  <div class="max-w-3xl mx-auto mt-20 p-4">
    <h2 class="text-2xl font-bold mb-4 text-center text-slate-100">Create New Blog</h2>

    <form @submit.prevent="submitBlog" class="space-y-6 p-5 text-slate-100">

      <!-- Thumbnail Upload -->
      <!-- <div>
        <label class="block font-semibold">Thumbnail Image</label>
        <input type="file" @change="handleFileChange" class="w-full cursor-pointer" accept="image/*" />
      </div> -->

      <!-- Title -->
      <div>
        <label class="block font-semibold">Title</label>
        <input type="text" v-model="title" class="w-full border p-2 rounded" required />
      </div>

      <!-- Tags -->
      <div>
        <label class="block font-semibold">Tags (comma separated)</label>
        <input type="text" v-model="tagsInput" class="w-full border p-2 rounded" placeholder="e.g. vue, firebase, frontend" />
      </div>

      <!-- Blog Content -->
      <div>
        <label class="block font-semibold">Content</label>
        <div ref="quillEditor" class=" rounded shadow border min-h-[200px] p-2"></div>
      </div>

      <!-- Submit -->
      <div class="text-center mt-15">
        <button
            type="submit"
            class="bg-sky-400 text-white py-2 px-4 rounded hover:bg-sky-700 cursor-pointer"
        >
            Publish Blog
        </button>
      </div>
    </form>
  </div>
</template>


<script>
import Quill from "quill";
import 'quill/dist/quill.snow.css';
import { nextTick, onMounted, ref } from 'vue';
import { serverTimestamp } from 'firebase/firestore';
import addBlog from "../composable/addBlog";

export default {
    setup(){
        let title = ref('')
        let tagsInput = ref('')
        let thumbnail = ref(null)
        let tagsArray =ref([])
        let quillEditor = ref(null)
        let quillInstance = null

        // default blog image url
        let imageUrl = "https://kickervideo.com/wp-content/themes/kickervideoTheme/images/blog_default.png";

        // const handleFileChange = (e)=>{
        //     console.log(e.target.files[0])
        // }



        onMounted( async() => {
            await nextTick() // wait until DOM is fully rendered
            if (quillEditor.value) {
                quillInstance = new Quill(quillEditor.value, {
                theme: 'snow',
                placeholder: 'Write your blog content here...',
                modules: {
                    toolbar: [
                    [{ header: [1, 2, 3, false] }],
                    ['bold', 'italic', 'underline', 'strike'],
                    [{ color: [] }, { background: [] }],
                    [{ list: 'ordered' }, { list: 'bullet' }],
                    ['link', 'image'],
                    ['clean']
                    ]
                }
                })
            } else {
                console.error("Quill editor ref not found!")
            }
        })

        let submitBlog = async () => {
            let content = quillInstance.root.innerHTML // collect blog content

            // image upload to firebase
            // if (thumbnail.value) {
            //     // create path to save image
            //     const path = storageRef(storage,`thumbnails/${Date.now()}-${thumbnail.value.name}`);
            //     // upload image to this path from firebase storage
            //     const uploadImage = await uploadBytes(path,thumbnail.value);
            //     // create publicUrl with getDownloadURL
            //     imageUrl= await getDownloadURL(uploadImage.ref)
            // }

            if (tagsInput.value.includes(',')) {
              tagsArray.value = tagsInput.value.split(',').map(tag => tag.trim())
            }else{
              tagsArray.value.push(tagsInput.value);

            }
            // blog creater can't put twice same tag
            // let uniqueTagsArray=tagsArray.value.filter((tag,index,array)=>{ 
            //     return array.indexOf(tag) === index
            // })
            let uniqueTagsArray=[...new Set(tagsArray.value)]
        

            const blogData = {
                title: title.value,
                content,
                tags: uniqueTagsArray,
                created_at: serverTimestamp(),
                thumbnail: imageUrl,
                likes: 0,
                saves: 0
            }

            // Here you can upload image to Firebase Storage and then save blog to Firestore
            let {error,saveBlog}=addBlog('blogs');
            await saveBlog(blogData)
            alert("Blog created successfully!")

            // reset form
            title.value = "",
            tagsInput.value = "",
            quillInstance.root.innerHTML = ""
            thumbnail.value = null
        }


        return {title, tagsInput,quillEditor, submitBlog}
    }
}
</script>

<style>

</style>