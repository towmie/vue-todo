<template>
  <div>{{ listName }}</div>
  <ToDoInput @addTodo="addToDo" />
  <ToDoItem
    v-for="item in listTodos"
    :key="item.toDoId"
    :todo="item.toDo"
    :comleted="item.completed"
  />
</template>

<script>
import ToDoItem from "./ToDoItem";
import ToDoInput from "./ToDoInput";

export default {
  components: { ToDoItem, ToDoInput },

  props: ["listName", "listTodos"],
  methods: {
    addToDo(todo) {
      this.listTodos.push({
        toDoId: Math.random(),
        toDo: todo,
        completed: false,
      });
    },
  },
};
</script>

<style scoped></style>
