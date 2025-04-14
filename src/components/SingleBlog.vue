<template>
  <div class="max-w-md mx-auto bg-transparent rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border-sky-400 border-1 cursor-pointer">
  <img class="w-full h-48 object-cover" :src="blog.thumbnail" alt="Blog thumbnail" />
  <div class="p-4">
    <h2 class="text-xl font-semibold text-slate-100 mb-2 line-clamp-2"> 
        {{blog.title}}
    </h2>
    <p class="text-slate-100 text-sm mb-4 line-clamp-3">
        {{blog.content}}
    </p>
    
    <div class="flex flex-wrap items-center justify-between text-slate-100">
      <div class="flex space-x-3">
        <span v-for="tag in blog.tags" :key="tag" class="bg-sky-400 px-2 py-1 rounded-full text-sm">{{tag}}</span>
      </div>
      <span class="text-xs">Apr 13, 2025</span>
    </div>
  </div>
</div>

</template>

<script>
export default {
    props:['blog'],
    setup(props){
    }
}
</script>

<style>

</style>