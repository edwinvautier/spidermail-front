<template>
    <div class="new-list">
        <AddRecipientListForm @submit="createList"/>
    </div>
</template>

<script>
import axios from "axios"
import AddRecipientListForm from "@/components/AddRecipientListForm"

export default {
    methods: {
        createList: async function(list) {
            try {
                const response = await axios.post("http://localhost:8080/groups", list,{
                    headers: {
                        "Authorization": localStorage.getItem('token')
                    }
                })
                response.status == 201 ? this.success("recipients list created") : this.error("Couldn't create list.")
            } catch (error) {
                console.error(error)
                this.error("Couldn't create list")
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
    },
    components: {
        AddRecipientListForm
    }
}
</script>

<style lang="scss" scoped>

</style>