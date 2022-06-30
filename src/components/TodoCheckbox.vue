<template>
    <div>
        <ul class="q-gutter-sm" v-for="item in userTasks" :key="item.id" >
            <q-checkbox
                color="teal-10"
                v-model="tasksDone"
                :val="item.title"
                :label="item.title"
                :disable="tasksDone.includes(item.title)" />
        </ul>

    </div>
</template>
<script>
export default {
    props: {
        userTasks: Array,
    },
    data() {
        return {
            tasksDone: [],
        };
    },
};
</script>
