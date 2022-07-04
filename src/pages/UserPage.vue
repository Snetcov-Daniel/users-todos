<template>
<q-layout>
    <q-page-container>
        <q-page class="column pageContainer">
            <h1 class="header">Onboarding Tracker</h1>
            <div class="row justify-center">
                <Users
                :filterByUsers="filterByUsers"></Users>
                <TodoList
                :id="id"
                ref="filter" ></TodoList>
            </div>
        </q-page>
    </q-page-container>
</q-layout>
</template>

<script>
import Users from '../components/Users.vue'
import TodoList from '../components/TodoList.vue'


export default {

    name: "User",

    components: {
        Users,
        TodoList
    },

    data(){
        return{
            id: this.$route.params['id']
        }
    },

    watch: {
        $route (toRoute, fromRoute) {
            this.id = toRoute.params['id']
        }
    },

    methods: {

        filterByUsers () {
            this.$refs.filter.filterTasks()
        }

    },
    created() {
    },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Roboto&family=Titan+One&display=swap');
.header {
    margin: 25px auto;
    display: flex;
    justify-content: center;
    color: #34495e;
    font-family: 'Fredoka One', cursive;
}

.pageContainer {
    background-color: #C1C1C1;
}
</style>
