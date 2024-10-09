<script>
  import Footer from '$lib/components/Footer.svelte';
  import Navbar from '$lib/components/Navbar.svelte';
  </script>
  
  <Navbar />
  
  <main>
    <div class="page-title">
      About Us
    </div>
    <div class="page-body">

      <p>Anime Destiny is Berkeley's annual anime convention hosted by Cal Animage Alpha, a non-profit student organization founded at UC Berkeley and thriving since 1989. </p>

      <p>Cal Animage Alpha is the first anime club of the Cal Animage network, a group of anime clubs that has expanded to universities across the country. Focused on all things anime, manga, and games, our club founders have gone on to create Crunchyroll and Anime Expo, among many other amazing anime-related events and organizations. Here at Cal Animage Alpha, we aim to foster a supportive and welcoming environment where all types of people can gather and meet like-minded individuals. </p>
        
      <p>To this end, we created Anime Destiny. At this annual one-day convention, we invite artists, panelists, guests, speakers, performers, industry professionals, and many more types of people involved in the anime industry to come together and create an amazing experience for the public. Anime Destiny is open to everyone! Especially those who enjoy all things “animage” (anime, manga, and games) or want to learn more about it. </p>
      <p>  
        We hope you have an amazing time at Anime Destiny this year and thank you for supporting Cal Animage Alpha!
        </p>
      <img src="debug/yellow.png" alt="Work in Progress" style="width: 100px; height: auto;" />

    </div>
    
  </main>
  
  <style>
    main {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
    }
    .page-title {
      
      background-color: #485077; /* Solid blue background */
      color: #fed893; /* Yellow text */
      font-size: 3rem; /* Text size */
      height: 10rem; /* Height of the bar */
      display: flex; /* Flexbox for centering */
      justify-content: center; /* Horizontally center the text */
      align-items: center; /* Vertically center the text */
      width: 100vw; /* Full viewport width */
      margin: 0; /* Remove any default margin */
      box-sizing: border-box; /* Ensures padding doesn't affect width */
    }
    .page-body {
      
      padding: 2rem;
      width: 100%;
      max-width: 100rem;
      margin: auto;
    }
    p {
      margin-bottom: 1rem;
    }
  </style>
  
  <Footer/>