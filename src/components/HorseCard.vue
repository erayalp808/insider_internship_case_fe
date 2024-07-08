<template>
  <div class="grid grid-cols-12 w-full">
    <div class="horse-card col-span-5">{{ name }}</div>
    <div class="horse-card col-span-2">{{ condition }}</div>
    <div class="horse-card col-span-5">{{ color }}</div>
  </div>
</template>

<script>
export default {
  name: "HorseCard",
  props: {
    name: String,
    condition: Number,
    color: String,
  },
};
</script>

<style scoped>
.horse-card {
  @apply text-center p-2 border border-slate-300 text-lg;
}
</style>
