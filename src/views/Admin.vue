<template>
    <div class="container">
        <h1 class="title">Administration interface</h1>
        <div class="form">
            <AddUserForm/>
        </div>
        <UserTable :users="users"/>
    </div>
</template>

<script>
import axios from "axios"
import UserTable from "@/components/UserTable";
import AddUserForm from "@/components/AddUserForm";
import jwt_decode from "jwt-decode";

export default {
    data() {
        return {
            users: []
        }
    },
    components: {
        UserTable,
        AddUserForm
    },
    async mounted() {
        if(localStorage.getItem("token") == null)
            this.$router.push("login")
        const decodedToken = jwt_decode(localStorage.getItem("token"))
        if(!decodedToken.admin)
            this.$router.back()
        const response = await axios.get("http://localhost:8081/organisms/" + localStorage.getItem("organismId") + "/users",{
            headers: {
                "Authorization": localStorage.getItem('token')
            }
        })
        this.users = response.data
    }
}
</script>

<style lang="scss" scoped>
.container {
    width: 60vw;
    margin-left: 20vw;
}
.form {
    width: 50vw;
    margin-left: 5vw;
}
</style>