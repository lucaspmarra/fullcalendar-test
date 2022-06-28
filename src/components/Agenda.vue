<template>
  <div>
    <Fullcalendar :options="calendarPlugins" :header="headerToolbar" />
  </div>
</template>

<script>
import Fullcalendar from "@fullcalendar/vue";
import DayGridPlugin from "@fullcalendar/daygrid";
import TimeGridPlugin from "@fullcalendar/timegrid";
import InteractionPlugin from "@fullcalendar/interaction";
import ListPlugin from "@fullcalendar/list";

import EventModal from "./EventModal.vue";

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
        editable: true,
        // events: this.eventsComputed,
        dateClick: this.handleDateClick,
      },
    };
  },
  components: { Fullcalendar },
  computed: {
    getEvents() {
      console.log(this.$store.state.events);
      return this.$store.state.events;
    },
  },
  methods: {
    handleDateClick(arg) {
      console.log(arg);
      this.$modal.show(EventModal, {
        text: "This is from the component",
      });
      this.$store.commit("ADD_EVENT", {
        id: new Date().getTime(),
        title: "Some event",
        start: arg.dateStr,
        // end: arg.endStr,
        allDay: arg.allDay,
      });
    },
  },
};
</script>

<style></style>
