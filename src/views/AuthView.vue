<template>
    <div v-if="formToggle==='login'">
        <LoginForm></LoginForm>
    </div>

    <div v-if="formToggle==='signup'">
        <SignupForm></SignupForm>
    </div>

</template>

<script>
import SignupForm from '../components/SignupForm'
import LoginForm from '../components/LoginForm'
import { ref, watch } from 'vue'
export default {
  components: {
    SignupForm, LoginForm },
    props: ['status'],
    setup(props){
        let formToggle = ref(props.status)
        watch(
            ()=>props.status, // getter function
            ()=>{
            formToggle.value = props.status
        })

        return {formToggle}
    }
}
</script>

<style>

</style>