<template>
    <div>
        <h1>Update A Post</h1>
        <form-component-post v-bind:postId="postId" v-on:submitFormEvent="handleUpdatePost"></form-component-post>
    </div>
</template>

<script>
    import FormComponent from "./components/Form"
    export default {
        data() {
            return{
                postId : parseInt(this.$route.params.id)
            }
        },
        methods:{
            handleUpdatePost(form){
                let uri = 'http://vue-demo.local/api/v1/posts/' + this.postId + '/update';
                this.axios.post(uri, {
                    'title':       form.title,
                    'description': form.description,
                });
                return this.$router.push('/posts');
            }
        },
        components: {
            'form-component-post': FormComponent
        },
    }
</script>
