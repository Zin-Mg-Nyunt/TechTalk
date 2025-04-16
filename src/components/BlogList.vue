<template>
    <TagCloud :blogs="blogs"></TagCloud>
    <div class="grid grid-cols-3 gap-4 mt-20">
        <div v-for="blog in blogs" :key="blog.id">
            <SingleBlog :blog= blog></SingleBlog>
        </div>
    </div>
</template>

<script>
import TagCloud from './TagCloud'
import SingleBlog from './SingleBlog'
import getBlogs from "../composable/getBlogs";
import { onMounted, ref } from "vue"
export default {
  components: {
    TagCloud, SingleBlog },
    setup(props,context){
        
        // refrectoring concept
        let {error,blogs,load}=getBlogs()

        onMounted(()=>load())

        return {blogs,error}
    }
}
</script>

<style>

</style>