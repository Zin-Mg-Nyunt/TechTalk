<template>
  <div class="max-w-3xl mx-auto mt-20 p-4">
    <h2 class="text-2xl font-bold mb-4 text-center text-slate-100">Create New Blog</h2>

    <form @submit.prevent="submitBlog" class="space-y-6 p-5 text-slate-100">

      <!-- Thumbnail Upload -->
      <div>
        <label class="block font-semibold">Thumbnail Image</label>
        <input type="file" @change="handleFileChange" class="w-full cursor-pointer" accept="image/*" />
      </div>

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

export default {
    setup(){
        const title = ref('')
        const tagsInput = ref('')
        const thumbnail = ref(null)
        const quillEditor = ref(null)
        let quillInstance = null

        const handleFileChange = (e) => {
            thumbnail.value = e.target.files[0]
        }

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

        const submitBlog = async () => {
            const content = quillInstance.root.innerHTML // collect blog content
            const tagsArray = tagsInput.value.split(',').map(tag => tag.trim())

            // blog creater can't put twice same tag
            const uniqueTagsArray=tagsArray.filter((tag,index,array)=>{ 
                return array.indexOf(tag) === index
            })

            const blogData = {
                title: title.value,
                content,
                tags: uniqueTagsArray,
                created_at: new Date(),
                thumbnail: thumbnail.value, // Replace after upload
                likes: 0,
                saves: 0
            }

            // Here you can upload image to Firebase Storage and then save blog to Firestore


            title.value="",
            tagsInput.value="",
            quillEditor.value=null
            console.log('Blog Data Ready to Save:', blogData)
        }


        return {title, tagsInput, handleFileChange,quillEditor, submitBlog}
    }
}
</script>

<style>

</style>