<template>
  <div class=" flex flex-col md:flex-row justify-between items-center gap-x-10 md:py-10">
    <div class="px-[50px] sm:px-0  md:w-[400px] lg:w-[500px] xl:w-[700px] 2xl:w-[700px] h-[300px] md:h-auto flex flex-col justify-center md:inline-block">
        <p class=" text-slate-100 text-lg 2xl:text-xl 2xl:leading-8">
            <span class=" text-sky-400">
                Welcome to TechTalks    
            </span> — a simple blog where you can explore and share ideas about technology. Whether you're learning to code, staying updated on trends, or just love tech, this is the place for you. Easy to read, easy to write — tech made friendly."
        </p>
        <div v-if="notUser">
            <button class="px-7 py-2 bg-sky-400 text-slate-100 m-5 rounded-lg cursor-pointer active:bg-sky-300">Login</button>
            <span class="text-slate-100">or</span>
            <button class="px-7 py-2 bg-sky-400 text-slate-100 m-5 rounded-lg cursor-pointer active:bg-sky-300">Signup</button>
        </div>
    </div>
    <div class="px-[50px] sm:px-0  md:w-[400px] lg:w-[500px] ">
        <img src="../assets/images/heroSection.png" alt="" class="w-full sm:w-[80%]">
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
    setup(){
        let notUser = ref(true);

        return {notUser}
    }
}
</script>

<style>

</style>