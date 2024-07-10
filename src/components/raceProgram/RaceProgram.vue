<template>
  <div class="shrink-0 grid grid-cols-2 w-[30%] bg-slate-200">
    <div>
      <h2 class="bg-blue-400">Program</h2>
      <div v-if="raceList.length > 0">
        <RaceProgramList v-for="index in 6" :key="index" :raceProgramList="raceList" :lap="index" />
      </div>
    </div>
    <div>
      <h2 class="bg-green-400">Results</h2>
      <div v-if="resultList[0].length > 0">
        <RaceProgramList v-for="(result, index) in filteredResultList" :raceProgramList="result" :lap="index + 1" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import RaceProgramList from "./RaceProgramList.vue";

export default {
  components: {
    RaceProgramList,
  },
  computed: {
    ...mapState(["raceList", "resultList"]),
    filteredResultList() {
      return this.resultList.filter((result) => result.length > 0);
    },
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
