<template>
  <div class="item">
    <base-item :class="{ 'item-active': completed }">
      <div class="check">
        <label class="check__box">
          <input class="check__input" type="checkbox" @click="checkedItem" />
        </label>
      </div>
      <p class="todo">{{ todo }}</p>
      <button class="edit">&nbsp;</button>
    </base-item>
    <button class="delete" @click="deleteTask">&nbsp;</button>
  </div>
</template>

<script>
import BaseItem from "../base/BaseItem";
export default {
  props: ["todo", "completed", "itemId"],
  components: { BaseItem },
  methods: {
    checkedItem() {
      this.$store.dispatch("todos/toggleCompleted", {
        completed: this.completed,
        itemId: this.itemId,
      });
    },
    deleteTask() {
      this.$store.dispatch("todos/deleteTask", this.itemId);
    },
  },
};
</script>

<style scoped>
.item {
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
}

.check__box {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
  background-image: url(./../../assets/icons/check.svg);
  background-size: 0.7rem 0.7rem;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 6px 4px 10px 0px #d1d9e6, 3px 3px 3px 0px rgb(246, 246, 252) inset;
}

.check__input {
  width: 1.2rem;
  height: 1.2rem;
  position: absolute;
  transform: translateY(-50%);
  outline: none;
  -webkit-appearance: none;
  appearance: none;
}

.todo {
  padding: 0 1rem 0 1.5rem;
  margin-right: auto;
}

.edit {
  border: none;
  padding: 0.3rem 0.5rem;
  background-color: transparent;
  width: 1.2rem;
  height: 1.2rem;
  background-image: url(./../../assets/icons/edit.svg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.delete {
  background-color: transparent;
  border: none;
  margin-left: 0.6rem;

  width: 1.3rem;
  height: 1.3rem;
  background-image: url(./../../assets/icons/delete.svg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
