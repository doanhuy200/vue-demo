<template>
    <div>
        <h1>Posts</h1><br />
        <p>#{{ post.id }}</p>
        <p>Title: {{ post.title }}</p>
        <p>Body: {{ post.body }}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                post: []
            }
        },
        created() {
            let uriShow = 'http://vue-demo.local/api/v1/posts/' + this.$route.params.id;
            this.axios.get(uriShow).then(response => {
                console.log(response.data);
                this.post = response.data;
            });
        },
    }
</script>
