<!-- Calendar.svelte -->
<script>
  import { onMount } from 'svelte';
  import { Calendar } from '@fullcalendar/core';
  import dayGridPlugin from '@fullcalendar/daygrid';
  import timeGridPlugin from '@fullcalendar/timegrid';
  import listPlugin from '@fullcalendar/list';

  let calendarEl;

  // Event data
  let events = [
    {
      title: '[EVENT] CAA Anime Trivia!',
      start: '2024-11-09T09:30:00',
      end: '2024-11-09T10:30:00',
      location: 'Stephens Hall',
      description: 'From Kakegurui to Dress up Darling, join the CAA Events Team in a team game of Um Actually! Show off your anime knowledge!'
    },
    {
      title: '[EVENT] Nikkei Choral Ensemble Performance',
      start: '2024-11-09T11:00:00',
      end: '2024-11-09T12:00:00',
      location: 'Stephens Hall',
      description: 'Student group performing an acapella set of songs, including Jpop, Anime songs, and some English music.'
    },
    {
      title: '[PANEL] Entering the Music and Voice Acting Industry with Raj Ramayya',
      start: '2024-11-09T13:30:00',
      end: '2024-11-09T14:30:00',
      location: 'Stephens Hall',
      description: 'An industry panel with Raj Ramayya, an Indo-Canadian Singer/Songwriter/Composer.'
    },
    {
      title: '[EVENT] Genshin at Berkeley Club Event',
      start: '2024-11-09T15:00:00',
      end: '2024-11-09T18:00:00',
      location: 'Stephens Hall',
      description: 'Join Berkeley\'s Genshin Club! Complete four “commissions” for special prizes and discounts on merch.'
    },
    {
      title: '[PANEL] Cosplay Wrestling Federation',
      start: '2024-11-09T10:30:00',
      end: '2024-11-09T11:30:00',
      location: 'Tilden Room',
      description: 'The CWF is back at UC Berkeley to once again school you in the ABCs of wrestling, comedy, and improv!'
    },
    {
      title: '[EVENT] The Intermission Orchestra',
      start: '2024-11-09T14:00:00',
      end: '2024-11-09T15:00:00',
      location: 'Tilden Room',
      description: 'Enjoy their performance, which includes both full orchestral and small ensemble pieces!'
    },
    {
      title: '[EVENT] Anikura Destiny',
      start: '2024-11-09T16:30:00',
      end: '2024-11-09T19:00:00',
      location: 'Tilden Room',
      description: 'Come experience an anime rave featuring live DJs performing various hits across anime, games, and Japanese media.'
    }
  ];

  onMount(() => {
    const calendar = new Calendar(calendarEl, {
      plugins: [dayGridPlugin, timeGridPlugin, listPlugin],
      initialView: 'timeGridDay', // Display as a day calendar with time slots
      initialDate: '2024-11-09',   // Set the initial date to November 9th, 2024
      headerToolbar: {
        left: '',
        center: '',
        right: ''
      },
      events: events,
      eventClick: function(info) {
        alert(
          `Event: ${info.event.title}\nTime: ${info.event.start.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})} - ${info.event.end.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}\nLocation: ${info.event.extendedProps.location}\nDescription: ${info.event.extendedProps.description}`
        );
      },
      expandRows: true,
      slotMinTime: '08:00:00',
      slotMaxTime: '20:00:00',
      allDaySlot: false,
      nowIndicator: true,
      height: 'auto',
      timeZone: 'local'
    });

    calendar.render();
  });
</script>

<div bind:this={calendarEl}></div>
