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
      <p class="event-date">Cal Animage Alpha presents</p>
      <h1 class="event-title">Anime Destiny 2024</h1>
      <p class="event-date">Saturday, November 9</p>
      <a href="https://example.com/purchase-tickets" class="purchase-button" target="_blank" rel="noopener noreferrer">Purchase Tickets</a>
    </div>
  </div>

  <div class="event-info">

    <!-- "What is Anime Destiny" Box -->
    <div class="info-box">
      <div class="info-image">
        <img src="path-to-what-is-anime-destiny-image.jpg" alt="What is Anime Destiny?">
      </div>
      <div class="info-content">
        <h2>What is Anime Destiny?</h2>
        <p>Anime Destiny is a celebration of anime, manga, and Japanese culture hosted at UC Berkeley. Learn more about our event and what makes it unique.</p>
        <a href="/about" class="info-button">About Us</a>
      </div>
    </div>

    <!-- Location Box -->
    <div class="info-box">
      <div class="info-map">
        <!-- Google Map Embed for UC Berkeley Location -->
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3158.758826798221!2d-122.2594233846757!3d37.8684338797419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80857c3f3b87e1d5%3A0x138c6740b4409d55!2s2495%20Bancroft%20Way%2C%20Berkeley%2C%20CA%2094720%2C%20USA!5e0!3m2!1sen!2sus!4v1696439621724!5m2!1sen!2sus" 
          width="100%" 
          height="300" 
          style="border:0;" 
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
      <div class="info-content">
        <h2>Location</h2>
        <p>Anime Destiny takes place at the UC Berkeley campus. Join us for a day full of events and fun in a beautiful location!</p>
        <a href="/location" class="info-button">Find Location</a>
      </div>
    </div>

    <!-- Exhibitors Box -->
    <div class="info-box">
      <div class="info-image">
        <img src="path-to-exhibitors-image.jpg" alt="Exhibitors">
      </div>
      <div class="info-content">
        <h2>Exhibitors</h2>
        <p>Discover amazing artists and exhibitors at Anime Destiny! Explore their work and find something special to take home.</p>
        <a href="/artists" class="info-button">Meet the Artists</a>
      </div>
    </div>

    <!-- Schedule Box -->
    <div class="info-box">
      <div class="info-image">
        <img src="path-to-schedule-image.jpg" alt="Schedule">
      </div>
      <div class="info-content">
        <h2>Schedule</h2>
        <p>Check out our exciting schedule filled with panels, performances, workshops, and more!</p>
        <a href="/schedule" class="info-button">View Schedule</a>
      </div>
    </div>

    <!-- Gaming Hall Box (No button) -->
    <div class="info-box">
      <div class="info-image">
        <img src="path-to-gaming-hall-image.jpg" alt="Gaming Hall">
      </div>
      <div class="info-content">
        <h2>Gaming Hall</h2>
        <p>Our gaming hall is the place to be for video games, tabletop games, and competitions! Come show off your skills.</p>
      </div>
    </div>

    <!-- Rules Box -->
    <div class="info-box">
      <div class="info-image">
        <img src="path-to-rules-image.jpg" alt="Rules">
      </div>
      <div class="info-content">
        <h2>Rules</h2>
        <p>Please make sure to review our event rules to ensure a safe and fun experience for everyone.</p>
        <a href="/rules" class="info-button">Read Rules</a>
      </div>
    </div>

    <!-- Buy Tickets Now Box -->
    <div class="info-box">
      <div class="info-image">
        <img src="path-to-tickets-image.jpg" alt="Buy Tickets">
      </div>
      <div class="info-content">
        <h2>Buy Tickets Now</h2>
        <a href="https://example.com/purchase-tickets" target="_blank" rel="noopener noreferrer" class="info-button">Purchase Tickets</a>
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
    font-family: 'Protest Strike', sans-serif;
    font-size: 8rem; /* Large font size for the title */
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
    background-color: #485077; /* Button color */
    color: white;
    border: none;
    border-radius: 5px;
    text-decoration: none;
    font-size: 1.25rem;
    transition: background-color 0.3s ease;
  }

  .purchase-button:hover {
    background-color: #b85f59; /* Darker blue on hover */
  }

  /* .event-info {
    padding: 2rem;
    text-align: center;
  } */


  .event-info {
    padding-top:2em;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    justify-content: center;
    gap: 2rem; /* Space between the boxes */
    width: 100%;
    max-width: 70rem; /* Constrain the total width */
    margin: 0 auto;
  }

  .info-box {
    flex: 1 1 40rem; /* Flex-grow, flex-shrink, flex-basis */
    min-width: 20rem; /* Minimum width before they start stacking */
    max-width: 35rem; /* Maximum box width */
    text-align: left;
    padding: 1em;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }

  .info-image img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }

  .info-map iframe {
    width: 100%;
    height: 300px;
    border-radius: 8px;
  }

  .info-content {
    margin-top: 1rem;
  }

  .info-content h2 {
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }

  .info-content p {
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  .btn {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    background-color: #ff4081;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    font-weight: bold;
  }

  /* Mobile View (Single box per row, images above content) */
  @media(max-width: 768px) {
    .event-info {
      grid-template-columns: 1fr;
      width: 100%;
      padding: 0 1rem;
    }

    .info-box {
      flex-direction: column;
    }
  }


  /* .info-box {
    display: flex;
    align-items: center;
    margin: 1rem 0;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }

  .info-image {
    width: 40%;
    height: auto;
    border-radius: 8px;
  }

  .info-description {
    width: 60%;
    text-align: left;
    padding: 0 1rem;
  } */

  .info-button {
    display: inline-block;
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background-color: #485077; /* Button color */
    color: white;
    border: none;
    border-radius: 5px;
    text-decoration: none;
    transition: background-color 0.3s ease;
  }

  .info-button:hover {
    background-color: #b85f59; /* Darker blue on hover */
  }

  .bottom-button {
    margin-top: 2rem;
  }
</style>