
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


        skillsTitle: "Habilidades técnicas",
        skillsIntro:
            "Tecnologías y herramientas aplicadas en " +
            "proyectos académicos y experiencias prácticas.",
        learningTitle: "Tecnologías que estoy reforzando",
        learningDescription:
            "Herramientas que he utilizado anteriormente " +
            "y que estoy retomando mediante proyectos.",




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
        comingSoon: "Demostración próximamente",
        viewDemo: "Ver demo",
        viewCode: "Código fuente",
        statusDevelopment: "En desarrollo",
        statusPlanned: "Planificado",
        statusCompleted: "Completado",



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


        skillsTitle: "Technical Skills",
        skillsIntro:
            "Technologies and tools applied in academic " +
            "projects and hands-on experience.",
        learningTitle: "Technologies I'm Revisiting",
        learningDescription:
            "Tools I have previously used and am currently " +
            "refreshing through practical projects.",


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
        comingSoon: "Demo coming soon",
        viewDemo: "Live demo",
        viewCode: "Source code",
        statusDevelopment: "In development",
        statusPlanned: "Planned",
        statusCompleted: "Completed",

    }
};


/* =====================================
   HABILIDADES TÉCNICAS
   ===================================== */

const skillCategories = [
    {
        title: {
            es: "Desarrollo frontend",
            en: "Frontend Development"
        },
        icon: "💻",
        skills: [
            "HTML",
            "CSS",
            "JavaScript"
        ]
    },
    {
        title: {
            es: "Software y datos",
            en: "Software & Data"
        },
        icon: "🗄️",
        skills: [
            {
                es: "Diseño de bases de datos",
                en: "Database Design"
            },
            {
                es: "Aplicaciones de gestión",
                en: "Management Applications"
            }
        ]
    },
    {
        title: {
            es: "Tecnologías de información",
            en: "Information Technology"
        },
        icon: "🌐",
        skills: [
            {
                es: "Gestión de activos TI",
                en: "IT Asset Management"
            },
            {
                es: "Fundamentos de redes",
                en: "Networking Fundamentals"
            }
        ]
    },
    {
        title: {
            es: "Herramientas",
            en: "Tools"
        },
        icon: "🛠️",
        skills: [
            "Git",
            "GitHub",
            "Visual Studio",
            "Crystal Reports"
        ]
    }
];

const learningTechnologies = [
    "React",
    "Node.js",
    "Python",
    "Linux",
    "Cloud Computing"
];


/* =====================================
   PROYECTOS DEL PORTAFOLIO
   ===================================== */

const projects = [
    {
        title: "DevPortfolio",
        category: "web",
        icon: "💻",
        status: "development",

        description: {
            es: "Portafolio profesional bilingüe con " +
                "secciones dinámicas, filtros interactivos " +
                "y despliegue automatizado mediante GitHub y Netlify.",

            en: "Bilingual professional portfolio with " +
                "dynamic sections, interactive filters " +
                "and automated deployment using GitHub and Netlify."
        },

        technologies: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "Git",
            "Netlify"
        ],

        github: "https://github.com/Jota20-10/devportfolio",
        demo: "https://portfoliojeybinglm.netlify.app"
    },

    {

        title: "Sistema HelpDesk",
        category: "it",
        icon: "🛠️",
        image: "images/helpdesk-dashboard.png",
        status: "development",



        description: {
            es: "Aplicación web de gestión de tickets de soporte técnico " +
                "desarrollada con React y Vite. Permite crear, consultar, " +
                "editar y eliminar tickets, gestionar estados y prioridades, " +
                "realizar búsquedas y aplicar filtros. Los datos se conservan " +
                "localmente mediante localStorage.",

            en: "IT support ticket management application built " +
                "with React and Vite. Supports creating, viewing, " +
                "editing, and deleting tickets, managing statuses " +
                "and priorities, searching, and filtering. " +
                "Data is stored locally using localStorage."
        },

        technologies: [
            "React",
            "JavaScript",
            "Vite",
            "CSS3",
            "localStorage"
        ],

        github: "https://github.com/Jota20-10/helpdesk",
        demo: "https://helpdesk-jeybing.netlify.app"
    },




    {
        title: "Cloud Monitoring",
        category: "cloud",
        icon: "☁️",
        status: "planned",

        description: {
            es: "Panel de monitoreo de servicios e infraestructura " +
                "para visualizar disponibilidad, respuestas " +
                "y estado de sistemas.",

            en: "Service and infrastructure monitoring " +
                "dashboard for visualizing availability, " +
                "response times and system status."
        },

        technologies: [
            "Python",
            "APIs",
            "Linux"
        ],

        github: "",
        demo: ""
    },

    {
        title: "Cloud Deployment",
        category: "cloud",
        icon: "🚀",
        status: "planned",

        description: {
            es: "Despliegue de una aplicación en la nube " +
                "con contenedores, automatización y " +
                "prácticas de integración continua.",

            en: "Cloud application deployment using " +
                "containers, automation and continuous " +
                "integration practices."
        },

        technologies: [
            "Docker",
            "Linux",
            "CI/CD"
        ],

        github: "",
        demo: ""
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
   MOSTRAR HABILIDADES TÉCNICAS
   ===================================== */

function renderSkills() {

    const skillsGrid =
        document.getElementById("skillsGrid");

    const learningGrid =
        document.getElementById("learningGrid");

    if (!skillsGrid || !learningGrid) return;

    skillsGrid.replaceChildren();
    learningGrid.replaceChildren();

    // Crear tarjetas por categoría
    skillCategories.forEach(category => {

        const card = document.createElement("article");
        card.className = "skill-card";

        const icon = document.createElement("div");
        icon.className = "skill-icon";
        icon.textContent = category.icon;
        icon.setAttribute("aria-hidden", "true");

        const title = document.createElement("h3");
        title.textContent = category.title[currentLanguage];

        const tags = document.createElement("div");
        tags.className = "skill-tags";

        category.skills.forEach(skill => {

            const tag = document.createElement("span");

            tag.textContent =
                typeof skill === "string"
                    ? skill
                    : skill[currentLanguage];

            tags.appendChild(tag);
        });

        card.append(icon, title, tags);
        skillsGrid.appendChild(card);
    });

    // Tecnologías en proceso de actualización
    learningTechnologies.forEach(technology => {

        const tag = document.createElement("span");
        tag.className = "learning-tag";
        tag.textContent = technology;

        learningGrid.appendChild(tag);
    });
}

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
   CONFIGURACIÓN DE PROYECTOS Y FILTROS
   ===================================== */

const grid = document.getElementById("projectGrid");

const filterButtons = document.querySelectorAll("[data-filter]");

let currentFilter = "todos";



/* =====================================
   RENDERIZAR TARJETAS DE PROYECTOS
   ===================================== */

function renderProjects() {

    grid.replaceChildren();

    const filtered = projects.filter(project =>
        currentFilter === "todos" ||
        project.category === currentFilter
    );

    filtered.forEach(project => {

        // Tarjeta principal
        const card = document.createElement("article");
        card.className = "project-card";

        // Encabezado visual
        const cover = document.createElement("div");
        cover.className = "project-cover";

        const icon = document.createElement("span");
        icon.className = "project-icon";
        icon.textContent = project.icon;
        icon.setAttribute("aria-hidden", "true");


        if (project.image) {
            const image = document.createElement("img");

            image.src = project.image;
            image.alt = `Vista previa de ${project.title}`;
            image.className = "project-image";
            image.loading = "lazy";

            // Si la imagen no carga, mostrar el emoji
            image.onerror = () => {
                image.remove();
                cover.appendChild(icon);
            };

            cover.appendChild(image);
        } else {
            cover.appendChild(icon);
        }


        // Contenido
        const content = document.createElement("div");
        content.className = "project-content";

        // Nombre y estado
        const header = document.createElement("div");
        header.className = "project-header";

        const title = document.createElement("h3");
        title.textContent = project.title;

        const status = document.createElement("span");
        status.className =
            `project-status status-${project.status}`;

        const statusKeys = {
            development: "statusDevelopment",
            planned: "statusPlanned",
            completed: "statusCompleted"
        };

        status.textContent =
            translations[currentLanguage][
            statusKeys[project.status]
            ];

        header.append(title, status);

        // Descripción
        const description = document.createElement("p");
        description.className = "project-description";
        description.textContent =
            project.description[currentLanguage];

        // Tecnologías
        const technologies = document.createElement("div");
        technologies.className = "project-technologies";

        project.technologies.forEach(technology => {
            const tag = document.createElement("span");
            tag.textContent = technology;
            technologies.appendChild(tag);
        });

        // Enlaces
        const actions = document.createElement("div");
        actions.className = "project-actions";

        if (project.demo) {
            const demo = document.createElement("a");
            demo.href = project.demo;
            demo.className = "project-link demo-link";
            demo.target = "_blank";
            demo.rel = "noopener noreferrer";
            demo.textContent =
                translations[currentLanguage].viewDemo;

            actions.appendChild(demo);
        }

        if (project.github) {
            const github = document.createElement("a");
            github.href = project.github;
            github.className = "project-link github-link";
            github.target = "_blank";
            github.rel = "noopener noreferrer";
            github.textContent =
                translations[currentLanguage].viewCode;

            actions.appendChild(github);
        }

        // Unir elementos
        content.append(
            header,
            description,
            technologies,
            actions
        );

        card.append(cover, content);
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
    renderSkills();

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
