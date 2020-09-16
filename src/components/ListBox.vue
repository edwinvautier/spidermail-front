<template>
    <router-link to="/lists" class="box">
    <article class="media">
        <div class="media-content">
        <div class="content">
            <p>
                <strong>{{ list.Name }}</strong> 
            </p>
        </div>
        </div>
    </article>
    </router-link>
</template>

<script>
export default {
    props: ['list']
}
</script>