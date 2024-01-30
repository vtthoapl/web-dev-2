<script>
    import "../app.css";
    import Navbar from "../routes/navbar/+page.svelte";
    import Footer from "../components/Footer.svelte";

  </script>
  
  <Navbar />

  <main class="container mx-auto">
    <slot />
  </main>
  
  <Footer class="mb-0 "/>
