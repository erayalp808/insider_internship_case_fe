<template>
  <div class="flex flex-col w-full p-4 bg-red-300">
    <div v-if="$store.state.raceList.length == 0" class="race-field">
      <RacingLane v-for="index in 10" :lane="index" />
    </div>
    <div v-else class="race-field">
      <RacingLane v-for="horse in $store.state.raceList" v-bind="horse" />
    </div>

    <div class="flex mt-4">
      <div class="w-5/6">
        <div v-if="$store.state.raceList.length < 1">
          Generate program to create horses!
        </div>
        <div v-else-if="$store.state.lap == 0">
          Click to start button to start the race!
        </div>
        <div v-else>
          {{
            "Lap " +
            $store.state.lap +
            " - " +
            (1000 + 200 * $store.state.lap) +
            "m"
          }}
        </div>
      </div>
      <div class="w-1/6">FINISH!</div>
    </div>
  </div>
</template>

<script>
import RacingLane from "./RacingLane.vue";

export default {
  name: "RacingField",
  components: {
    RacingLane,
  },
};
</script>

<style scoped>
.flex.mt-4 > div {
  @apply text-center text-lg font-bold text-red-700;
}

.race-field {
  @apply flex flex-col gap-2 h-[90%] w-[96%] border-r-8 border-red-600;
}
</style>
