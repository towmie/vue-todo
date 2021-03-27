<template>
  <div class="container">
    <TodoList
      v-for="list in lists"
      :key="list.listId"
      :list-name="list.listName"
      :list-todos="list.toDos"
    />
    <button>Add</button>
  </div>
</template>

<script>
import TodoList from "./TodoList";

export default {
  props: ["lists"],
  components: { TodoList },
};
</script>

<style scoped>
.container {
  display: flex;
  align-items: flex-start;
}
</style>
