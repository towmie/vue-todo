<template>
  <base-list-card>
    <div>{{ listName }}</div>
    <ToDoInput @addTodo="addTodo" />
    <ToDoItem
      v-for="item in todoList"
      :key="item.id"
      :todo="item.todo"
      :completed="item.completed"
      :itemId="item.id"
    />
  </base-list-card>
</template>

<script>
import ToDoItem from "./ToDoItem";
import ToDoInput from "./ToDoInput";
import BaseListCard from "../base/BaseListCard";

export default {
  components: { ToDoItem, ToDoInput, BaseListCard },

  props: ["listName"],
  methods: {
    addTodo(todo) {
      this.$store.dispatch("todos/addTodo", todo);
    },
  },
  computed: {
    todoList() {
      return this.$store.getters["todos/todoList"];
    },
  },
};
</script>

<style scoped></style>
