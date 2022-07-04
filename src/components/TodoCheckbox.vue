<template>
    <div>
        <ul class="q-gutter-sm todoTasks" v-for="item in userTasks" :key="item.id" >
            <q-checkbox
                v-on:click.native.once="postTasksToDB(item.title)"
                color="teal-10"
                v-model="tasksDone"
                :val="item.title"
                :label="item.title"
                :disable="tasksDone.includes(item.title)" />
        </ul>
    </div>
</template>

<script>
import { getTasks, postTasksInDB, alreadyInDB } from 'src/API/requests';

export default {

    props: {
        userTasks: Array,
    },

    data() {
        return {
            tasksDone: []
        };
    },

    methods: {

    postTasksToDB (taskTitle) {

        const task = {
            title: taskTitle
        }

        alreadyInDB(taskTitle).then((isAlreadyInDataBase) => {
            isAlreadyInDataBase ? null : postTasksInDB(task)
        })

        },

    },

    created() {
        getTasks().then((response) => {
            response.forEach(task => {
                this.tasksDone.push(task.title)
            });
        })
    },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Mitr:wght@500&display=swap');

.todoTasks {
    font-family: 'Mitr', sans-serif;
    color: #34495e;
}

</style>
