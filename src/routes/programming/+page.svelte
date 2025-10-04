<script>
  import Footer from '$lib/components/Footer.svelte';
  import Navbar from '$lib/components/Navbar.svelte';

  import { onMount } from "svelte";

  let currentHash = ""; // to track the current anchor (e.g. #a, #b, etc.)

  // Function to check for the hash and apply glow effect
  function applyGlow() {
    const hash = window.location.hash;
    if (hash) {
      currentHash = hash; // update the reactive variable with the current hash

      setTimeout(() => {
        currentHash = ""; // Clear the glowing section after timeout
      }, 2000); // 2000 milliseconds = 2 seconds
    }
  }

  // Apply the glow effect when the page initially loads and when hash changes
  onMount(() => {
    applyGlow(); // check if the page is loaded with a specific hash

    window.addEventListener("hashchange", applyGlow); // listen for hash changes

    return () => {
      // Clean up when component is destroyed
      window.removeEventListener("hashchange", applyGlow);
    };
  });

</script>
  

  <Navbar />
  

<main>

  <div class="page-title">
    Programming
  </div>

  <div class="page-body">
    <!-- 3rd Floor - Stephens Hall -->
    <section id="stephens-hall">
      <h2>3rd Floor - Stephens Hall</h2>

      <!-- Panels -->

      <!-- Events -->
      <div class="event-category">
        <!--<h3>Events</h3> -->

        <section id="event-nikkei-choral-performance" class="program-card" class:glow={currentHash === "#event-nikkei-choral-performance"}>
          <div class="name-bar"><h4>Nikkei Choral Ensemble</h4></div>
          <p><strong>Location:</strong> Stephens Hall</p>
          <p><strong>Time:</strong> 11:15 AM - 11:45 AM</p>
          <p>We are the Nikkei Choral Ensemble, UC Berkeley's premiere Japanese and English acapella group.  We'll be singing songs from media and popular culture, including Vocaloid hits and favorites from anime.  We hope you'll enjoy our performance!</p>
          <p>Website: <a href="https://niceacappella.studentorg.berkeley.edu/index.html" target="_blank" class="link">https://niceacappella.studentorg.berkeley.edu/</a></p>
          <p>Social Media: @nikkeichoralensemble</p>
          <div class="nikkei-choral-image">
            <img src="images/nikkei_choral.png" alt="Work in Progress" class="nikkei-image" />
          </div>
        </section>
        
        <section id="event-jpop-kpop" class="program-card" class:glow={currentHash === "#event-jpop-kpop"}>
          <div class="name-bar"><h4>J-Pop/K-Pop Random Play Dance</h4></div>
          <p><strong>Location:</strong> Stephens Hall</p>
          <p><strong>Time:</strong> 12:00 PM - 1:00 PM</p>
          <p>Come show off your dance skills at our Random Play Dance event! Join us for a randomly selected set of J-Pop and K-Pop tracks full of fun and energy! All levels of dancers, beginners or experienced performers are welcome to come and try their hand at our dances.</p>
          <div class="jpop-kpop-image">
            <img src="images/jpop_kpop.png" alt="Work in Progress" />
          </div>
        </section>

        <section id="event-shipgirls" class="program-card" class:glow={currentHash === "#event-shipgirls"}>
          <div class="name-bar"><h4>Shipgirls and Jetgirl VTubers? : Welcome to VFleet Project</h4></div>
          <p><strong>Location:</strong> Stephens Hall</p>
          <p><strong>Time:</strong> 1:30 PM - 2:15 PM</p>
          <p>VTubers have a Navy? Meet the shipgirls and Jetgirls of VFleet Project as they take to the virtual seas to raise awareness and support for nonprofit museums!</p>
          <div class="shipgirls-image">
            <img src="images/shipgirls.png" alt="Work in Progress" />
          </div>
        </section>

        <section id="event-himeko-firefly" class="program-card" class:glow={currentHash === "#event-himeko-firefly"}>
          <div class="name-bar"><h4>All Aboard the Astral Express with Himeko and Firefly!</h4></div>
          <p><strong>Location:</strong> Stephens Hall</p>
          <p><strong>Time:</strong> 2:30 PM - 3:30 PM</p>
          <p>All aboard the Astral Express for a special interview panel with Analesa Fisher and Cia Court, the voices behind Firefly and Himeko from Honkai: Star Rail! We will be doing a live Q&A about their roles behind Firefly and Himeko, have them perform some well-known lines from the game, and have a chance for members of the audience to ask them questions!</p>
          <div class="himeko-firefly-container">
            <div class="himeko-firefly-image">
              <img src="images/analesa_fischer.png" alt="Work in Progress" />
            </div>
            <div class="himeko-firefly-image">
              <img src="images/cia_court.png" alt="Work in Progress" />
            </div>
          </div>
        </section>

        <section id="event-genshin-club" class="program-card" class:glow={currentHash === "#event-genshin-club"}>
          <div class="name-bar"><h4>Genshin at Berkeley Event</h4></div>
          <p><strong>Location:</strong> Stephens Hall</p>
          <p><strong>Time:</strong> 4:00 PM - 7:00 PM</p>
          <p>Hey there Astra-Nauts! Genshin at Berkeley will be at Anime Destiny hosting a bunch of fun activities themed around in-game Hoyoverse idols! Complete your “daily commissions“ to receive a prize! Come hangout with Hoyoverse fans!</p>
          <p>Discord: <a href="https://discord.gg/XwGc7eWDF6" class="link">
            https://discord.gg/XwGc7eWDF6
          </a>
          </p>
          <p>Instagram: @genshinatberkeley</p>
          <div class="genshin-image">
            <img src="images/genshin.png" alt="Work in Progress" />
          </div>
        </section>
      </div>
    </section>

    <!-- 5th Floor - Tilden Room -->
    <section id="tilden-room">
      <h2>5th Floor - Tilden Room</h2>

      <!-- Panels -->
      <div class="panel-category">
        <!--<h3>Panels</h3>-->

        <section id="panel-cosplay-competition-101" class="program-card" class:glow={currentHash === "#panel-cosplay-competition-101"}>
          <div class="name-bar"><h4>Cosplay Contest 101 Panel & Contest Pre-Judging</h4></div>
          <p><strong>Location:</strong> Tilden Room</p>
          <p><strong>Time:</strong> 10:30 AM - 12:00 PM</p>
          <p>This is a QnA style panel with the judges of the cosplay contest as hosts, going over who we are, why were qualified to judge, what to expect from this or any other contest, and answering any and all questions people have!</p>
          <div class="cosplay-competition-101-image">
          <img src="images/cosplay_competition_101.png" alt="Work in Progress" />
          </div>
        </section>
      </div>

      <!-- Events -->
      <div class="event-category">
        <!--<h3>Events</h3>-->

        <section id="event-otaku-ongaku" class="program-card" class:glow={currentHash === "#event-otaku-ongaku"}>
          <div class="name-bar"><h4>Otaku Ongaku: Nerd Music LIVE!</h4></div>
          <p><strong>Location:</strong> Tilden Room</p>
          <p><strong>Time:</strong> 1:30 PM - 2:30 PM</p>
          <p>Otaku Ongaku (オタク音楽) translates to "Nerd Music"! That's exactly what this anime cover band delivers with their high-energy hour-long performance of fan favorite anime openings, endings, and OSTs! They've toured at conventions of all types and sizes throughout the US and with over 4 million streams on Spotify, you know the music's gotta be good! You can listen to their anime covers everywhere music is streamed and sold and connect with them on social @otaku_ongaku.</p>
          <div class="otaku-ongaku-image">
            <img src="images/otaku_ongaku.png" alt="Work in Progress" />
          </div>
        </section>

        <section id="event-wotagei" class="program-card" class:glow={currentHash === "#event-wotagei"}>
          <div class="name-bar"><h4>Introduction to Wotagei 101</h4></div>
          <p><strong>Location:</strong> Tilden Room</p>
          <p><strong>Time:</strong> 3:00 PM - 4:00 PM</p>
          <p>Have you seen people going crazy with their lightsticks at your oshi's concert and thought, “I want to be one of them!”?
          Have you heard about wotagei from Oshi no Ko but never knew where to start?
          Or maybe you already love wotagei and want to have a great time with fellow uchishi?<br><br>Join Bay Area wotagei team SanFlare's panel and start your wotagei journey!</p>
          <div class="wotagei-image">
            <img src="images/wotagei.png" alt="Work in Progress" />
          </div>
        </section>

        <section id="event-intermission" class="program-card" class:glow={currentHash === "#event-intermission"}>
          <div class="name-bar"><h4>The Intermission Orchestra</h4></div>
          <p><strong>Location:</strong> Tilden Room</p>
          <p><strong>Time:</strong> 4:30 PM - 5:30 PM</p>
          <p>The Intermission Orchestra at Berkeley is a student-run organization dedicated to building a community for film, game, and anime enthusiasts and sharing our passions with the Cal community and broader Bay area through our music and performances.</p>
          <div class="intermission-image">
            <img src="images/intermission.png" alt="Work in Progress" />
          </div>
          </div>
        </section>

        <section id="event-virtual-bears" class="program-card" class:glow={currentHash === "#event-virtual-bears"}>
          <div class="name-bar"><h4>Virtual Bears: VTuber Mini Concert</h4></div>
          <p><strong>Location:</strong> Tilden Room</p>
          <p><strong>Time:</strong> 6:00 PM - 7:00 PM</p>
          <p>INFO TBD</p>
        </section>
      </div>
  
  
</main>

<style>
  main {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }

  h2 {
    font-size:2em;
  }

  h3 {
    font-size:1.5em;
  }

  .program-card {
    background-color: #f9f9f9;
    border: 2px solid #1d3557;
    padding: 0 1rem 1rem 1rem;
    border-radius: 8px;
    transition: box-shadow 0.3s ease, transform 0.3s ease;
    text-align: left;
    max-width: 100rem;
    margin-bottom:0.5rem;
    margin-top:0.5rem;
  }

  .program-card:hover {
    box-shadow: 0 0 10px 3px rgba(29, 53, 87, 0.5); /* Slight glow */
    transform: translateY(-3px); /* Slight lift */
  }

  .glow {
    box-shadow: 0 0 10px 3px rgba(29, 53, 87, 0.5); /* Slight glow */
    transform: translateY(-3px); /* Slight lift */
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

  .page-body {
      
      padding: 1rem;
      width: 100%;
      max-width: 100rem;
      margin: auto;
    }
    p {
      margin-bottom: 1rem;
    }

  .link {
    color: #485077;
    text-decoration: none;
    border-bottom: 1px solid #485077; /* Underline links */
    transition: color 0.3s ease, border-bottom-color 0.3s ease;
    word-wrap: break-word;
    font-weight: bold;
  }

  .link:hover {
    color: #fed893; /* Yellow on hover */
    border-bottom-color: #fed893;
  }

  /* Step 1: Combine all your repetitive image styles into one */
  .image-wrapper img {
    max-width: 200px;
    max-height: 200px;
    padding: 5px;
    height: auto; /* Use auto for better responsive scaling */
  }

  /* Step 2: Create a flex container for the card's content */
  .card-content {
    display: flex;
    flex-direction: row; /* Arrange items side-by-side */
    gap: 1rem; /* Add space between text and image */
  }

  /* Step 3: Define the text wrapper to take up half the space */
  .text-wrapper {
    flex: 1; /* Allows the text block to grow */
    max-width: 50%; /* Restricts it to half the container's width */
  }

  /* Step 4: Define the image wrapper */
  .image-wrapper {
    display: flex;
    justify-content: flex-end; /* Align image to the right */
    flex: 1; /* Allows the image block to grow */
  }

  .nikkei-choral-image img {
    max-width:300px;
    max-height:300px;
    margin:0 auto;
    padding: 5px;
  }

  .jpop-kpop-image img {
    max-width:300px;
    max-height:300px;
    margin:0 auto;
    padding: 5px;
  }

  .shipgirls-image img {
    max-width:300px;
    max-height:300px;
    margin:0 auto;
    padding: 5px;
  }

  .himeko-firefly-container {
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px 50px;
  }

  .himeko-firefly-image img {
    height: 300px;
  }

  .genshin-image img {
    max-width:300px;
    max-height:300px;
    margin:0 auto;
    padding: 5px;
  }

  .cosplay-competition-101-image img {
    max-width:300px;
    max-height:300px;
    margin:0 auto;
    padding: 5px;
  }

  .otaku-ongaku-image img {
    max-width:300px;
    max-height:300px;
    margin:0 auto;
    padding: 5px;
  }

  .wotagei-image img {
    max-width:300px;
    max-height:300px;
    margin:0 auto;
    padding: 5px;
  }

  .intermission-container {
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px 50px;
  }

  .intermission-image img {
    max-width:300px;
    max-height:300px;
    margin:0 auto;
    padding: 5px;
  }

  /* Responsive Styles */
  @media (max-width: 1024px) {
    .video-container iframe {
      height: 400px; /* Adjust height for tablets */
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    .video-container iframe {
      height: 300px; /* Adjust height for mobile screens */
      width: 100%;
    }
  }

  @media (max-width: 480px) {
    .video-container iframe {
      height: 200px; /* Adjust height for small mobile screens */
      width: 100%;
    }
  }
</style>
  
  <Footer/>
