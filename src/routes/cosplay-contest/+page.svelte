<script>
  import Footer from '$lib/components/Footer.svelte';
  import Navbar from '$lib/components/Navbar.svelte';
  </script>
  
  <Navbar />
  
  <main>
    <div class="page-title">
      Cosplay Contest (Masquerade)
    </div>
    <div class="page-body">

      <section id="workshop-cosplay-contest">
        <p><strong>Location:</strong> Tilden Room</p>
        <p><strong>Time:</strong> 12:30 PM - 2:30 PM</p>
        <p>

          <!-- ADD MORE CONTENT HERE!!! ALSO PICS!!!-->
          Join Berkeley’s cosplayers for a fun and welcoming event! Show off your cosplaying skills or just enjoy watching the amazing talent at Anime Destiny. Sign up here: <a href="https://forms.gle/yFaseo2pursJjzodA" target="_blank" class="section-link">Cosplay Sign-Up Form</a>
        </p>
      </section>

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
      width: 100%; /* Full viewport width */
      margin: 0; /* Remove any default margin */
      box-sizing: border-box; /* Ensures padding doesn't affect width */
      text-align: center;
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

    .section-link {
      color: #485077;
      text-decoration: none;
      font-weight: bold;
      font-size: 1.1rem;
      border-bottom: 2px solid #485077; /* Underline links */
      padding-bottom: 0.2rem;
      line-height:4rem;
      padding-top: 2rem;
      transition: color 0.3s ease, border-bottom-color 0.3s ease;
    }

    .section-link:hover {
      color: #fed893; /* Yellow on hover */
      border-bottom-color: #fed893;
      
    }
  </style>
  
  <Footer/>
