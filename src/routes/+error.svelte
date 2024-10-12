<script>
    import Navbar from '$lib/components/Navbar.svelte';
    import Footer from '$lib/components/Footer.svelte';
  
    let errorMessage = "Oops! Something went wrong.";
    let homeLink = "/";
  </script>
  
  <Navbar />
  
  <main class="error-page">
    <div class="error-content">
      <h1>{errorMessage}</h1>
      <p>It seems the page you're looking for doesn't exist or has been moved.</p>
      <p>Return to <a href={homeLink} class="home-link">Home Page</a> or contact support for help.</p>
    </div>
  </main>
  
  <Footer/>
  
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&family=Montserrat:wght@400&display=swap');
  
    .error-page {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: #f0f4f8;
      text-align: center;
      padding: 2rem;
    }
  
    .error-content h1 {
      font-family: 'Protest Strike', sans-serif;
      font-size: 3rem;
      color: #485077; /* Match with the theme’s dark blue */
    }
  
    .error-content p {
      font-family: 'Montserrat', sans-serif;
      font-size: 1.2rem;
      color: #485077;
    }
  
    .home-link {
      color: #485077;
      text-decoration: none;
      font-weight: bold;
      font-size: 1.5rem;
      border-bottom: 2px solid #485077;
      padding-bottom: 0.2rem;
      transition: color 0.3s ease, border-bottom-color 0.3s ease;
    }
  
    .home-link:hover {
      color: #fed893; /* Hover color */
      border-bottom-color: #fed893;
    }
  
    /* Mobile Styling */
    @media (max-width: 768px) {
      .error-content h1 {
        font-size: 2rem;
      }
  
      .error-content p {
        font-size: 1rem;
      }
    }
  </style>
  