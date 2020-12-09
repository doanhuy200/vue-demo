<template>
    <form>
        <div class="form-group">
            <label for="post-title">Post Title:</label>
            <input
                class="form-control"
                v-model="form.title"
                id="post-title"
                placeholder="Title"
            >
        </div>

        <div class="form-group">
            <label for="post-description">Post Description:</label>
            <textarea
                class="form-control"
                v-model="form.description"
                id="post-description"
                placeholder="Body" rows="5"
            ></textarea>
        </div>
        <button type="button" class="btn btn-primary" v-on:click="handleFormSubmit" >Create</button>
    </form>
</template>

<script>
    import ButtonComponent from './ButtonComponent';
    export default {
        components: {
            'button-component-create': ButtonComponent
        },
        props: {
            postId: Number
        },
        data(){
            return {
                form: {
                    title: this.title,
                    description: this.description
                },
            }
        },
        mounted() {
            if (this.postId != "") {
                let uri = 'http://vue-demo.local/api/v1/posts/' + this.postId;
                this.axios.get(uri).then(response => {
                    console.log(response.data);
                    var tmpPost = response.data;
                    this.form.title = tmpPost.title;
                    this.form.description = tmpPost.description;
                });
            }
        },
        methods: {
            handleFormSubmit(){
                console.log("click");
                this.$emit("submitFormEvent", this.form);
            }
        }
    }
</script>
