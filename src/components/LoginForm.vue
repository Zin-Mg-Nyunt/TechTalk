<template>
    <!-- Login form -->
  <div class="min-h-screen flex items-center justify-center bg-slate-900 px-4">
    <div class="w-full max-w-md bg-slate-800 p-8 rounded-2xl shadow-lg">
        <h2 class="text-2xl font-bold text-white mb-6 text-center">Login to Your Account</h2>
        <form class="space-y-5">
        <div>
            <label class="block text-sm text-gray-300 mb-1">Email</label>
            <input
            type="email"
            placeholder="you@example.com"
            class="w-full px-4 py-2 bg-slate-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
        <div>
            <label class="block text-sm text-gray-300 mb-1">Password</label>
            <input
            type="password"
            placeholder="••••••••"
            class="w-full px-4 py-2 bg-slate-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
        <button
            type="submit"
            class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md"
        >
            Login
        </button>
        </form>
        <p class="mt-4 text-sm text-center text-gray-400">
        Don’t have an account?
        <span class="text-blue-400 hover:underline cursor-pointer" @click="changeForm">Sign up</span>
        </p>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
    setup(){
        let router = useRouter()
        let changeForm = ()=>{
            router.push('/auth/signup')
        }
        return {changeForm}
    }
}
</script>

<style>

</style>