<template>
    <div class="mt-10">
    <!-- Comment Header -->
    <h2 class="text-xl font-semibold mb-4 text-gray-800">Comments</h2>

        <!-- Comment List -->
    <div v-if="comments.length > 0" class="space-y-6">
      <div

        class="border border-gray-200 p-4 rounded-md bg-white shadow-sm"
      >
        <div class="flex items-start gap-3">
          <img
            src="../assets/images/profile.svg"
            alt="User"
            class="w-9 h-9 rounded-full"
          />
          <div class="flex-1">
            <div class="flex justify-between items-center">
              <p class="font-medium text-gray-800 text-sm">
                <!-- {{ comment.displayName || 'Anonymous' }} -->
              </p>
              <span class="text-xs text-gray-400">1.2.2025</span>
            </div>
            <p class="mt-1 text-gray-700 text-sm whitespace-pre-line">
              Hello
            </p>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="text-gray-500 text-sm">No comments yet. Be the first to comment!</div>

    <!-- New Comment Box -->
    <div v-if="user" class="mt-6">
      <div class="flex gap-3 items-start">
        <img
          src="../assets/images/profile.svg"
          alt="User"
          class="w-10 h-10 rounded-full"
        />
        <div class="flex-1">
          <textarea
            placeholder="Add a comment..."
            class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm resize-none"
            rows="3"
          ></textarea>
          <div class="flex justify-end mt-2">
            <button
              @click="postComment"
              class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-md text-sm transition"
            >
              <!-- {{ loading ? 'Posting...' : 'Post Comment' }} -->
              Post Comment
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="mb-6 text-gray-600 text-sm">
      <router-link to="/auth/login" class="text-blue-600 hover:underline">Login</router-link> to add a comment.
    </div>


  </div>
</template>

<script>
import { ref } from 'vue'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/database/config'
export default {
    setup(){
        let user = ref(false);
        let comments = ref(['a']);
            onAuthStateChanged(auth,(currentUser)=>{
                if (currentUser) {
                    user.value = true;
                }else{
                    user.value = false;
                }
            })
        return {user,comments}
    }
}
</script>

<style>

</style>