<template>
  <div>
    <div class="q-gutter-sm" v-for="item in userTasks" :disabled="tasksDone.includes(item.title)" :key="item.id">
        <input type="checkbox" v-model="tasksDone" :id="item.id" :value="item.title" />
        <label :for="item.id" >{{ item.title }}</label>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    userTasks: Array
  },
  data() {
    return {
      tasksDone: []
    }
  },
};
</script>
