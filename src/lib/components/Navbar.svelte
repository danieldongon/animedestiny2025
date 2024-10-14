<script>
  import { fade } from 'svelte/transition'; // Import fade transition
  let isOpen = false;
  let isHomeOpen = false;
  let isProgrammingOpen = false;
  let ticketLink = 'https://buy.stripe.com/3cs7uKaGG5Fu3lu7ss';
  let discord = 'https://discord.com/invite/Xp4MUjG';
  let instagram = 'https://www.instagram.com/calanimagealpha/';

  // Function to show the dropdown on hover
  function openHomeDropdown() {
    isHomeOpen = true;
  }

  // Function to close the dropdown when mouse leaves
  function closeHomeDropdown() {
    isHomeOpen = false;
  }
  const toggleMenu = () => {
    isOpen = !isOpen;
  };

  const closeMenu = () => {
    isOpen = false;
  };

  function openProgrammingDropdown() {
    isProgrammingOpen = true;
  }

  function closeProgrammingDropdown() {
    isProgrammingOpen = false;
  }
</script>

<nav class="navbar">
  <div class="logo">
    <a href="/" in:fade={{ duration: 500 }} style="font-family: 'Roboto', sans-serif; font-size: 1.8rem;">Anime Destiny</a>
  </div>

  <!-- Work in Progress -->
  <div class="wip" >
    <span in:fade={{ duration: 500 }}>Work in Progress</span>
  </div>

  <!-- Desktop Menu -->
  <div class="menu-items desktop-only">
    <!-- Home Dropdown -->
    <div class="dropdown" 
        role="button"
        aria-haspopup="true"
        aria-expanded={isHomeOpen}
        tabindex="0"
        on:mouseover={openHomeDropdown} 
        on:mouseleave={closeHomeDropdown}
        on:focus={openHomeDropdown} 
        on:blur={closeHomeDropdown}>

      <!-- Home link with dropdown indicator -->
      <a href="#" class="dropdown-toggle" aria-label="Home menu">AD Info ▾</a>

      <!-- Dropdown Menu -->
      {#if isHomeOpen}
        <div class="dropdown-menu" in:fade={{ duration: 200 }} out:fade={{ duration: 300 }}>
          <a href="/">Homepage</a>
          <a href="/about">About AD</a>
          <a href="/artists">Artist Alley</a>
          <a href="/#map-schedule">Schedule and Map</a>
          <a href="/#rules">Rules</a>
        </div>
      {/if}
    </div>

    <!-- Programming Dropdown -->
    <div class="dropdown"
       role="button"
       aria-haspopup="true"
       aria-expanded={isProgrammingOpen}
       tabindex="0"
       on:mouseover={openProgrammingDropdown}
       on:mouseleave={closeProgrammingDropdown}
       on:focus={openProgrammingDropdown}
       on:blur={closeProgrammingDropdown}>

    <!-- Programming link with dropdown indicator -->
    <a href="#" class="dropdown-toggle" aria-label="Programming menu">Programming ▾</a>


    <!-- TODO make programming page and link them to sections in programming -->
     <!-- Add relevant panels, performances, and workshops here -->
    <!-- Dropdown Menu -->
    {#if isProgrammingOpen}
  <div class="dropdown-menu" in:fade={{ duration: 200 }} out:fade={{ duration: 300 }}>
    <!-- Category: 3rd Floor - Stephens Hall -->
    <div class="category">Stephens Hall (3rd Floor)</div>
    <div class="sub-links">
      <!-- Panels -->
      <a href="/artists">Artist Alley</a>
      <a href="/programming#panel-music-voice-acting">Music and Voice Acting Panel</a>
      
      <!-- Workshops -->
      <a href="/programming#workshop-anime-trivia">CAA Anime Trivia</a>
      
      <!-- Events -->
      <a href="/programming#event-nikkei-choral-performance">Nikkei Choral Ensemble</a>
      <a href="/programming#event-genshin-club">Genshin at Berkeley Event</a>
    </div>

    <!-- Category: 5th Floor - Tilden Room -->
    <div class="category">Tilden Room (5th Floor)</div>
    <div class="sub-links">
      <!-- Panels -->
      <a href="/programming#panel-old-woke-manga">Old Woke Manga Panel</a>
      
      <!-- Workshops -->
      <a href="/cosplay-contest">Cosplay Contest</a> <!-- Direct link to the separate Cosplay Contest page -->
      
      <!-- Events -->
      <a href="/programming#event-intermission-orchestra">The Intermission Orchestra</a>
      <a href="/programming#event-anikura-destiny">Anikura Destiny</a>
    </div>
  </div>
{/if}

  </div>

    <!-- Buy a Ticket -->
    <a href={ticketLink} target="_blank" rel="noopener noreferrer" in:fade={{ duration: 500 }}>Buy a Ticket</a>

    <!-- Discord and Instagram -->
    <a href={discord} target="_blank" rel="noopener noreferrer" in:fade={{ duration: 500 }}>
      <img src="icons/discord.svg" alt="Discord" class="icon"/>
    </a>
    <a href={instagram} target="_blank" rel="noopener noreferrer" in:fade={{ duration: 500 }}>
      <img src="icons/instagram.svg" alt="Instagram" class="icon"/>
    </a>
  </div>

  <!-- Mobile Menu Trigger -->
  <div class="hamburger mobile-only" on:click={toggleMenu}>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
  </div>

  <!-- Mobile Menu -->
  <div class="mobile-menu {isOpen ? 'show' : ''}">
    <div class="mobile-logo">
      <a href="/" on:click={closeMenu} in:fade={{ duration: 500 }}>Anime Destiny</a>
    </div>
    <div class="close-btn" on:click={closeMenu}>X</div>

    <div class="menu-content">
      <!-- TODO Add more pages (e.g. panels, workshops, etc.)
          - cosplay contest
          - gaming area
          - move artists here? -->
          <!-- Add programming items later -->

      <!-- Mobile Menu -->
      <a href="/" on:click={closeMenu} in:fade={{ duration: 500 }}>Homepage</a>
      <a href="/about" on:click={closeMenu} in:fade={{ duration: 500 }}>About AD</a>
      <a href="/artists" on:click={closeMenu} in:fade={{ duration: 500 }}>Artist Alley</a>
      <a href="/programming" on:click={closeMenu} in:fade={{ duration: 500 }}>Programming</a>
      <a href="/cosplay-contest" on:click={closeMenu} in:fade={{ duration: 500 }}>Cosplay Contest</a>
      
      <!-- Buy a Ticket -->
      <a href={ticketLink} target="_blank" rel="noopener noreferrer" on:click={closeMenu} in:fade={{ duration: 500 }}>Buy a Ticket</a>

      <!-- Discord and Instagram Icons -->
      <a href={discord} target="_blank" rel="noopener noreferrer" in:fade={{ duration: 500 }}>
         Join our Discord!
      </a>
      <a href={instagram} target="_blank" rel="noopener noreferrer" in:fade={{ duration: 500 }}>
        Follow our Instagram!
      </a>
    </div>
  </div>
</nav>

<style>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: black;
    color: white;
    position: relative;
    z-index: 10;
  }

  .logo a {
    font-size: 1.5rem;
    color: white;
    text-decoration: none;
  }

  .wip {
    color: #fed893;
    font-size: 1rem;
    margin-right: auto;
    padding-left: 1.5rem;
  }

  .menu-items a, .menu-content a {
    margin-left: 1.5rem;
    color: white;
    text-decoration: none;
    font-size: 1rem;
    transition: color 0.3s ease;
  }


  /* Hover effect for yellow highlight */
  .menu-items a:hover, .menu-content a:hover {
    color: #fed893;
  }

  .desktop-only {
    display: none;
  }

  .mobile-only {
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
  }

  .dropdown-menu {
    display: flex;
    flex-direction: column;
    background-color: rgb(49, 49, 49);
    position: absolute;
    padding: 0.3rem 2rem 0.3rem 0.1rem;
    margin-top: 0.5rem;
    /*border: 1px solid white;
    border-radius: 5px;*/
  }

  .dropdown-menu a {
    color: white;
    padding: 0.5rem;
    text-decoration: none;
    
  }

  .dropdown-menu a:hover {
    color: #fed893;
  }

  .dropdown-toggle {
    cursor: pointer;
    position: relative;
    padding-bottom:1.3rem;
  }

  .bar {
    width: 25px;
    height: 3px;
    background-color: white;
    margin: 3px 0;
  }

  /* Discord and Instagram Icons */
  .icon {
    width: 24px;
    height: 24px;
  }

  /* Mobile Menu Styles */
  .mobile-menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-100%);
    transition: opacity 0.5s ease, transform 0.5s ease, visibility 0.5s ease;
    z-index: 20;
  }

  .mobile-menu.show {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  .mobile-logo {
    position: absolute;
    top: 1rem;
    left: 1rem;
  }

  .mobile-logo a {
    font-family: 'Roboto', sans-serif;
    font-size: 1.8rem;
    color: white;
    text-decoration: none;
  }

  .menu-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .menu-content a {
    font-size: 2rem;
    margin: 1.5rem 0;
  }

  .close-btn {
    position: absolute;
    top: 0.7rem;
    right: 1rem;
    font-size: 2rem;
    color: white;
    cursor: pointer;
  }

  /* Sub-links under categories */
  .sub-links {
    padding-left: 20px; /* Indent the sub-links */
  }

  .sub-links a {
    display: block;
    margin: 5px 0;
  }

  /* Category Styling */
  .category {
    font-weight: bold;
    color: grey;
    margin-top: 10px;
    padding-left: 0.8em;
    cursor: default;
  
  }



  /* Desktop Menu (Media Query) */
  @media(min-width: 768px) {
    .desktop-only {
      display: flex;
    }

    .mobile-only {
      display: none;
    }
  }
</style>
