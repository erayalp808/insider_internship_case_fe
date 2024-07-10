<template>
  <div class="flex flex-col max-h-[90vh] w-full p-4 bg-red-300">
    <div class="flex flex-col gap-2 h-[90%] w-[96%] border-r-8 border-red-600">
      <RacingLane v-for="item in itemsToShow" :key="item.id" v-bind="item" />
    </div>
    <div class="flex mt-4">
      <div class="w-5/6">
        <div>{{ raceStatus }}</div>
      </div>
      <div class="w-1/6">FINISH!</div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import RacingLane from "./RacingLane.vue";

export default {
  name: "RacingField",
  components: {
    RacingLane,
  },
  computed: {
    ...mapState(["raceList", "lap"]),
    itemsToShow() {
      return this.raceList.length === 0
        ? Array.from({ length: 10 }, (_, index) => ({ lane: index + 1 }))
        : this.raceList;
    },
    raceStatus() {
      if (this.raceList.length > 0) {
        return `Lap ${this.lap} - ${1000 + 200 * this.lap}m`;
      } else {
        return "Generate program to create horses!";
      }
    },
  },
};
</script>

<style scoped>
.flex.mt-4 > div {
  @apply text-center text-lg font-bold text-red-700;
}
</style>
