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
  <!--<p style="font-family: 'Montserrat', sans-serif; font-size: 1.5rem; color: #485077; margin-bottom: 1rem;">To Be Announced - Stay Tuned!</p>-->

    <!-- 5th Floor - Tilden Room -->
    <!--
    <section id="tilden-room">
      <h2>5th Floor - Tilden Room</h2>-->

       <!--Panels -->
      <div class="panel-category">
        <!--<h3>Panels</h3>-->

         <section id="panel-template" class="program-card" class:glow={currentHash === "#panel-template"}>
          <div class="name-bar"><h4>CAA Event: Voice Acting Contest</h4></div>
           <p><strong>Location:</strong> Stephens Room</p>
          <p><strong>Time:</strong> 10:00 AM - 10:45 AM</p>
          <p>DO YOU WANT TO PARTICIPATE IN A FUN VOICE ACTING CONTEST? THENNNNNNNNNN COME ON OVER DURING THE VOICE ACTING CONTEST PANEL WHERE YOU- YES YOU- CAN WIN A PRIZE FOR WINNING THE ENTIRE CONTEST!!!<br><br>
              THE AUDIENCE WILL DECIDE WHO WINSSSSSSSSS<br><br>
              WE WILL HAVE SPECIAL SCRIPTS FOR YOU TO READ OUT TO THE WORLD!!! DONT BE SHY, IT IS A JUDGE-FREE ZONE :D
          </p>
          <div class="std-event-image">
            <img src="images\seiyuucontest.png" alt="Work in Progress" />
          </div>
        </section>

        <section id="panel-template" class="program-card" class:glow={currentHash === "#panel-template"}>
          <div class="name-bar"><h4>How is Manga Delivered To You? Licensing and Digital Publication</h4></div>
           <p><strong>Location:</strong> Stephens Room</p>
          <p><strong>Time:</strong> 11:00 AM - 12:00 PM</p>
          <p>Explaining the process of licensing and digital publication. Will be taking Q/A from the floor!
          </p>
          <div class="std-event-image">
            <img src="images\emaqi.png" alt="Work in Progress" />
          </div>
        </section>

        <section id="panel-template" class="program-card" class:glow={currentHash === "#panel-template"}>
          <div class="name-bar"><h4>Fansubbing for Dummies</h4></div>
           <p><strong>Location:</strong> Stephens Room</p>
          <p><strong>Time:</strong> 12:15 PM - 1:00 PM</p>
          <p>A quick and dirty overview of fansubbing, along with its history and effects on simulcasting.
          </p>
          <div class="std-event-image">
            <img src="images\Fansubs.png" alt="Work in Progress" />
          </div>
        </section>

        <section id="panel-template" class="program-card" class:glow={currentHash === "#panel-template"}>
          <div class="name-bar"><h4>Where VTubing Is Going IRL</h4></div>
           <p><strong>Location:</strong> Stephens Room</p>
          <p><strong>Time:</strong> 1:15 PM - 2:00 PM</p>
          <p>VTubers are going across the world at different locations-not just online! Whether it be at a baseball game in Frisco, Texas, at the zoo, or on a massive cinema screen in Las Vegas, VTuber Kōri-Oujo shares how these events happened and how it can affect the VTubing industry in the future!
          </p>
          <div class="std-event-image">
            <img src="images\VTubing IRL.png" alt="Work in Progress" />
          </div>
        </section>

        <section id="panel-template" class="program-card" class:glow={currentHash === "#panel-template"}>
          <div class="name-bar"><h4>Nikkei Choral Ensemble</h4></div>
           <p><strong>Location:</strong> Stephens Room</p>
          <p><strong>Time:</strong> 2:30 PM - 3:00 PM</p>
          <p>The Nikkei Choral Ensemble, UC Berkeley’s premiere Japanese and English acapela group, is so excited to be performing at Anime Destiny again. We’ll be singing a variety of songs from media and popular culture, including Vocaloid, J-Pop, and anime. We hope you enjoy our performance!
          </p>
          <div class="std-event-image">
            <img src="images\NiCE.png" alt="Work in Progress" />
          </div>
        </section>

        <section id="panel-template" class="program-card" class:glow={currentHash === "#panel-template"}>
          <div class="name-bar"><h4>All Roads Lead to Touhou: Past, Present, and Future</h4></div>
           <p><strong>Location:</strong> Stephens Room</p>
          <p><strong>Time:</strong> 3:30 PM - 4:30 PM</p>
          <p>Presentation, small activities, Q&A, and how you can get involved in all things Touhou! Everyone is welcome, whether you're an old fan, new fan, magician, youkai, ghost, or "Honestly Just Got Lost."
          </p>
          <div class="std-event-image">
            <img src="images\Touhou.png" alt="Work in Progress" />
          </div>
        </section>

        <section id="panel-template" class="program-card" class:glow={currentHash === "#panel-template"}>
          <div class="name-bar"><h4>Genshin at Berkeley Commission Event</h4></div>
           <p><strong>Location:</strong> Stephens Room</p>
          <p><strong>Time:</strong> 5:00 PM - 7:00 PM</p>
          <p>Join Berkeley's Genshin/Hoyoverse Club! Complete four "commissions" for special prizes, discounts on merch, and the chance to pull on our account! Participate in fun activities and hang out with other like-minded Gacha fans!!
          </p>
          <div class="std-event-image">
            <img src="images\gb26.png" alt="Work in Progress" />
          </div>
        </section>

        <section id="panel-template" class="program-card" class:glow={currentHash === "#panel-template"}>
          <div class="name-bar"><h4>Cosplay Contest 101 & Costume Pre-Judging</h4></div>
           <p><strong>Location:</strong> Tilden Room</p>
          <p><strong>Time:</strong> 10:00 AM - 11:30 AM</p>
          <p>Join our cosplay contest judges - Cesseciel, Tytalis, and Cosmic Peachz - for an informative panel on the cosplay contest, which will hopefully inspire you to participate! Costume pre-judging for craftsmanship costumes will also take place during/after this panel!
          </p>
          <div class="std-event-image">
            <img src="images\Cosplay Panel.png" alt="Work in Progress" />
          </div>
        </section>

        <section id="panel-template" class="program-card" class:glow={currentHash === "#panel-template"}>
          <div class="name-bar"><h4>Cosplay Contest</h4></div>
           <p><strong>Location:</strong> Tilden Room</p>
          <p><strong>Time:</strong> 11:30 AM - 12:30 PM</p>
          <p> Take part in the cosplay contest this year to win some amazing prizes, with one of the grand prizes being a LIFETIME pass to Anime Destiny! With prizes in both performance and craftsmanship, ALL are welcome, regardless of if your costume was homemade or store-bought!</p>
          <a href="/cosplay-contest">Click here for more information</a>
          <div class="std-event-image">
            <img src="images\Cosplay Contest.png" alt="Work in Progress" />
          </div>
        </section>

        <section id="panel-template" class="program-card" class:glow={currentHash === "#panel-template"}>
          <div class="name-bar"><h4>Curtain Call with Furina and Neuvillette</h4></div>
           <p><strong>Location:</strong> Tilden Room</p>
          <p><strong>Time:</strong> 1:00 PM - 2:00 PM</p>
          <p>Join Amber Lee Connors (voice of Furina) and Ray Chase (voice of Neuvillette) for a special Genshin Impact Fontaine panel! Featuring Q&As, live voice acting, and audience questions, with autographs taking place before and after the panel!
          </p>
          <div class="std-event-image">
            <img src="images\Voice Actor Panel.png" alt="Work in Progress" />
          </div>
        </section>

        <section id="panel-template" class="program-card" class:glow={currentHash === "#panel-template"}>
          <div class="name-bar"><h4>The Intermission Orchestra</h4></div>
           <p><strong>Location:</strong> Tilden Room</p>
          <p><strong>Time:</strong> 2:30 PM - 3:30 PM</p>
          <p>The Intermission Orchestra will perform ensemble-based arrangements of cinematic, video game, and anime music!
          </p>
          <div class="std-event-image">
            <img src="images\TIO.png" alt="Work in Progress" />
          </div>
        </section>

        <section id="panel-template" class="program-card" class:glow={currentHash === "#panel-template"}>
          <div class="name-bar"><h4>Sixth Station Trio Performs Anime OST and VGM</h4></div>
           <p><strong>Location:</strong> Tilden Room</p>
          <p><strong>Time:</strong> 3:45 PM - 4:45 PM</p>
          <p>Sixth Station Trio will be performing a setlist of anime and video game music, arranged for a piano trio!
          </p>
          <div class="std-event-image">
            <img src="images\Sixth Station.png" alt="Work in Progress" />
          </div>
        </section>

        <section id="panel-template" class="program-card" class:glow={currentHash === "#panel-template"}>
          <div class="name-bar"><h4>Virtual Bears: VTuber Mini Concert</h4></div>
           <p><strong>Location:</strong> Tilden Room</p>
          <p><strong>Time:</strong> 5:30 PM - 7:00 PM</p>
          <p>Anime Destiny’s live VTuber concert full of energy, good vibes, and a perfect way to close off the night! The full concert line-up will be announced shortly~ please stay tuned!
          </p>
          <div class="std-event-image">
            <img src="images\" alt="Work in Progress" />
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
