<script>
    import { onMount } from 'svelte';
    import { initBooks } from '../stores/books.svelte.js';
    
    onMount(() => {
      initBooks(); 
    });
  </script>
  
  <slot />