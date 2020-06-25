<template>
    <router-link :to="'/campaigns/' + campaign.ID" class="box">
    <article class="media">
        <div class="media-content">
        <div class="content">
            <p>
                <strong>{{ campaign.Name }}</strong> <small>{{ campaign.authorName}}</small>
                <br>
                {{ campaign.Subject }}
            </p>
        </div>
        </div>
    </article>
    </router-link>
</template>

<script>
export default {
    props: ['campaign']
}
</script>