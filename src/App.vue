<template>
  <header
    class="flex justify-between items-center gap-3 w-full h-16 p-3 bg-red-400"
  >
    <h1 class="text-lg sm:text-2xl font-bold shrink-0">Horse Racing</h1>
    <div class="flex gap-1">
      <button>Generate Program</button>
      <button>Start/Pause</button>
    </div>
  </header>
  <div>
    <HorseList />
  </div>
</template>

<script>
import HorseList from "./components/HorseList.vue";

export default {
  name: "App",
  components: {
    HorseList,
  },
};
</script>

<style scoped>
button {
  @apply shrink-0 p-2 text-sm sm:text-lg font-bold rounded-full bg-gray-300 border-2 border-black;
}
</style>
