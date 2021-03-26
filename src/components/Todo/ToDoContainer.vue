<template>
  <div>
    <TodoList
      v-for="list in lists"
      :key="list.listId"
      :list-name="list.listName"
      :list-todos="list.toDos"
    />
  </div>
</template>

<script>
import TodoList from "./TodoList";
export default {
  props: ["lists"],
  components: { TodoList },
};
</script>

<style scoped></style>
