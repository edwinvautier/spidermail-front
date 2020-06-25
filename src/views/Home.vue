<template>
  <div class="home">
    <h1 class="title">Your campaigns</h1>
    <router-link to="/new-campaign">
      <b-button type="is-info">Create campaign</b-button>
    </router-link>

    <div class="campaigns">
      <CampaignBox :key="i" v-for="(campaign, i) in campaigns" :campaign="campaign"/>
    </div>
  </div>
</template>

<script>
import CampaignBox from "@/components/CampaignBox.vue";
import axios from "axios";

export default {
  name: "Campaigns",
  data() {
    return {
      campaigns: []
    }
  },
  async mounted() {
    
    const response = await axios.get('http://localhost:8080/campaigns')

    this.campaigns = response.data
  },
  components: {
    CampaignBox
  }
};
</script>

<style lang="scss">
.campaigns {
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