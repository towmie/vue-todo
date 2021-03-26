<template>
  <form @submit.prevent="setTask">
    <input type="text" v-model="task" />
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
