<template>
  <div class="about">
    <h1 class="title">Login</h1>
    <LoginForm @submit="login"/>
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
        const response = await axios.post("http://localhost:8081/login", user)
        response.status == 200 ? this.success("Logged in!") : this.error("Please verify your credentials.")

        localStorage.setItem("token", response.headers.authorization)
        localStorage.setItem("userId", response.data.ID)
        localStorage.setItem("organismId", response.data.OrganismId)
        setTimeout(() => {
          this.$router.push("/")
        }, 500);
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