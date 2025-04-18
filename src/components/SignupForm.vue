<template>
    <!-- Signup form -->
  <div class="min-h-screen flex items-center justify-center bg-slate-900 px-4">
    <div class="w-full max-w-md bg-slate-800 p-8 rounded-2xl shadow-lg">
        <h2 class="text-2xl font-bold text-white mb-6 text-center">Create a New Account</h2>
        <form class="space-y-5">
        <div>
            <label class="block text-sm text-gray-300 mb-1">Username</label>
            <input
            type="text"
            placeholder="Username"
            class="w-full px-4 py-2 bg-slate-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
        </div>
        <div>
            <label class="block text-sm text-gray-300 mb-1">Email</label>
            <input
            type="email"
            placeholder="you@example.com"
            class="w-full px-4 py-2 bg-slate-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
        </div>
        <div>
            <label class="block text-sm text-gray-300 mb-1">Password</label>
            <input
            type="password"
            placeholder="Create a password"
            class="w-full px-4 py-2 bg-slate-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
        </div>
        <div>
            <label class="block text-sm text-gray-300 mb-1">Confirm Password</label>
            <input
            type="password"
            placeholder="Re-enter your password"
            class="w-full px-4 py-2 bg-slate-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
        </div>
        <button
            type="submit"
            class="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md"
        >
            Sign Up
        </button>
        </form>
        <p class="mt-4 text-sm text-center text-gray-400">
        Already have an account?
        <span class="text-green-400 hover:underline cursor-pointer" @click="changeForm">Log in</span>
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
            router.push('/auth/login')
        }
        return {changeForm}
    }
}
</script>

<style>

</style>