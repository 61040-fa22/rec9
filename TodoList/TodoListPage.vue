<template>
  <main>
    <TodoInputForm button="Add Todo" @itemAdded="addItem" />
    <section v-if="items.length" id="todo-list">
      <ol>
        <TodoListItem
          v-for="(item, index) in items"
          :key="index"
          :content="item"
        />
      </ol>
    </section>
    <section v-else id="todo-list">
      <p>No todo items.</p>
    </section>
  </main>
</template>

<script>
import TodoInputForm from "./TodoInputForm.vue";
import TodoListItem from "./TodoListItem.vue";

export default {
  components: { TodoInputForm, TodoListItem },
  name: "TodoListPage",
  data() {
    return { items: [] };
  },
  methods: {
    addItem: function (content) {
      this.items.push(content);
    },
  },
};
</script>
