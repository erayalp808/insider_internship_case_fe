<template>
  <div class="shrink-0 w-[20%] h-full">
    <div class="flex items-center w-full px-3 h-12 bg-yellow-300">
      <h2 class="text-lg font-bold">Horse List (1-20)</h2>
    </div>
    <div class="flex flex-col max-h-[85vh] w-full overflow-y-scroll">
      <div>
        <div>Name</div>
        <div>Condition</div>
        <div>Color</div>
      </div>
      <div v-for="{ name, condition, color } in $store.state.horseList">
        <div>{{ name }}</div>
        <div>{{ condition }}</div>
        <div>{{ color }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HorseList",
};
</script>

<style scoped>
.overflow-y-scroll > div {
  @apply grid grid-cols-3 w-full;
}

.overflow-y-scroll > div > div {
  @apply text-center p-2 bg-white border border-slate-300 text-sm font-bold;
}

.overflow-y-scroll > div:first-child > div {
  @apply bg-slate-200;
}
</style>
