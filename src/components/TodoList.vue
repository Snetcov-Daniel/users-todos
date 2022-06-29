<template>
    <div>
        <TodoCheckbox :userTasks="userTasks"></TodoCheckbox>
    </div>
</template>

<script>
import TodoCheckbox from "./TodoCheckbox.vue";

export default {

    name: "TodoList",

    components: {
        TodoCheckbox,
    },

    data() {
        return {
            userTasks: [],
        };
    },

    mounted() {
        this.tasksFromDataBase.get().then((response) => {
            return (this.userTasks = response.data);
        });
    },

    methods: {
        filterTasksByUsers(userId) {
            const tasksByUserId = this.userTasks.filter((item) => {
                if (item.userId === userId) {
                    return item;
                }
            });

            this.userTasks = tasksByUserId;
        },
    },

    created() {
        this.tasksFromDataBase = this.$resource(
            "https://jsonplaceholder.typicode.com/todos"
        );
    },
};
</script>
