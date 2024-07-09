<template>
  <div class="w-[20%] h-full">
    <div class="flex items-center w-full px-3 h-12 bg-yellow-300">
      <h2 class="text-lg font-bold">Horse List (1-20)</h2>
    </div>
    <div class="max-h-[85vh] flex flex-col w-full overflow-y-scroll">
      <div class="list-header grid grid-cols-3 w-full">
        <div>Name</div>
        <div>Condition</div>
        <div>Color</div>
      </div>
      <div
        class="grid grid-cols-3 w-full"
        v-for="{ name, condition, color } in $store.state.horseList"
      >
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
.grid > div {
  @apply text-center p-2 bg-white border border-slate-300 text-sm font-bold;
}

.list-header.grid > div {
  @apply bg-slate-200;
}
</style>
