<script>
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  
  let confirmationMessage = "Purchase Confirmed!";
  let homeLink = "/";
</script>
  
<Navbar />
  
<main class="confirmation-page">
  <div class="confirmation-content">
    <h1>{confirmationMessage}</h1>
    <p>Your order has been processed!</p>
    <p>A receipt has been sent to your email.</p>
    <p>Please remember the name and email you signed up with for registration at AD 2024!</p>
    <p>Return to <a href={homeLink} class="home-link">Home Page</a></p>
  </div>
</main>
  
<Footer/>
  
<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&family=Montserrat:wght@400&display=swap');
  
  .confirmation-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f4f8;
    text-align: center;
    padding: 2rem;
  }
  
  .confirmation-content h1 {
    font-family: 'Protest Strike', sans-serif;
    font-size: 3rem;
    color: #485077; /* Match with the theme’s dark blue */
  }
  
  .confirmation-content p {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.2rem;
    color: #485077;
  }
  
  .home-link {
    color: #485077;
    text-decoration: none;
    font-weight: bold;
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
    .confirmation-content h1 {
    font-size: 2rem;
    }
  
    .confirmation-content p {
    font-size: 1rem;
    }
  }
</style>
