<template>
  <div class="item" v-if="!editMode">
    <base-item :class="{ 'item-active': completed }">
      <div class="check">
        <label class="check__box">
          <input class="check__input" type="checkbox" @click="checkedItem" />
        </label>
      </div>
      <p class="todo">{{ todo }}</p>
      <button class="edit-btn" @click="edit">&nbsp;</button>
    </base-item>
    <button class="delete" @click="deleteTask">&nbsp;</button>
  </div>
  <base-item v-else class="edit-form">
    <input type="text" v-model="task" class="edit-input" />
    <button type="submit" class="submit-btn" @click="updateTask"></button>
  </base-item>
</template>

<script>
import BaseItem from "../base/BaseItem";

export default {
  data() {
    return {
      editMode: false,
      task: this.todo,
    };
  },
  props: ["todo", "completed", "itemId"],
  components: { BaseItem },
  methods: {
    edit() {
      this.editMode = !this.editMode;
    },

    checkedItem() {
      this.$store.dispatch("todos/toggleCompleted", {
        completed: this.completed,
        itemId: this.itemId,
      });
    },
    deleteTask() {
      this.$store.dispatch("todos/deleteTask", this.itemId);
    },
    updateTask() {
      this.$store.dispatch("todos/updateTask", {
        itemId: this.itemId,
        todo: this.task,
      });
      this.editMode = !this.editMode;
    },
  },
};
</script>

<style scoped>
.edit-form {
  display: flex;
  justify-content: center;
  align-items: center;
}
.edit-input {
  font-family: inherit;
  font-size: 18px;
  font-weight: 300;
  outline: none;
  border: none;
  border-top: 1px solid #fff;
  border-left: 1px solid #fff;
  background-color: rgb(240, 241, 252);
  color: rgb(83, 83, 83);

  padding: 0.8rem 1rem;

  border-radius: 1rem;
  box-shadow: -8px -4px 8px 0px #ffffff, 8px 4px 12px 0px #d1d9e6,
    4px 4px 4px 0px #d1d9e6 inset, -4px -4px 4px 0px #ffffff inset;
}
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

.edit-btn {
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

.submit-btn {
  position: relative;

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
