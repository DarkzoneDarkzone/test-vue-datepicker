<template>
  <div class="hello pb-5">
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
      <label for="">
        datepicker
      </label>
      <Datepicker style="margin-inline: auto; width: fit-content;"></Datepicker>
    </div>

    <hr>

    <div class="">
      <label for="">default web</label>
      <input type="date" v-model="date1" />
    </div>

    <hr>

    <div style="width: 100px; margin-inline: auto;">
      <label for="">flatpickr</label>
      <input id="myID" type="text" />
    </div>

    <hr>

    <div>
      <label for="">date picker mobile</label>
      <div class="">
      <input type="text" :value="setDate" @click="$bvModal.show('modal-1')" readonly placeholder="Y-m-d" />
      <!-- <b-button v-b-modal.modal-1>Launch demo modal</b-button> -->
      </div>
      <div class="">
        <b-modal id="modal-1" title="select date" body-class="p-1 text-center" scrollable>
          <template #default >
            <p class="my-2 mx-auto">เลือกวันที่และเวลาที่ต้องการจองโต๊ะ</p>
            <div class="w-100">
              <v-date-picker v-model="date2" class="w-100" is-dark :rows="2" />
              <hr>
              <v-date-picker v-model="date3" class="w-100 mt-3" is-dark />
              <v-date-picker v-model="date4" class="w-100 mt-3" is-dark />
            </div>
          </template>
        </b-modal>
      </div>
    </div>
  </div>
</template>

<script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";

import Datepicker from 'vuejs-datepicker';

import flatpickr from "flatpickr";

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
      date1: new Date(),
      date2: new Date(),
      date3: new Date(),
      date4: new Date(),
      masks: {
        input: 'YYYY-MM-DD',
      },
      selectedDate: null,
      options: {
          format: 'DD/MM/YYYY',
          useCurrent: false,
        } 
    }
  },
  mounted() {
    console.log('ok')
    flatpickr("#myID", {});
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.modal-dialog {
  max-width: 100%;
  margin: 0 !important;
  border: 0;
  min-height: 100dvh;
  border-radius: 0 !important;
}

.modal-content {
  border: 0;
  border-radius: 0;
  min-height: 100dvh;
  border: 0 !important;
  border-radius: 0 !important;
}

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
