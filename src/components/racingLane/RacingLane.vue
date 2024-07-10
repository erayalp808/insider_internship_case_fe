<template>
  <div class="flex w-full h-16">
    <div class="flex flex-col justify-center items-center w-1/12 font-bold text-lg border-2 border-black bg-green-500">
      <div>{{ lane }}</div>
      <div class="text-xs">{{ name }}</div>
    </div>
    <div class="flex items-center w-11/12 border-black border-y-2">
      <font-awesome-icon
        v-if="!!name"
        :icon="['fas', 'horse']"
        size="3x"
        class="transition-left duration-100 ease-linear relative"
        :style="{ left: position + '%' }"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "RacingLane",
  props: {
    lane: Number,
    position: Number,
    name: String,
  },
};
</script>
