<template>
    <div>
        <b-field label="Name">
            <b-input
                v-model="name"
                maxlength="30">
            </b-input>
        </b-field>
        <b-field label="Email"
        :type="isInvalidMail?'is-danger':''"
        :message="isInvalidMail?'This email is invalid':''">
            <b-input type="email"
                v-on:input="validateMail"
                v-model="email"
                maxlength="30">
            </b-input>
        </b-field>
        <b-field>
            <b-button :disabled="isInvalidMail" @click="newRecipient" type="is-info">Add recipient</b-button>
        </b-field>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isInvalidMail: false,
            name: "",
            email: "",
        }
    },
    methods: {
        validateMail: function() {
            let isValid = /([A-z.]*@[A-z]*\.[a-z]*)\w/.test(this.email)
            isValid ? this.isInvalidMail = false : this.isInvalidMail = true
        },
        newRecipient: function() {
            this.$emit("submit", {Name: this.name, Email: this.email})
            this.name = ""
            this.email = ""
        }
    }
}
</script>