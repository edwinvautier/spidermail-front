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
import UserTable from "@/components/UserTable";
import AddUserForm from "@/components/AddUserForm";

export default {
    data() {
        return {
            users: [
                    { 'id': 1, 'name': 'Jesse', 'email': 'jesse@gmail.com', 'admin': false},
                    { 'id': 2, 'name': 'John', 'email': 'john@gmail.com', 'admin': false},
                    { 'id': 3, 'name': 'Tina', 'email': 'tina@gmail.com', 'admin': true},
                    { 'id': 4, 'name': 'Clarence', 'email': 'clarence@gmail.com', 'admin': false},
                    { 'id': 5, 'name': 'Anne', 'email': 'anne@gmail.com', 'admin': false}
            ]
        }
    },
    components: {
        UserTable,
        AddUserForm
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