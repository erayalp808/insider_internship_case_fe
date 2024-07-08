import { createStore } from "vuex";

export default createStore({
  state: {
    horseList: [
      { name: "Thunder", condition: 85, color: "Black" },
      { name: "Blaze", condition: 92, color: "White" },
      { name: "Spirit", condition: 76, color: "Brown" },
      { name: "Shadow", condition: 68, color: "Gray" },
      { name: "Storm", condition: 90, color: "Chestnut" },
      { name: "Misty", condition: 74, color: "Palomino" },
      { name: "Comet", condition: 81, color: "Bay" },
      { name: "Flash", condition: 88, color: "Dun" },
      { name: "Sierra", condition: 95, color: "Roan" },
      { name: "Dakota", condition: 79, color: "Pinto" },
      { name: "Wind", condition: 83, color: "Buckskin" },
      { name: "Apollo", condition: 77, color: "Sorrel" },
      { name: "Zephyr", condition: 89, color: "Grullo" },
      { name: "Raven", condition: 71, color: "Blue Roan" },
      { name: "Lightning", condition: 84, color: "Red Roan" },
      { name: "Echo", condition: 73, color: "Perlino" },
      { name: "Atlas", condition: 91, color: "Cremello" },
      { name: "Dawn", condition: 80, color: "Silver" },
      { name: "Nova", condition: 87, color: "Champagne" },
      { name: "Phoenix", condition: 82, color: "Chocolate" },
    ],
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: {},
});
