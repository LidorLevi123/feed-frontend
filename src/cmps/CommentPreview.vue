<template>
    <article v-show="isImgLoaded" class="comment-preview">
        <img :src="comment.by.imgUrl" alt="" @load="onLoad">
        <h2>{{ comment.by.email }}</h2>
        <span>{{ comment.txt }}</span>
    </article>
    <Loader v-show="!isImgLoaded"/>
</template>
    
<script>
import Loader from './Loader.vue'

export default {
    props: {
        comment: { type: Object }
    },

    data() {
        return {
            isImgLoaded: false
        }
    },

    methods: {
        onLoad() {
            this.isImgLoaded = true;
        }
    },
    
    components: {
        Loader
    }
}
</script>
  