"use strict";
const TodoLists = {
  namespaced: true,
  state() {
    return {
      todoList: [],
    };
  },
  getters: {
    todoList(state) {
      return state.todoList;
    },
  },
  mutations: {
    addTodo(state, payload) {
      state.todoList.push(payload);
      console.log(state.todoList);
    },
  },
  actions: {
    addTodo(context, payload) {
      context.commit("addTodo", payload);
    },
  },
};

export default TodoLists;
