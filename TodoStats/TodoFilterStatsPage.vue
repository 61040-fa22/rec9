<template>
  <main>
    <p>
      Number of items in todo list with keyword "{{$route.params.filter}}":
      {{ $store.getters.filterItems($route.params.filter) }}
    </p>
    <button @click="$router.go(-1)">Return to previous page</button>
  </main>
</template>