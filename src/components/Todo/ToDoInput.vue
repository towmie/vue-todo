<template>
  <form @submit.prevent="setTask">
    <input type="text" v-model="task" placeholder="Your Task" />
    <button type="submit">Sub</button>
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
      this.$emit("addTodo", this.task);
    },
  },
};
</script>

<style scoped>
input {
  /* min-width: 270px; */
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
</style>
