<template>
    <form>
        <b-field label="Name">
            <b-input
                maxlength="100"
                v-model="campaign.name">
            </b-input>
        </b-field>
        <b-field label="Subject">
            <b-input
                maxlength="150"
                v-model="campaign.subject">
            </b-input>
        </b-field>
        <b-field label="Content">
            <b-input
                maxlength="500"
                v-model="campaign.content"
                type="textarea">
            </b-input>
        </b-field>
        <b-field label="Recipients List">
            <b-select v-model="campaign.recipientListId" placeholder="Select a list">
                <option v-for="(list, index) in recipientsLists" :key="index"  :value="list.id">{{ list.name }}</option>
            </b-select>
        </b-field>
        <b-button @click="submit" type="is-info">Create Campaign</b-button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            campaign: {
                name: "",
                subject: "",
                content: "",
                recipientListId: 0,
            },
            recipientsLists: [
                {
                    id: 1,
                    name: "Liste numero 1"
                },
                {
                    id: 2,
                    name: "Liste numero 2"
                },
                {
                    id: 3,
                    name: "Liste numero 3"
                }
            ]
        }
    },
    methods: {
        submit: function() {
            this.$emit("submit", {...this.campaign})
        }
    }
}
</script>


<style lang="scss" scoped>
form {
  width: 50vw;
}
</style>