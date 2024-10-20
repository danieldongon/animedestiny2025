<!-- <script>
    let calendar = "https://calendar.google.com/calendar/embed?src=your_google_calendar_id&ctz=America/Los_Angeles";
  </script>
  
  <div style="width: 100%; height: 600px; margin-top: 1rem;">
    <iframe 
      src= {calendar} 
      style="border: 0" width="100%" height="100%" frameborder="0" scrolling="no"
      title="Google Calendar">
    </iframe>
  </div> -->
  
  <script>
    //   <!-- PLACEHOLDER REPLACE WITH ACTUAL IMAGE LATER -->
    let calendar = "images/schedule.png";
    let calendar_mobile = "images/schedule_mobile.png";
  </script>
  <div style="padding: 2rem 0;">
    <h2 style="font-family: 'Roboto', sans-serif; font-size: 2rem; color: #485077; margin-bottom: 1rem;">Event Schedule</h2>
    
    <p style="font-family: 'Montserrat', sans-serif; font-size: 1.2rem; color: #485077; margin-bottom: 1.5rem;">
      Here is the full schedule of events for Anime Destiny 2024. Make sure to plan your day and check out all the exciting activities!
    </p>
  
    <div class="parent-container">
      <picture class="image-container">
        <!-- Mobile image: displayed on screens with a max width of 768px -->
        <source srcset={calendar_mobile} media="(max-width: 768px)" />
        <!-- Default image for larger screens -->
        <img src={calendar} alt="Anime Destiny 2024 Schedule" class="responsive-image" />
    </picture>
    </div>
    
    <p style="font-family: 'Montserrat', sans-serif; font-size: 1.2rem; color: #485077; margin-top: 1.5rem;">
      For more detailed descriptions of each event, please visit our <a href="/programming" style="color: #485077; text-decoration: underline;">Programming Page</a>.
    </p>
  </div>
  
  <style>
@media (max-width: 768px) {
  .parent-container {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
      padding-top:60vw;
      padding-bottom: 60vw;
  }
  .image-container {
      position: absolute; /* Take the image out of the normal flow */
      left: -2rem;
      width: 100vw; /* Make the image 100% of the viewport width */
      height: auto; /* Maintain aspect ratio */
  }

  .responsive-image {
      width: 100%; /* Ensure the image takes up the full width of the image container */
      height: auto;
      border-radius: 0; /* Optional: remove border-radius on mobile */
  }
}
</style>