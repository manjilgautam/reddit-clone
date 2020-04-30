<template>
  <section>
    <h1>{{ $subreddit.name }}</h1>
    <form @submit.prevent="onCreatePost(post)">
      <b-field label="Title">
        <b-input v-model="post.title" required></b-input>
      </b-field>
      <b-field label="description">
        <b-input type="textarea" v-model="post.description"></b-input>
      </b-field>
      <b-field label="URL">
        <b-input v-model="post.URL" type="url"></b-input>
      </b-field>
       <button class="button is-success">Add Post</button>
      </form>
    </section>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  data: () => ({
    post: {
      title: '',
      description: '',
      URL: '',
    },
  }),
  mounted() {
    // this.init(); // call it from mapActions
    this.initSubreddit(this.$route.params.name);
  },
  computed: {
    ...mapState('subreddit', ['posts']),
    ...mapGetters('subreddit', ['subreddit']),
  },
  methods: {
    ...mapActions('subreddit', ['createPost', 'initSubreddit', 'initPosts']),
    async onCreatePost() {
      if (this.post.title && (this.post.description || this.post.URL)) {
        await this.createPost(this.post);
      }
    },
  },
};
</script>
