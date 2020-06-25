<template>
    <div>
        <b-table hoverable :data="users">
            <template slot-scope="props">
                <b-table-column field="id" label="ID" width="40" numeric>
                    {{ props.row.ID }}
                </b-table-column>
                <b-table-column field="email" label="Mail">
                    {{ props.row.Email }}
                </b-table-column>
                <b-table-column field="admin" label="Admin">
                    <b-checkbox @input="updateUser(props.row)" v-model="props.row.Admin">
                    </b-checkbox>
                </b-table-column>   
                <b-table-column field="settings" label="Settings">
                    <b-button @click="deleteUser(props.row.ID)" type="is-danger">Remove user</b-button>
                </b-table-column>   
            </template>
        </b-table>
    </div>
</template>

<script>
import axios from "axios"
export default {
    props: ["users"],
    methods: {
        updateUser: async function(user) {
            try {
                const response = await axios.put("http://localhost:8080/users/"+user.ID, {...user})
                response.status == 200 ? this.success("Changes saved!") : this.error()
            } catch (err) {
                console.error(err)
                this.error("An error occured.")
            }
        },
        deleteUser: async function(id) {
            this.isComponentModalActive = false
            try {
                const response = await axios.delete("http://localhost:8080/users/"+id)
                response.status == 200 ? this.success("User deleted!") : this.error("Couldn't delete")

                setTimeout(() => {
                    this.users = this.users.filter((user)=>user.ID != id)
                }, 1000);
            } catch (err) {
                console.error(err)
                this.error("Couldn't delete.")
            }
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