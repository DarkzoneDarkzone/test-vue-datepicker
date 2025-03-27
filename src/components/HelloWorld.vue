<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <v-date-picker v-model="date">
      <template v-slot="{ inputValue, inputEvents }">
        <input
          class="bg-white border px-2 py-1 rounded"
          :value="inputValue"
          v-on="inputEvents"
        />
      </template>
    </v-date-picker>

    <hr>

    <DatePicker v-model="selectedDate" format="YYYY-MM-DD" />
    <p>Selected Date: {{ selectedDate }}</p>

    <hr>
    <div class="text-center" style="margin-inline: auto;">
      <Datepicker style="margin-inline: auto; width: fit-content;"></Datepicker>
    </div>

    <hr>

    <input type="date" v-model="date" />
  </div>
</template>

<script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";

import Datepicker from 'vuejs-datepicker';

export default {
  components: {
    DatePicker,
    Datepicker,
  },
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      date: new Date(),
      masks: {
        input: 'YYYY-MM-DD',
      },
      selectedDate: null,
      options: {
          format: 'DD/MM/YYYY',
          useCurrent: false,
        } 
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
