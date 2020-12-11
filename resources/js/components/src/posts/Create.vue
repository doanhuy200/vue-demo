<template>
    <div>
        <h1>Create A Post</h1>
        <form-component-post v-on:submitFormEvent="handleCreatePost"></form-component-post>
    </div>
</template>

<script>
    import FormComponent from './components/Form';

    export default {
        components: {
            'form-component-post': FormComponent
        },
        methods:{
            handleCreatePost(form){
                let uri = 'http://vue-demo.local/api/v1/posts/store';
                this.axios.post(uri, {
                    'title': form.title,
                    'description': form.description,
                });
                return this.$router.push('/posts');
            }
        }
    }
</script>
