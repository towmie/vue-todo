<template>
  <form @submit.prevent="setTask" class="form">
    <input type="text" v-model="task" placeholder="Your Task" />
    <button type="submit"></button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      task: "",
    };
  },
  methods: {
    setTask() {
      const toDoObj = {
        id: Math.random(),
        todo: this.task,
        completed: false,
      };
      this.$emit("addTodo", toDoObj);
      this.task = "";
    },
  },
};
</script>

<style scoped>
input {
  font-family: inherit;
  font-size: 18px;
  outline: none;
  border: none;
  border-top: 1px solid #fff;
  border-left: 1px solid #fff;
  background-color: rgb(240, 241, 252);
  color: rgb(83, 83, 83);

  margin-top: 0.8rem;
  margin-bottom: 1.5rem;
  padding: 0.8rem 3rem 0.8rem 1rem;

  border-radius: 1rem;
  box-shadow: -8px -4px 8px 0px #ffffff, 8px 4px 12px 0px #d1d9e6,
    4px 4px 4px 0px #d1d9e6 inset, -4px -4px 4px 0px #ffffff inset;
}

button {
  position: relative;
  outline: none;
  top: 13px;
  right: 10px;
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
</style>
