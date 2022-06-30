<template>
    <div class="q-pa-md" style="max-width: 350px">
        <q-list bordered separator>
            <q-item clickable v-ripple v-for="user in users" :key="user.id" :to="''+user.id">
                    <q-item-section :to="user.id">{{ user.name }}</q-item-section>
            </q-item>
        </q-list>
    </div>
</template>

<script>

export default {
    name: 'Users',

    data() {
        return {
            users: [],
        };
    },

    mounted() {

    },

    methods: {

    },
    created() {
        this.resource = this.$resource('https://jsonplaceholder.typicode.com/users');
        this.resource.get().then(response => console.log('response >> ', response.body.forEach(element => {
            this.users.push(element)
            // console.log("Element", element)
        })))
    },
};
</script>

<style lang="scss" scoped>
</style>
