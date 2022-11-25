<script setup lang="ts">
const { t } = useI18n();
const docTitle = useTitle();
docTitle.value = t("not-found.title");
</script>

<template>
  <h1 class="flex w-full flex-col items-center justify-center text-8xl">
    <span>{{ $t("not-found.title") }}</span>
    <i-fluent-emoji-high-contrast-face-with-open-eyes-and-hand-over-mouth />
  </h1>
</template>
