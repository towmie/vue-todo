<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  padding: 2rem;
  margin: 1rem;
  min-width: 310px;
  width: 100%;
  max-width: 380px;
  font-size: 1rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #e4e7fc;
  border-radius: 2rem;
  border-top: 1px solid #fff;
  border-left: 1px solid #fff;
  box-shadow: 8px 4px 12px 0px #d1d9e6, 4px 4px 4px 0px rgb(246, 246, 252) inset;
}
</style>
