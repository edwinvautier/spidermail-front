<template>
    <div class="userform">
        <b-field label="Name">
            <b-input v-model="name"></b-input>
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
            <b-button type="is-info">Registrate</b-button>
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
            admin: false,
        }
    },
    mounted() {
        console.log(this.$route.query.registrationtoken)
    },
    methods: {
        validateMail: function() {
            let isValid = /([A-z.]*@[A-z]*\.[a-z]*)\w/.test(this.email)
            isValid ? this.isInvalidMail = false : this.isInvalidMail = true
        }
    }
}
</script>

<style lang="scss" scoped>
.userform {
    margin: 50px;

}
</style>