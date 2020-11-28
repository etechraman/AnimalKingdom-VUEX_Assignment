<template>
  <v-row>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="create" v-bind="attrs" v-on="on">
          Create
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <div class="headline">Add animal</div>
        </v-card-title>
        <v-card-text>
          <v-container fluid>
            <v-row fluid>
              <v-col cols="12" sm="6" md="5">
                <v-text-field
                  label="Enter Name of Animal*"
                  v-model="name"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="5">
                <v-file-input
                  accept="image/*"
                  label="Add Image"
                  @change="source($event)"
                  v-model="fileSrc"
                  required
                ></v-file-input>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeForm()">
            Close
          </v-btn>
          <v-btn color="blue darken-1" text @click.prevent="addNewAnimal()">
            Add
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
const app = document.createElement("div");
app.setAttribute("data-app", true);
document.body.append(app);
export default {
  computed: {
    name: {
      set(val) {
        this.$store.commit("updateName", val);
      },
      get() {
        return this.$store.state.name;
      },
    },
    dialog: {
      set(val) {
        this.$store.commit("updateDialog", val);
      },
      get() {
        return this.$store.state.dialog;
      },
    },
    tempARR: {
      set(val) {
        this.$store.commit("updateSrc", val);
      },
      get() {
        return this.$store.state.tempARR;
      },
    },
    fileSrc: {
      set(val) {
        this.$store.commit("updateSrc", val);
      },
      get() {
        return this.$store.state.fileSrc;
      },
    },
  },
  methods: {
    addNewAnimal() {
      if (this.name !== "" && this.tempARR.src !== "") {
        this.$store.commit("addNewAnimal", {
          src: this.tempARR.src,
          name: this.name,
        });
      } else {
        this.name = "";
        this.tempARR.src = "";
        this.fileSrc = null;
        alert("Caution!!\nAll fields are mandatory");
      }
    },
    closeForm() {
      this.$store.state.dialog = false;
      this.$store.state.name = "";
      this.$store.state.tempARR.src = "";
      this.$store.state.fileSrc = null;
    },
    source(e) {
      if (e === undefined) return;
      else {
        var files = e;
        this.createImage(files);
      }
    },
    createImage(file) {
      let reader = new FileReader();
      reader.onload = (e) => {
        this.$store.state.tempARR.src = e.target.result;
      };
      reader.readAsDataURL(file);
    },
  },
};
</script>
<style>
.headline {
  margin: 10px 18px;
  padding-top: 13px;
}
input {
  padding-top: 22px;
}
</style>
