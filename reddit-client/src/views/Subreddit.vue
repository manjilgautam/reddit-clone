<template>
<h1>{{$route.params.name}}</h1>
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
