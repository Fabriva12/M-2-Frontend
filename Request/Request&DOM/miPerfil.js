const profileContainer = document.getElementById("profileContainer");
const logoutBtn = document.getElementById("logoutBtn");


const userSession = JSON.parse(localStorage.getItem("loggedUser"));

if (!userSession) {
    window.location.href = "login.html";
}

profileContainer.innerHTML = `
    <div class="card">
        <h2>Usuario ID: ${userSession.id}</h2>
        <p><strong>Nombre:</strong> ${userSession.name}</p>
        <p><strong>Email:</strong> ${userSession.email}</p>
    </div>
`;

logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("loggedUser");
    window.location.href = "login.html";
});