<script>
  let isOpen = false;

  const toggleMenu = () => {
    isOpen = !isOpen;
  };

  const closeMenu = () => {
    isOpen = false;
  };
</script>

<nav class="navbar">
  <div class="logo">
    <a href="/">Anime Destiny</a>
  </div>

  <div class="menu-items desktop-only">
    <!-- Removed Home link -->
    <a href="/about">About</a>
    <a href="/artists">Artists</a>
    <a href="/schedule">Schedule</a>
    <a href="/rules">Rules</a>
    <a href="https://example.com/purchase-tickets" target="_blank" rel="noopener noreferrer">Purchase Tickets</a>
  </div>

  <div class="hamburger mobile-only" on:click={toggleMenu}>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
  </div>

  <!-- Mobile Menu with a new logo inside -->
  <div class="mobile-menu {isOpen ? 'show' : ''}">
    <!-- New logo placed inside the mobile menu -->
    <div class="mobile-logo">
      <a href="/">Anime Destiny</a>
    </div>
    <div class="close-btn" on:click={closeMenu}>X</div>

    <div class="menu-content">
      <a href="/about" on:click={closeMenu}>About</a>
      <a href="/artists" on:click={closeMenu}>Artists</a>
      <a href="/schedule" on:click={closeMenu}>Schedule</a>
      <a href="/rules" on:click={closeMenu}>Rules</a>
      <a href="https://example.com/purchase-tickets" target="_blank" rel="noopener noreferrer" on:click={closeMenu}>Purchase Tickets</a>
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

  .menu-items a {
    margin-left: 1.5rem;
    color: white;
    text-decoration: none;
    font-size: 1rem;
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

  .bar {
    width: 25px;
    height: 3px;
    background-color: white;
    margin: 3px 0;
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
    transition: opacity 0.5s ease, visibility 0.5s ease;
    z-index: 20;
  }

  .mobile-menu.show {
    opacity: 1;
    visibility: visible;
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
    color: white;
    text-decoration: none;
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