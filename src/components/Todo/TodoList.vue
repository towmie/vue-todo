<template>
  <base-list-card>
    <div>{{ listName }}</div>
    <ToDoInput @addTodo="addToDo" />
    <ToDoItem
      v-for="item in todoList"
      :key="item.id"
      :todo="item.todo"
      :comleted="item.completed"
      :id="item.toDoId"
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
    addToDo(todo) {
      const toDoObj = {
        id: Math.random(),
        todo: todo,
        completed: false,
      };
      this.$store.dispatch("todos/addTodo", toDoObj);
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
