import { useState } from "react";

import { formatDate } from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";

import { GlassBox, Header } from "../components";
import { useColors } from "../theme";

const Calender = () => {
  const { colors } = useColors();
  const [currentEvents, setCurrentEvents] = useState([]);

  const handleDateClick = (selected) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };

  return (
    <Box m={{ xs: 0, md: "20px" }}>
      <Header title="Calendar" subtitle="Full Calendar Interactive Page" />

      <Box
        display="flex"
        flexDirection={{ xs: "column", lg: "row" }}
        justifyContent="space-between"
      >
        {/* CALENDAR SIDEBAR */}
        <Box
          flex="1 1 20%"
          backgroundColor={colors.blueAccent[700]}
          p="15px"
          borderRadius={{ xs: "10px 10px 0 0", lg: "10px 0 0 10px" }}
        >
          <Typography variant="h5">Events</Typography>
          <List
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: { xs: "row", lg: "column" },
              gap: "10px",
              flexWrap: "wrap",
            }}
          >
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  borderRadius: "10px",
                  maxWidth: "12rem",
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                      {formatDate(event.start, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* CALENDAR */}
        <GlassBox
          flex="1 1 100%"
          borderRadius={{ xs: "0 0 10px 10px", lg: "0 10px 10px 0" }}
          p="15px"
        >
          <FullCalendar
            height="70vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={[
              {
                id: "12315",
                title: "All-day event",
                date: "2022-09-14",
              },
              {
                id: "5123",
                title: "Timed event",
                date: "2022-09-28",
              },
            ]}
          />
        </GlassBox>
      </Box>
    </Box>
  );
};

export default Calender;
