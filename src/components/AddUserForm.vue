<template>
    <div class="userform">
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
        <b-field label="Admin">
            <b-checkbox v-model="admin">
            </b-checkbox>
        </b-field>
        <b-field>
            <b-button :disabled="isInvalidMail" @click="submitUser" type="is-info">Add user</b-button>
        </b-field>
    </div>
</template>

<script>
import axios from "axios"

export default {
    data() {
        return {
            isInvalidMail: false,
            name: "",
            email: "",
            password: "test",
            admin: false,
            organismId: Number(localStorage.getItem("organismId"))
        }
    },
    methods: {
        validateMail: function() {
            let isValid = /([A-z.]*@[A-z]*\.[a-z]*)\w/.test(this.email)
            isValid ? this.isInvalidMail = false : this.isInvalidMail = true
        },
        submitUser: async function() {
            const response = await axios.post("http://localhost:8081/registration",
            {
                name: this.name,
                email: this.email,
                password: this.password,
                organismId: this.organismId,
                admin: this.admin
            })
            
            response.status == 201 ? this.success("Created user!") : this.error("Couldn't create user")

            window.location.reload()
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
.userform {
    margin: 50px;

}
</style>