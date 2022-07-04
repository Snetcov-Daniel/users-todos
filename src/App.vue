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
}
</script>
