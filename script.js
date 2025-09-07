// Drill simulation
function startDrill(type) {
    const status = document.getElementById("drill-status");
    if (!status) return;

    status.innerHTML = `<strong>${type}</strong> initiated... ⏳`;
    setTimeout(() => {
        status.innerHTML = `<strong>${type}</strong> completed successfully ✅`;
    }, 3000);
}

// Mock alerts
const alertsData = [
    { title: "Flood Warning - Coastal Region", desc: "Issued 2 hrs ago | Stay away from low-lying areas." },
    { title: "Heatwave Alert - Tamil Nadu", desc: "Issued 1 day ago | Stay hydrated and indoors." },
    { title: "Cyclone Alert - Andhra Coast", desc: "Issued 89 hrs ago | Follow evacuation routes." }
];

window.onload = () => {
    const container = document.getElementById("alerts-container");
    if (container) {
        alertsData.forEach(alert => {
            const card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `<h3>${alert.title}</h3><p>${alert.desc}</p>`;
            container.appendChild(card);
        });
    }
};
