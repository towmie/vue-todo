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
      console.log(state.todoList);
    },
  },

  actions: {
    addTodo(context, payload) {
      context.commit("addTodo", payload);
    },

    toggleCompleted(context, payload) {
      context.commit("toggleCompleted", payload);
    },
  },
};

export default TodoLists;
