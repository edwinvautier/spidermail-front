<template>
    <div class="userform">
        <h1 class="title">New recipients list</h1>
        <b-field label="Name">
            <b-input
                v-model="recipientList.name"
                maxlength="30">
            </b-input>
        </b-field>

        <h2 class="subtitle">Recipients</h2>
        <div>
            <b>recipients list</b>
            <p v-for="(recipient, index) in recipientList.recipients" :key="index">{{ recipient.Email }}</p><br/>
        </div>
        <AddRecipientForm @submit="newRecipient" />
        <br/>
        <b-field>
            <b-button :disabled="recipientList.name == '' || recipientList.recipients == []" @click="submit" type="is-info">Create recipient list</b-button>
        </b-field>
    </div>
</template>

<script>
import AddRecipientForm from "@/components/AddRecipientForm"

export default {
    data() {
        return {
            recipientList: {
                name: "",
                recipients: [],
                organismId: Number(localStorage.getItem("organismId"))
            }
        }
    },
    methods: {
        newRecipient: function(recipient) {
            if (!recipient.Email) return
            this.recipientList.recipients.push(recipient)
        },
        submit: function() {
            this.$emit("submit", this.recipientList)
        }
    },
    components: {
        AddRecipientForm
    }
}
</script>

<style lang="scss" scoped>
.userform {
    margin: 50px;

}
</style>