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
                    <b-checkbox v-model="props.row.Admin">
                    </b-checkbox>
                </b-table-column>   
                <b-table-column field="settings" label="Settings">
                    <b-button type="is-danger">Remove user</b-button>
                </b-table-column>   
            </template>
        </b-table>
    </div>
</template>

<script>
export default {
    props: ["users"],
}
</script>