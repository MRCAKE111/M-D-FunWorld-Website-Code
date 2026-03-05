{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 function copyIP() \{\
    navigator.clipboard.writeText("play.mdfunworld.com");\
    alert("IP Copied!");\
\}\
\
async function updatePlayerCount() \{\
    try \{\
        const response = await fetch('https://api.mcsrvstat.us/2/play.mdfunworld.com');\
        const data = await response.json();\
        document.getElementById('server-status').innerHTML = data.online ? \
            "Status: <span style='color:green'>Online</span> (" + data.players.online + ")" : \
            "Status: <span style='color:red'>Offline</span>";\
    \} catch (e) \{ document.getElementById('server-status').innerText = "Status: Error"; \}\
\}\
\
function toggleRules() \{\
    const m = document.getElementById("rulesModal");\
    m.style.display = (m.style.display === "block") ? "none" : "block";\
\}\
\
window.onload = updatePlayerCount;}