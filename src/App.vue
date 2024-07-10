<template>
  <header class="flex justify-between items-center gap-3 w-full h-16 p-0 sm:p-3 bg-red-400">
    <h1 class="text-lg sm:text-2xl font-bold shrink-0">Horse Racing <font-awesome-icon :icon="['fas', 'horse']" /></h1>
    <div class="flex gap-1">
      <button @click="$store.dispatch('createRaceList')">Generate Program</button>
      <button @click="$store.dispatch('toggleRace')">Start/Pause</button>
    </div>
  </header>
  <div class="flex flex-wrap md:flex-nowrap justify-between gap-4">
    <HorseList />
    <RacingField />
    <RaceProgram />
  </div>
</template>

<script>
import HorseList from "./components/horseList/HorseList.vue";
import RaceProgram from "./components/raceProgram/RaceProgram.vue";
import RacingField from "./components/racingLane/RacingField.vue";

export default {
  name: "App",
  components: {
    HorseList,
    RaceProgram,
    RacingField,
  },
};
</script>

<style scoped>
button {
  @apply shrink-0 p-2 text-sm sm:text-lg font-bold rounded-full bg-gray-300 border-2 border-black;
}
</style>
