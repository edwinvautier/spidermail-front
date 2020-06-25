<template>
  <div class="about">
    <h1 class="title">Registrate</h1>
    <RegistrationForm/>
  </div>
</template>

<script>
import RegistrationForm from "../components/RegistrationForm"

export default {
  data() {
    return {

    }
  },
  components: {
    RegistrationForm
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