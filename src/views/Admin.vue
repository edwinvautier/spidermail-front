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