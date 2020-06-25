<template>
    <div class="container">
        <CampaignForm @submit="createCampaign"/>
    </div>
</template>

<script>
import CampaignForm from "@/components/CampaignForm.vue"
import axios from "axios"

export default {
    components: {
        CampaignForm
    },
    methods: {
        createCampaign: async function(campaign) {
        try {
            const response = await axios.post("http://localhost:8080/campaigns", campaign)
            response.status == 201 ? this.success("Created campaign!") : this.error("Couldn't create campaign")
            setTimeout(() => {
                this.$router.push("/")
            }, 1000);
        } catch (err) {
            console.error(err)
            this.error("Couldn't create campaign")
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