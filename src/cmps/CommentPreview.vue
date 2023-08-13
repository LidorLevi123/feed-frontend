<template>
    <article class="comment-preview">
        <img :src="comment.by.imgUrl" alt="">
        <h5>{{ comment.by.email }}</h5>
        <span>{{ comment.txt }}</span>
    </article>
</template>
  
<script>
export default {
    props: {
        comment: { type: Object }
    }
}
</script>