<template>
    <article class="comment-preview">
        <img :src="comment.by.imgUrl" alt="">
        <h2>{{ comment.by.email }}</h2>
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