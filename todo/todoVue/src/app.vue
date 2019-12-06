<template>
  <div class="todo">
    {{text}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: 'hellov'
    }
  }
}
</script>

<style>
.todo {
  color: #ccc;
}
</style>