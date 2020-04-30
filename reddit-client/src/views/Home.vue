<template>
  <div class="home">
    <button class="button is-danger" @click="login()">Login with Google.</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'; // Vuex allows you to pull the action defined in store

export default {
  name: 'Home',
  methods: mapActions('auth', ['login']), //  Please look into the login action defined in Store/auth file
};
</script>
