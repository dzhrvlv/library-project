<template>
  <navbar />
  <div class="app">
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue"
import { mapGetters, mapState } from "vuex";

export default {
  components: {
    Navbar
  },
  created: function() {
    if (this.isAuth) {
      this.$store.dispatch("AUTH_REQUEST", {method: "auth"});
    }
  },
  computed: {
    ...mapGetters({
      isAuth: "isAuth"
    })
  },
}
</script>

<style>

@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@200;400;600&display=swap");

* {
  margin: 0;
  padding: 0;
  font-family: "Manrope", sans-serif;
  text-decoration: none;
}

.app {
  padding: 30px;
}
</style>
