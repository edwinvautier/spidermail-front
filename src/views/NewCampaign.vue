<template>
    <div class="container">
        <CampaignForm/>
    </div>
</template>

<script>
import CampaignForm from "@/components/CampaignForm.vue"
export default {
    components: {
        CampaignForm
    }
}
</script>


<style lang="scss" scoped>
.container {
    width: 60vw;
    margin-left: 20vw;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>