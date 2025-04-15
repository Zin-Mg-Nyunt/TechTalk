<template>
      <div class="max-w-4xl mx-auto px-4 py-10" v-if="formattedBlog">
        <article class="bg-white shadow-md rounded-lg overflow-hidden">
        <!-- Thumbnail -->
        <img
            v-if="formattedBlog.thumbnail"
            :src="formattedBlog.thumbnail"
            alt="Blog Thumbnail"
            class="w-full h-64 object-cover"
        />

        <!-- Blog content -->
        <div class="p-6">
            <!-- Title -->
            <h1 class="text-3xl font-bold mb-4 text-gray-900">{{ formattedBlog.title }}</h1>

            <!-- Meta Info -->
            <div class="text-sm text-gray-500 mb-6 flex items-center gap-4">
            <span>🗓️ {{formattedBlog.created_at }}</span>
            <span v-if="formattedBlog.tags?.length">🏷️ {{ formattedBlog.tags.join(', ') }}</span>
            </div>

            <!-- Rich content -->
            <div class="prose max-w-none prose-sm sm:prose lg:prose-lg prose-img:rounded" v-html="formattedBlog.content"></div>
        </div>
        </article>
  </div>
</template>

<script>

import getBlog from "../composable/getBlog";
import { formatDistanceToNow } from "date-fns";
import { onMounted, ref } from 'vue';

export default {
    props:['id'],
    setup(props){
        let formattedBlog = ref(null)
        let {error,load,blog}=getBlog()
        
        onMounted(async ()=>{
            await load(props.id); 
            let formattedDate = formatDistanceToNow(blog.value.created_at.toDate())
            formattedBlog.value =  {...blog.value,created_at:formattedDate}
        })
        
        return {error,blog,formattedBlog}
    }
}
</script>

<style>

</style>