<template>
  <div class="grid grid-cols-2 w-[30%] bg-slate-200">
    <div>
      <h2 class="bg-blue-400">Program</h2>
      <div>
        <RaceProgramList
          v-if="$store.state.raceList.length > 0"
          v-for="index in 6"
          :raceProgramList="$store.state.raceList"
          :lap="index"
        />
      </div>
    </div>
    <div>
      <h2 class="bg-green-400">Results</h2>
      <div></div>
    </div>
  </div>
</template>

<script>
import RaceProgramList from "./RaceProgramList.vue";

export default {
  name: "RaceProgram",
  components: {
    RaceProgramList,
  },
};
</script>

<style scoped>
h2 {
  @apply flex justify-center items-center w-full h-12 text-lg font-bold;
}

.grid > div > div {
  @apply max-h-[85vh] overflow-y-scroll;
}
</style>
