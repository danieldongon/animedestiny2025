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
        Cosplay
    </div>

    <div class="page-body">
        
        <section class="content-section">
            <img 
                src="images/cosplay/cosplay_gathering.png" 
                alt="Cosplay Gathering Sign-Ups" 
                class="content-graphic"
            />
            <div class="content-text">
                <h2>Host a Cosplay Gathering!</h2>
                <p>
                    Are you a cosplayer, dedicated fan, or just someone who wants to bring 
                    your favorite fandom together? Anime Destiny is looking for 
                    organizers to host cosplay gatherings from any fandom!
                </p>
                <a 
                    href="https://forms.gle/bfbzXMr2rK3mmTFF7" 
                    class="signup-link"
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    Sign Up to Host Here
                </a>
            </div>
        </section>

        <hr class="section-divider" />

        <section class="content-section">
            <img 
                src="images/cosplay/cosplay_template.jpg" 
                alt="Cosplay Line-Up" 
                class="content-graphic"
            />
            <div class="content-text">
                <h2>Show Off Your Cosplay Line-Up!</h2>
                <p>
                    Use this tag on your socials with the tag 
                    <strong>#animedestiny2025</strong> 
                    to show off your exciting cosplay for Anime Destiny!
                </p>
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

    .page-body {
        padding: 1rem;
        width: 100%;
        max-width: 100rem;
        margin: auto;
    }

    /* Added Styles for New Content */
    .content-section {
        display: flex;
        flex-wrap: wrap; /* Allows items to wrap on smaller screens */
        gap: 2rem; /* Adds space between image and text */
        align-items: center; /* Vertically centers items */
        margin-bottom: 2rem;
    }

    .content-graphic {
        flex: 1 1 300px; /* Allows graphic to grow/shrink, with a base of 300px */
        max-width: 100%; /* Ensures image is responsive */
        height: auto;
        object-fit: cover;
        border-radius: 8px; /* Optional: adds rounded corners */
        box-shadow: 0 4px 8px rgba(0,0,0,0.1); /* Optional: adds subtle shadow */
    }

    .content-text {
        flex: 2 1 400px; /* Allows text block to grow/shrink, with a larger base */
    }

    .content-text h2 {
        font-size: 1.75rem;
        color: #333;
        margin-bottom: 1rem;
    }

    .content-text p {
        font-size: 1.1rem;
        line-height: 1.6;
        margin-bottom: 1.5rem;
    }

    .signup-link {
        display: inline-block;
        padding: 0.75rem 1.5rem;
        background-color: #007bff; /* Example button color */
        color: #ffffff;
        text-decoration: none;
        font-weight: bold;
        border-radius: 5px;
        transition: background-color 0.3s ease;
    }

    .signup-link:hover {
        background-color: #0056b3; /* Darker blue on hover */
    }

    .section-divider {
        border: 0;
        height: 1px;
        background: #e0e0e0;
        margin: 2.5rem 0;
    }

    /* Reverse layout for the second item for visual variety */
    .content-section:nth-child(odd) {
         /* This will apply to the first .content-section */
         /* You could reverse it if you prefer: flex-direction: row-reverse; */
    }

    @media (max-width: 768px) {
        .content-section {
            flex-direction: column; /* Stacks image and text vertically */
        }
    }
</style>

<Footer/>