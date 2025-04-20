<template>
    <!-- Login form -->
  <div class="min-h-screen flex items-center justify-center bg-slate-900 px-4">
    <div class="w-full max-w-md bg-slate-800 p-8 rounded-2xl shadow-lg">
        <h2 class="text-2xl font-bold text-white mb-6 text-center">Login to Your Account</h2>
        <form class="space-y-5" @submit.prevent="login">
        <div>
            <label class="block text-sm text-gray-300 mb-1">Email</label>
            <input
            type="email"
            placeholder="you@example.com"
            class="w-full px-4 py-2 bg-slate-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            v-model="email"
            />
        </div>
        <div>
            <label class="block text-sm text-gray-300 mb-1">Password</label>
            <input
            type="password"
            placeholder="••••••••"
            class="w-full px-4 py-2 bg-slate-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            v-model="password"
            />
        </div>
        <p v-if="checkingError" class="text-red-500 text-sm">
            You must to fill vaild email and password!
        </p>
        <p v-if="error" class="text-red-500 text-sm">
            {{error}}
        </p>
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
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import useLogin from '../composable/useLogin'
export default {
    setup(){
        let email = ref('');
        let password = ref('');
        let checkingError = ref(false)
        let router = useRouter()
        let changeForm = ()=>{
            router.push('/auth/signup')
        }
        let {error,loginAcc}=useLogin()
        let login = async ()=>{
            checkingError.value = false;
            if (email.value=="" || password.value=="") {
                checkingError.value = true;
                return
            }
            let user=await loginAcc(email.value,password.value);
            if (user) {
                router.push('/');
            }

        }
        return {changeForm,login,email,password,error,checkingError}
    }
}
</script>

<style>

</style>