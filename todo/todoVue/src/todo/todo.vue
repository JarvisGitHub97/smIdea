<template>
  <section class="my-todo">
    <input 
      type="text"
      class="add-input"
      placeholder="接下去要做？"
      @keyup.enter="addTodo"
      autofocus="autofocus"
    >
    <Item 
      v-for="todo in filteredTodos" 
      :todo="todo"
      :key="todo.id"
      @del="deleteItem"
    ></Item>
    <Tabs 
      :filter="filter"
      :todos="todos"  
      @groupDivide="toggleFilter"
      @clearCompleted="clearCompleted"
    ></Tabs>
  </section>
</template>

<script>
import Item from './item.vue';
import Tabs from './tabs.vue';
let id = 0;
export default {
  data() {
    return {
      todos: [],
      filter: 'all'
    }
  },
  methods: {
    addTodo(e) {
      if((e.target.value).trim() === '') {
        return
      };
      this.todos.unshift({
        id: id++,
        content: e.target.value.trim(),
        completed: false
      })
      e.target.value = '';
    },
    deleteItem(id) {
      this.todos.splice(this.todos.findIndex(todo => todo.id === id), 1);
    },
    toggleFilter(state) {
      this.filter = state;
    },
    clearCompleted() {
      this.todos = this.todos.filter(todo => !todo.completed)
    }
  },
  computed: {
    filteredTodos() {
      if(this.filter === 'all'){
        return this.todos
      };
      let completed = this.filter === 'completed';
      return this.todos.filter(todo => completed === todo.completed)
    }
  },
  components: {
    Item,
    Tabs
  }
}
</script>

<style lang="stylus" scoped>
.my-todo{
  margin 0 auto
  width 600px
}
.add-input{
  position: relative;
  margin: 0;
  width: 100%;
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  border: 0;
  outline: none;
  color: inherit;
  padding: 6px;
  border: 1px solid #999;
  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  font-smoothing: antialiased;
  padding: 16px 16px 16px 60px;
  border: none;
  box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
}
</style>