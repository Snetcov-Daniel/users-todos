<template>
    <div>
<!--      <button @click="filterTasksByUsers(userId)">Load tasks</button>-->
      <TodoCheckbox :userTasks="userTasks" ></TodoCheckbox>
    </div>
</template>

<script>
import TodoCheckbox from './TodoCheckbox.vue'

export default {
    name: 'TodoList',
    components: {
      TodoCheckbox
    },
    data() {
        return {
            userTasks: [],
            userId: this.$router.currentRoute.params['id']
        };
    },

    mounted() {
       this.$http.get('https://jsonplaceholder.typicode.com/todos')
          .then(Response => {
            return Response.json()
          })
          .then(tasks => {
            this.userTasks = tasks
              console.log(tasks )
          })
        this.filterTasksByUsers(userId)

    },

    methods: {

      filterTasksByUsers (userId) {
          console.log(userId)
        const tasksByUserId = this.userTasks.filter((item) => {
            if(item.userId === userId) {
              return item
            }
        })
        this.userTasks = tasksByUserId
        return tasksByUserId
      }
    },
    created() {
      this.userTasks = this.$resource('https://jsonplaceholder.typicode.com/todos');
    },
};
</script>
