<template>
    <div>
        <b-table hoverable="true" :data="users" :columns="columns">
            <template slot-scope="props">
                <b-table-column field="id" label="ID" width="40" numeric>
                    {{ props.row.id }}
                </b-table-column>
                <b-table-column field="email" label="Mail">
                    {{ props.row.email }}
                </b-table-column>
                <b-table-column field="admin" label="Admin">
                    <b-checkbox v-model="props.row.admin">
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