<script>
    const retrieveData = async () =>{
        const response = await fetch ("http://localhost:8000/", {
            headers: {
                API_KEY: "Alohomora",
            }
        });
        if (response.status !== 200) {
            alert("Something went wrong!");
            return
        }

        const data = await response.json();
        console.log(data)
        alert (data.success)
    };
</script>

<button class="btn btn-secondary" on:click={retrieveData}>Go!</button>