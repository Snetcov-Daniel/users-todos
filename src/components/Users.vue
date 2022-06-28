<template>
    <div>
        
    </div>
</template>

<script>
export default {
    name: 'Users',

    data() {
        return {
            users: []
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
    created() {
      this.users = this.$resource('https://jsonplaceholder.typicode.com/users');
  },
};
</script>

<style lang="scss" scoped>

</style>