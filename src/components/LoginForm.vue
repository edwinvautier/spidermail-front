<template>
    <form>
        <b-field label="Email"
        :type="isInvalidMail?'is-danger':''"
        :message="isInvalidMail?'This email is invalid':''">
        <b-input type="email"
            maxlength="30"
            v-on:input="validateMail"
            v-model="email">
        </b-input>
        </b-field>
        <b-field label="Password"
            :type="isShortPassword?'is-warning':''"
            :message="isShortPassword?['Password is too short', 'Password must have at least 8 characters']:[]">
            <b-input v-model="password" v-on:input="validatePassword" type="password" maxlength="30"></b-input>
        </b-field>
        <b-button @click="submit" :disabled="isInvalidMail || password == '' ? true : false" type="is-info">Connect</b-button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            isInvalidMail: false,
            isShortPassword: false,
            email: "",
            password: ""
        }
    },
    methods: {
        validatePassword: function() {
            this.password.length < 5 ? this.isShortPassword = true : this.isShortPassword = false
        },
        validateMail: function() {
            let isValid = /([A-z.]*@[A-z]*\.[a-z]*)\w/.test(this.email)
            isValid ? this.isInvalidMail = false : this.isInvalidMail = true
        },
        submit() {
            this.$emit("submit", {email: this.email, password: this.password})
        }
    }
}
</script>


<style lang="scss" scoped>
form {
  width: 50vw;
}
</style>