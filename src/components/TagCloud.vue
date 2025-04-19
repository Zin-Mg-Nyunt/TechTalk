<template>
   <div class="mt-10 flex justify-center flex-wrap">
    <div v-for="tag in uniqueTag" :key="tag" class="mx-6">
        <router-link :to="{name:'tagView',params:{tag}}">
            <span class="px-6 py-3 text-sm text-slate-100 bg-sky-400 rounded-xl capitalize cursor-pointer tracking-wider select-none active:bg-sky-600">
                {{tag}}
            </span> 
        </router-link>
    </div>
   </div>
</template>

<script>
import { computed } from 'vue'
export default {
    props : ['blogs'],
    setup(props){
        let uniqueTag = computed(()=>{
            if (!props.blogs) {
                return []
            }
            // take out all tags from blogs
            let allTag=props.blogs.flatMap(blog=>blog.tags)
            return [...new Set(allTag)] // new Set() remove duplicate tags and return object
        })
        return {uniqueTag}
    }
}
</script>

<style>

</style>