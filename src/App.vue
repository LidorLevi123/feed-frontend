<template>
  <section class="app">
    <MsgForm />
    <CommentList @filter="loadComments" :comments="comments" />
  </section>
</template>

<script>
import MsgForm from './cmps/MsgForm.vue';
import CommentList from './cmps/CommentList.vue';

export default {

  created() {
    this.loadComments()
  },

  methods: {
    async loadComments(filterBy) {
      try {
        await this.$store.dispatch({ type: 'loadComments', filterBy })
      } catch (err) {
        console.log('Could not load comments', err.message)
      }
    }
  },

  computed: {
    comments() {
      return this.$store.getters.comments
    }
  },

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