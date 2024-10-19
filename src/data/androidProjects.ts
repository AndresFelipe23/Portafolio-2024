export interface AndroidProject {
    title: string;
    description: string;
    icon: string;
    screenshots: string[];
    features: string[];
    technologies: string[];
    playStoreUrl: string;
    githubUrl: string;
  }
  
  export const androidProjects: AndroidProject[] = [
    {
      title: "OnlineStore",
      description: "Aplicación desarrollada con el lenguaje Java, la cual consiste en una tienda online usando Firebase como almacenamiento de los productos.",
      icon: "/images/android/kotlin.svg",
      screenshots: [
        "/images/android/onlinestore-uno.png",
        "/images/android/onlinestore-dos.png",
        "/images/android/onlinestore-tres.png"
      ],
      features: [
        "Planes de entrenamiento personalizados",
        "Seguimiento de calorías y macronutrientes",
        "Integración con Google Fit",
        "Recordatorios y notificaciones"
      ],
      technologies: ["Kotlin", "Jetpack Compose", "Room Database", "Firebase"],
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.example.fittrackpro",
      githubUrl: "https://github.com/yourusername/fittrackpro"
    },
    {
      title: "EcoScan",
      description: "Una aplicación que ayuda a los usuarios a identificar productos sostenibles y calcular su huella de carbono.",
      icon: "/images/android/ecoscan-icon.png",
      screenshots: [
        "/images/android/ecoscan-1.jpg",
        "/images/android/ecoscan-2.jpg",
        "/images/android/ecoscan-3.jpg"
      ],
      features: [
        "Escáner de códigos de barras para productos",
        "Base de datos de productos sostenibles",
        "Calculadora de huella de carbono",
        "Consejos personalizados para un estilo de vida más ecológico"
      ],
      technologies: ["Java", "Android SDK", "ML Kit", "SQLite"],
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.example.ecoscan",
      githubUrl: "https://github.com/yourusername/ecoscan"
    },
  ];
  