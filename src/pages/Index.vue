<template>
  <q-page>
    <Users></Users>
    <Todo-list></Todo-list>
  </q-page>
</template>

<script>
import Users from "../components/Users";
import TodoList from "../components/TodoList";

export default {
  name: "PageIndex",
  components: {
    Users,
    TodoList
  }
}
</script>
