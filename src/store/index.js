import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    animals: [
      {
        src:
          "https://static01.nyt.com/images/2020/10/29/climate/29CLI-WOLVES1/29CLI-WOLVES1-mobileMasterAt3x.jpg",
        name: "Wolf",
      },
      {
        src:
          "https://www.nationalgeographic.com/content/dam/photography/PROOF/2017/August/eagle-trafficking/eagle_corey_arnold.adapt.1900.1.jpg",
        name: "Eagle",
      },
      {
        src:
          "https://i.pinimg.com/originals/1c/2f/52/1c2f52962906d49ee2c3359a23de64e1.jpg",
        name: "Lion",
      },
      {
        src:
          "https://www.nationalgeographic.com/content/dam/photography/PROOF/2017/August/eagle-trafficking/eagle_corey_arnold.adapt.1900.1.jpg",
        name: "Eagle",
      },
      {
        src:
          "https://media.istockphoto.com/photos/big-dog-picture-id513392620?k=6&m=513392620&s=612x612&w=0&h=8n-SyCfe4VAQdaC-NIuk2vgyf2FoGMAvQesQb2m6XDw=",
        name: "Dog",
      },
      {
        src:
          "https://i.pinimg.com/originals/1c/2f/52/1c2f52962906d49ee2c3359a23de64e1.jpg",
        name: "Lion",
      },
    ],
    showModal: false,
    name: "",
    src: "",
    tempARR: {
      src: "",
    },
    fileSrc: null,
    dialog: false,
  },
  getters: {
    allAnimals: (state) => state.animals,
    showModal: (state) => state.showModal,
    name: (state) => state.name,
    dialog: (state) => state.dialog,
    fileSrc: (state) => state.fileSrc,
  },
  mutations: {
    addNewAnimal(state, payload) {
      state.animals.push(payload);
      this.state.dialog = false;
      this.state.name = "";
      this.state.tempARR.src = "";
      this.state.fileSrc = null;
    },
    updateName: (state, val) => {
      state.name = val;
    },
    updateSrc: (state, val) => {
      state.tempARR.src = val;
      state.fileSrc = val;
    },
    updateDialog: (state, val) => {
      state.dialog = val;
    },
    remove(state, index) {
      if (confirm("Caution!!!!\nAre you sure you want to delete?")) {
        this.state.animals.splice(index, 1);
      } else {
        alert("No item is deleted");
      }
    },
  },
  actions: {},
  modules: {},
});
