<template>
  <base-list-card>
    <div>{{ listName }}</div>
    <ToDoInput @addTodo="addToDo" />
    <ToDoItem
      v-for="item in listTodos"
      :key="item.toDoId"
      :todo="item.toDo"
      :comleted="item.completed"
    />
  </base-list-card>
</template>

<script>
import ToDoItem from "./ToDoItem";
import ToDoInput from "./ToDoInput";
import BaseListCard from "../base/BaseListCard";

export default {
  components: { ToDoItem, ToDoInput, BaseListCard },

  props: ["listName", "listTodos"],
  methods: {
    addToDo(todo) {
      //   this.listTodos.push({
      //     toDoId: Math.random(),
      //     toDo: todo,
      //     completed: false,
      //   });
      console.log(todo);
    },
  },
};
</script>

<style scoped></style>
