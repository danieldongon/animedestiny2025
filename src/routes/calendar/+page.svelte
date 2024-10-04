<script>
  import Navbar from '$lib/components/Navbar.svelte';

  let events = [
    { date: '2024-10-05', name: 'Opening Ceremony' },
    { date: '2024-10-06', name: 'Workshop 1' },
    { date: '2024-10-07', name: 'Performance by Artist A' },
  ];
</script>

<Navbar />

<main>
  <h1>Event Calendar</h1>
  <ul>
    {#each events as { date, name }}
      <li>
        <strong>{date}</strong> - {name}
      </li>
    {/each}
  </ul>
</main>

<style>
  main {
    padding: 2rem;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  ul li {
    margin-bottom: 0.5rem;
  }
</style>