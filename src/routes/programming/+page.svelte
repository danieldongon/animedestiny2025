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
      <div class="panel-category">
        <h3>Panels</h3>

        <section id="panel-music-voice-acting" class="program-card" class:glow={currentHash === "#panel-music-voice-acting"}>
          <div class="name-bar"><h4>Entering the Music and Voice Acting Industry with Raj Ramayya</h4></div>
          <p><strong>Location:</strong> Stephens Hall</p>
          <p><strong>Time:</strong> 1:30 PM - 2:30 PM</p>
          <p>An industry panel with Raj Ramayya, an Indo-Canadian Singer/Songwriter/Composer with over 250 television commercial writing, co-writing, and singing credits. Raj’s involvement includes "Resident Evil", "Gungrave", and "Cowboy Bebop". Join this session to discuss the music and voice acting industry!</p>
        </section>
      </div>

      <!-- Workshops -->
      <div class="workshop-category">
        <h3>Workshops</h3>

        <section id="workshop-anime-trivia" class="program-card" class:glow={currentHash === "#panel-music-voice-acting"}>
          <div class="name-bar"><h4>CAA Anime Trivia!</h4></div>
          <p><strong>Location:</strong> Stephens Hall</p>
          <p><strong>Time:</strong> 9:30 AM - 10:30 AM</p>
          <p>From <i>Kakegurui</i> to <i>Dress up Darling</i>, join the CAA Events Team in a team game of <strong>Um Actually</strong>! Show off your anime knowledge!</p>
        </section>
      </div>

      <!-- Events -->
      <div class="event-category">
        <h3>Events</h3>

        <section id="event-nikkei-choral-performance" class="program-card" class:glow={currentHash === "#event-nikkei-choral-performance"}>
          <div class="name-bar"><h4>Nikkei Choral Ensemble Performance</h4></div>
          <p><strong>Location:</strong> Stephens Hall</p>
          <p><strong>Time:</strong> 11:00 AM - 12:00 PM</p>
          <p>Student group performing an acapella set of songs, including Jpop, Anime songs, and some English music. Join NiCE for a fantastic live performance of popular hits!</p>
          <p>Website: <a href="https://niceacappella.studentorg.berkeley.edu/index.html" target="_blank" class="link">https://niceacappella.studentorg.berkeley.edu/</a></p>
          <p>Social Media: @nikkeichoralensemble</p>
          
          <div class="nikkei-container">
            <div class="video-container">            
              <iframe width="560" height="315" src="https://www.youtube.com/embed/Zft_N-6KHsM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <img src="images/nikkei-choral.png" alt="Work in Progress" class="nikkei-image" />
          </div>
        </section>

        <section id="event-genshin-club" class="program-card" class:glow={currentHash === "#event-genshin-club"}>
          <div class="name-bar"><h4>Genshin at Berkeley Club Event</h4></div>
          <p><strong>Location:</strong> Stephens Hall</p>
          <p><strong>Time:</strong> 3:00 PM - 6:00 PM</p>
          <p>Join Berkeley's Genshin Club! Complete four “commissions” for special prizes and discounts on merch. Participate in fun activities and hang out with Hoyoverse fans!</p>
          <p>Discord: <a href="https://discord.gg/XwGc7eWDF6" class="link">
            https://discord.gg/XwGc7eWDF6
          </a>
          </p>
          <p>Instagram: @genshinatberkeley</p>
          <div class="genshin-container">
          <img src="images/genshin_profile.png" alt="Work in Progress" />
          </div>
        </section>
      </div>
    </section>

    <!-- 5th Floor - Tilden Room -->
    <section id="tilden-room">
      <h2>5th Floor - Tilden Room</h2>

      <!-- Panels -->
      <div class="panel-category">
        <h3>Panels</h3>

        <section id="panel-old-woke-manga" class="program-card" class:glow={currentHash === "#panel-old-woke-manga"}>
          <div class="name-bar"><h4>Old Woke Manga</h4></div>
          <p><strong>Location:</strong> Tilden Room</p>
          <p><strong>Time:</strong> 10:30 AM - 11:30 AM</p>
          <p>Explore old Jump manga that were unexpectedly progressive, such as <i>Hidebari Kun</i>, <i>Barefoot Gen</i>, and more! Dive into a fascinating discussion on these classics.</p>
        </section>
      </div>

      <!-- Events -->
      <div class="event-category">
        <h3>Events</h3>

        <section id="event-intermission-orchestra" class="program-card" class:glow={currentHash === "#event-intermission-orchestra"}>
          <div class="name-bar"><h4>The Intermission Orchestra</h4></div>
          <p><strong>Location:</strong> Tilden Room</p>
          <p><strong>Time:</strong> 2:00 PM - 3:00 PM</p>
          <p>The Intermission Orchestra is a student-led community that performs music from anime, video games, and films. Enjoy their performance, which includes both full orchestral and small ensemble pieces!</p>
          <p>Social Media: @intermissionberkeley</p>
          <div class="intermission-container">
            <div class="intermission-image">
              <img src="images/intermission-profile.png" alt="Work in Progress" />
            </div>
            <div class="intermission-image">
              <img src="images/intermission-concert.png" alt="Work in Progress" />
            </div>
          </div>
        </section>

        <section id="event-anikura-destiny" class="program-card" class:glow={currentHash === "#event-anikura-destiny"}>
          <div class="name-bar"><h4>Anikura Destiny</h4></div>
          <p><strong>Location:</strong> Tilden Room</p>
          <p><strong>Time:</strong> 4:30 PM - 7:00 PM</p>
          <p>Come experience an anime rave featuring live DJs performing various hits across anime, games, and Japanese media. Dance and enjoy the rave atmosphere at Anime Destiny!</p>
          <div class="video-container" style="display: flex; justify-content:center;padding-top:10px;">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/UpmPM_NzA70" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
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
  
.nikkei-container {
  display: flex;
  justify-content:center;
  padding: 15px;
  flex-wrap: wrap;
  gap: 10px 50px;
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

.nikkei-image {
  max-width:200px;
  max-height:200px;
  margin:auto 0;
  padding: 5px;
}

.genshin-container {
  display: flex;
  padding: 15px;
}

.genshin-container img {
  max-width:200px;
  max-height:200px;
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
  height: 200px;
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
