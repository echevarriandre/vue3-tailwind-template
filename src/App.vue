<script setup lang="ts">
useDark();
</script>

<template>
  <header>
    <nav class="mb-12 flex h-12 w-full items-center justify-center">
      <RouterLink to="/">Home</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>
