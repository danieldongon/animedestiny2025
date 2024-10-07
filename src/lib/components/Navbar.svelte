<script>
  import { fade } from 'svelte/transition'; // Import fade transition
  let isOpen = false;
  let isHomeOpen = false;
  let isProgrammingOpen = false;
  let ticketLink = 'https://example.com/purchase-tickets';
  let discord = 'https://discord.com/invite/Xp4MUjG';
  let instagram = 'https://www.instagram.com/calanimagealpha/';
  
  const toggleMenu = () => {
    isOpen = !isOpen;
  };

  const closeMenu = () => {
    isOpen = false;
  };

  const toggleHomeDropdown = () => {
    isHomeOpen = !isHomeOpen;
  };

  const toggleProgrammingDropdown = () => {
    isProgrammingOpen = !isProgrammingOpen;
  };
</script>

<nav class="navbar">
  <div class="logo">
    <a href="/" in:fade={{ duration: 500 }}>Anime Destiny</a>
  </div>

  <!-- Work in Progress -->
  <div class="wip" >
    <span in:fade={{ duration: 500 }}>Work in Progress</span>
  </div>

  <!-- Desktop Menu -->
  <div class="menu-items desktop-only">
    <!-- Home Dropdown -->
    <div class="dropdown">
      <a href="#" class="dropdown-toggle" on:click={toggleHomeDropdown} in:fade={{ duration: 500 }}>Home ▾</a>
      {#if isHomeOpen}
        <div class="dropdown-menu">
          <a href="/" on:click={toggleHomeDropdown}>Homepage</a>
          <a href="/#about" on:click={toggleHomeDropdown}>About AD</a>
          <a href="/artists" on:click={toggleHomeDropdown}>Artist Alley</a>
          <a href="/#schedule-section" on:click={toggleHomeDropdown}>Schedule and Map</a>
          <a href="/#rules" on:click={toggleHomeDropdown}>Rules</a>
        </div>
      {/if}
    </div>

    <!-- Programming Dropdown -->
    <div class="dropdown">
      <a href="#" class="dropdown-toggle" on:click={toggleProgrammingDropdown} in:fade={{ duration: 500 }}>Programming ▾</a>
      {#if isProgrammingOpen}
        <div class="dropdown-menu">
          <!-- TODO Add more pages (e.g. panels, workshops, etc.)
          - cosplay contest
          - gaming area
          - move artists here? -->
          <!-- NOTE: add on:click={toggleProgrammingDropdown} to each link 
           and DON'T forget to add to mobiole menu when adding links! -->
          <!-- Add programming items later -->
          <a href="/programming" on:click={toggleProgrammingDropdown}>Progamzz</a>
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
      <a href="/" in:fade={{ duration: 500 }}>Anime Destiny</a>
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
      <a href="/#about" on:click={closeMenu} in:fade={{ duration: 500 }}>About AD</a>
      <a href="/artists" on:click={closeMenu} in:fade={{ duration: 500 }}>Artist Alley</a>
      <a href="/#schedule-section" on:click={closeMenu} in:fade={{ duration: 500 }}>Schedule</a>
      <a href="/#rules" on:click={closeMenu} in:fade={{ duration: 500 }}>Rules</a>

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
    color: yellow;
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
    color: yellow;
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
    background-color: black;
    position: absolute;
    padding: 0.5rem;
    border: 1px solid white;
    border-radius: 5px;
  }

  .dropdown-menu a {
    color: white;
    padding: 0.5rem;
    text-decoration: none;
  }

  .dropdown-menu a:hover {
    color: yellow;
  }

  .dropdown-toggle {
    cursor: pointer;
    position: relative;
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
    font-size: 1.5rem;
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
