export interface TranslationSchema {
  nav: {
    home: string;
    about: string;
    products: string;
    contact: string;
    getQuote: string;
  };
  home: {
    heroBadge: string;
    heroTitleText1: string;
    heroTitleHighlight: string;
    heroTitleText2: string;
    heroSubtitle: string;
    exploreBtn: string;
    legacyBtn: string;
    precisionTitle: string;
    precisionDesc: string;
    missionLink: string;
    commitmentTitle1: string;
    commitmentHighlight: string;
    commitmentTitle2: string;
  };
  about: {
    isoBadge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    missionTitle: string;
    missionDesc: string;
    visionTitle: string;
    visionDesc: string;
    sitesTitle: string;
    sitesSubtitle: string;
    sfaxBadge: string;
    sfaxTitle: string;
    sfaxDesc: string;
    sfaxPoudriereBadge: string;
    sfaxPoudriereTitle: string;
    sfaxPoudriereDesc: string;
    tunisBadge: string;
    tunisTitle: string;
    tunisDesc: string;
    msakenBadge: string;
    msakenTitle: string;
    msakenDesc: string;
    viewMap: string;
    viewPhoto: string;
  };
  products: {
    badge: string;
    title: string;
    subtitle: string;
    statBrands: string;
    statCategories: string;
    statFood: string;
    statPrinting: string;
    all: string;
    tapes: string;
    packaging: string;
    kitchen: string;
    specifications: string;
    features: string;
    requestQuote: string;
    viewDetails: string;
    backToAll: string;
    adproDesc: string;
    foodServiceDesc: string;
    specName: string;
    specValue: string;
  };
  contact: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    formHeading: string;
    fullName: string;
    fullNamePlaceholder: string;
    emailAddress: string;
    emailPlaceholder: string;
    subject: string;
    subjectPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    sendBtn: string;
    successHeading: string;
    successDesc: string;
    directContact: string;
    phone: string;
    commercial: string;
    sfaxHeadquarters: string;
    sfaxAddress: string;
    sfaxPoudriere: string;
    sfaxPoudriereAddress: string;
    tunisBranch: string;
    tunisAddress: string;
    msakenFacility: string;
    msakenAddress: string;
  };
  footer: {
    legal: string;
    privacy: string;
    terms: string;
    solutions: string;
    indSol: string;
    foodPack: string;
    quickContact: string;
    emailPlaceholder: string;
    helpPlaceholder: string;
    sendBtn: string;
    successState: string;
    allRights: string;
  };
}

export const translations: Record<'fr' | 'en', TranslationSchema> = {
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À Propos',
      products: 'Produits',
      contact: 'Contact',
      getQuote: 'Obtenir un Devis'
    },
    home: {
      heroBadge: "Excellence de l'Emballage Industriel et Alimentaire",
      heroTitleText1: 'Une Performance sur laquelle vous pouvez ',
      heroTitleHighlight: 'Compter',
      heroTitleText2: ', Partout.',
      heroSubtitle: 'Conception de technologies adhésives supérieures et d\'emballages alimentaires de premier choix depuis plus de 35 ans. Une double expertise pour servir chaque besoin industriel.',
      exploreBtn: 'Explorer nos catégories',
      legacyBtn: 'Notre Histoire',
      precisionTitle: 'Conçu avec Précision, Qualité Éprouvée.',
      precisionDesc: 'Avec plus de trois décennies d\'expérience dans l\'industrie, Tunisie Tape est un pilier de fiabilité. Notre engagement envers l\'innovation continue garantit que chaque rouleau répond aux normes internationales.',
      missionLink: 'En savoir plus sur notre mission',
      commitmentTitle1: 'Deux gammes de produits. ',
      commitmentHighlight: 'Un seul engagement',
      commitmentTitle2: ' envers l\'excellence.'
    },
    about: {
      isoBadge: 'Certifié ISO 9001 - Excellence Garantie',
      title: 'Notre Histoire & ',
      titleHighlight: 'Mission',
      subtitle: 'Depuis plus de 35 ans, Tunisie Tape conçoit des technologies adhésives industrielles de premier choix, établissant une relation de confiance et d\'innovation à travers les marchés mondiaux.',
      missionTitle: 'Notre Mission',
      missionDesc: 'Fournir des technologies adhésives et d\'emballage de haute qualité, répondant aux exigences rigoureuses de l\'industrie grâce à l\'innovation, l\'expertise et un engagement inébranlable envers la satisfaction client.',
      visionTitle: 'Notre Vision',
      visionDesc: 'Devenir le leader incontesté et la référence mondiale en matière de technologies d\'emballage industriel et alimentaire, en repoussant constamment les limites de la performance et de la durabilité.',
      sitesTitle: 'Nos Sites',
      sitesSubtitle: 'Une présence stratégique pour répondre efficacement à vos besoins à travers tout le territoire et à l\'international.',
      sfaxBadge: 'Siège & Production',
      sfaxTitle: 'Sfax (Siège)',
      sfaxDesc: 'Notre siège social et centre de production principal abritant la fabrication de pointe, la recherche et le contrôle qualité.',
      sfaxPoudriereBadge: 'Dépôt Commercial',
      sfaxPoudriereTitle: 'Sfax (Poudrière)',
      sfaxPoudriereDesc: 'Notre succursale commerciale et logistique située dans la zone industrielle pour servir rapidement nos partenaires régionaux.',
      tunisBadge: 'Dépôt Commercial',
      tunisTitle: 'Tunis',
      tunisDesc: 'Carrefour de distribution de la capitale, assurant une logistique rapide pour nos partenaires nord-tunisiens.',
      msakenBadge: 'Dépôt Commercial',
      msakenTitle: 'Msaken',
      msakenDesc: 'Plateforme logistique centrale pour soutenir notre clientèle industrielle dans le sahel tunisien.',
      viewMap: 'Voir sur la carte',
      viewPhoto: 'Voir la photo'
    },
    products: {
      badge: 'Portfolio de Produits',
      title: 'Nos Produits',
      subtitle: 'Découvrez nos technologies d\'emballage et adhésifs conçus pour répondre aux normes industrielles et alimentaires les plus élevées.',
      statBrands: 'Catégories',
      statCategories: 'Produits Spécialisés',
      statFood: 'Sécurité Alimentaire',
      statPrinting: 'Impression Personnalisée',
      all: 'Tout',
      tapes: 'Emballages Adhésifs',
      packaging: 'Emballages Alimentaires',
      kitchen: 'Produits Cuisine',
      specifications: 'Spécifications Techniques',
      features: 'Caractéristiques Clés',
      requestQuote: 'Demander un Devis',
      viewDetails: 'Voir les Détails',
      backToAll: 'Retour à tous les produits',
      adproDesc: 'Notre gamme de rubans adhésifs industriels et de films étirables à haute résistance, conçue pour la logistique lourde, la fabrication et les applications professionnelles.',
      foodServiceDesc: 'Notre gamme d\'emballages et de produits de cuisine de qualité supérieure, conçue pour les professionnels de la gastronomie et un usage domestique exigeant. Certifiée apte au contact alimentaire.',
      specName: 'Caractéristique',
      specValue: 'Valeur'
    },
    contact: {
      title: 'Entrer en ',
      titleHighlight: 'Contact',
      subtitle: 'Que vous ayez une question sur nos technologies adhésives industrielles ou que vous ayez besoin d\'un devis personnalisé, notre équipe est prête à vous aider.',
      formHeading: 'Envoyez-nous un Message',
      fullName: 'Nom Complet',
      fullNamePlaceholder: 'Jean Dupont',
      emailAddress: 'Adresse E-mail',
      emailPlaceholder: 'jean.dupont@entreprise.com',
      subject: 'Sujet',
      subjectPlaceholder: 'Comment pouvons-nous vous aider ?',
      message: 'Message',
      messagePlaceholder: 'Décrivez votre demande...',
      sendBtn: 'Envoyer le Message',
      successHeading: 'Message Reçu',
      successDesc: 'Merci de nous avoir contactés. Nous reviendrons vers vous dans les plus brefs délais.',
      directContact: 'Contact Direct',
      phone: 'Téléphone',
      commercial: 'Demandes Commerciales',
      sfaxHeadquarters: 'Siège Social Sfax',
      sfaxAddress: 'Siège & Production\nRoute de Mahdia Km 10',
      sfaxPoudriere: 'Dépôt Sfax Poudrière',
      sfaxPoudriereAddress: 'Dépôt Commercial\nZone Industrielle Poudrière 1, Sfax',
      tunisBranch: 'Succursale Tunis',
      tunisAddress: '126 Av. Mustapha Mohsen\nBorj Louzir, Ariana, Tunis',
      msakenFacility: 'Dépôt Msaken',
      msakenAddress: 'Route de Kairouan\nMsaken 4070, Sousse'
    },
    footer: {
      legal: 'Mentions Légales',
      privacy: 'Politique de Confidentialité',
      terms: 'Conditions d\'Utilisation',
      solutions: 'Nos Technologies',
      indSol: 'Technologies Industrielles',
      foodPack: 'Emballage Alimentaire',
      quickContact: 'Contact Rapide',
      emailPlaceholder: 'Votre E-mail',
      helpPlaceholder: 'Comment pouvons-nous vous aider ?',
      sendBtn: 'Envoyer',
      successState: 'Message Envoyé !',
      allRights: 'Tous droits réservés.'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      products: 'Products',
      contact: 'Contact',
      getQuote: 'Get Quote'
    },
    home: {
      heroBadge: 'Industrial & Food Packaging Excellence',
      heroTitleText1: 'Performance You Can ',
      heroTitleHighlight: 'Rely On',
      heroTitleText2: ', Anywhere.',
      heroSubtitle: 'Engineering superior adhesive technologies and premium food packaging for over 35 years. Double expertise to serve every industrial need.',
      exploreBtn: 'Explore Categories',
      legacyBtn: 'Our Story',
      precisionTitle: 'Precision Crafted, Proven Quality.',
      precisionDesc: 'With over three decades of industry experience, Tunisie Tape stands as a pillar of reliability. Our commitment to continuous innovation ensures every roll meets international standards.',
      missionLink: 'Learn more about our mission',
      commitmentTitle1: 'Two product ranges. ',
      commitmentHighlight: 'One commitment',
      commitmentTitle2: ' to excellence.'
    },
    about: {
      isoBadge: 'ISO 9001 Certified Excellence',
      title: 'Our Story & ',
      titleHighlight: 'Mission',
      subtitle: 'For over 35 years, Tunisie Tape has engineered premium industrial adhesive technologies, building a foundation of high-trust reliability and authoritative innovation across global markets.',
      missionTitle: 'Notre Mission',
      missionDesc: 'Provide high-quality adhesive and packaging technologies that meet the rigorous demands of the industry through innovation, expertise, and an unwavering commitment to customer satisfaction.',
      visionTitle: 'Notre Vision',
      visionDesc: 'Become the undisputed leader and global reference in industrial and food packaging technologies, constantly pushing the boundaries of performance and sustainability.',
      sitesTitle: 'Nos Sites',
      sitesSubtitle: 'A strategic presence to efficiently meet your needs across the entire territory and internationally.',
      sfaxBadge: 'Headquarters & Production',
      sfaxTitle: 'Sfax (HQ)',
      sfaxDesc: 'Our main operations center housing advanced manufacturing, research, and quality control.',
      sfaxPoudriereBadge: 'Commercial Branch',
      sfaxPoudriereTitle: 'Sfax (Poudriere)',
      sfaxPoudriereDesc: 'Our commercial and logistics center located in the industrial zone to serve regional partners.',
      tunisBadge: 'Commercial Branch',
      tunisTitle: 'Tunis',
      tunisDesc: 'Capital distribution hub, ensuring rapid logistics for our north Tunisian partners.',
      msakenBadge: 'Commercial Branch',
      msakenTitle: 'Msaken',
      msakenDesc: 'Central logistics platform to support our industrial clientele in the Tunisian Sahel.',
      viewMap: 'Show on Map',
      viewPhoto: 'Show Photo'
    },
    products: {
      badge: 'Product Portfolio',
      title: 'Our Products',
      subtitle: 'Discover our premium packaging and adhesive products designed to meet the highest industrial and food-grade safety standards.',
      statBrands: 'Categories',
      statCategories: 'Specialty Products',
      statFood: 'Food Grade Safeness',
      statPrinting: 'Custom Printing & Sizes',
      all: 'All',
      tapes: 'Adhesive Packaging',
      packaging: 'Alimentary Packaging',
      kitchen: 'Kitchen Essentials',
      specifications: 'Technical Specifications',
      features: 'Key Features',
      requestQuote: 'Request a Quote',
      viewDetails: 'View Details',
      backToAll: 'Back to All Products',
      adproDesc: 'Our premium range of industrial adhesive tapes and high-resistance stretch films, engineered for heavy logistics, manufacturing, and professional applications.',
      foodServiceDesc: 'Our range of premium food-grade packaging and kitchen consumables, designed for gastronomy professionals and demanding household use. Fully certified food safe.',
      specName: 'Specification Name',
      specValue: 'Value'
    },
    contact: {
      title: 'Get in ',
      titleHighlight: 'Touch',
      subtitle: 'Whether you have a question about our industrial adhesive technologies or need a custom quote, our team is ready to assist you.',
      formHeading: 'Send us a Message',
      fullName: 'Full Name',
      fullNamePlaceholder: 'John Doe',
      emailAddress: 'Email Address',
      emailPlaceholder: 'john@company.com',
      subject: 'Subject',
      subjectPlaceholder: 'How can we help?',
      message: 'Message',
      messagePlaceholder: 'Describe your inquiry...',
      sendBtn: 'Send Message',
      successHeading: 'Message Received',
      successDesc: 'Thank you for reaching out. We will get back to you shortly.',
      directContact: 'Direct Contact',
      phone: 'Phone',
      commercial: 'Commercial Inquiries',
      sfaxHeadquarters: 'Sfax Headquarters',
      sfaxAddress: 'Siège & Production\nRoute de Mahdia Km 10',
      sfaxPoudriere: 'Sfax Poudriere Branch',
      sfaxPoudriereAddress: 'Dépôt Commercial\nZone Industrielle Poudrière 1, Sfax',
      tunisBranch: 'Tunis Branch',
      tunisAddress: '126 Av. Mustapha Mohsen\nBorj Louzir, Ariana, Tunis',
      msakenFacility: 'Msaken Facility',
      msakenAddress: 'Route de Kairouan\nMsaken 4070, Sousse'
    },
    footer: {
      legal: 'Legal',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      solutions: 'Technologies',
      indSol: 'Industrial Technologies',
      foodPack: 'Food Packaging',
      quickContact: 'Quick Contact',
      emailPlaceholder: 'Your Email',
      helpPlaceholder: 'How can we help?',
      sendBtn: 'Send Message',
      successState: 'Message Sent!',
      allRights: 'All rights reserved.'
    }
  }
};
