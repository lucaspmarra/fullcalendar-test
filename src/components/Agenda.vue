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
        events: [],
      },
    };
  },
  components: { Fullcalendar },
  computed: {
    ...mapGetters("EVENTS"),
  },
};
</script>

<style></style>
