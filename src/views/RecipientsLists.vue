<template>
  <div class="home">
    <h1 class="title">Your lists</h1>
    <router-link to="/lists/new">
      <b-button type="is-info">Create list</b-button>
    </router-link>

    <div class="lists">
      <ListBox :key="i" v-for="(list, i) in lists" :list="list"/>
    </div>
  </div>
</template>

<script>
import ListBox from "@/components/ListBox.vue";
import axios from "axios";

export default {
  name: "Lists",
  data() {
    return {
      lists: []
    }
  },
  async mounted() {
    const response = await axios.get('http://localhost:8080/groups',{
      headers: {
          "Authorization": localStorage.getItem('token')
      }
    })

    this.lists = response.data
  },
  components: {
    ListBox
  }
};
</script>

<style lang="scss" scoped>
.lists {
  width: 80vw;
  margin-top: 30px;
}

.home {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style> 