<template>
  <div class="container">
    <TodoList
      v-for="list in lists"
      :key="list.listId"
      :list-name="list.listName"
      :list-todos="list.toDos"
    />
    <button>Add List +</button>
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
button {
  border: none;
  margin-top: 1.5rem;

  background-color: transparent;
  font-family: inherit;
  font-size: 1rem;
  padding: 0.8rem 1.6rem;
  border-radius: 0.3rem;
  box-shadow: 6px 4px 10px 0px #d1d9e6, 3px 3px 3px 0px rgb(246, 246, 252) inset;
}
</style>
