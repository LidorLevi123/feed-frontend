<template>
    <section class="msg-form">
        <span class="title">Leave a Comment</span>
        <form class="form" @submit.prevent="onSubmitComment">
            <div class="group">
                <input placeholder="" type="email" id="email" name="email" required="" v-model="comment.by.email">
                <label for="email">Email</label>
            </div>
            <div class="group">
                <textarea placeholder="" id="comment" name="comment" rows="5" required="" v-model="comment.txt"></textarea>
                <label for="comment">Comment</label>
            </div>
            <button type="submit">Submit</button>
        </form>
    </section>
</template>
  
  
<script>

export default {

    data() {
        return {
            comment: {
                by: {
                    email: '',
                    imgUrl: `https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50`
                },
                txt: ''
            }
        }
    },

    methods: {
        onSubmitComment() {
            console.log(this.by);
        }
    }
}
</script>