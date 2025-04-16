<template>
   <div class="mt-10 text-center">
    <span v-for="tag in uniqueTag" :key="tag" class="px-6 py-3 text-sm text-slate-100 bg-sky-400 mx-6 rounded-xl capitalize cursor-pointer tracking-wider">
        <router-link :to="{name:'tagView',params:{tag}}">
            {{tag}}
        </router-link>
    </span>
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