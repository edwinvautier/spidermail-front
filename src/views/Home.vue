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
export default {
  name: "Campaigns",
  data() {
    return {
      campaigns: [
        {
          name: "Test 1",
          authorName: "Johnnatan",
          subject: "Qu'est ce qui est jaune et qui attend ?"
        },
        {
          name: "Test 2",
          authorName: "Abraham",
          subject: "J'ai aboli l'esclavage!"
        },
        {
          name: "Test 3",
          authorName: "Ahmad",
          subject: "Ceci est un sujet de mail particulièrement intéressant."
        }
      ]
    }
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