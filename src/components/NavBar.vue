<template>
  <nav class=" shadow-sm px-4 py-3 flex justify-between items-center">
    <!-- Logo -->
    <router-link to="/" class=" text-xl font-bold text-blue-600">
      <img src="../assets/images/logo.png" alt="" class="inline-block w-[100px]">
    </router-link>

    <!-- Auth Buttons / Profile -->
      <div class="flex items-center gap-3">
        <div class="relative">
          <!-- Profile Image -->
          <img
            src="../assets/images/profile.svg"
            alt="User"
            class="w-9 h-9 rounded-full border cursor-pointer hover:shadow-md transition"
            @click="toggleMenu"
          />

          <!-- Dropdown Menu with Fade Animation -->
          <transition name="fade">
            <div
              v-if="showMenu"
              class="absolute right-0 mt-2 w-48 bg-slate-900 border border-sky-400 rounded-lg shadow-lg p-3 z-50"
            >
              <!-- If user is logged in -->
              <div v-if="user">
                <div class="flex items-center gap-2 mb-3">
                  <div class="text-sm font-medium text-white">
                    <span>Welcome </span>
                    {{ user.displayName || 'User' }}
                  </div>
                </div>
                <button
                  @click="logout"
                  class="w-full text-left text-red-500 hover:bg-slate-800 text-sm cursor-pointer p-2 rounded-md"
                >
                  <img src="../assets/images/logout.svg" alt="" class="inline-block">
                  <span>
                    Logout
                  </span>
                </button>
              </div>

              <!-- If user is not logged in -->
              <div v-else class="space-y-2">
                <router-link
                  to="/auth/login"
                  class="block w-full text-center bg-blue-600 text-white py-1.5 rounded-md hover:bg-blue-700 text-sm font-medium transition"
                >
                  Login
                </router-link>
                <router-link
                  to="/auth/signup"
                  class="block w-full text-center bg-gray-100 text-gray-800 py-1.5 rounded-md hover:bg-gray-200 text-sm font-medium transition"
                >
                  Signup
                </router-link>
              </div>
            </div>
          </transition>
        </div>
      </div>
  </nav>
</template>

<script>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/database/config'
import useLogout from '../composable/useLogout'

export default {
    setup(){
        let route = useRoute;
        let user = ref(null);
        let showMenu = ref(false)
        let toggleMenu = ()=>{
          showMenu.value = !showMenu.value 
        }
        onMounted(()=>{
            onAuthStateChanged(auth,(currentUser)=>{
                user.value = currentUser
            })
        })
        let logoutAcc = useLogout()
        let logout = async ()=>{
          await logoutAcc()
          alert("Logout successfully!")
        }
        return {route,user,showMenu,toggleMenu,logout}
        
    }
}
</script>

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.2s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>