<template>
  <main>
    <TodoInputForm button="Add Todo" />
    <section v-if="$store.state.items.length" id="todo-list">
      <ol>
        <TodoListItem
          v-for="(item, index) in $store.state.items"
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
  name: "TodoListPage"
};
</script>
