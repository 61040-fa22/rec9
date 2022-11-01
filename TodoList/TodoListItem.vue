<template>
  <li :class="checked ? 'checked' : ''">
    <input type="checkbox" v-model="checked" />
    {{ content }}
  </li>
</template>

<script>
export default {
  name: "TodoListItem",
  props: {
    content: String,
  },
  data() {
    return { checked: false };
  },
};
</script>

<style scoped>
.checked {
  text-decoration: line-through;
}
</style>