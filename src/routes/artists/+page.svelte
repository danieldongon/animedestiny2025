<script>
  import Navbar from '$lib/components/Navbar.svelte';
  import { artists } from './artists.js';
  // Utility function to determine if the socials field is a URL
  function isUrl(socials) {
    return socials.startsWith('http://') || socials.startsWith('https://') || socials.includes('.co');
  }

  // Helper function to add protocol if missing
  function formatUrl(socials) {
    if (socials.startsWith('http://') || socials.startsWith('https://')) {
      return socials;
    }
    return `https://${socials}`;
  }
</script>

<Navbar />

<main>
  <h1>Meet Our Artists</h1>
  <div class="artists-grid">
    {#each artists as { name, socials, description, location }}
      <div class="artist-card">
        <h2>{name}</h2>
        
        {#if isUrl(socials)}
          <a href="{formatUrl(socials)}" target="_blank" rel="noopener noreferrer">{socials}</a>
        {:else}
          <p>Social Media: {socials}</p>
        {/if}

        {#if description}
          <p>{description}</p>
        {/if}
        
        <p class="location">Location: {location}</p>
      </div>
    {/each}
  </div>
</main>

<style>
  main {
    padding: 2rem;
  }

  h1 {
    text-align: center;
    margin-bottom: 1.5rem;
  }

  .artists-grid {
    display: flex;
    flex-direction: column; /* Stack cards vertically */
    gap: 1rem; /* Compact layout */
    padding: 0 2rem;
  }

  .artist-card {
    background-color: #f9f9f9;
    border: 2px solid #1d3557; /* Soft dark blue outline */
    padding: 1rem;
    border-radius: 8px;
    transition: box-shadow 0.3s ease, transform 0.3s ease;
    text-align: left;
  }

  .artist-card:hover {
    box-shadow: 0 0 10px 3px rgba(29, 53, 87, 0.5); /* Slight glow */
    transform: translateY(-3px); /* Slight lift */
  }

  .artist-card h2 {
    margin-bottom: 0.5rem;
    font-size: 1.25rem;
  }

  .artist-card a {
    display: inline-block;
    margin-bottom: 0.5rem;
    color: #0070f3; /* Link color */
    text-decoration: none;
    font-weight: bold;
    word-break: break-all; /* Ensure long URLs wrap properly */
  }

  .artist-card a:hover {
    color: #0056b3; /* Darker blue on hover */
  }

  .artist-card p {
    margin: 0.25rem 0;
    color: #333;
  }

  .artist-card .location {
    font-style: italic;
    color: #555;
  }
</style>