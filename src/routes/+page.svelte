<script>
  import { onMount } from 'svelte';
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';

  let desktopImage = 'debug/test-banner-2.jpg';
  let mobileImage = 'debug/test-banner-2.jpg';

  let locationImage = 'https://www.sasaki.com/wp-content/uploads/2022/03/DD_SASAKI_BERKELEY_V2-Evans_2021_07_30-Update-1800x1013.jpg';
  let exhibitorsImage = 'https://example.com/exhibitors-image.jpg';
  let rulesImage = 'https://example.com/rules-image.jpg';
  let scheduleImage = 'debug/test-schedule.png';
  let aboutUsImage = 'https://i.redd.it/tyvpt1fy7b601.jpg';
  let purchaseLink = 'https://example.com/purchase-tickets';
  let mapImage = 'https://example.com/map-image.jpg';

  let scrollY = 0;

  onMount(() => {
    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);

    // Ensure Instagram embed script is loaded after mount
    const instagramScript = document.createElement('script');
    instagramScript.async = true;
    instagramScript.src = "//www.instagram.com/embed.js";
    document.body.appendChild(instagramScript);

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
      <h1 class="event-title">Anime Destiny 2024</h1>
      <p class="event-date">Saturday, November 9</p>
      <!-- TODO update time -->
      <p class="event-time">8:00 AM - 8:00 PM</p>
      <p class="event-location">ASUC Student Union: Martin Luther King Jr. Building</p>
      <a href={purchaseLink} class="purchase-link" target="_blank" rel="noopener noreferrer">Purchase Tickets</a>
    </div>
  </div>
  <div class="event-info">
    <!-- TODO make this a thick divider? this is between the Hero Image and the About section -->
    <hr/>

    <!-- TODO add stuff here idk like a youtube video or instagram post
    mention what we have to offer
    mention priice and add link to buy ticket here -->
    <!-- "What is Anime Destiny" Section -->
    <section id="about">
      <h2>About</h2>
      <p>Anime Destiny is UC Berkeley's premier anime convention! 
        This year we are on the third floor of the ASUC Student Union MLK Building inside of the Pauley Ballroom.
        Admission is $20 online and at the door.</p>
      <iframe 
          title="Anime Destiny Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3158.758826798221!2d-122.2594233846757!3d37.8684338797419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80857c3f3b87e1d5%3A0x138c6740b4409d55!2s2495%20Bancroft%20Way%2C%20Berkeley%2C%20CA%2094720%2C%20USA!5e0!3m2!1sen!2sus!4v1696439621724!5m2!1sen!2sus" 
          width="100%" 
          height="600" 
          style="border:0;" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      
      <a href={purchaseLink} target="_blank" rel="noopener noreferrer" class="section-link">Purchase Tickets</a>
    </section>
    <hr/>

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
      <h2>Exhibitors</h2>
      <p>Many amazing artists and vendors are at Anime Destiny 2024! Explore and support their talent through the Artist Alley.</p>
      <div class="content-container">
        <h2>Here is the Artist Alley from AD 2023</h2>
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

    <!-- TODO populate Gaming Hall section
    what games? what competitions? etc.
    any prizes and events? -->
    <!-- Gaming Hall Section -->
    <section>
      <h2>Gaming Hall</h2>
      <p>Looking to unwind at Anime Destiny? Or even to get a bit competitive? The gaming hall offers a diverse set of video games, tabletop games, rhythm/dance games, and more!</p>
    </section>
    <hr />

    <!-- TODO populate Schedule section
    where map at?
    where schedule?
    convert schedule to embed google calendar?
    -->
    <!-- Schedule Section -->
    <section id="schedule-section">
      <h2>Schedule and Map</h2>
      <p>Check out the schedule and map for Anime Destiny to stay up to date on when and where events are happening. You don't want to miss them!</p>
      <img src={scheduleImage} alt="Event Schedule" id="schedule-graphic"/>
      <img src={mapImage} alt="Event Map" id="schedule-graphic"/>
      <a href="/programming" class="section-link">View our programming here!</a>
    </section>
    <hr />

    <!-- Rules Section -->
    <section id='rules' style="padding: 2rem 0;">
      <div style="padding-right: 2rem;">
        <h2 style="font-family: 'Roboto', sans-serif; font-size: 2rem; color: #485077; margin-bottom: 0.5rem;">Rules</h2>
        <p style="font-family: 'Montserrat', sans-serif; font-size: 1.2rem; color: #485077; margin-bottom: 1.5rem;">
          Please review these rules to ensure a safe and enjoyable experience at Anime Destiny 2024:
        </p>
    
        <h3 style="font-family: 'Roboto', sans-serif; font-size: 1.5rem; color: #485077; margin-bottom: 0.5rem;">Alcohol and Drugs Policy:</h3>
        <p style="font-family: 'Montserrat', sans-serif; font-size: 1.1rem; color: #485077;">
          No alcohol or drugs, including tobacco and other substances, are permitted at the event. Any found will be confiscated, and repercussions will follow.
        </p>
    
        <h3 style="font-family: 'Roboto', sans-serif; font-size: 1.5rem; color: #485077; margin-bottom: 0.5rem;">Code of Conduct:</h3>
        <p style="font-family: 'Montserrat', sans-serif; font-size: 1.1rem; color: #485077;">
          Respect others' privacy and personal space. Help those who need assistance. If you see anything suspicious, report it to event staff immediately.
        </p>
    
        <h3 style="font-family: 'Roboto', sans-serif; font-size: 1.5rem; color: #485077; margin-bottom: 0.5rem;">Badges:</h3>
        <p style="font-family: 'Montserrat', sans-serif; font-size: 1.1rem; color: #485077;">
          Attendees must wear their badge at all times and be prepared to show identification when entering the event or any program.
        </p>
    
        <h3 style="font-family: 'Roboto', sans-serif; font-size: 1.5rem; color: #485077; margin-bottom: 0.5rem;">Prohibited Actions and Activities:</h3>
        <ul style="list-style-type: disc; margin-left: 1.5rem; font-family: 'Montserrat', sans-serif; font-size: 1.1rem; color: #485077; margin-bottom: 1rem;">
          <li>Failure to be appropriately clothed</li>
          <li>Harassment, lewd behavior, or discrimination</li>
          <li>Unauthorized business transactions</li>
          <li>Skateboarding, soliciting, alcohol consumption, and more (see master doc)</li>
        </ul>
    
        <h3 style="font-family: 'Roboto', sans-serif; font-size: 1.5rem; color: #485077; margin-bottom: 0.5rem;">Prohibited Items:</h3>
        <ul style="list-style-type: disc; margin-left: 1.5rem; font-family: 'Montserrat', sans-serif; font-size: 1.1rem; color: #485077; margin-bottom: 1rem;">
          <li>Illegal substances, drugs, weapons (see prop policy)</li>
          <li>Non-service animals, oversized backpacks, flammable items</li>
          <li>Signs, stickers, graffiti</li>
          <li>And more (see master doc)</li>
        </ul>
    
        <h3 style="font-family: 'Roboto', sans-serif; font-size: 1.5rem; color: #485077; margin-bottom: 0.5rem;">Cosplay Guidelines:</h3>
        <p style="font-family: 'Montserrat', sans-serif; font-size: 1.1rem; color: #485077;">
          Shoes must be worn at all times. Costumes should not be excessively revealing or impede traffic. No law enforcement or military uniforms allowed. See the prop/weapon policy for rules on cosplay weapons.
        </p>
    
        <h3 style="font-family: 'Roboto', sans-serif; font-size: 1.5rem; color: #485077; margin-bottom: 0.5rem;">COVID-19 Statement:</h3>
        <p style="font-family: 'Montserrat', sans-serif; font-size: 1.1rem; color: #485077;">
          By attending, you assume all risks associated with potential exposure to COVID-19. Review the latest CDC guidelines before attending.
        </p>
    
        <h3 style="font-family: 'Roboto', sans-serif; font-size: 1.5rem; color: #485077; margin-bottom: 0.5rem;">Prop/Weapon Policy:</h3>
        <p style="font-family: 'Montserrat', sans-serif; font-size: 1.1rem; color: #485077;">
          No real or dangerous weapons are allowed. Prop weapons must be inspected at the front desk before being brought inside.
        </p>
    
        <p style="font-family: 'Montserrat', sans-serif; font-size: 1.1rem; color: #485077;">
          For the complete list of rules, please review the 
          <a href="https://docs.google.com/document/d/18tocsvWVEZ8xFNBvz8-88AAK9CnIbqlU7jkXd4G_FvQ/edit?usp=sharing" target="_blank" rel="noopener noreferrer" 
             style="color: #485077; text-decoration: underline;">Master Rules Document</a>.
        </p>
      </div>
    </section>
    
    <hr/>

    <!-- Buy Tickets Now Section -->
    <section>
      <h2>Buy Tickets Now</h2>
      <a href={purchaseLink} target="_blank" rel="noopener noreferrer" class="section-link">Purchase Tickets</a>
      <br />
      <p>You will be redirected to our payment processor on Stripe.</p>
    </section>

    <!-- TODO FAQ section? -->
  </div>

</main>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&family=Montserrat:wght@400&display=swap');

  /* Hero Image */
  .hero-image {
    position: relative;
    height: 100vh;
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
    opacity: calc(1.3 - (var(--scroll-y) / 600));
    transition: opacity 0.3s ease;
    background: rgba(0, 0, 0, 0.5);
    padding: 2rem;
    border-radius: 8px;
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
    color: #fed893; /* Gold for styling */
    margin-top: 0.5rem;
  }

  .event-time {
    font-weight: 700;
  }

  .event-location {
    font-weight: 400;
  }

  /* Event Info Section */
  .event-info {
    width: 100%;
    max-width: 100rem;
    margin: auto;
    padding: 1rem 0;
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
    color: #fed893;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.5rem;
    transition: color 0.3s ease;
  }

  .purchase-link:hover {
    color: #d4ac5e;
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