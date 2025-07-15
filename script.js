async function fetchUsers() {
  const userList = document.getElementById("user-list");
  userList.innerHTML = "<p>Loading...</p>";

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    userList.innerHTML = ""; // Clear loading text

    users.forEach(user => {
      const userDiv = document.createElement("div");
      userDiv.className = "user";
      userDiv.innerHTML = `
        <strong>${user.name}</strong><br/>
        Email: ${user.email}<br/>
        City: ${user.address.city}
      `;
      userList.appendChild(userDiv);
    });
  } catch (error) {
    userList.innerHTML = "<p>Error fetching users.</p>";
    console.error("Fetch error:", error);
  }
}
