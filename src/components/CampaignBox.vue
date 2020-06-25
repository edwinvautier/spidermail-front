<template>
    <div class="box">
    <article class="media">
        <div class="media-content">
        <div class="content">
            <p>
                <strong>{{ campaign.name }}</strong> <small>{{ campaign.authorName}}</small>
                <br>
                {{ campaign.subject }}
            </p>
        </div>
        </div>
    </article>
    </div>
</template>

<script>
export default {
    props: ['campaign']
}
</script>