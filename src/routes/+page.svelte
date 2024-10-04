<script>
  import { onMount } from 'svelte';
  import Navbar from '$lib/components/Navbar.svelte';

  // Image URLs (You can replace these with actual URLs for your images)
  let desktopImage = 'https://i.imgur.com/GhFP5xD.jpeg'; // Replace with your desktop image URL
  let mobileImage = 'https://assetsio.gnwcdn.com/Honkai-Star-Rail-Aventurine-materials%2C-kit%2C-and-Eidolons-cover.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp'; // Replace with your mobile image URL

  // Add URLs for side images
  let locationImage = 'https://www.sasaki.com/wp-content/uploads/2022/03/DD_SASAKI_BERKELEY_V2-Evans_2021_07_30-Update-1800x1013.jpg'; // Replace with actual image URL
  let exhibitorsImage = 'https://example.com/exhibitors-image.jpg'; // Replace with actual image URL
  let rulesImage = 'https://example.com/rules-image.jpg'; // Replace with actual image URL
  let scheduleImage = 'https://example.com/schedule-image.jpg'; // Replace with actual image URL
  let aboutUsImage = 'https://i.redd.it/tyvpt1fy7b601.jpg'; // Replace with actual image URL

  let scrollY = 0;

  onMount(() => {
    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
</script>

<Navbar />

<main>
  <div class="hero-image" style="--scroll-y: {scrollY}">
    <img src="{mobileImage}" alt="Anime Destiny Event" class="mobile" />
    <img src="{desktopImage}" alt="Anime Destiny Event" class="desktop" />
    
    <div class="overlay">
      <h1 class="event-title">Anime Destiny</h1>
      <p class="event-date">November 9, 2024</p>
      <a href="https://example.com/purchase-tickets" class="purchase-button" target="_blank" rel="noopener noreferrer">Purchase Tickets</a>
    </div>
  </div>

  <div class="event-info">

    <div class="info-box">
      <img src="{aboutUsImage}" alt="About Us" class="info-image left" />
      <div class="info-description">
        <h2>What is Anime Destiny?</h2>
        <p>Anime Destiny is the annual anime convention hosted by Cal Animage Alpha. lorem ipsum dolor sit amet peepee poopoo</p>
        <a href="/about" class="info-button">More About Us</a>
      </div>
    </div>

    
    <div class="info-box">
      <div class="info-description">
        <h2>Schedule</h2>
        <p>Check out the event schedule.</p>
        <a href="/schedule" class="info-button">View Schedule</a>
      </div>
      <img src="{scheduleImage}" alt="Schedule" class="info-image right" />
    </div>

    <div class="info-box">
      <img src="{locationImage}" alt="Location" class="info-image left" />
      <div class="info-description">
        <h2>Location</h2>
        <p>UC Berkeley</p>
        <a href="/location" class="info-button">More Info</a>
      </div>
    </div>
    

    <div class="info-box">
      <div class="info-description">
        <h2>Exhibitors</h2>
        <p>Meet your favorite artists and creators.</p>
        <a href="/artists" class="info-button">View Artists</a>
      </div>
      <img src="{exhibitorsImage}" alt="Exhibitors" class="info-image right" />
    </div>

    <div class="info-box">
      <img src="{rulesImage}" alt="Rules" class="info-image left" />
      <div class="info-description">
        <h2>Rules</h2>
        <p>Understand the event rules and regulations.</p>
        <a href="/rules" class="info-button">Read Rules</a>
      </div>
    </div>




  </div>

  <a href="https://example.com/purchase-tickets" class="purchase-button bottom-button" target="_blank" rel="noopener noreferrer">Purchase Tickets</a>
</main>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&family=Montserrat:wght@400&display=swap');

  main {
    padding: 0;
  }

  .hero-image {
    position: relative;
    height: 100vh; /* Full viewport height */
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .hero-image img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .hero-image .overlay {
    color: white;
    text-align: center;
    position: relative;
    z-index: 1;
    opacity: calc(1 - (var(--scroll-y) / 600)); /* Adjust fade out based on scroll */
    transition: opacity 0.3s ease;
  }

  .event-title {
    font-family: 'Montserrat', sans-serif;
    font-size: 4rem; /* Large font size for the title */
    margin: 0;
  }

  .event-date {
    font-family: 'Roboto', sans-serif;
    font-size: 2rem; /* Medium font size for the date */
    margin-top: 0.5rem;
  }

  .purchase-button {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    margin-top: 1.5rem;
    background-color: #0070f3; /* Button color */
    color: white;
    border: none;
    border-radius: 5px;
    text-decoration: none;
    font-size: 1.25rem;
    transition: background-color 0.3s ease;
  }

  .purchase-button:hover {
    background-color: #0056b3; /* Darker blue on hover */
  }

  .event-info {
    padding: 2rem;
    text-align: center;
  }

  .info-box {
    display: flex;
    align-items: center;
    margin: 1rem 0;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }

  .info-image {
    width: 40%; /* Adjust the width of images */
    height: auto;
    border-radius: 8px;
  }

  .info-description {
    width: 60%; /* Width for the description area */
    text-align: left; /* Left align text */
    padding: 0 1rem; /* Padding around description */
  }

  .info-button {
    display: inline-block;
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background-color: #0070f3; /* Button color */
    color: white;
    border: none;
    border-radius: 5px;
    text-decoration: none;
    transition: background-color 0.3s ease;
  }

  .info-button:hover {
    background-color: #0056b3; /* Darker blue on hover */
  }

  .bottom-button {
    margin-top: 2rem;
  }
</style>