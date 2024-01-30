<script>
  import Hero from "../routes/hero/+page.svelte"
  import Carousel from "../routes/carousel/+page.svelte"
  import Card from "../routes/card/+page.svelte"
  import About from "../routes/about/+page.svelte"
  import Chat from "../routes/chat/+page.svelte"
  import Contact from "../routes/contact/+page.svelte"
</script>

<svelte:head>
  <title>My application</title>
</svelte:head>

<Hero />  
<div class="flex justify-evenly mt-10 mb-10">
  <Card title="Home" description="You are here." link="/" />
  <Card title="About" description="About.. what?" link="/about" />
  <Card title="Contact" description="Get in touch" link="/contact" />
</div>
<Carousel/>
<Chat/>



