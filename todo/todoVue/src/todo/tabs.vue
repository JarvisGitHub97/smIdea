<template>
<div class="my-tabs">
  <span class="left">{{unFinishItemLength}} items left</span>
  <span class="tabs">
    <span
      v-for="state in states"
      :key="state"
      :class="[state, filter === state ? 'actived' : '']"
      @click="toggleFilter(state)"
    >
      {{ state }}
    </span>
  </span>
  <span 
    class="right"
    @click="clearCompleted"
    >clear completed</span>
</div>
</template>

<script>
export default {
  props: {
    filter: {
      type: String,
      required: true
    },
    todos: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      states: ['all', 'active', 'completed']
    }
  },
  computed: {
    unFinishItemLength() {
      return this.todos.filter(todo => !todo.completed).length;
    }
  },
  methods: { 
    toggleFilter(state) {
      this.$emit('groupDivide', state)
    },
    clearCompleted() {
      this.$emit('clearCompleted')
    }
  } 
}
</script>

<style lang="stylus" scoped>
.my-tabs{
  font-size 14px
  display flex
  justify-content  space-between
  background-color #fff
  line-height 30px
  font-weight 100
  font-smoothing: antialiased
  padding 5px 0
}
.left, .tabs, .right{
  padding 0 10px
  box-sizing border-box
}
.left, .right{
  width 150px
}
.left{
  text-align left
}
.right{
  text-align right
  cursor pointer
}
.tabs{
  width 200px
  display flex
  justify-content space-around
  * {
    display inline-block
    padding 0 10px
    cursor pointer
    border 1px solid rgba(175,47,47,0)
    &.actived{
      border-color rgba(175,47,47,0.4)
      border-radius 5px
    }
  }  
}
</style>