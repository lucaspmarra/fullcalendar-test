<template>
  <div>
    <Fullcalendar :plugins="calendarPlugins" :header="header" />
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
      calendarPlugins: [
        DayGridPlugin,
        TimeGridPlugin,
        InteractionPlugin,
        ListPlugin,
      ],
      header: {
        left: "dayGridMonth timeGridWeek timeGridDay listWeek",
        center: "title",
        right: "prev today next",
      },
    };
  },
  components: { Fullcalendar },
  computed: {
    ...mapGetters("EVENTS"),
  },
  methods: {},
};
</script>

<style></style>
