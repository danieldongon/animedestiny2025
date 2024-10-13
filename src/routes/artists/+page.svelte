<script>
import Footer from '$lib/components/Footer.svelte';
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
  <div class="page-title">
    Artists Alley
  </div>
  <div class="artists-grid">
    {#each artists as { name, socials, description, location }}
      <div class="artist-card">
        <div class="name-bar">
          <h2>{name}</h2>
        </div>
        
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
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }

  h1 {
    text-align: center;
    margin-bottom: 1.5rem;
  }
  
  .page-title {
    background-color: #485077; /* Solid blue background */
    color: #fed893; /* Yellow text */
    font-size: 3rem; /* Text size */
    height: 10rem; /* Height of the bar */
    display: flex; /* Flexbox for centering */
    justify-content: center; /* Horizontally center the text */
    align-items: center; /* Vertically center the text */
    width: 100%; /* Full viewport width */
    margin: 0; /* Remove any default margin */
    box-sizing: border-box; /* Ensures padding doesn't affect width */
    margin-bottom:2rem;
  }

  .artists-grid {
    display: flex;
    flex-wrap: wrap; /* Allows wrapping of items */
    flex-direction: column;
    justify-content: center; /* Center the flex items */
    gap: 20px; /* Space between each card */
    max-width: 100rem; /* Set the max width of the grid container */
    width: 100%; /* Ensure the grid spans full width */
    margin: 0 auto; /* Center the grid container horizontally */
    padding-top:2rem;
  }

  .artist-card {
    background-color: #f9f9f9;
    border: 2px solid #1d3557;
    padding: 0 1rem 1rem 1rem;
    border-radius: 8px;
    transition: box-shadow 0.3s ease, transform 0.3s ease;
    text-align: left;
    max-width: 100rem;
    
  }

  /* Name bar styling */
  .name-bar {
    display: flex;
    align-items: center;
    background-color: #1d3557; /* Blue background */
    color: white;
    width: 100%; /* Full width of the card */
    padding: 1rem;
    margin-bottom: 10px; /* Add space below the name */
    width: calc(100% + 2rem); /* Full width + compensate for side padding */
    margin-left: -1rem;
  }

  .artist-card:hover {
    box-shadow: 0 0 10px 3px rgba(29, 53, 87, 0.5); /* Slight glow */
    transform: translateY(-3px); /* Slight lift */
  }

  .artist-card h2 {
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

<Footer />