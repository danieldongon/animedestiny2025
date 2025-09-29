<script>
  import { guests } from './guests.js';
  import { fade, slide } from 'svelte/transition';
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';

  // Ensure 8 total cards
  const maxGuests = 8;
  const filledGuests = [
    ...guests,
    ...Array.from({ length: maxGuests - guests.length }, () => ({
      name: "Coming Soon...",
      socials: null,
      image: "/images/mystery.png",
      blurb: null,
      comingSoon: true
    }))
  ];

  let expandedIndex = null;

  function toggleExpand(index, guest) {
    if (guest.comingSoon) return;
    expandedIndex = expandedIndex === index ? null : index;
  }
</script>

<Navbar />

<main>
  <div class="page-title">Special Guests</div>
<div  class="container mx-auto px-4 py-12">
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {#each filledGuests as guest, i (i)}
    <div class="bg-white rounded-lg">
      <!-- Image area: clickable for real guests, static for coming soon -->
      {#if !guest.comingSoon}
        <button
          class="w-full p-0 m-0 block text-left"
          on:click={() => toggleExpand(i, guest)}
          aria-expanded={expandedIndex === i}
          aria-controls={"guest-details-" + i}
        >
          <img
            src={guest.image}
            alt={guest.name}
            class="w-full aspect-square object-contain bg-gray-100"
          />
        </button>
      {:else}
        <div class="w-full">
          <img
            src={guest.image}
            alt="Coming Soon"
            class="w-full aspect-square object-contain bg-gray-100"
          />
        </div>
      {/if}

      <!-- Accordion details: only rendered for the expanded card -->
      {#if expandedIndex === i}
        <div
          id={"guest-details-" + i}
          class="p-4 border-t border-gray-200 bg-gray-50 text-left  shadow-md"
          transition:slide
        >
          <div class="flex justify-between items-start">
            <h2 class="text-lg font-semibold text-gray-900">{guest.name}</h2>
            <button
              class="text-gray-500 hover:text-gray-800 ml-4"
              on:click={() => (expandedIndex = null)}
              aria-label="Close details"
            >
              ✕
            </button>
          </div>

          {#if guest.blurb}
            <p class="mt-2 text-gray-700">{guest.blurb}</p>
          {/if}

          {#if guest.socials}
            <a
              class="inline-block mt-3 text-pink-500 hover:text-pink-600"
              href={guest.socials}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow on Instagram"
            >
              <!-- Instagram Flat Icon SVG -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                fill="currentColor"
                class="w-10 h-10"
              >
                <path d="M20.445 5h-8.891A6.559 6.559 0 0 0 5 11.554v8.891A6.559 6.559 0 0 0 11.554 27h8.891a6.56 6.56 0 0 0 6.554-6.555v-8.891A6.557 6.557 0 0 0 20.445 5zm4.342 15.445a4.343 4.343 0 0 1-4.342 4.342h-8.891a4.341 4.341 0 0 1-4.341-4.342v-8.891a4.34 4.34 0 0 1 4.341-4.341h8.891a4.342 4.342 0 0 1 4.341 4.341l.001 8.891z"/><path d="M16 10.312c-3.138 0-5.688 2.551-5.688 5.688s2.551 5.688 5.688 5.688 5.688-2.551 5.688-5.688-2.55-5.688-5.688-5.688zm0 9.163a3.475 3.475 0 1 1-.001-6.95 3.475 3.475 0 0 1 .001 6.95zM21.7 8.991a1.363 1.363 0 1 1-1.364 1.364c0-.752.51-1.364 1.364-1.364z"/>
              </svg>
            </a>
          {/if}
        </div>
      {/if}
    </div>
  {/each}
</div>

</div> <!-- close container wrapper (matches your existing file) -->
</main>

<Footer />