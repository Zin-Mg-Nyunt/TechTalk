<template>
  <div class="max-w-md mx-auto bg-transparent rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border-sky-400 border-1 cursor-pointer">
  <img class="w-full h-48 object-cover" :src="formattedBlog.thumbnail" alt="Blog thumbnail" />
  <router-link :to="{name:'blogDetail', params:{id:formattedBlog.id}}">
    <div class="p-4">
    <h2 class="text-xl font-semibold text-slate-100 mb-2 line-clamp-2"> 
        {{formattedBlog.title}}
    </h2>
    <div v-html="formattedBlog.content" class="text-slate-100 text-md mb-4 line-clamp-3 content"></div>
    
    <div class="flex flex-wrap items-center justify-between text-slate-100">
      <div class="flex space-x-3">
        <span v-for="tag in formattedBlog.tags" :key="tag" class="bg-sky-400 px-2 py-1 rounded-full text-sm">{{tag}}</span>
      </div>
      <span class="text-xs">{{formattedBlog.created_at}}</span>
    </div>
    
  </div>
  </router-link>
</div>

</template>

<script>
import { ref } from 'vue';
import { formatDistanceToNow } from 'date-fns';
export default {
    props:['blog'],
    setup(props){
        let formattedBlog = ref(null);
        let blog = props.blog;

          let formattedDate = formatDistanceToNow(blog.created_at.toDate())
          formattedBlog.value =  {...blog,created_at:formattedDate}
      return {formattedBlog}
    }
}
</script>

<style>
  .content h2{
    font-weight: bolder;
    text-transform: uppercase;
  }
  .content span{
    background-color: none;
    color: white;
  }
</style>