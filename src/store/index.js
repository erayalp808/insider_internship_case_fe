import { createStore } from "vuex";

const MAX_POSITION = 95;
const LAP_COUNT = 6;

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
    resultList: Array.from({ length: LAP_COUNT }, () => []),
    lap: 0,
    isRacePaused: true,
  },
  mutations: {
    setRaceList(state, list) {
      state.raceList = list;
    },
    setLap(state, lap) {
      state.lap = lap;
    },
    clearResultList(state) {
      state.resultList = Array.from({ length: LAP_COUNT }, () => []);
    },
    updateResultList(state, { lane, name }) {
      state.resultList[state.lap - 1].push({ lane, name });
    },
    togglePause(state) {
      state.isRacePaused = !state.isRacePaused;
    },
    updateHorsePosition(state, name) {
      const horse = state.raceList.find((horse) => horse.name === name);

      if (horse) {
        horse.position += horse.condition * Math.random() * 0.02;

        if (horse.position > MAX_POSITION) horse.position = MAX_POSITION;
      }
    },
    resetHorsePositions(state) {
      state.raceList.forEach((horse) => (horse.position = 0));
    },
  },
  getters: {
    getRaceHorseByName: (state) => (name) => {
      return state.raceList.find((horse) => horse.name === name);
    },
  },
  actions: {
    createRaceList({ state, commit }) {
      if (!state.isRacePaused) commit("togglePause");
      commit("setLap", 1);
      commit("setRaceList", []);
      commit("clearResultList");

      const shuffledHorseList = [...state.horseList].sort(() => 0.5 - Math.random());
      const raceList = shuffledHorseList
        .slice(0, 10)
        .map((horse, index) => ({ ...horse, lane: index + 1, position: 0 }));

      commit("setRaceList", raceList);
    },
    toggleRace({ state, commit, dispatch }) {
      if (state.raceList.length > 0) {
        commit("togglePause");

        if (!state.isRacePaused) dispatch("animateRace");
      }
    },
    animateRace({ state, commit, dispatch, getters }) {
      const interval = setInterval(() => {
        if (state.isRacePaused) clearInterval(interval);
        let allHorsesFinished = true;

        state.raceList.forEach(({ position, name, lane }) => {
          if (position < MAX_POSITION) {
            allHorsesFinished = false;

            commit("updateHorsePosition", name);

            const { position } = getters.getRaceHorseByName(name);

            if (position === MAX_POSITION) {
              commit("updateResultList", { lane, name });
            }
          }
        });

        if (allHorsesFinished) {
          clearInterval(interval);

          if (state.lap < LAP_COUNT && !state.isRacePaused) {
            commit("setLap", state.lap + 1);
            commit("resetHorsePositions");
            dispatch("animateRace");
          }
        }
      }, 50);
    },
  },
  modules: {},
});
