<template>
    <section class="comment-list">

        <input class="filter" name="text" placeholder="Filter" type="search">

        <ul class="clean-list">
            <li v-for="comment in comments" :key="comment._id">
                <CommentPreview :comment="comment"/>
            </li>
        </ul>
    </section>
</template>

<script>
import CommentPreview from './CommentPreview.vue'

export default {
    name: 'CommentList',

    props: {
        comments: { type: Array }
    },
    components: {
        CommentPreview,
    },
}
</script>