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
            userId: this.$router.currentRoute.params['id']
        };
    },

    mounted() {

        this.tasksFromDataBase.get().then((response) => {
            return (this.userTasks = response.data);
        });
        this.filterTasksByUsers(userId)

    },
    methods: {

      filterTasksByUsers (userId = 1) {
          this.$emit("filterTasksByUsers",() =>{
              console.log(userId)
              const tasksByUserId = this.userTasks.filter((item) => {
                  if(item.userId === userId) {
                      return item
                  }
              })
              this.userTasks = tasksByUserId;
              console.log(tasksByUserId)
          })
            }
    },

    created() {
        this.tasksFromDataBase = this.$resource(
            "https://jsonplaceholder.typicode.com/todos"
        );
    },
};
</script>
