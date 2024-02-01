<script>
  import ApiKeys from "../components/ApiKeys.svelte";
  import JwtOnClient from "../components/JwtOnClient.svelte";
import About from "./about/+page.svelte"
  import Contact from "./contact/+page.svelte"
</script>

<svelte:head>
  <title>My application</title>
</svelte:head>

<About />
<Contact/>
<ApiKeys />
<JwtOnClient />


