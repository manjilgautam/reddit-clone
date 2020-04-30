<template>
  <section>
    <h1>{{ $route.params.name }}</h1>
    <form>
      <b-field label="Title">
        <b-input></b-input>
      </b-field>
      <b-field label="description">
        <b-input type="textarea"></b-input>
      </b-field>
      <b-field label="URL">
        <b-input></b-input>
      </b-field>
       <button class="button is-success">Add Post</button>
      </form>
    </section>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  mounted() {
    // this.init(); // call it from mapActions
  },
  computed: mapState('subreddits', ['subreddits']),
  methods: mapActions('subreddits', ['init']),
};
</script>
