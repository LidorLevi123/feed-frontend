<template>
  <section class="app">
    <MsgForm />
    <CommentList />
  </section>
</template>

<script>
import MsgForm from './cmps/MsgForm.vue';
import CommentList from './cmps/CommentList.vue';

export default {
    components: { 
      MsgForm,
      CommentList
    }
}
</script>

<style scoped="true" lang="scss">
  .app {
    display: grid;
    justify-items: center;
    row-gap: 10px;
  }
</style>