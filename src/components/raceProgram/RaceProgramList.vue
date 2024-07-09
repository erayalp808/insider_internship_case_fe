<template>
  <div>
    <div class="flex items-center w-full px-3 h-8 bg-red-400">
      <h2 class="font-bold">
        {{ "Lap " + lap + " - " + (1000 + 200 * lap) + "m" }}
      </h2>
    </div>
    <div class="flex flex-col w-full">
      <div class="list-header grid grid-cols-12 w-full">
        <div class="col-span-4">Lane</div>
        <div class="col-span-8">Name</div>
      </div>
      <div
        class="grid grid-cols-12 w-full"
        v-for="{ name, lane } in raceProgramList"
      >
        <div class="col-span-4">{{ lane }}</div>
        <div class="col-span-8">{{ name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RaceProgramList",
  props: {
    lap: Number,
    raceProgramList: Array,
  },
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
