<template>
  <NavBar></NavBar>
  <HeroSection></HeroSection>
  <div v-if="error">
    {{error}}
  </div>
  <div v-if="blogs.length">
    <TagCloud :blogs="blogs"></TagCloud>
    <div class="grid grid-cols-3 gap-4 mt-20">
      <div v-for="blog in filteredBlogs" :key="blog.id">
        <SingleBlog :blog= blog></SingleBlog>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import TagCloud from '../components/TagCloud'
import SingleBlog from '../components/SingleBlog'
import { computed, onMounted, ref } from 'vue'
import getBlogs from '@/composable/getBlogs'

export default {
  components: {
    NavBar,
    HeroSection,
    TagCloud, SingleBlog },
    props:['tag'],
    setup(props){

      let {error,blogs,load}=getBlogs();
      onMounted(()=>{load()})

      let filteredBlogs = computed(()=>{ // fetch blog by tag from all blogs
        return blogs.value.filter(blog=>{
          return blog.tags.includes(props.tag)
        })
      })
      return {blogs,filteredBlogs,error}

      // let blogs = ref([]);
      // onMounted(async()=>{
      //   blogs.value = await getBlogsByTag(props.tag)
      //   console.log(blogs.value)
      // })
      // return {blogs}
    }
}
</script>

<style>

</style>