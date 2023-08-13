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
import { commentService } from '../services/comment.service'

export default {

    data() {
        return {
            comment: commentService.getEmptyComment()
        }
    },

    methods: {
        async onSubmitComment() {
            try {
                await this.$store.dispatch({ type: 'addComment', comment: this.comment })
                this.comment = commentService.getEmptyComment()
                console.log('Comment saved successfully!')
            } catch (err) {
                console.log('Could not save comment', err.message)
            }
        }
    }
}
</script>