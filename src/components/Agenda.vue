<template>
  <div>
    <Fullcalendar
      :options="calendarPlugins"
      :header="headerToolbar"
      :events="events"
    />
    <Modal />
  </div>
</template>

<script>
import Fullcalendar from "@fullcalendar/vue";
import DayGridPlugin from "@fullcalendar/daygrid";
import TimeGridPlugin from "@fullcalendar/timegrid";
import InteractionPlugin from "@fullcalendar/interaction";
import ListPlugin from "@fullcalendar/list";

import { mapGetters } from "vuex";
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
        // events: "events",
        dateClick: this.handleDateClick,
        eventClick: this.handleClick,
      },
    };
  },
  components: { Fullcalendar },
  computed: {
    ...mapGetters(["events"]),
  },
  methods: {
    handleDateClick(arg) {
      console.log(arg);
      this.$store.commit("addEvents", {
        id: (new Date().getTime()),
        title: "Something",
        start: arg.dateStr,
        // end: arg.endStr,
        allDay: arg.allDay,
      })
    },
    handleClick() {
        this.$modal.show(EventModal,{
            text: "This is from the component",
            event: arg.event
        })
    }
  },
};
</script>

<style></style>
