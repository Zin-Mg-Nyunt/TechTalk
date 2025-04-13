<template>
    <div v-for="blog in blogs" :key="blog.id">
        <SingleBlog :blog= blog></SingleBlog>
    </div>
</template>

<script>
import SingleBlog from './SingleBlog'
import getBlogs from "../composable/getBlogs";
import { onMounted, ref } from "vue"
export default {
  components: { SingleBlog },
    setup(){
        
        // refrectoring concept
        let {error,blogs,load}=getBlogs()

        onMounted(()=>load())

        return {blogs,error}
    }
}
</script>

<style>

</style>