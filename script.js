
const projects = [
    {
        title: "DevPortfolio",
        category: "web",
        description: "Mi portafolio personal desarrollado con HTML, CSS y JavaScript.",
        technologies: ["HTML", "CSS", "JavaScript"],
        url: ""
    },
    {
        title: "Sistema HelpDesk",
        category: "it",
        description: "Próximo proyecto: gestión de solicitudes de soporte técnico.",
        technologies: ["JavaScript", "CRUD"],
        url: ""
    },
    {
        title: "Cloud Monitoring",
        category: "cloud",
        description: "Proyecto futuro: monitoreo de servicios e infraestructura.",
        technologies: ["Python", "Linux", "Cloud"],
        url: ""
    }
];

const grid = document.getElementById("projectGrid");
const filterButtons = document.querySelectorAll("[data-filter]");

// Crear una tarjeta para cada proyecto
function renderProjects(category = "todos") {
    grid.replaceChildren();

    const filtered = projects.filter(project =>
        category === "todos" || project.category === category
    );

    filtered.forEach(project => {
        const card = document.createElement("article");
        card.className = "project-card";

        const title = document.createElement("h3");
        title.textContent = project.title;

        const description = document.createElement("p");
        description.textContent = project.description;

        const tech = document.createElement("p");
        tech.textContent = project.technologies.join(" · ");

        card.append(title, description, tech);

        if (project.url) {
            const link = document.createElement("a");
            link.href = project.url;
            link.textContent = "Ver proyecto →";
            link.target = "_blank";
            link.rel = "noopener noreferrer";
            card.appendChild(link);
        } else {
            const status = document.createElement("small");
            status.textContent = "Demostración próximamente";
            card.appendChild(status);
        }

        grid.appendChild(card);
    });
}

// Manejar los botones de filtro
filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        filterButtons.forEach(b => b.classList.remove("active"));
        button.classList.add("active");
        renderProjects(button.dataset.filter);
    });
});

document.getElementById("year").textContent =
    new Date().getFullYear();

renderProjects();
