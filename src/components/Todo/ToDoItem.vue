<template>
  <base-item>
    <input type="checkbox" name="" id="" />
    <div class="todo">{{ todo }}</div>
    <button class="edit">E</button>
  </base-item>
</template>

<script>
import BaseItem from "../base/BaseItem";
export default {
  components: { BaseItem },
  props: ["todo", "comleted"],
};
</script>

<style scoped>
input {
  margin-right: 0.8rem;
}
.todo {
  margin-right: auto;
}
</style>
