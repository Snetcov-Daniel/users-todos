<template>
    <div>
        <h3 class="tasksTitle">Tasks List</h3>
        <TodoCheckbox :userTasks="filteredUserTasks"></TodoCheckbox>
    </div>
</template>

<script>
import TodoCheckbox from "./TodoCheckbox.vue";

export default {

    name: "TodoList",

    props: {
        id: String
    },

    components: {
        TodoCheckbox,
    },

    data() {
        return {
            userTasks: [],
            filteredUserTasks: []
        };
    },

     created() {

        this.tasksFromDataBase = this.$resource(
            "https://jsonplaceholder.typicode.com/todos"
        );

    },

    mounted() {

        this.tasksFromDataBase.get().then((response) => {
            response.body.forEach((task) => {
                task.userId === +this.id ? this.filteredUserTasks.push(task) : null
                this.userTasks.push(task)
            })
        })

    },

    methods: {
        filterTasks () {
            this.filteredUserTasks = [];
            this.userTasks.forEach((task) => {
                task.userId === +this.id ? this.filteredUserTasks.push(task) : null
            })
        }
    },

};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Roboto&family=Titan+One&display=swap');
.tasksTitle {
    color: #34495e;
    font-family: 'Fredoka One', cursive;
    margin-top: 16px;
    margin-bottom: 24px;
    padding-left: 25px;
}

</style>
