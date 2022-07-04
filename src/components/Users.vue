<template>
    <div class="q-pa-md" style="max-width: 350px">
            <h3 class="usersTitle q-pb-lg q-pl-sm no-margin">Users</h3>
            <q-list class="qListStyle" bordered separator>
                <q-item clickable v-ripple
                @click="filterByUsers($event)"
                v-for="user in users"
                :key="user.id"
                :to="'/users/' + user.id">
                        <q-item-section>{{ user.name }}</q-item-section>
            </q-item>
        </q-list>
    </div>
</template>

<script>

export default {
    name: 'Users',

    props: {
        filterByUsers: Function
    },

    data() {
        return {
            users: [],
        };
    },

    methods: {

    },
    created() {
        this.resource = this.$resource('https://jsonplaceholder.typicode.com/users');
        this.resource.get().then(response => response.body.forEach(element => {
            this.users.push(element)
        }))
    },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Roboto&family=Russo+One&family=Titan+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Roboto&family=Titan+One&display=swap');

.usersTitle {
    color: #34495e;
    font-family: 'Fredoka One', cursive;
}

.qListStyle {
    font-family: 'Russo One', sans-serif;
    color: #41b883;
    background-color: #34495e;
    width: 300px;
}

.q-item.q-router-link--active {
    color: #34495e;
    background-color: #41b883;
}

</style>
