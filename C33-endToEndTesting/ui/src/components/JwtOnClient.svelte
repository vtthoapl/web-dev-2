<script>
/* JWT is uded to store info about user. When the user logs in, the server returns a signed token, which is stored in the browser. the token is then sent to the server with every request, & the server can verify that the token is valid & extract the user info from the token */
let authorization = $state(null);
let user = $state(null);

//! the authenticare func sends a request to the server to log in user. if login is successful, the Authorization hearder from the res is stored in the appplization state, similar to the user details in the response.
const authenticate = async () =>{
    const response = await fetch("http://localhost:8000/api/auth", {
        method:"POST",
        body: JSON.stringify({password:"Alohomora"})
    })
    if(response.status !== 200){
        alert("something went worng")
        return
    }
    authorization = response.headers.get("Authorization")
    user = await response.json()
}

// the secretAction fuc sends a request to the server to access the protected resource. If the request is successful, the secret message is displayed.
const  secretAction = async () => {
    const response = await fetch("http://localhost:8000/api/secret/me", {
      headers: {
        Authorization: authorization
      }
    });
    if (response.status !== 200) {
      alert("Something went wrong!");
      return;
    }

    const data = await response.json();
    alert(data.message);
};

</script>

<button class="btn btn-secondary" on:click={authenticate}> Authenticate!</button>
{#if user?.username}
<p>Authenticated!</p>
<p>User: {user.username}</p>
<p>Authentization: {authorization}</p>
<button class="btn btn-secondary" on:click={secretAction}> Do secret Action!</button>
{:else}
<p>Not authenticated!</p>
{/if}