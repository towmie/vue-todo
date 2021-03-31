"use strict";
// import TodoLists from "./TodoLists";

const ListsStore = {
  namespaced: true,
  //   modules: { todos: TodoLists },
  state() {
    return {
      lists: [],
    };
  },
  mutations: {
    addList(state, payload) {
      state.lists.push(payload);
    },
    addTodo(state, payload) {
      state.lists
        .filter((el) => el.listId === payload.listId)[0]
        .todos.push(payload.todo);

      console.log(state.lists);
    },
  },
  actions: {
    addList(context, payload) {
      context.commit("addList", payload);
    },
    addTodo(context, payload) {
      context.commit("addTodo", payload);
    },
  },
  getters: {
    lists(state) {
      return state.lists;
    },
  },
};

export default ListsStore;
