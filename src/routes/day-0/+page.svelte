<script>
  import Footer from '$lib/components/Footer.svelte';
  import Navbar from '$lib/components/Navbar.svelte';

  import { onMount } from "svelte";

  let currentHash = ""; // to track the current anchor (e.g. #a, #b, etc.)

  function applyGlow() {
    const hash = window.location.hash;
    if (hash) {
      currentHash = hash;
      setTimeout(() => {
        currentHash = "";
      }, 2000);
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
    Day 0 Programming
  </div>

  <div class="page-body">
    <div class="panel-category">

      <section id="opening-ceremony" class="program-card" class:glow={currentHash === "#day0-event-one"}>
        <div class="name-bar"><h4>Opening Ceremony, Presented by Issei Bando</h4></div>
        <p><strong>Location:</strong> Lower Sproul Plaza </p>
        <p><strong>Time:</strong> 12:00 PM - 1:00 PM</p>
        <p>Issei Bando is once again performing at Anime Destiny, bringing renditions of hit J-Pop songs from your favorite artists and anime! Please enjoy!. </p>
        <div class="std-event-image">
          <img src="images/Issei Band Day 0.png" alt="Event One" />
        </div>
      </section>


      <section id="luxx" class="program-card" class:glow={currentHash === "#day0-event-two"}>
        <div class="name-bar"><h4>Luxx</h4></div>
        <p><strong>Location:</strong> Lower Sproul Plaza</p>
        <p><strong>Time:</strong> 1:15 PM - 2:00 PM</p>
        <p>LUXX is a beginner-friendly K-pop dance team here at UC Berkeley. No auditions are necessary to participate a general member or performance member, so we have a dancers with a wide range of dance experience! We perform at events both on & off campus, as well as perform in our end-of-semester showcase. We also host KPOP club events & socials! Follow us on Instagram @luxxatberkeley & Youtube @luxxatberkeley to keep up with us and dance with us!</p>
        <div class="std-event-image">
          <img src="images/LUXX Day 0.png" alt="Event Two" />
        </div>
      </section>

      <section id="hfc" class="program-card" class:glow={currentHash === "#day0-event-two"}>
        <div class="name-bar"><h4>Luxx</h4></div>
        <p><strong>Location:</strong>Steel on Steel Historical Fencing Club</p>
        <p><strong>Time:</strong> 2:15 PM - 2:45 PM</p>
        <p>Next up, we have Steel on Steel, the Historical Fencing Club of Berkeley! Have you ever been interested in learning sword fighting? 
            By joining Steel on Steel, you can learn Historical European Martial Arts, also known as HEMA or Historical Fencing. As both a martial art and sport, historical fencing takes actual historical techniques and historically accurate weapons, applying them in full-speed combat! 
            Ranging from medieval longsword and dagger to Neapolitan military saber to Renaissance rapier, there's a style and weapon for everyone! 
            Whether you're a history buff interested in faithfully recreating the fighting styles of old, someone who grew up swinging around sticks in your backyard, or an athlete looking to compete in a unique sport, there's a place for you in the club. And best of all, joining is completely free with no dues, no tryouts, and all gear provided!
            Without further ado, let's hear it for our first pair of fighters! </p>
        <div class="std-event-image">
          <img src="images/HFC Day 0.png" alt="Event Two" />
        </div>
      </section>

      <section id="ncnf" class="program-card" class:glow={currentHash === "#day0-event-two"}>
        <div class="name-bar"><h4>Northern California Naginata Federation</h4></div>
        <p><strong>Location:</strong> Lower Sproul Plaza</p>
        <p><strong>Time:</strong> 3:00 PM - 3:30 PM</p>
        <p>Discover your new favorite martial art and learn to fight with the weapon used by One Piece's White Beard, JJK's Maki, and KPop Demon Hunter's Mira!  In this demo, our naginataka will showcase elegant kata and dynamic sparring in armor (bogu). Grounded in battlefield principles built by Edo-era female warriors, we will guide you through the distance, strategy, and dueling techniques using the bladed spear.</p>
        <div class="std-event-image">
          <img src="images/NCNF Day 0.png" alt="Event Two" />
        </div>
      </section>

      <section id="nikkei-choral-ensemble" class="program-card" class:glow={currentHash === "#day0-event-two"}>
        <div class="name-bar"><h4>Nikkei Choral Ensemble</h4></div>
        <p><strong>Location:</strong> Lower Sproul Plaza </p>
        <p><strong>Time:</strong> 4:00 PM - 4:30 PM</p>
        <p>The Nikkei Choral Ensemble, UC Berkeley’s premiere Japanese and English acapela group, is so excited to be performing at Anime Destiny again. We’ll be singing a variety of songs from media and popular culture, including Vocaloid, J-Pop, and anime. We hope you enjoy our performance!</p>
        <div class="std-event-image">
          <img src="images/NiCE Day 0.png" alt="Event Two" />
        </div>
      </section>

      <section id="intermission-orchestra" class="program-card" class:glow={currentHash === "#day0-event-two"}>
        <div class="name-bar"><h4>The Intermission Orchestra</h4></div>
        <p><strong>Location:</strong> Lower Sproul Plaza</p>
        <p><strong>Time:</strong> 5:00 PM - 6:00 PM</p>
        <p>The Intermission Orchestra will perform orchestral-based arrangements of cinematic, video game and anime music!</p>
        <div class="std-event-image">
          <img src="images/TIO Day 0.png" alt="Event Two" />
        </div>
      </section>


    </div>
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

  .std-event-image img {
    max-width:300px;
    max-height:300px;
    margin:0 auto;
    padding: 5px;
  }

  .guess-song-image img {
    max-width:300px;
    max-height:300px;
    margin:0 auto;
    padding: 5px;
  }

  .nene-qna-image img {
    max-width:300px;
    max-height:300px;
    margin:0 auto;
    padding: 5px;
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

  .issei-band-image img {
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

  .cosplay-comp-image img {
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

  .virtual-bears-image img {
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