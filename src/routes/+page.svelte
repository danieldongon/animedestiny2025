<script>
  import { onMount } from 'svelte';
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Calendar from '$lib/components/Calendar.svelte';
  import Gaming from '$lib/components/Gaming.svelte';
  import Events from '$lib/components/Events.svelte';

  let desktopImage = 'images/hero.png';
  let mobileImage = 'images/hero.png';

  let exhibitorsImage = 'https://example.com/exhibitors-image.jpg';
  let scheduleImage = 'debug/test-schedule.png';
  let aboutUsImage = 'https://i.redd.it/tyvpt1fy7b601.jpg';
  let purchaseLink = 'https://buy.stripe.com/3cs7uKaGG5Fu3lu7ss';
  let mapImage = 'https://example.com/map-image.jpg';

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
  <div class="gradient" style="background: linear-gradient(90deg, orange, purple); padding: 1rem; text-align: center;">
    <p style="font-family: 'Montserrat', sans-serif; font-size: 1.2rem; color: white; margin: 0;"><a href={purchaseLink}>AD Tickets are now live for purchase!</a></p>
  </div>
  <div class="hero-image" style="--scroll-y: {scrollY}">
    <img src="{mobileImage}" alt="Anime Destiny Event" class="mobile" draggable="false" />
    <img src="{desktopImage}" alt="Anime Destiny Event" class="desktop" draggable="false" />
    
    <div class="overlay">
      <!-- <h1 class="event-title">Anime Destiny 2024</h1>
      <p class="event-date">Saturday, November 9</p> -->
      <img src="images/ADLogo.png" alt="AD Logo" class="ADLogo" draggable="false"/>
      <p class="event-time">Saturday, November 9th</p>
      <p class="event-location">ASUC Student Union: Martin Luther King Jr. Building</p>
      <a href={purchaseLink} class="purchase-link" target="_blank" rel="noopener noreferrer">Purchase Tickets</a>
    </div>
  </div>

  <div class="gradient" style="background: linear-gradient(90deg, orange, purple); padding: 1rem; text-align: center;">
    <p style="font-family: 'Montserrat', sans-serif; font-size: 1.2rem; color: white; margin: 0;"><a href="/cosplay-contest">Sign-up for the cosplay contest here! Prizes included.</a></p>
  </div>
  
  <div class="event-info">

    <!-- TODO add stuff here idk like a youtube video or instagram post
    mention what we have to offer
    mention priice and add link to buy ticket here -->
    <!-- "What is Anime Destiny" Section -->
    <section id="about" style="padding: 2rem 0;">
      <h2 style="font-family: 'Roboto', sans-serif; font-size: 2rem; color: #485077; margin-bottom: 1rem;">About Anime Destiny 2024</h2>
      
      <p style="font-family: 'Montserrat', sans-serif; font-size: 1.2rem; color: #485077; margin-bottom: 1.5rem;">
        Anime Destiny is UC Berkeley's premier anime convention, hosted annually by Cal Animage Alpha. This year, the convention will be held on <strong>Saturday, November 9, 2024</strong>, from <strong>9:00 AM to 7:00 PM</strong> in the Pauley Ballroom of the ASUC Student Union, located at 2495 Bancroft Way, Berkeley, CA.
      </p>

      <iframe 
      title="Anime Destiny Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3158.758826798221!2d-122.2594233846757!3d37.8684338797419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80857c3f3b87e1d5%3A0x138c6740b4409d55!2s2495%20Bancroft%20Way%2C%20Berkeley%2C%20CA%2094720%2C%20USA!5e0!3m2!1sen!2sus!4v1696439621724!5m2!1sen!2sus"
      class="google-map" 
      loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade">
    </iframe>
    
      <p style="font-family: 'Montserrat', sans-serif; font-size: 1.2rem; color: #485077; margin-bottom: 1.5rem; margin-top: 1.5rem;">
        Admission is $20, <a href={purchaseLink} style="color: #485077; text-decoration: underline;">and tickets are available online</a> or at the door. Online ticket purchases will close on <strong>Thursday, November 7</strong> at 11:59 PM, so don't delay if you want to beat the lines!
      </p>

    
      <p style="font-family: 'Montserrat', sans-serif; font-size: 1.2rem; color: #485077; margin-bottom: 1.5rem;">
        For more about Anime Destiny and our organization, visit our <a href="/about" style="color: #485077; text-decoration: underline;">About Page</a>.
      </p>
    
    
    </section>
    
    <hr style="border: none; border-top: 2px solid #485077; margin-top: 2rem;" />
    
    
    <!-- What to Expect Section -->
  <section id="events" style="padding: 2rem 0;">
    <h2 style="font-family: 'Roboto', sans-serif; font-size: 2rem; color: #485077; margin-bottom: 1rem;">Events</h2>
    
    <p style="font-family: 'Montserrat', sans-serif; font-size: 1.2rem; color: #485077; margin-bottom: 1.5rem;">
      At Anime Destiny, attendees can enjoy a variety of experiences including:
    </p>
    
    <ul style="list-style-type: disc; margin-left: 1.5rem; font-family: 'Montserrat', sans-serif; font-size: 1.2rem; color: #485077; margin-bottom: 1.5rem;">
      <li>Artist Alley featuring talented artists and vendors</li>
      <li>Panels and workshops</li>
      <li>Cosplay contests and masquerades</li>
      <li>Live performances by The Intermission Orchestra and Nikkei Choral Ensemble</li>
      <li>Interactive Genshin at Berkeley activities</li>
      <li>Anikura Destiny: An exciting anime rave with live DJs</li>
      <li>And much more!</li>
    </ul>
    <Events/>
  </section>

  <hr style="border: none; border-top: 2px solid #485077; margin-top: 2rem;" />


    <!-- Location Section
    <section>
      <h2>Location</h2>
      <p>Anime Destiny takes place at UC Berkeley! We are on the second floor of the ASUC Student Union MLK Building inside of the Pauley Ballroom.</p>
      <iframe 
          title="Anime Destiny Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3158.758826798221!2d-122.2594233846757!3d37.8684338797419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80857c3f3b87e1d5%3A0x138c6740b4409d55!2s2495%20Bancroft%20Way%2C%20Berkeley%2C%20CA%2094720%2C%20USA!5e0!3m2!1sen!2sus!4v1696439621724!5m2!1sen!2sus" 
          width="100%" 
          height="300" 
          style="border:0;" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
    </section>
    <hr /> -->

    <!-- TODO populate Exhibitors section
    Should add a description of what the exhibitors section is about and
    what artists are there, etc. -->
    <!-- Exhibitors Section -->
    <section>
      <h2>Artist Alley/Exhibitors</h2>
      <p style="font-family: 'Montserrat', sans-serif; font-size: 1.1rem; color: #485077; margin-bottom: 1rem;">Many amazing artists and vendors are at Anime Destiny 2024! Explore and support their talent through the Artist Alley.</p>
      <div class="content-container">
        <h2 style="font-family: 'Roboto', sans-serif; font-size: 2rem; color: #485077; margin-bottom: 1rem;">Here is the Artist Alley from AD 2023</h2>
        <div class="embed-wrapper">      
          <!-- YouTube Embed -->
          <div id="embed youtube-embed">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/06DdqfWonN4?feature=shared" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
        <a href="/artists" class="section-link">View the list of artists in AD 2024 here!</a>
      </div>
    </section>
    <hr />

    <!-- Gaming Hall Section -->
    <section>
      <h2 style="font-family: 'Roboto', sans-serif; font-size: 2rem; color: #485077; margin-bottom: 1rem;">Gaming Hall</h2>
      <p style="font-family: 'Montserrat', sans-serif; font-size: 1.2rem; color: #485077; margin-bottom: 1.5rem;">
        Looking to unwind at Anime Destiny? Or even to get a bit competitive? The gaming hall offers a diverse set of video games, tabletop games, rhythm/dance games, and more!
      </p>
      <Gaming/>
    </section>
    <hr />

    <!-- TODO populate Schedule section
    where map at?
    where schedule?
    convert schedule to embed google calendar?
    -->
    <!-- Schedule Section -->
    <section id="map-schedule" style="padding: 2rem 0;">
      <h2 style="font-family: 'Roboto', sans-serif; font-size: 2rem; color: #485077; margin-bottom: 1rem;">Schedule and Parking</h2>
    
      <!-- Schedule Section -->
      <div style="padding-right: 2rem;">
        <p style="font-family: 'Montserrat', sans-serif; font-size: 1.2rem; color: #485077; margin-bottom: 1.5rem;">
          Here is the full schedule of events for Anime Destiny 2024. For more detailed descriptions of each event, please visit our <a href="/programming" style="color: #485077; text-decoration: underline;">Programming Page.</a>
        </p>

        <div style="padding-right: 2rem;">
          <h3 style="font-family: 'Roboto', sans-serif; font-size: 1.5rem; color: #485077; margin-bottom: 0.5rem;">Parking Information:</h3>
          <p style="font-family: 'Montserrat', sans-serif; font-size: 1.1rem; color: #485077; margin-bottom: 1rem;">
              For info about street parking, visit the <a href="/parking" style="color: #485077; text-decoration: underline;">parking page</a>.
          </p>
        </div>
        <!-- Google Calendar Embed (This would be a separate Svelte component) -->
        <div style="margin-top: 1rem;">
          <Calendar />
        </div>
      </div>

      

    </section>
    <hr />

<div class="content-container">
  <a href={purchaseLink} target="_blank" rel="noopener noreferrer" 
  class="section-link" style="font-size:2.5rem;">
  Get Your Tickets Now!
  </a>
</div>

    <!-- <hr/>

    Buy Tickets Now Section 
    <section>
      <h2>Buy Tickets Now</h2>
      <a href={purchaseLink} target="_blank" rel="noopener noreferrer" class="section-link">Purchase Tickets</a>
      <br />
      <p>You will be redirected to our payment processor on Stripe.</p>
    </section> -->

    <!-- TODO FAQ section? -->
  </div>

</main>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&family=Montserrat:wght@400&display=swap');

  /* Hero Image */
  .hero-image {
    position: relative;
    height: 100vh;
    min-height: 750px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
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
    opacity: calc(1.5 - (var(--scroll-y) / 600));
    transition: opacity 0.3s ease;
    padding: 2rem;
    border-radius: 8px;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.9);
  }

  .hero-image .ADLogo {
    position: relative;
  }

  .event-title {
    font-family: 'Protest Strike', sans-serif;
    font-size: 5rem;
    margin: 0;
  }

  .event-date {
    font-family: 'Roboto', sans-serif;
    font-size: 2rem;
    margin-top: 0.5rem;
  }

  .event-time, .event-location {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.5rem;
    margin-top: 0.5rem;
  }

  .event-time {
    font-weight: 700;
  }

  .event-location {
    font-weight: 450;
  }

  /* Event Info Section */
  .event-info {
    width: 100%;
    max-width: 100rem;
    margin: auto;
    padding: 1rem 0;
  }

  .google-map {
    width:60%; 
    height:20rem; 
    border: 2px solid black;
    margin: 0 auto;
  }
  section {
    padding: 2rem 0;
    margin: 0 2rem;
  }

  hr {
    border: none;
    border-top: 2px solid #485077;
    margin: 0 2rem;
  }

  h2 {
    font-family: 'Roboto', sans-serif;
    font-size: 2rem;
    color: #485077; /* Use the dark blue for headers */
  }


  .section-link {
    color: #485077;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.1rem;
    border-bottom: 2px solid #485077; /* Underline links */
    padding-bottom: 0.2rem;
    line-height:4rem;
    padding-top: 2rem;
    transition: color 0.3s ease, border-bottom-color 0.3s ease;
  }

  .section-link:hover {
    color: #fed893; /* Yellow on hover */
    border-bottom-color: #fed893;
    
  }

  /* Purchase Link */
  .purchase-link {
    color: rgb(248, 187, 74);
    text-decoration: none;
    font-weight: bold;
    font-size: 1.5rem;
    transition: color 0.3s ease;
  }

  .purchase-link:hover {
    color: rgb(0, 255, 255);
  }

  .bottom-link {
    display: block;
    text-align: center;
    margin-top: 2rem;
  }

  /* Mobile Styling */
  @media(max-width: 768px) {
    .event-title {
      font-size: 3rem;
    }

    h2 {
      font-size: 1.6rem;
    }

    .hero-image .overlay {
      padding: 1rem;
    }
  }

  .content-container {
    text-align: center;
    margin: 2rem 0;
  }

  .embed-wrapper {
    display: flex;
    justify-content: center;
    align-items: flex-center;
  }

  #embed.youtube-embed {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width:100%!important;
  }

  .embed {
    flex: 1;
  }


  /* Mobile View */
  @media(max-width: 768px) {
    .embed-wrapper {
      flex-direction: column;
      align-items: center;
    }

    iframe {
    width:100%!important;
  }
  }

  #schedule-graphic {
    width: 60%;
    max-width: 60%;
    height: auto;
    display: block;
    margin: 0 auto;
  }

  .thick-divider {
    border-top-width: 4px;
  }
</style>

<Footer/>