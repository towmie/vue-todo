<template>
  <div class="container">
    <TodoList
      @addTodo="addTodo"
      v-for="list in lists"
      :key="list.listId"
      :list-name="list.listName"
      :list-todos="list.toDos"
      :list-id="list.listId"
    />
    <form @submit.prevent="addList" class="add-list__form">
      <input
        type="text"
        v-model="listName"
        placeholder="Add Your List"
        class="add-list__input"
      />
      <button type="submit" class="add-list__btn"></button>
    </form>
  </div>
</template>

<script>
import TodoList from "./TodoList";

export default {
  components: { TodoList },
  data() {
    return {
      listName: "",
    };
  },
  methods: {
    addTodo(todo) {
      this.$store.dispatch("lists/addTodo", todo);
      // console.log(todo.listId, todo.todo);
    },
    addList() {
      this.$store.dispatch("lists/addList", {
        listName: this.listName,
        listId: Math.random(),
        todos: [],
      });
      this.listName = "";
    },
  },
  computed: {
    lists() {
      return this.$store.getters["lists/lists"];
    },
  },
};
</script>

<style scoped>
.add-list__form {
  display: flex;
  align-items: center;
  margin: 1rem;
}
.add-list__input {
  font-family: inherit;
  font-size: 18px;
  outline: none;
  border: none;
  border-top: 1px solid #fff;
  border-left: 1px solid #fff;
  background-color: rgb(240, 241, 252);
  color: rgb(83, 83, 83);

  padding: 0.8rem 3rem 0.8rem 1rem;

  border-radius: 1rem;
  box-shadow: -8px -4px 8px 0px #ffffff, 8px 4px 12px 0px #d1d9e6,
    4px 4px 4px 0px #d1d9e6 inset, -4px -4px 4px 0px #ffffff inset;
}
.add-list__btn {
  position: relative;
  outline: none;
  border: none;
  margin-left: 1.3rem;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-image: url(./../../assets/icons/check-green.svg);
  background-size: 1.3rem 1.3rem;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 6px 4px 10px 0px #d1d9e6, 3px 3px 3px 0px rgb(246, 246, 252) inset;
}
.container {
  display: flex;
  align-items: flex-start;
}
/* button {
  border: none;
  margin-top: 1.5rem;

  background-color: transparent;
  font-family: inherit;
  font-size: 1rem;
  padding: 0.8rem 1.6rem;
  border-radius: 0.3rem;
  box-shadow: 6px 4px 10px 0px #d1d9e6, 3px 3px 3px 0px rgb(246, 246, 252) inset;
} */
</style>
