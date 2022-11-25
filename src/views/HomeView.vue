<script setup lang="ts">
const { t } = useI18n();
useHead({
  title: t("home.title"),
  titleTemplate: (title) => `${title} | Vue3 + Tailwind Template`,
});

const { x, y } = useMouse();

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <main>
    <div class="flex flex-col items-center gap-4">
      <p class="flex items-center gap-2">
        {{ $t("home.title") }}
        <i-heroicons-rocket-launch-solid />
      </p>

      <div class="text-xl text-indigo-500 dark:text-indigo-400">
        <p>{{ `x: ${x}` }}</p>
        <p>{{ `y: ${y}` }}</p>
      </div>

      <button class="rounded bg-green-500 py-2 px-4 text-white dark:bg-black" @click="toggleDark()">
        {{ $t("home.toggle-dark") }}
      </button>
    </div>
  </main>
</template>
