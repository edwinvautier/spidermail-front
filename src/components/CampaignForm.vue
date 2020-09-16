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
            <b-select v-model="campaign.RecipientsListId" placeholder="Select a list">
                <option v-for="(list, index) in recipientsLists" :key="index"  :value="list.ID">{{ list.Name }}</option>
            </b-select>
        </b-field>
        <b-field label="Sending date">
            <b-datepicker
                v-model="campaign.dateStart"
                placeholder="Click to select..."
                icon="calendar-today"
                trap-focus>
            </b-datepicker>
        </b-field>
        <b-button @click="submit" type="is-info">Create Campaign</b-button>
    </form>
</template>

<script>
import axios from "axios"

export default {
    data() {
        return {
            campaign: {
                dateStart: null,
                name: "",
                subject: "",
                content: "",
                organismId: Number(localStorage.getItem("organismId"))
            },
            recipientsLists: [
                {
                    id: 1,
                    Name: "Liste numero 1"
                },
                {
                    id: 2,
                    Name: "Liste numero 2"
                },
                {
                    id: 3,
                    Name: "Liste numero 3"
                }
            ]
        }
    },
    methods: {
        submit: function() {
            this.$emit("submit", {...this.campaign})
        }
    },
    async mounted() {
        const response = await axios.get("http://localhost:8081/organisms/" + localStorage.getItem("organismId") + "/groups", 
        {
            headers: {
                "Authorization": localStorage.getItem('token')
            }
        })

        this.recipientsLists = response.data
    }
}
</script>


<style lang="scss" scoped>
form {
  width: 50vw;
}
</style>