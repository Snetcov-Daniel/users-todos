<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import Vue from 'vue';
import VueResource from "vue-resource";

Vue.use(VueResource);

export default {
  name: 'App',
  // created() {
  //     this.resource = this.$resource('https://jsonplaceholder.typicode.com/users');
  //     this.resource.get()
  //       .then(response => {
  //         console.log(response.body);
  //       })
  // }
}
</script>
