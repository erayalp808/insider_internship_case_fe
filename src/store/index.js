import { createStore } from "vuex";

export default createStore({
  state: {
    horseList: [
      { name: "Sierra", condition: 95, color: "Roan" },
      { name: "Blaze", condition: 92, color: "White" },
      { name: "Atlas", condition: 91, color: "Cremello" },
      { name: "Storm", condition: 90, color: "Chestnut" },
      { name: "Flash", condition: 88, color: "Dun" },
      { name: "Nova", condition: 87, color: "Champagne" },
      { name: "Thunder", condition: 85, color: "Black" },
      { name: "Lightning", condition: 84, color: "Red Roan" },
      { name: "Wind", condition: 83, color: "Buckskin" },
      { name: "Dawn", condition: 80, color: "Silver" },
      { name: "Dakota", condition: 79, color: "Pinto" },
      { name: "Apollo", condition: 77, color: "Sorrel" },
      { name: "Spirit", condition: 76, color: "Brown" },
      { name: "Misty", condition: 74, color: "Palomino" },
      { name: "Zephyr", condition: 70, color: "Grullo" },
      { name: "Shadow", condition: 68, color: "Gray" },
      { name: "Echo", condition: 60, color: "Perlino" },
      { name: "Raven", condition: 58, color: "Blue Roan" },
      { name: "Phoenix", condition: 50, color: "Chocolate" },
      { name: "Comet", condition: 45, color: "Bay" },
    ],
    raceList: [],
    lap: 0,
    isRacePaused: true,
  },
  mutations: {
    setRaceList(state, list) {
      state.raceList = list;
    },
    updateHorsePosition(state, name) {
      const horse = state.raceList.find((horse) => horse.name === name);
      if (horse) {
        horse.position += horse.condition * Math.random() * 0.02;
      }
    },
    togglePause(state) {
      state.isRacePaused = !state.isRacePaused;
    },
  },
  getters: {},
  actions: {
    createRaceList({ state, commit }) {
      const horseList = [...state.horseList];
      const shuffledHorseList = horseList.sort(() => 0.5 - Math.random());

      commit("setRaceList", []);

      shuffledHorseList.slice(0, 10).forEach((horse, index) => {
        commit("setRaceList", [
          ...state.raceList,
          { ...horse, lane: index + 1, position: 0 },
        ]);
      });
    },
    toggleRace({ state, commit, dispatch }) {
      if (state.raceList.length > 0) {
        commit("togglePause");
        if (!state.isRacePaused) dispatch("animateRace");
      }
    },
    animateRace({ state, commit }) {
      const interval = setInterval(() => {
        let allHorsesFinished = true;

        state.raceList.forEach((horse) => {
          if (horse.position < 95) {
            allHorsesFinished = false;
            commit("updateHorsePosition", horse.name);
          }
        });

        if (allHorsesFinished || state.isRacePaused) {
          clearInterval(interval);
        }
      }, 50);
    },
  },
  modules: {},
});
