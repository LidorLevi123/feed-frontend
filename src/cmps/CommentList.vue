<template>
    <section class="comment-list">

        <input class="filter" name="text" placeholder="Filter" type="search" v-model="filterBy.email">

        <ul class="clean-list">
            <li v-for="comment in comments" :key="comment._id">
                <CommentPreview :comment="comment"/>
            </li>
        </ul>
    </section>
</template>

<script>
import CommentPreview from './CommentPreview.vue'
import { utilService } from '../services/util.service'

export default {
    name: 'CommentList',

    props: {
        comments: { type: Array }
    },

    data() {
        return {
            filterBy: {
                email: '',
            },
        }
    },

    created() {
        this.filter = utilService.debounce(() => {
            this.$emit('filter', this.filterBy)
        }, 600)
    },

    watch: {
        filterBy: {
            handler() {
                this.filter()
            },
            deep: true,
        },
    },
    
    components: {
        CommentPreview,
    },
}
</script>