<template>
    <div>
        
    </div>
</template>

<script>
export default {
    name: 'TodoList',

    data() {
        return {
            traits: []
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
    created() {
      this.traits = this.$resource('https://jsonplaceholder.typicode.com/todos');
    },
};
</script>

<style lang="scss" scoped>

</style>