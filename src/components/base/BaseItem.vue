<template>
  <div class="item">
    <slot></slot>
  </div>
</template>

<style scoped>
.item {
  display: flex;
  align-items: center;
  font-weight: 300;
  background-color: #e4e7fc;
  width: 100%;
  padding: 0.8rem 1rem;
  margin-bottom: 0.8rem;
  border-radius: 1rem;
  box-shadow: -8px -4px 8px 0px #ffffff, 8px 4px 12px 0px #d1d9e6;
  /* box-shadow: -8px -4px 8px 0px #ffffff, 8px 4px 12px 0px #d1d9e6,
    4px 4px 4px 0px #d1d9e6 inset, -4px -4px 4px 0px #ffffff inset; */

  /*  4px 4px 4px 0px #d1d9e6 inset, -4px -4px 4px 0px #ffffff inset */
}
</style>
