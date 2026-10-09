
/* =====================================
   DEVPORTFOLIO - SISTEMA BILINGÜE
   ===================================== */

// Idioma guardado o español por defecto
let currentLanguage =
    localStorage.getItem("portfolioLanguage") || "es";

if (!["es", "en"].includes(currentLanguage)) {
    currentLanguage = "es";
}

/* =====================================
   TRADUCCIONES
   ===================================== */

const translations = {
    es: {
        navHome: "Inicio",
        navSkills: "Habilidades",
        navProjects: "Proyectos",
        navContact: "Contacto",

        navExperience: "Experiencia",
        experienceTitle: "Experiencia profesional",
        experienceIntro:
            "Experiencia práctica en desarrollo de software " +
            "y soluciones para tecnologías de información.",


        heroRole: "ESTUDIANTE DE INGENIERÍA INFORMÁTICA",
        heroTitle: "Hola, soy",
        heroDescription:
            "Estudiante de Ingeniería Informática con experiencia " +
            "en desarrollo frontend, diseño de aplicaciones y " +
            "gestión de sistemas de información. Actualmente " +
            "amplío mis conocimientos en desarrollo de software, " +
            "infraestructura tecnológica y computación en la nube.",
        heroProjects: "Explorar proyectos",

        skillsTitle: "Mis habilidades",
        skillsNetworks: "Redes",
        skillsDatabases: "Bases de datos",

        projectsTitle: "Mis proyectos",
        projectsDescription:
            "Soluciones tecnológicas que desarrollo " +
            "y documento durante mi aprendizaje.",
        filterAll: "Todos",

        contactTitle: "Trabajemos juntos",
        contactDescription:
            "¿Te interesa conocer mis proyectos " +
            "o establecer contacto profesional?",
        contactButton: "Enviar correo",

        viewProject: "Ver proyecto →",
        comingSoon: "Demostración próximamente"
    },

    en: {
        navHome: "Home",
        navSkills: "Skills",
        navProjects: "Projects",
        navContact: "Contact",
        navExperience: "Experience",
        experienceTitle: "Professional Experience",
        experienceIntro:
            "Hands-on experience in software development " +
            "and information technology solutions.",


        heroRole: "COMPUTER ENGINEERING STUDENT",
        heroTitle: "Hi, I'm",
        heroDescription:
            "Computer Engineering student with experience " +
            "in frontend development, application design, and " +
            "information systems management. Currently expanding " +
            "my skills in software development, IT infrastructure, " +
            "and cloud computing.",
        heroProjects: "Explore projects",

        skillsTitle: "My Skills",
        skillsNetworks: "Networking",
        skillsDatabases: "Databases",

        projectsTitle: "My Projects",
        projectsDescription:
            "Technology solutions I develop and document " +
            "as part of my learning journey.",
        filterAll: "All",

        contactTitle: "Let's Work Together",
        contactDescription:
            "Interested in learning about my projects " +
            "or getting in touch professionally?",
        contactButton: "Send Email",

        viewProject: "View Project →",
        comingSoon: "Demo coming soon"
    }
};

/* =====================================
   PROYECTOS
   ===================================== */

const projects = [
    {
        title: "DevPortfolio",
        category: "web",
        description: {
            es: "Mi portafolio personal desarrollado con HTML, CSS y JavaScript.",
            en: "My personal portfolio developed with HTML, CSS and JavaScript."
        },
        technologies: ["HTML", "CSS", "JavaScript"],
        url: "https://github.com/Jota20-10/devportfolio"
    },
    {
        title: "Sistema HelpDesk",
        category: "it",
        description: {
            es: "Próximo proyecto: gestión de solicitudes de soporte técnico.",
            en: "Upcoming project: IT support ticket management system."
        },
        technologies: ["JavaScript", "CRUD"],
        url: ""
    },
    {
        title: "Cloud Monitoring",
        category: "cloud",
        description: {
            es: "Proyecto futuro: monitoreo de servicios e infraestructura.",
            en: "Future project: service and infrastructure monitoring."
        },
        technologies: ["Python", "Linux", "Cloud"],
        url: ""
    }
];


/* =====================================
   EXPERIENCIA PROFESIONAL
   ===================================== */

const experiences = [
    {
        company: {
            es: "Práctica profesional - Departamento de TI",
            en: "IT Department Internship"
        },

        role: {
            es: "Practicante de Tecnologías de Información",
            en: "IT Department Intern"
        },

        period: {
            es: "Mayo 2026 - Agosto 2026",
            en: "May 2026 - August 2026"
        },

        description: {
            es: "Desarrollé un sistema de gestión de activos " +
                "tecnológicos para centralizar información de " +
                "equipos y empleados. Diseñé su base de datos, " +
                "implementé el seguimiento de asignaciones y " +
                "generé reportes de inventario automatizados.",

            en: "Developed an IT asset management system " +
                "to centralize equipment and employee records. " +
                "Designed its database, implemented asset " +
                "assignment tracking, and generated automated " +
                "inventory reports."
        },

        technologies: [
            "Visual Studio",
            "Databases",
            "Crystal Reports"
        ]
    },

    {
        company: {
            es: "MAPCHINE",
            en: "MAPCHINE"
        },

        role: {
            es: "Desarrollador Frontend Freelance",
            en: "Freelance Frontend Developer"
        },

        period: {
            es: "Enero 2025 - Mayo 2025",
            en: "January 2025 - May 2025"
        },

        description: {
            es: "Participé en la corrección de errores frontend, " +
                "mejoras de diseño responsivo y optimización " +
                "de interfaces web. Trabajé con HTML, CSS y " +
                "JavaScript para mejorar la navegación " +
                "y experiencia de usuario.",

            en: "Worked on frontend bug fixes, responsive " +
                "design improvements, and web interface " +
                "optimization. Used HTML, CSS, and JavaScript " +
                "to improve navigation and user experience."
        },

        technologies: [
            "HTML",
            "CSS",
            "JavaScript"
        ]
    }
];


/* =====================================
   MOSTRAR EXPERIENCIA PROFESIONAL
   ===================================== */

function renderExperience() {

    const timeline =
        document.getElementById("experienceTimeline");

    if (!timeline) return;

    timeline.replaceChildren();

    experiences.forEach(experience => {

        const item = document.createElement("article");
        item.className = "timeline-item";

        const period = document.createElement("p");
        period.className = "timeline-period";
        period.textContent =
            experience.period[currentLanguage];

        const role = document.createElement("h3");
        role.textContent =
            experience.role[currentLanguage];

        const company = document.createElement("h4");
        company.textContent =
            experience.company[currentLanguage];

        const description = document.createElement("p");
        description.className = "timeline-description";
        description.textContent =
            experience.description[currentLanguage];

        const technologies = document.createElement("div");
        technologies.className = "timeline-technologies";

        experience.technologies.forEach(technology => {

            const tag = document.createElement("span");
            tag.textContent = technology;

            technologies.appendChild(tag);
        });

        item.append(
            period,
            role,
            company,
            description,
            technologies
        );

        timeline.appendChild(item);
    });
}



/* =====================================
   RENDERIZAR PROYECTOS
   ===================================== */

const grid = document.getElementById("projectGrid");
const filterButtons = document.querySelectorAll("[data-filter]");

let currentFilter = "todos";

function renderProjects() {

    grid.replaceChildren();

    const filtered = projects.filter(project =>
        currentFilter === "todos" ||
        project.category === currentFilter
    );

    filtered.forEach(project => {

        const card = document.createElement("article");
        card.className = "project-card";

        const title = document.createElement("h3");
        title.textContent = project.title;

        const description = document.createElement("p");
        description.textContent =
            project.description[currentLanguage];

        const technologies = document.createElement("p");
        technologies.textContent =
            project.technologies.join(" · ");

        card.append(title, description, technologies);

        if (project.url) {
            const link = document.createElement("a");
            link.href = project.url;
            link.textContent =
                translations[currentLanguage].viewProject;
            link.target = "_blank";
            link.rel = "noopener noreferrer";
            card.appendChild(link);
        } else {
            const status = document.createElement("small");
            status.textContent =
                translations[currentLanguage].comingSoon;
            card.appendChild(status);
        }

        grid.appendChild(card);
    });
}

/* =====================================
   FILTROS
   ===================================== */

filterButtons.forEach(button => {
    button.addEventListener("click", () => {

        currentFilter = button.dataset.filter;

        filterButtons.forEach(b =>
            b.classList.remove("active")
        );

        button.classList.add("active");

        renderProjects();
    });
});

/* =====================================
   CAMBIO DE IDIOMA
   ===================================== */

function changeLanguage(lang) {

    if (!translations[lang]) return;

    currentLanguage = lang;

    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(element => {

        const key = element.dataset.i18n;
        const translation = translations[lang][key];

        if (translation === undefined) return;

        if (key === "heroTitle") {
            const name = element.querySelector("span");

            element.replaceChildren(
                document.createTextNode(translation + " ")
            );

            if (name) element.appendChild(name);

        } else {
            element.textContent = translation;
        }
    });

    document.querySelectorAll(".lang-btn").forEach(button => {

        const active = button.id === `btn-${lang}`;

        button.classList.toggle("active", active);
        button.setAttribute("aria-pressed", String(active));
    });

    localStorage.setItem("portfolioLanguage", lang);

    // Actualizar proyectos en el nuevo idioma
    renderProjects();
    renderExperience();

}

/* =====================================
   EVENTOS DE IDIOMA
   ===================================== */

document.getElementById("btn-es").addEventListener("click", () => {
    changeLanguage("es");
});

document.getElementById("btn-en").addEventListener("click", () => {
    changeLanguage("en");
});

/* =====================================
   INICIALIZACIÓN
   ===================================== */

document.getElementById("year").textContent =
    new Date().getFullYear();

changeLanguage(currentLanguage);
