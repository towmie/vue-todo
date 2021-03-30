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
    },

    toggleCompleted(state, payload) {
      const checkedItem = state.todoList.filter(
        (el) => el.id === payload.itemId
      );
      checkedItem[0].completed = !checkedItem[0].completed;
    },

    deleteTask(state, payload) {
      state.todoList = state.todoList.filter((el) => el.id !== payload);
    },
  },

  actions: {
    addTodo(context, payload) {
      context.commit("addTodo", payload);
    },

    deleteTask(context, payload) {
      context.commit("deleteTask", payload);
    },

    toggleCompleted(context, payload) {
      context.commit("toggleCompleted", payload);
    },
  },
};

export default TodoLists;
