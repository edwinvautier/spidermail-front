<template>
  <div class="about">
    <h1 class="title">Login</h1>
    <LoginForm @submit="login"/>
    <router-link to="/registrate">Not registered yet ?</router-link>
  </div>
</template>

<script>
import axios from "axios"
import LoginForm from "../components/LoginForm"

export default {
  data() {
    return {
      user: {
        name: "",
        password: ""
      }
    }
  },
  methods: {
    login: async function(user) {
      try {
        const response = await axios.post("http://localhost:8080/login", user)
        response.status == 200 ? this.success("Logged in!") : this.error("Please verify your credentials.")
        setTimeout(() => {
          this.$router.push("/")
        }, 1000);
      } catch (err) {
        console.error(err)
        this.error("Please verify your credentials.")
      }
    },
    success(message) {
      this.$buefy.toast.open({
          message: message,
          type: 'is-success'
      })
    },
    error(err) {
        const message = err != undefined ? err : 'Unable to make changes.'
        this.$buefy.toast.open({
            message: message,
            type: 'is-danger'
        })
    }
  },
  components: {
    LoginForm
  }
}
</script>

<style lang="scss" scoped>
.about {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>