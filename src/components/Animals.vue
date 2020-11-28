<template>
  <div class="mainContainer">
    <v-app>
      <v-main>
        <ul class="header">
          <li>
            <span class="heading"><h2>Animals of the Kingdom</h2></span>
          </li>
          <li><Form /></li>
        </ul>
        <v-container>
          <v-row no-gutters>
            <v-col
              v-for="(item, index) in animals"
              :key="index"
              cols="12"
              sm="6"
              md="4"
              lg="4"
              xs="12"
            >
              <v-card class="mx-auto thumbnail" width="290.5px">
                <v-img
                  class="white--text align-end"
                  max-height="200px"
                  v-bind:src="item.src"
                >
                  <v-card-actions class="close">
                    <v-icon left @click="remove(index)">
                      mdi-close
                    </v-icon>
                  </v-card-actions>
                </v-img>
                <v-card-title>{{ item.name }}</v-card-title>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import Form from "./Form";
import { mapGetters } from "vuex";
export default {
  name: "App",

  components: {
    Form,
  },
  computed: {
    ...mapGetters({
      animals: "allAnimals",
    }),
  },
  methods: {
    create() {
      this.$store.state.showModal = true;
    },
    remove(index) {
      this.$store.commit("remove", index);
    },
  },
};
</script>
<style>
.mainContainer {
  position: relative;
  left: 7%;
  max-width: 1440px;
}
.header {
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;
  margin-left: 175px;
  margin-top: 30px;
  position: relative;
}
.heading {
  margin-right: 1000px;
  color: black;
}
h2 {
  letter-spacing: 2.6px;
  font-weight: 500;
}
.create {
  margin-bottom: 25px;
  left: 78%;
}
.thumbnail {
  width: 23%;
  border: 0.5px solid rgb(170, 170, 170);
  border-radius: 4px;
  text-align: center;
  margin-top: 30px;
}
.mdi-delete-circle::before {
  font-size: 35px;
}
.v-card__title {
  display: contents;
}
.v-card__actions {
  justify-content: flex-end;
}
.close {
  position: absolute;
  top: 1px;
  right: -4px;
}
@media screen and (max-width: 1500px) {
  .create {
    left: 8.5%;
  }
  .header {
    margin-left: 12%;
  }
  .mainContainer {
    left: 0%;
  }
}
@media screen and (max-width: 1024px) {
  .mainContainer {
    left: 0%;
  }
  .header {
    margin-left: 4%;
    display: block;
  }
}
@media screen and (max-width: 768px) {
  .mainContainer {
    left: 0%;
  }
  .header {
    margin-left: 3.5%;
    display: block;
  }
  .create {
    left: 2%;
  }
}
@media screen and (max-width: 430px) {
  .mainContainer {
    left: 0%;
  }
  h2 {
    letter-spacing: 0;
  }
  .header {
    display: block;
    margin-left: 13%;
  }
  .create {
    left: 0%;
  }
}
</style>
