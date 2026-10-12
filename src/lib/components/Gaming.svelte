<script>
    const clubs = [
      {
        name: "UC Berkeley Mahjong Club",
        link: "https://www.ocf.berkeley.edu/~mahjong/index.html",
        logo: "icons/mahjong.jpg",
        description: "Learn/Play Richii Mahjong",
      },
      {
        name: "Fighting Games @ Berkeley",
        link: "https://x.com/berkeleyfgc",
        logo: "icons/fgb2026.png",
        description: "FG@B Speed Challenge",
      },
      {
        name: "Rhythm @ Berkeley",
        link: "https://discord.gg/br9Ubfb",
        logo: "icons/Rhythm.png",
        description: "Rhythm Games!",
      },
      {
        name: "Dance Games @ Berkeley",
        link: "https://discord.gg/DzhkQasw3C",
        logo: "icons/dgb.png",
        description: "Dance Dance Revolution Arcade",
      },
      {
        name: "Board Games at Berkeley",
        link: "https://discord.com/invite/BbfVpMh",
        logo: "icons/bgb.jpg",
        description: "Magic the Gathering Learn to Plays / General Board Games",
      }
      
    ];
  </script>
  
  <main class="gaming-clubs">
    {#each clubs as club}
      <a href={club.link} target="_blank" rel="noopener noreferrer" class="club-card" aria-label="Visit {club.name}">
        <div class="logo">
          {#if club.logo}
            <img src={club.logo} alt="{club.name} logo" class="club-logo" draggable="false" />
          {:else}
            <div class="placeholder-image">No Logo</div>
          {/if}
        </div>
        <div class="club-info">
          <h2>{club.name}</h2>
          <p>{club.description}</p>
        </div>
      </a>
    {/each}
  </main>
  
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&family=Montserrat:wght@400&display=swap');
    
    .gaming-clubs {
      display: flex;
      flex-wrap: wrap;
      gap: 1.5rem;
      justify-content: center;
      padding: 2rem;
    }
  
    .club-card {
      background: white;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      overflow: hidden;
      max-width: 250px;
      text-align: center;
      transition: transform 0.3s ease-in-out;
      text-decoration: none;
      color: inherit; /* Ensure text color remains the same */
    }
  
    .club-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
    }
  
    .logo {
      background-color: #2e3440; /* Darker background for better contrast */
      padding: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  
    .club-logo {
      width: 100%;
      max-height: 150px;
      object-fit: contain;
    }
  
    .placeholder-image {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 150px;
      background-color: #d1d5db;
      color: #6b7280;
      font-size: 1rem;
      font-weight: bold;
    }
  
    .club-info {
      padding: 1.5rem;
    }
  
    .club-info h2 {
      font-size: 1.5rem;
      color: #374151;
      margin-bottom: 0.5rem;
    }
  
    .club-info p {
      font-size: 1rem;
      color: #4b5563;
      margin-bottom: 1rem;
    }
  
    /* Responsive design for smaller screens */
    @media (max-width: 768px) {
      .gaming-clubs {
        flex-direction: column;
        align-items: center;
      }
  
      .club-card {
        width: 100%;
      }
    }
  </style>
  