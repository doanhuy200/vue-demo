<template>
    <div>
        <h1>Create A Post</h1>
        <form-component v-bind:postId="postId"></form-component>
    </div>
</template>

<script>
    import FormComponent from "./Util/FormComponent"
    export default {
        data() {
            return{
                postId : parseInt(this.$route.params.id)
            }
        },
        components:{
            FormComponent,
        },
    }
</script>
