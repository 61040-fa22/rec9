<template>
  <main>
    <p>Number of items in todo list: {{ $store.state.items.length }}</p>
    <p>
      Number of important items in todo list:
      {{ $store.getters.importantItems }}
    </p>
  </main>
</template>