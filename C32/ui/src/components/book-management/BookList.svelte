<script>
    import {onMount} from 'svelte';
    import { getBooks } from '../../http-actions/books-api.js';
let books = $state([]);

onMount(async() => {
    books = await getBooks()
});
</script>

<h1>Books</h1>

<ul>
    {#each books as book }
        <li>{book.name}</li> 
    {/each}
</ul>