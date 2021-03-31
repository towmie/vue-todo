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

    updateTask(state, payload) {
      const updatedItem = state.todoList.filter(
        (el) => el.id === payload.itemId
      );
      updatedItem[0].todo = payload.todo;
    },
  },

  actions: {
    addTodo(context, payload) {
      console.log(payload);
      context.commit("addTodo", payload);
    },

    deleteTask(context, payload) {
      context.commit("deleteTask", payload);
    },

    toggleCompleted(context, payload) {
      context.commit("toggleCompleted", payload);
    },
    updateTask(context, payload) {
      context.commit("updateTask", payload);
    },
  },
};

export default TodoLists;
