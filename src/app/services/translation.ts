import { Injectable } from '@angular/core';

export type Language = 'es' | 'de' | 'en';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLang: Language = 'es';

  private translations: Record<string, Record<Language, string>> = {

    'hero.download': { es: 'Descargar CV', de: 'Lebenslauf herunterladen', en: 'Download CV' },
'contact.download': { es: 'Descargar mi CV', de: 'Meinen Lebenslauf herunterladen', en: 'Download my CV' },
    // Navbar
    'nav.home': { es: 'Home', de: 'Home', en: 'Home' },
    'nav.about': { es: 'Sobre mí', de: 'Über mich', en: 'About' },
    'nav.skills': { es: 'Skills', de: 'Skills', en: 'Skills' },
    'nav.projects': { es: 'Proyectos', de: 'Projekte', en: 'Projects' },
    'nav.experience': { es: 'Experiencia', de: 'Erfahrung', en: 'Experience' },
    'nav.contact': { es: 'Contacto', de: 'Kontakt', en: 'Contact' },

    // Hero
    'hero.greeting': { es: '// Hola, soy', de: '// Hallo, ich bin', en: '// Hi, I\'m' },
    'hero.description': {
      es: 'Colombiano en Hamburg. Construyo cosas para la web con código limpio y diseño con personalidad.',
      de: 'Kolumbianer in Hamburg. Ich baue Dinge fürs Web mit sauberem Code und Design mit Persönlichkeit.',
      en: 'Colombian in Hamburg. I build things for the web with clean code and design with personality.'
    },
    'hero.projects': { es: 'Ver Proyectos', de: 'Projekte ansehen', en: 'View Projects' },
    'hero.contact': { es: 'Contacto', de: 'Kontakt', en: 'Contact' },

    // About
    'about.title': { es: 'Sobre mí', de: 'Über mich', en: 'About me' },
    'about.p1': {
      es: 'Soy Camilo — desarrollador colombiano viviendo en Hamburg, Alemania. Me formé como <span class="highlight">Fachinformatiker für Anwendungsentwicklung</span>, donde trabajé con frontend, backend, bases de datos y buenas prácticas de desarrollo.',
      de: 'Ich bin Camilo — kolumbianischer Entwickler in Hamburg, Deutschland. Ich habe eine Ausbildung als <span class="highlight">Fachinformatiker für Anwendungsentwicklung</span> abgeschlossen, mit Schwerpunkt auf Frontend, Backend, Datenbanken und modernen Entwicklungspraktiken.',
      en: 'I\'m Camilo — a Colombian developer living in Hamburg, Germany. I trained as a <span class="highlight">Fachinformatiker für Anwendungsentwicklung</span>, working with frontend, backend, databases and modern development practices.'
    },
    'about.p2': {
      es: 'He construido mi carrera empezando de cero en países diferentes. Esa resiliencia es lo que traigo a cada línea de código: adaptabilidad, ganas de aprender y la mentalidad de resolver problemas reales.',
      de: 'Ich habe meine Karriere in verschiedenen Ländern von Grund auf aufgebaut. Diese Resilienz bringe ich in jede Zeile Code ein: Anpassungsfähigkeit, Lernbereitschaft und die Mentalität, echte Probleme zu lösen.',
      en: 'I\'ve built my career starting from scratch in different countries. That resilience is what I bring to every line of code: adaptability, eagerness to learn, and a mindset for solving real problems.'
    },
    'about.p3': {
      es: 'Cuando no estoy programando, estoy en el gym, en la bici, experimentando en la cocina o leveling up mi alemán e inglés.',
      de: 'Wenn ich nicht programmiere, bin ich im Gym, auf dem Fahrrad, experimentiere in der Küche oder verbessere mein Deutsch und Englisch.',
      en: 'When I\'m not coding, I\'m at the gym, cycling, experimenting in the kitchen or leveling up my German and English.'
    },
    'about.stat1.value': { es: '3+', de: '3+', en: '3+' },
    'about.stat1.label': { es: 'Años en desarrollo', de: 'Jahre in der Entwicklung', en: 'Years in development' },
    'about.stat2.value': { es: '3', de: '3', en: '3' },
    'about.stat2.label': { es: 'Idiomas fluidos', de: 'Fließende Sprachen', en: 'Fluent languages' },
    'about.stat3.value': { es: '2', de: '2', en: '2' },
    'about.stat3.label': { es: 'Países, 3 culturas', de: 'Länder, 3 Kulturen', en: 'Countries, 3 cultures' },

    // Skills
    'skills.title': { es: 'Tech Stack', de: 'Tech Stack', en: 'Tech Stack' },

    // Projects
    'projects.title': { es: 'Proyectos', de: 'Projekte', en: 'Projects' },
    'projects.azubi.name': { es: 'AzubiPortal', de: 'AzubiPortal', en: 'AzubiPortal' },
    'projects.azubi.description': {
      es: 'Plataforma full-stack para gestión y seguimiento de aprendices. Los formadores crean proyectos y tareas, los Azubis gestionan su progreso. Autenticación JWT con control de acceso por roles.',
      de: 'Full-Stack-Plattform zur Verwaltung und Nachverfolgung von Auszubildenden. Ausbilder erstellen Projekte und Aufgaben, Azubis verwalten ihren Fortschritt. JWT-Authentifizierung mit rollenbasierter Zugriffskontrolle.',
      en: 'Full-stack platform for managing and tracking apprentices. Trainers create projects and tasks, apprentices manage their progress. JWT authentication with role-based access control.'
    },
    'projects.azubi.note': {
      es: 'Abschlussprojekt – Crealogix (privado)',
      de: 'Abschlussprojekt – Crealogix (privat)',
      en: 'Final project – Crealogix (private)'
    },
    'projects.portfolio.name': { es: 'Portfolio Website', de: 'Portfolio Website', en: 'Portfolio Website' },
    'projects.portfolio.description': {
      es: 'Mi portafolio personal con diseño Glitch Noir Terminal. Scroll animations, typewriter effect, diseño responsive y deploy automatizado en GitHub Pages.',
      de: 'Mein persönliches Portfolio mit Glitch Noir Terminal Design. Scroll-Animationen, Typewriter-Effekt, responsives Design und automatisiertes Deployment auf GitHub Pages.',
      en: 'My personal portfolio with Glitch Noir Terminal design. Scroll animations, typewriter effect, responsive design and automated deployment on GitHub Pages.'
    },

    // Experience
    'experience.title': { es: 'Experiencia', de: 'Erfahrung', en: 'Experience' },
    'exp.netto2.role': { es: 'Verkäufer (Teilzeit)', de: 'Verkäufer (Teilzeit)', en: 'Sales Associate (Part-time)' },
    'exp.netto2.desc': {
      es: 'Atención al cliente, gestión de caja, reposición de mercancía y control de fechas de caducidad. Trabajo flexible en turnos con alto volumen de clientes.',
      de: 'Kundenbetreuung, Kassenführung, Warenverräumung und Kontrolle von Mindesthaltbarkeitsdaten. Flexibler Einsatz im Schichtdienst.',
      en: 'Customer service, cash register management, shelf stocking and expiration date control. Flexible shift work with high customer volume.'
    },
    'exp.netto1.role': { es: 'Aushilfe im Einzelhandel', de: 'Aushilfe im Einzelhandel', en: 'Retail Assistant' },
    'exp.netto1.desc': {
      es: 'Apoyo operativo en tienda. Reposición de mercancía, almacén y atención al público.',
      de: 'Operative Unterstützung im Markt. Warenverräumung, Lagerarbeiten und Kundenbetreuung.',
      en: 'Operational support in store. Shelf stocking, warehouse tasks and customer service.'
    },
    'exp.crealogix.role': { es: 'Fachinformatiker für Anwendungsentwicklung', de: 'Fachinformatiker für Anwendungsentwicklung', en: 'Application Developer (Apprenticeship)' },
    'exp.crealogix.desc': {
      es: 'Desarrollo de software con Java. Frontend con Angular y JavaScript para interfaces responsivas. Code Reviews, trabajo en equipos ágiles con Scrum.',
      de: 'Softwareentwicklung mit Java. Frontend mit Angular und JavaScript für responsive Benutzeroberflächen. Code Reviews, agile Teamarbeit mit Scrum.',
      en: 'Software development with Java. Frontend with Angular and JavaScript for responsive interfaces. Code reviews, agile teamwork with Scrum.'
    },
'exp.aupair1.role': { es: 'Au-Pair', de: 'Au-Pair / Kinderbetreuer', en: 'Au-Pair / Childcare' },
'exp.aupair1.desc': {
  es: 'Cuidado de niños en entorno intercultural. Adquirí mis primeras bases de alemán a través de la práctica diaria.',
  de: 'Kinderbetreuung in interkulturellem Umfeld. Erwerb erster Deutschkenntnisse durch tägliche Praxis.',
  en: 'Childcare in an intercultural environment. Acquired my first German language skills through daily practice.'
},
'exp.aupair2.role': { es: 'Au-Pair', de: 'Au-Pair / Kinderbetreuer', en: 'Au-Pair / Childcare' },
'exp.aupair2.desc': {
  es: 'Continuación como Au-Pair con una segunda familia. Consolidé mi fluidez en alemán y gané mayor independencia.',
  de: 'Fortsetzung als Au-Pair bei einer zweiten Gastfamilie. Festigung meiner Deutschkenntnisse und mehr Selbstständigkeit.',
  en: 'Continued as Au-Pair with a second family. Consolidated my German fluency and gained greater independence.'
},

    // Contact
    'contact.title': { es: 'Contacto', de: 'Kontakt', en: 'Contact' },
    'contact.subtitle': {
      es: '¿Tienes un proyecto en mente o buscas un developer? Escríbeme.',
      de: 'Hast du ein Projekt im Kopf oder suchst einen Entwickler? Schreib mir.',
      en: 'Have a project in mind or looking for a developer? Get in touch.'
    },
    'contact.footer': { es: '</> con ☕ desde Hamburg', de: '</> mit ☕ aus Hamburg', en: '</> with ☕ from Hamburg' }
  };

  get lang(): Language {
    return this.currentLang;
  }

  setLang(lang: Language) {
    this.currentLang = lang;
  }

  t(key: string): string {
    return this.translations[key]?.[this.currentLang] || key;
  }
}
