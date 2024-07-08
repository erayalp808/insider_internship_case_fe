<template>
  <div class="w-2/12 h-full">
    <div class="w-full px-3 bg-yellow-300">
      <h2 class="text-lg font-bold">Horse List (1-20)</h2>
    </div>
    <div class="max-h-[85vh] flex flex-col w-full overflow-y-scroll">
      <div v-for="horse in $store.state.horseList">
        <HorseCard v-bind="horse" />
      </div>
    </div>
  </div>
</template>

<script>
import HorseCard from "./HorseCard.vue";

export default {
  name: "HorseList",
  components: {
    HorseCard,
  },
};
</script>
