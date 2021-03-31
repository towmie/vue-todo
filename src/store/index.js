import { createStore } from "vuex";
import UsersStore from "./UsersStore";
// import TodoLists from "./TodoLists";
import ListsStore from "./ListsStore.js";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    users: UsersStore,
    // todos: TodoLists,
    lists: ListsStore,
  },
});
