{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 function copyIP() \{\
    const ip = document.getElementById("ip-text").innerText;\
    navigator.clipboard.writeText(ip).then(() => \{\
        const badge = document.querySelector(".copy-badge");\
        badge.innerText = "IP Copied!";\
        badge.style.color = "#00ff00";\
        \
        setTimeout(() => \{\
            badge.innerText = "Click to Copy";\
            badge.style.color = "#ffcc00";\
        \}, 2000);\
    \});\
\}// Function to Copy IP\
function copyIP() \{\
    const ip = "play.mdfunworld.com"; // Replace with your actual IP\
    navigator.clipboard.writeText(ip).then(() => \{\
        const badge = document.querySelector(".copy-badge");\
        badge.innerText = "IP Copied!";\
        badge.style.color = "#00ff00";\
        setTimeout(() => \{\
            badge.innerText = "Click to Copy";\
            badge.style.color = "#ffcc00";\
        \}, 2000);\
    \});\
\}\
\
// Function to Fetch Server Status\
async function updatePlayerCount() \{\
    const serverIP = "play.mdfunworld.com"; // Replace with your IP or 'mc.hypixel.net' to test\
    const countElement = document.getElementById("player-count");\
    const statusElement = document.querySelector(".status");\
\
    try \{\
        const response = await fetch(`https://api.mcsrvstat.us/2/$\{serverIP\}`);\
        const data = await response.json();\
\
        if (data.online) \{\
            countElement.innerText = data.players.online;\
            statusElement.style.color = "#00ff00"; // Green for online\
        \} else \{\
            countElement.innerText = "0";\
            statusElement.innerHTML = "Server is <span style='color: #ff4444;'>Offline</span>";\
        \}\
    \} catch (error) \{\
        console.error("Error fetching server status:", error);\
        countElement.innerText = "?";\
    \}\
\}\
\
// Run the update when the page loads\
window.onload = updatePlayerCount;\
function toggleRules() \{\
    const modal = document.getElementById("rulesModal");\
    if (modal.style.display === "block") \{\
        modal.style.display = "none";\
    \} else \{\
        modal.style.display = "block";\
    \}\
\}\
\
// Close modal if user clicks outside of the box\
window.onclick = function(event) \{\
    const modal = document.getElementById("rulesModal");\
    if (event.target == modal) \{\
        modal.style.display = "none";\
    \}\
\} function openLightbox(src) \{\
    const lightbox = document.getElementById('lightbox');\
    const lightboxImg = document.getElementById('lightbox-img');\
    \
    lightboxImg.src = src;\
    lightbox.style.display = 'flex';\
\}}