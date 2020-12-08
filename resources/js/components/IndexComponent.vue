<template>
    <div>
        <h1>Posts</h1>
        <div class="row">
            <div class="col-md-10"></div>
            <div class="col-md-2">
                <router-link to="/posts/create" class="btn btn-primary">Create Post</router-link>
            </div>
        </div>
        <br />

        <table class="table table-hover">
            <thead>
            <tr>
                <th>ID</th>
                <th>Title post</th>
                <th>Body post</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="post in posts" :key="post.id">
                <td>{{ post.id }}</td>
                <td><router-link :to="{name: 'show', params: { id: post.id }}">{{ post.title }}</router-link></td>
                <td>{{ post.body }}</td>
                <td><router-link :to="{name: 'edit', params: { id: post.id }}" class="btn btn-primary">Edit</router-link></td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                posts: []
            }
        },
        created() {
            let uri = 'http://vue-demo.local/api/v1/posts';
            this.axios.get(uri).then(response => {
                console.log(response.data);
                this.posts = response.data;
            });
        },
        methods: {
            async createPost() {
                return this.$router.push('posts/create');
            },
        }
    }
</script>
