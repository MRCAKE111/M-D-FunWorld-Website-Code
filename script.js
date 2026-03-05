function copyIP() {
    navigator.clipboard.writeText("play.mdfunworld.com");
    alert("IP Copied!");
}

async function updatePlayerCount() {
    try {
        const response = await fetch('https://api.mcsrvstat.us/2/play.mdfunworld.com');
        const data = await response.json();
        document.getElementById('server-status').innerHTML = data.online ? 
            "Status: <span style='color:green'>Online</span> (" + data.players.online + ")" : 
            "Status: <span style='color:red'>Offline</span>";
    } catch (e) { document.getElementById('server-status').innerText = "Status: Error"; }
}

function toggleRules() {
    const m = document.getElementById("rulesModal");
    m.style.display = (m.style.display === "block") ? "none" : "block";
}

window.onload = updatePlayerCount;
