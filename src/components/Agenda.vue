<template>
  <div class="container pt-5 pb-2">
    <div class="card mx-auto">
      <div class="card-body shadow">
        <Fullcalendar :options="calendarPlugins" :header="headerToolbar">
          <template #eventContent="{ timeText, event }">
            <b>{{ timeText }}</b>
            <i>{{ event.title }}</i>
          </template>
        </Fullcalendar>
      </div>
    </div>
  </div>
</template>

<script>
import Fullcalendar from "@fullcalendar/vue";
import DayGridPlugin from "@fullcalendar/daygrid";
import TimeGridPlugin from "@fullcalendar/timegrid";
import InteractionPlugin from "@fullcalendar/interaction";
import ListPlugin from "@fullcalendar/list";

// import EventModal from "./EventModal.vue";
import { mapGetters, mapState } from "vuex";

export default {
  name: "Agenda",
  data() {
    return {
      calendarPlugins: {
        plugins: [DayGridPlugin, TimeGridPlugin, InteractionPlugin, ListPlugin],
        initialView: "dayGridMonth",
        headerToolbar: {
          start: "dayGridMonth timeGridWeek timeGridDay",
          center: "title",
          end: "prev today next",
        },
        selectable: true,
        selectMirror: true,
        editable: true,
        dayMaxEvents: true,
        event: this.events,
        dateClick: this.handleDateClick,
      },
    };
  },
  components: { Fullcalendar },
  computed: {
    ...mapGetters(["events"]),
    ...mapState(["events"]),
  },
  methods: {
    handleDateClick(arg) {
      /* Get click event data */
      console.log(arg);
      /* Get event data in store */
      console.log(this.$store.state.events);
      this.$store.commit("addEvent", {
        id: new Date().getTime(),
        title: "Some event",
        start: arg.dateStr,
        allDay: arg.allDay,
      });
    },
  },
};
</script>

<style lang="scss">
.card {
  width: 1000px;

  .card-body {
    width: 100%;
    a {
      text-decoration: none;
      color: #2c3e50;
    }
  }
}
@media only screen and (max-width: 600px) {
  .card {
    width: 400px;
  }
  .fc .fc-button {
    display: flex;
    flex-direction: column;
    margin: 1px;
    width: 60px;
    font-size: 0.8rem;
  }
}
</style>
