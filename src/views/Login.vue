<template>
  <div class="about">
    <h1 class="title">Login</h1>
    <LoginForm/>
  </div>
</template>

<script>
import LoginForm from "../components/LoginForm"

export default {
  data() {
    return {

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