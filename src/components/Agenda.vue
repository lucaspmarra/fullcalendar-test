<template>
  <div>
    <Fullcalendar
      :options="calendarPlugins"
      :header="headerToolbar"
      :events="events"
    />
  </div>
</template>

<script>
import Fullcalendar from "@fullcalendar/vue";
import DayGridPlugin from "@fullcalendar/daygrid";
import TimeGridPlugin from "@fullcalendar/timegrid";
import InteractionPlugin from "@fullcalendar/interaction";
import ListPlugin from "@fullcalendar/list";

import { mapGetters } from "vuex";

export default {
  name: "Agenda",
  data() {
    return {
      calendarPlugins: {
        plugins: [DayGridPlugin, TimeGridPlugin, InteractionPlugin, ListPlugin],
        initialView: "dayGridMonth",
        headerToolbar: {
          start: "dayGridMonth timeGridWeek timeGridDay listWeek",
          center: "title",
          end: "prev today next",
        },
        selectable: true,
        selectMirror: true,
        events: "EVENTS",
        dateClick: this.handleDateClick,
      },
    };
  },
  components: { Fullcalendar },
  computed: {
    ...mapGetters(["EVENTS"]),
  },
  methods: {
    handleDateClick(arg) {
      console.log(arg);
      this.$store.commit("ADD_EVENT", {
        title: "Something",
        start: arg.start,
        end: arg.end,
        allDay: arg.allDay,
      });
    },
  },
};
</script>

<style></style>
