// Import the generated high-quality brand master images
import adproMasterImg from '../assets/adpro_industrial_tapes.jpg';
import twistMasterImg from '../assets/twist_food_packaging.png';

// Import the high-quality product images
import adproStandardImg from '../assets/adpro_standard.jpg';
import adproPrintedImg from '../assets/adpro_printed.jpg';
import adproDoubleSidedImg from '../assets/adpro_double_sided.jpg';
import adproStretchFilmImg from '../assets/adpro_stretch_film.png';
import adproMaskingImg from '../assets/adpro_masking.png';
import adproInsulatingImg from '../assets/adpro_insulating.png';
import adproFloorImg from '../assets/adpro_floor.jpg';
import adproDuctImg from '../assets/adpro_duct.png';

// Import new Barquette images
import containerRectImg from '../assets/container_rect.png';
import containerCircleImg from '../assets/container_circle.png';
import containerCompartImg from '../assets/container_compart.png';

import twistFoilImg from '../assets/twist_foil.png';
import twistClingImg from '../assets/twist_cling.png';
import twistBakingImg from '../assets/twist_baking.png';

export interface ProductTranslation {
  name: string;
  tagline: string;
  description: string;
  badge: string;
  features: string[];
  specifications: {
    [key: string]: string | string[];
  };
}

export interface Product {
  id: string;
  brand: 'ADPRO' | 'twist';
  category: 'adhesif' | 'alimentaire';
  visualType: string;
  accentColor: string;
  image: string;
  fr: ProductTranslation;
  en: ProductTranslation;
}

export const products: Product[] = [
  {
    id: 'adpro-standard',
    brand: 'ADPRO',
    category: 'adhesif',
    visualType: 'standard-tape',
    accentColor: '#00288e',
    image: adproStandardImg,
    fr: {
      name: 'Rubans Adhésifs Standard',
      tagline: 'Fermeture de Carton Fiable & Haute Résistance',
      description: 'Conçus sur un support Polypropylène (PP) hautement résistant, nos rubans standards sont étudiés pour un emballage fluide sur lignes manuelles ou automatiques. Disponibles en trois formules d\'adhésif personnalisées.',
      badge: 'Emballage de Base',
      features: [
        'Support PP robuste résistant aux tensions',
        'Conçu pour dévidoirs manuels et machines d\'emballage haute vitesse',
        'Assure une fermeture sûre et durable des cartons sous contrainte',
        'Disponible en plusieurs largeurs, longueurs et épaisseurs (microns)'
      ],
      specifications: {
        'Matériau de Support': 'PP (Polypropylène) Durable',
        'Options d\'Adhésif': [
          'Acrylique : Excellente stabilité aux UV et stockage longue durée',
          'Solvent : Base caoutchouc naturel, adhérence supérieure, températures extrêmes',
          'Hotmelt : Base caoutchouc synthétique, tack immédiat et agressif'
        ],
        'Méthode d\'Application': 'Scelleuses de caisses manuelles et automatiques',
        'Coloris Disponibles': ['Transparent', 'Havana / Brun'],
        'Longueurs Disponibles': ['66m', '100m', '660m', '990m']
      }
    },
    en: {
      name: 'Standard Adhesive Tapes',
      tagline: 'Reliable & High-Strength Carton Sealing',
      description: 'Constructed on a highly durable Polypropylene (PP) support, standard tapes are engineered for seamless packaging across manual or automated packaging lines. Available in three custom adhesive formulations.',
      badge: 'Core Packaging',
      features: [
        'Built on a robust, tension-resistant PP backing',
        'Engineered for both manual dispensers & high-speed packaging machines',
        'Provides secure, long-lasting carton sealing under stress',
        'Offered in multiple width, length, and micron thicknesses'
      ],
      specifications: {
        'Support Material': 'Durable PP (Polypropylene)',
        'Adhesive Options': [
          'Acrylic: Excellent UV & long-term storage stability',
          'Solvent: Natural rubber base, superior grip, extreme temperatures',
          'Hotmelt: Synthetic rubber base, aggressive quick tack, immediate hold'
        ],
        'Application Method': 'Manual and automatic case sealers',
        'Available Colors': ['Clear / Transparent', 'Havana / Brown'],
        'Available Lengths': ['66m', '100m', '660m', '990m']
      }
    }
  },
  {
    id: 'adpro-printed',
    brand: 'ADPRO',
    category: 'adhesif',
    visualType: 'printed-tape',
    accentColor: '#00288e',
    image: adproPrintedImg,
    fr: {
      name: 'Rubans Adhésifs Imprimés',
      tagline: 'Image de Marque Personnalisée & Haute Sécurité',
      description: 'Valorisez votre marque et sécurisez vos envois en un seul geste. Nos rubans imprimés personnalisés affichent des graphismes haute résolution qui transforment chaque boîte en support publicitaire tout en signalant immédiatement toute tentative d\'effraction.',
      badge: 'Marketing & Sécurité',
      features: [
        'Marquage fort avec impression haute définition jusqu\'à 2 couleurs',
        'Sert de dissuasion visuelle immédiate contre le vol ou l\'ouverture',
        'Adhérence renforcée garantissant la tenue pendant les longs trajets',
        'Large choix de teintes de fond de base'
      ],
      specifications: {
        'Options d\'Impression': 'Jusqu\'à 2 couleurs en haute définition',
        'Teintes de Fond': ['Blanc', 'Transparent', 'Havana (Brun)', 'Couleurs Spéciales'],
        'Avantage Sécurité': 'Témoin d\'effraction (brise le motif visible en cas d\'ouverture)',
        'Support': 'Polypropylène (PP)',
        'Dimensions Disponibles': ['50mm x 66m', '50mm x 100m']
      }
    },
    en: {
      name: 'Printed Adhesive Tapes',
      tagline: 'High-Visibility Custom Branding & Security',
      description: 'Promote your brand and secure your shipments in one go. Custom printed tapes feature high-resolution graphics that turn every box into a high-visibility marketing asset while immediately indicating tampering.',
      badge: 'Marketing & Security',
      features: [
        'Bold branding with high-resolution printing up to 2 colors',
        'Serves as an immediate visual deterrent for product tampering',
        'Strong adhesion ensures labels remain intact during long-distance transit',
        'Wide choice of base background shades'
      ],
      specifications: {
        'Printing Options': 'Up to 2 colors high-definition printing',
        'Background Shades': ['White', 'Transparent', 'Havana (Brown)', 'Custom Colors'],
        'Security Benefit': 'Anti-tampering indicator (breaks visible pattern if opened)',
        'Support': 'Polypropylene (PP)',
        'Available Dimensions': ['50mm x 66m', '50mm x 100m']
      }
    }
  },
  {
    id: 'adpro-double-sided',
    brand: 'ADPRO',
    category: 'adhesif',
    visualType: 'double-tape',
    accentColor: '#00288e',
    image: adproDoubleSidedImg,
    fr: {
      name: 'Rubans Double Face',
      tagline: 'Adhésion Invisible & Fixation Forte',
      description: 'Conçu pour le raccordement professionnel, le montage et les fixations rapides. Notre ruban double face offre une adhérence maximale des deux côtés pour un verrouillage plat et fiable entre les matériaux.',
      badge: 'Raccordement Industriel',
      features: [
        'Surfaces double adhésive à fort tack avec support robuste',
        'Liaison invisible sur de multiples textures (bois, métal, papier, plastique)',
        'Excellente résistance au cisaillement et force de maintien',
        'Papier protecteur à détachement rapide pour un travail fluide'
      ],
      specifications: {
        'Adhésion': 'Double face ultra-haute adhérence',
        'Matériau de Support': 'Papier renforcé flexible / film',
        'Type de Protecteur': 'Papier siliconé facile à peler',
        'Surfaces Optimales': 'Plastiques, carton, bois, métal, tissus',
        'Dimensions Disponibles': ['19mm x 25m', '24mm x 25m', '48mm x 25m']
      }
    },
    en: {
      name: 'Double-Sided Tapes',
      tagline: 'High-Tack Seamless Bond',
      description: 'Designed for professional splicing, mounting, and quick fixing. Our double-sided tape delivers ultimate adhesion on both sides, ensuring a flat, reliable lock between materials.',
      badge: 'Industrial Splicing',
      features: [
        'High-tack double adhesive surfaces with a heavy-duty carrier',
        'Seamless bonding on multiple textures (wood, metal, paper, plastic)',
        'Excellent holding power and shear resistance',
        'Quick release backing paper for fast workflows'
      ],
      specifications: {
        'Adhesion': 'Double-sided ultra-high tack',
        'Carrier Material': 'Flexible reinforced paper / film',
        'Liner Type': 'Siliconized easy-peel backing paper',
        'Optimal Surfaces': 'Plastics, paperboard, wood, metal, fabrics',
        'Available Dimensions': ['19mm x 25m', '24mm x 25m', '48mm x 25m']
      }
    }
  },
  {
    id: 'adpro-stretch',
    brand: 'ADPRO',
    category: 'adhesif',
    visualType: 'stretch-film',
    accentColor: '#00288e',
    image: adproStretchFilmImg,
    fr: {
      name: 'Films Étirables',
      tagline: 'Palettisation Industrielle & Protection',
      description: 'Sécurisez, regroupez et protégez vos marchandises sur palettes. Doté d\'une élasticité supérieure et d\'une résistance ultime à la perforation, le film étirable ADPRO maintient les charges en place et les protège de l\'humidité, de la poussière et des glissements.',
      badge: 'Palettisation',
      features: [
        'Taux d\'étirement et résistance à la perforation exceptionnels',
        'Propriétés auto-adhérentes élevées sans laisser de résidus collants',
        'Protège le chargement de l\'humidité, de la poussière, de la saleté et des abrasions',
        'Idéal pour dévidoirs manuels ou banderoleuses automatiques robotisées'
      ],
      specifications: {
        'Matériau': 'LLDPE Haute Performance (Polyéthylène Linéaire Basse Densité)',
        'Type d\'Application': 'Bobine Manuelle (application à la main) ou Bobine Automatique (machine)',
        'Finition Visuelle': 'Haute transparence pour lecture facile des codes-barres',
        'Résistance à la Déchirure': 'Prévention avancée des perforations multicouches',
        'Dimensions Disponibles': ['Manuel: 500mm x 23mic', 'Automatique: 500mm x 30mic']
      }
    },
    en: {
      name: 'Stretch Films',
      tagline: 'Industrial Pallet Stabilization & Surface Protection',
      description: 'Secure, bundle, and protect bulky palletized goods. Engineered with superior elasticity and ultimate puncture resistance, ADPRO stretch film locks goods in place and guards against humidity, dust, and transit shifting.',
      badge: 'Palletization',
      features: [
        'Exceptional stretch factor and puncture resistance',
        'High cling properties - locks layers together without sticky residue',
        'Shields cargo from harsh moisture, dust, dirt, and light abrasion',
        'Perfect for manual wrap dispensers or heavy-duty robotic wrapping machinery'
      ],
      specifications: {
        'Material': 'High-Performance LLDPE (Linear Low-Density Polyethylene)',
        'Application Type': 'Manual Roll (hand wrapping) or Automatic Roll (machine wrapping)',
        'Visual Finish': 'High-clarity transparent for barcode scanning',
        'Tear Resistance': 'Advanced multi-layer puncture prevention',
        'Available Dimensions': ['Manual: 500mm x 23mic', 'Automatic: 500mm x 30mic']
      }
    }
  },
  {
    id: 'adpro-masking',
    brand: 'ADPRO',
    category: 'adhesif',
    visualType: 'masking-tape',
    accentColor: '#00288e',
    image: adproMaskingImg,
    fr: {
      name: 'Rubans de Masquage',
      tagline: 'Peinture de Précision & Retrait Sans Résidus',
      description: 'Le choix privilégié pour les travaux de peinture nets, les revêtements et la protection temporaire de surfaces. Offrant une adhésion instantanée et une grande flexibilité, il épouse parfaitement les courbes et s\'enlève proprement sans laisser de traces.',
      badge: 'Précision Artisanale',
      features: [
        'Support en papier crêpé épousant facilement les courbes et les angles',
        'Assure des bordures de peinture nettes sans bavures',
        'Garantit un retrait sans résidus même après exposition à la chaleur',
        'Disponible en Usage Général (bâtiment) et Qualité Automobile (étuvage)'
      ],
      specifications: {
        'Matériau de Support': 'Papier Crêpé Premium',
        'Qualités Disponibles': ['Usage Général (Bâtiment / Bricolage)', 'Qualité Automobile (Haute résistance thermique)'],
        'Délai de Retrait Propre': 'Jusqu\'à 72 heures dans des conditions normales',
        'Type d\'Adhésif': 'Formulation spéciale à faible transfert de résidus',
        'Dimensions Disponibles': ['19mm x 50m', '24mm x 50m', '36mm x 50m', '48mm x 50m']
      }
    },
    en: {
      name: 'Masking Tapes',
      tagline: 'Residue-Free Painting & Surface Protection',
      description: 'The preferred choice for precise painting, coating, and industrial surface guarding. Featuring instant adhesion and flexibility, it hugs curves tightly and peels away cleanly leaving sharp, professional lines.',
      badge: 'Precision Craft',
      features: [
        'Crepe paper backing easily conforms to curves and corners',
        'Delivers sharp, bleeding-free paint boundaries',
        'Guarantees residue-free removal up to high temperature thresholds',
        'Available in General Purpose (construction) & Automotive Grade (curing oven)'
      ],
      specifications: {
        'Backing Material': 'Premium Crepe Paper',
        'Available Grades': ['General Purpose (DIY / Construction)', 'Automotive Grade (High heat resistance)'],
        'Clean Removal Window': 'Up to 72 hours under regular conditions',
        'Adhesive Type': 'Specialized low-residue formulation',
        'Available Dimensions': ['19mm x 50m', '24mm x 50m', '36mm x 50m', '48mm x 50m']
      }
    }
  },
  {
    id: 'adpro-insulating',
    brand: 'ADPRO',
    category: 'adhesif',
    visualType: 'insulating-tape',
    accentColor: '#00288e',
    image: adproInsulatingImg,
    fr: {
      name: 'Rubans Isolants PVC',
      tagline: 'Isolation Électrique Ignifuge',
      description: 'Isolation électrique fiable et regroupement de câbles pour applications industrielles et résidentielles. Notre ruban PVC souple et résistant au feu s\'enroule fermement et reste stable sous diverses plages de températures.',
      badge: 'Sécurité Électrique',
      features: [
        'Rigidité diélectrique élevée pour une isolation sûre des tensions',
        'Support PVC très élastique - s\'étire et épouse parfaitement les raccordements irréguliers',
        'Propriétés auto-extinguibles, ignifuges et étanches à l\'humidité',
        'Multiples coloris pour un repérage et codage rapide des phases'
      ],
      specifications: {
        'Matériau': 'PVC Plastifié (Polychlorure de Vinyle)',
        'Norme de Sécurité': 'Propriétés ignifuges et auto-extinguibles',
        'Protection Diélectrique': 'Haute résistance à la tension',
        'Coloris Disponibles': ['Noir', 'Bleu', 'Rouge', 'Jaune', 'Vert', 'Blanc'],
        'Dimensions Disponibles': ['19mm x 10m', '19mm x 20m']
      }
    },
    en: {
      name: 'PVC Insulating Tapes',
      tagline: 'Flame-Retardant Electrical Insulation',
      description: 'Reliable electrical insulation and wire grouping for industrial and residential applications. Our flexible, fire-resistant PVC tape wraps tightly and remains stable under diverse temperature ranges.',
      badge: 'Electrical Safety',
      features: [
        'High dielectric breakdown strength for secure high-voltage shielding',
        'Highly elastic PVC back - stretches and wraps snugly around uneven wiring joints',
        'Self-extinguishing, flame-retardant and moisture-proof construction',
        'Multiple colors available for prompt phase and wire color-coding'
      ],
      specifications: {
        'Material': 'Plasticized PVC (Polyvinyl Chloride)',
        'Safety Standard': 'Flame-retardant, self-extinguishing properties',
        'Dielectric Protection': 'High voltage resistance',
        'Available Colors': ['Black', 'Blue', 'Red', 'Yellow', 'Green', 'White'],
        'Available Dimensions': ['19mm x 10m', '19mm x 20m']
      }
    }
  },
  {
    id: 'adpro-floor',
    brand: 'ADPRO',
    category: 'adhesif',
    visualType: 'floor-tape',
    accentColor: '#00288e',
    image: adproFloorImg,
    fr: {
      name: 'Rubans de Marquage au Sol',
      tagline: 'Organisation Visuelle des Ateliers aux Normes 5S',
      description: 'Rubans de signalisation au sol ultra-robustes conçus pour résister au trafic intense de chariots élévateurs, au piétinement et aux lavages industriels. Idéal pour délimiter les voies de circulation, zones de stockage et de danger.',
      badge: 'Sécurité d\'Atelier',
      features: [
        'PVC ultra-résistant de forte épaisseur - supporte le passage continu des engins',
        'Teintes de sécurité vives et durables (couleurs unies et rayures de danger)',
        'Parfait pour le lean manufacturing, la standardisation 5S et le zonage de sécurité',
        'Adhésif puissant qui se retire proprement sans abîmer les sols d\'entrepôt'
      ],
      specifications: {
        'Matériau': 'PVC industriel renforcé de haute qualité',
        'Épaisseur': '150 microns de haute résistance',
        'Résistance à l\'Usure': "Haute résistance à l'abrasion et au roulement de chariots",
        'Variantes Visuelles': ['Jaune', 'Rouge', 'Bleu', 'Vert', 'Zébré Jaune/Noir'],
        'Dimensions Disponibles': ['48mm x 33m', '75mm x 33m']
      }
    },
    en: {
      name: 'Floor Marking Tapes',
      tagline: 'Heavy-Duty 5S Visual Workplace Organization',
      description: 'Durable floor marking tapes designed to withstand heavy forklift traffic, foot steps, and industrial washdowns. Perfect for defining safety lanes, storage areas, and hazard zones.',
      badge: 'Facility Safety',
      features: [
        'Highly resilient heavy-duty PVC - holds up to constant forklift traffic',
        'Vivid, fade-resistant safety shades (solid colors & caution hazard stripes)',
        'Perfect for lean manufacturing, 5S workspace standardization, and safety mapping',
        'Strong adhesive backing yet removes cleanly without destroying warehouse floors'
      ],
      specifications: {
        'Material': 'Heavy-duty industrial PVC',
        'Material Thickness': '150 microns premium wear barrier',
        'Wear Resistance': 'High-abrasion & forklift wheel traffic resistant',
        'Visual Variations': ['Yellow', 'Red', 'Blue', 'Green', 'Black/Yellow Hazard Stripes'],
        'Available Dimensions': ['48mm x 33m', '75mm x 33m']
      }
    }
  },
  {
    id: 'adpro-duct',
    brand: 'ADPRO',
    category: 'adhesif',
    visualType: 'duct-tape',
    accentColor: '#00288e',
    image: adproDuctImg,
    fr: {
      name: 'Rubans Américains (Duct Tape)',
      tagline: 'Toile Adhésive Ultra-Forte & Étanche',
      description: 'L\'outil universel pour sceller, assembler, réparer et colmater solidement. Notre ruban américain comprend une trame textile renforcée avec barrière imperméable et une couche d\'adhésif ultra-agressif et épais.',
      badge: 'Haute Utilité',
      features: [
        'Support textile tissé enduit de polyéthylène à haute résistance',
        'Adhésif ultra-puissant adhérant fermement sur surfaces rugueuses ou irrégulières',
        'Conception 100% étanche idéale pour les réparations intérieures et extérieures',
        'Déchirable à la main horizontalement pour une application rapide sans outils'
      ],
      specifications: {
        'Type de Support': 'Maille coton/synthétique laminée PE',
        'Adhésif': 'Caoutchouc sensible à la pression agressif',
        'Indice d\'Étanchéité': 'Excellent scellement aux intempéries et à l\'humidité',
        'Dimensions Disponibles': ['48mm x 15m', '48mm x 25m']
      }
    },
    en: {
      name: 'Duct Tapes',
      tagline: 'Extreme-Strength Waterproof Utility Cloth Tape',
      description: 'The ultimate tool for sealing, bundling, plumbing, and quick high-strength fixes. Our duct tape features a heavy-duty cloth matrix with a waterproof barrier and an aggressive, thick adhesive layer.',
      badge: 'Heavy Utility',
      features: [
        'High-tensile polyethylene-coated woven cloth matrix backing',
        'Aggressive high-bond adhesive clings securely to rough or irregular surfaces',
        '100% waterproof construction ideal for indoor/outdoor sealing applications',
        'Easy hand-tear horizontal design enables fast, tool-free application'
      ],
      specifications: {
        'Backing Type': 'PE-laminated woven cotton/synthetic mesh',
        'Adhesive': 'Aggressive pressure-sensitive rubber base',
        'Waterproof Rating': 'Excellent weather and moisture seal',
        'Available Dimensions': ['48mm x 15m', '48mm x 25m']
      }
    }
  },

  // --- NEW BARQUETTE PRODUCTS (REPLACED SINGLE CONTAINER ITEM) ---
  // Rectangular Models
  {
    id: 'barquette-rect-900',
    brand: 'twist',
    category: 'alimentaire',
    visualType: 'container-rect',
    accentColor: '#bb0112',
    image: containerRectImg,
    fr: {
      name: 'Barquette Aluminium Rectangulaire 900 ml',
      tagline: 'Idéale pour plats chauds, rôtisserie et restauration',
      description: 'Conçue en aluminium rigide de qualité supérieure, cette barquette rectangulaire de 900 ml offre une excellente tenue et une polyvalence thermique complète pour vos repas à emporter et la cuisson au four.',
      badge: 'Modèle 900 ml',
      features: [
        'Alliage d\'aluminium premium 100% alimentaire et recyclable à l\'infini',
        'Polyvalence thermique complète - passe en toute sécurité du congélateur au four traditionnel',
        'Parois plissées rigides pour une tenue structurelle et une prévention des fuites',
        'Conception robuste idéale pour la restauration et les services traiteurs'
      ],
      specifications: {
        'Format': 'Rectangulaire',
        'Dimensions Extérieures (Top Outer)': '216 × 155 mm',
        'Dimensions Intérieures (Top Inner)': '203 × 142 mm',
        'Base': '170 × 130 mm',
        'Hauteur': '29 mm',
        'Capacité': '900 ml'
      }
    },
    en: {
      name: 'Rectangular Aluminium Container 900 ml',
      tagline: 'Ideal for hot dishes, roasting, and catering services',
      description: 'Crafted from premium rigid aluminium, this 900 ml rectangular container offers excellent structural integrity and complete thermal versatility, making it perfect for takeaways and baking.',
      badge: 'Model 900 ml',
      features: [
        '100% food-grade, infinitely recyclable premium aluminium alloy construction',
        'Unmatched temperature versatility - perfectly freezer and traditional oven safe',
        'Rigid fluted sidewall engineering prevents flexing and messy leaks',
        'Robust construction tailored for gastronomy professionals and catering'
      ],
      specifications: {
        'Shape': 'Rectangular',
        'Top Outer Dimensions': '216 × 155 mm',
        'Top Inner Dimensions': '203 × 142 mm',
        'Base': '170 × 130 mm',
        'Height': '29 mm',
        'Capacity': '900 ml'
      }
    }
  },
  {
    id: 'barquette-rect-724',
    brand: 'twist',
    category: 'alimentaire',
    visualType: 'container-rect',
    accentColor: '#bb0112',
    image: containerRectImg,
    fr: {
      name: 'Barquette Aluminium Rectangulaire 724 ml',
      tagline: 'Emballage rigide pour lasagnes, gratins et accompagnements',
      description: 'Barquette rectangulaire moyenne en aluminium de 724 ml. Sa hauteur de 36.5 mm est optimale pour la cuisson de plats de taille individuelle ou moyenne et leur conservation hermétique.',
      badge: 'Modèle 724 ml',
      features: [
        '100% recyclable, respectueux de l\'environnement et inodore',
        'Excellente conductivité thermique pour une cuisson uniforme et rapide au four',
        'Bords ourlés robustes facilitant la prise en main et la fermeture avec un couvercle',
        'Parfaite conservation de la fraîcheur et de la chaleur'
      ],
      specifications: {
        'Format': 'Rectangulaire',
        'Dimensions Extérieures (Top Outer)': '204 × 134 mm',
        'Dimensions Intérieures (Top Inner)': '192 × 122 mm',
        'Base': '174.5 × 103.5 mm',
        'Hauteur': '36.5 mm',
        'Capacité': '724 ml'
      }
    },
    en: {
      name: 'Rectangular Aluminium Container 724 ml',
      tagline: 'Rigid packaging for lasagnas, gratins, and side dishes',
      description: 'Medium 724 ml rectangular aluminium container. Its 36.5 mm height is optimal for cooking individual or medium-sized meals and maintaining freshness.',
      badge: 'Model 724 ml',
      features: [
        '100% recyclable, environmentally friendly, and odor-free',
        'Excellent thermal conductivity for fast and even baking in traditional ovens',
        'Sturdy rolled rims for easy handling and secure lid sealing',
        'Perfect for maintaining meal heat and moisture balance'
      ],
      specifications: {
        'Shape': 'Rectangular',
        'Top Outer Dimensions': '204 × 134 mm',
        'Top Inner Dimensions': '192 × 122 mm',
        'Base': '174.5 × 103.5 mm',
        'Height': '36.5 mm',
        'Capacity': '724 ml'
      }
    }
  },
  {
    id: 'barquette-rect-586',
    brand: 'twist',
    category: 'alimentaire',
    visualType: 'container-rect',
    accentColor: '#bb0112',
    image: containerRectImg,
    fr: {
      name: 'Barquette Aluminium Rectangulaire 586 ml',
      tagline: 'Format allongé idéal pour plats cuisinés et pâtisseries',
      description: 'Conçue pour les portions individuelles, cette barquette de 586 ml offre une forme allongée spécifique et une hauteur de 46 mm pour un grand confort d\'utilisation.',
      badge: 'Modèle 586 ml',
      features: [
        'Structure renforcée avec aluminium de haute qualité',
        'Polyvalente : cuisson, réchauffage et congélation',
        'Garde les saveurs intactes sans altérer le goût des aliments',
        'Idéal pour pâtisseries, cakes et portions individuelles allongées'
      ],
      specifications: {
        'Format': 'Rectangulaire Allongé',
        'Dimensions Extérieures (Top Outer)': '221 × 92 mm',
        'Dimensions Intérieures (Top Inner)': '211 × 86 mm',
        'Base': '190 × 64 mm',
        'Hauteur': '46 mm',
        'Capacité': '586 ml'
      }
    },
    en: {
      name: 'Rectangular Aluminium Container 586 ml',
      tagline: 'Elongated format ideal for ready meals and pastries',
      description: 'Designed for individual portions, this 586 ml container features a specific elongated shape and a 46 mm depth for maximum convenience.',
      badge: 'Model 586 ml',
      features: [
        'Reinforced structure with high-grade aluminium alloy',
        'Versatile design: baking, reheating, and freezer safe',
        'Keeps food flavors intact without affecting the taste',
        'Perfect for pastries, loaf cakes, and elongated single-serve dishes'
      ],
      specifications: {
        'Shape': 'Elongated Rectangular',
        'Top Outer Dimensions': '221 × 92 mm',
        'Top Inner Dimensions': '211 × 86 mm',
        'Base': '190 × 64 mm',
        'Height': '46 mm',
        'Capacity': '586 ml'
      }
    }
  },
  {
    id: 'barquette-rect-530',
    brand: 'twist',
    category: 'alimentaire',
    visualType: 'container-rect',
    accentColor: '#bb0112',
    image: containerRectImg,
    fr: {
      name: 'Barquette Aluminium Rectangulaire 530 ml',
      tagline: 'Format compact pour entrées, desserts ou petites portions',
      description: 'Une barquette en aluminium compacte et robuste de 530 ml. Parfaite pour la cuisson et la livraison de portions individuelles, entrées chaudes ou desserts.',
      badge: 'Modèle 530 ml',
      features: [
        'Format compact facilitant le stockage et le transport de petites portions',
        'Résistance élevée aux chocs thermiques (congélateur au four direct)',
        'Aluminium hermétique protégeant de l\'air et de la lumière',
        'Idéale pour traiteurs et livraison de repas rapides'
      ],
      specifications: {
        'Format': 'Rectangulaire',
        'Dimensions Extérieures (Top Outer)': '171 × 133 mm',
        'Dimensions Intérieures (Top Inner)': '152 × 114 mm',
        'Base': '132 × 102 mm',
        'Hauteur': '45 mm',
        'Capacité': '530 ml'
      }
    },
    en: {
      name: 'Rectangular Aluminium Container 530 ml',
      tagline: 'Compact size perfect for starters, desserts, or small portions',
      description: 'A compact and sturdy 530 ml aluminium container. Highly suitable for baking and delivering single portions, warm appetizers, or desserts.',
      badge: 'Model 530 ml',
      features: [
        'Compact footprint for easy storage and single-serve transport',
        'High thermal shock resistance - freezer to oven safe',
        'Hermetic barrier protection shielding food from air and light',
        'Perfect for fast food catering and takeaway services'
      ],
      specifications: {
        'Shape': 'Rectangular',
        'Top Outer Dimensions': '171 × 133 mm',
        'Top Inner Dimensions': '152 × 114 mm',
        'Base': '132 × 102 mm',
        'Height': '45 mm',
        'Capacity': '530 ml'
      }
    }
  },
  {
    id: 'barquette-rect-385',
    brand: 'twist',
    category: 'alimentaire',
    visualType: 'container-rect',
    accentColor: '#bb0112',
    image: containerRectImg,
    fr: {
      name: 'Barquette Aluminium Rectangulaire 385 ml',
      tagline: 'Petite barquette individuelle pour entrées et portions enfants',
      description: 'Notre plus petit format rectangulaire avec une capacité de 385 ml. Très apprécié pour le conditionnement de petites portions d\'accompagnements ou de desserts.',
      badge: 'Modèle 385 ml',
      features: [
        'Idéale pour les repas portionnés et les desserts',
        '100% recyclable, hygiénique et saine',
        'Coins arrondis et bords lisses pour une sécurité accrue lors de la manipulation',
        'Maintien de la chaleur et des arômes préservé'
      ],
      specifications: {
        'Format': 'Rectangulaire',
        'Dimensions Extérieures (Top Outer)': '142 × 104 mm',
        'Dimensions Intérieures (Top Inner)': '130 × 92 mm',
        'Base': '108 × 78 mm',
        'Hauteur': '40 mm',
        'Capacité': '385 ml'
      }
    },
    en: {
      name: 'Rectangular Aluminium Container 385 ml',
      tagline: 'Small single-serve container for sides and kids portions',
      description: 'Our smallest rectangular model with a capacity of 385 ml. Highly valued for packaging small portions of side dishes, sauces, or desserts.',
      badge: 'Model 385 ml',
      features: [
        'Ideal for portion-controlled side dishes and desserts',
        '100% recyclable, hygienic, and food safe',
        'Rounded corners and smooth edges for safe handling',
        'Ensures heat retention and preserves food aroma'
      ],
      specifications: {
        'Shape': 'Rectangular',
        'Top Outer Dimensions': '142 × 104 mm',
        'Top Inner Dimensions': '130 × 92 mm',
        'Base': '108 × 78 mm',
        'Height': '40 mm',
        'Capacity': '385 ml'
      }
    }
  },

  // Circular Models
  {
    id: 'barquette-rond-940',
    brand: 'twist',
    category: 'alimentaire',
    visualType: 'container-circle',
    accentColor: '#bb0112',
    image: containerCircleImg,
    fr: {
      name: 'Barquette Aluminium Ronde 940 ml',
      tagline: 'Plat rond idéal pour tartes, tourtes et quiches de taille moyenne',
      description: 'Plat circulaire en aluminium de 940 ml. Parfaitement adapté pour cuire de belles tartes ou tourtes au four, assurant un fond de pâte croustillant grâce à sa cuisson uniforme.',
      badge: 'Ronde 940 ml',
      features: [
        'Forme circulaire classique avec bord cannelé élégant',
        'Excellente rigidité latérale empêchant les déformations pendant la cuisson',
        'Diffusion thermique uniforme pour des pâtes parfaitement dorées',
        'Facile à ranger et à stocker en piles compactes'
      ],
      specifications: {
        'Format': 'Circulaire / Rond',
        'Diamètre Extérieur (Top Outer)': '218 mm',
        'Diamètre Intérieur (Top Inner)': '201 mm',
        'Base': '168 mm',
        'Hauteur': '38 mm',
        'Capacité': '940 ml'
      }
    },
    en: {
      name: 'Round Aluminium Container 940 ml',
      tagline: 'Round pan ideal for medium pies, tarts, and quiches',
      description: 'Circular 940 ml aluminium pan. Perfectly suited for baking beautiful pies or tarts in traditional ovens, ensuring a crispy crust through even heat distribution.',
      badge: 'Round 940 ml',
      features: [
        'Classic circular shape with elegant fluted sidewalls',
        'Excellent lateral rigidity preventing deformation during baking',
        'Uniform heat diffusion for perfectly golden crusts',
        'Highly space-efficient stackable design'
      ],
      specifications: {
        'Shape': 'Circular / Round',
        'Top Outer Diameter': '218 mm',
        'Top Inner Diameter': '201 mm',
        'Base Diameter': '168 mm',
        'Height': '38 mm',
        'Capacity': '940 ml'
      }
    }
  },
  {
    id: 'barquette-rond-660',
    brand: 'twist',
    category: 'alimentaire',
    visualType: 'container-circle',
    accentColor: '#bb0112',
    image: containerCircleImg,
    fr: {
      name: 'Barquette Aluminium Ronde 660 ml',
      tagline: 'Moule rond pour quiches individuelles et desserts à partager',
      description: 'Plat rond en aluminium de 660 ml de capacité. Idéal pour la préparation de quiches individuelles généreuses, tartelettes ou gratins circulaires au four.',
      badge: 'Ronde 660 ml',
      features: [
        'Format circulaire moyen très apprécié des pâtissiers et traiteurs',
        'Aluminium alimentaire haut de gamme résistant à 220°C',
        'Anti-adhérence naturelle facilitant le démoulage des tartes',
        'Totalement stérile et neutre au goût'
      ],
      specifications: {
        'Format': 'Circulaire / Rond',
        'Diamètre Extérieur (Top Outer)': '185 mm',
        'Diamètre Intérieur (Top Inner)': '170 mm',
        'Base': '138 mm',
        'Hauteur': '35 mm',
        'Capacité': '660 ml'
      }
    },
    en: {
      name: 'Round Aluminium Container 660 ml',
      tagline: 'Round mold for single quiches and shared desserts',
      description: 'Round aluminium pan with a 660 ml capacity. Ideal for preparing generous individual quiches, tarts, or circular potato gratins in the oven.',
      badge: 'Round 660 ml',
      features: [
        'Medium circular footprint popular among bakers and caterers',
        'Premium food-grade aluminium resistant up to 220°C',
        'Natural easy-release properties to help unmold pastries cleanly',
        '100% sterile and completely taste-neutral'
      ],
      specifications: {
        'Shape': 'Circular / Round',
        'Top Outer Diameter': '185 mm',
        'Top Inner Diameter': '170 mm',
        'Base Diameter': '138 mm',
        'Height': '35 mm',
        'Capacity': '660 ml'
      }
    }
  },
  {
    id: 'barquette-rond-110',
    brand: 'twist',
    category: 'alimentaire',
    visualType: 'container-circle',
    accentColor: '#bb0112',
    image: containerCircleImg,
    fr: {
      name: 'Gobelet Portion Rond 110 ml',
      tagline: 'Coupelle individuelle pour sauces, condiments et desserts',
      description: 'Petit gobelet portion rond en aluminium d\'une capacité de 110 ml. Idéal pour servir de petites portions individuelles comme des crèmes caramel, des muffins ou pour le transport hermétique de sauces.',
      badge: 'Gobelet 110 ml',
      features: [
        'Format coupelle ultra-compact et empilable à l\'infini',
        'Parfait pour la cuisson directe de gâteaux ou de flans',
        'Utilisation polyvalente en cuisine professionnelle comme domestique',
        'Bords lisses offrant une présentation propre et soignée'
      ],
      specifications: {
        'Format': 'Gobelet Portion Rond',
        'Diamètre Extérieur (Top Outer)': '82 mm',
        'Diamètre Intérieur (Top Inner)': '70 mm',
        'Base': '54 mm',
        'Hauteur': '36 mm',
        'Capacité': '110 ml'
      }
    },
    en: {
      name: 'Round Portion Cup 110 ml',
      tagline: 'Single-serve cup for sauces, condiments, and desserts',
      description: 'Small round 110 ml aluminium cup. Perfect for serving individual portions like creme caramel, muffins, or for the secure transport of sauces and condiments.',
      badge: 'Cup 110 ml',
      features: [
        'Ultra-compact portion format, infinitely stackable to save space',
        'Perfect for direct baking of muffins, flans, and souffles',
        'Versatile applications in professional and home kitchens',
        'Smooth rim design provides a neat, clean presentation'
      ],
      specifications: {
        'Shape': 'Round Portion Cup',
        'Top Outer Diameter': '82 mm',
        'Top Inner Diameter': '70 mm',
        'Base Diameter': '54 mm',
        'Height': '36 mm',
        'Capacity': '110 ml'
      }
    }
  },

  // Compartmented Models
  {
    id: 'barquette-compart-3',
    brand: 'twist',
    category: 'alimentaire',
    visualType: 'container-compart',
    accentColor: '#bb0112',
    image: containerCompartImg,
    fr: {
      name: 'Barquette Aluminium 3 Compartiments',
      tagline: 'Séparation hermétique idéale pour plats complets à emporter',
      description: 'Barquette de 900 ml divisée en 3 sections distinctes. Permet d\'emballer un repas complet (protéine, légume et féculent) sans que les aliments ou les jus ne se mélangent.',
      badge: '3 Compartiments',
      features: [
        'Trois cavités hermétiques évitant le transfert de liquides et de saveurs',
        'Rigidité structurelle accrue par les cloisons intérieures en aluminium',
        'Parfaite pour les formules repas combinées et la livraison à domicile',
        '100% saine, recyclable et inerte avec les denrées alimentaires'
      ],
      specifications: {
        'Format': 'Compartimenté (3 Cavités)',
        'Dimensions Extérieures (Top Outer)': '229 × 179 mm',
        'Dimensions Intérieures (Top Inner)': '214 × 164 mm',
        'Base': '194 × 144 mm',
        'Hauteur': '31 mm',
        'Capacité': '900 ml (total)'
      }
    },
    en: {
      name: '3-Compartment Aluminium Container',
      tagline: 'Hermetic separation ideal for combo takeaways and complete meals',
      description: '900 ml container divided into 3 distinct sections. Allows packaging of a full meal (main protein, starch, and vegetables) without ingredients or juices mixing.',
      badge: '3 Compartments',
      features: [
        'Three separate cavities preventing liquid leakage and flavor transfer',
        'Enhanced structural rigidity provided by the internal aluminium dividers',
        'Perfect for combo meal deals and restaurant delivery services',
        '100% food safe, recyclable, and inert with all foods'
      ],
      specifications: {
        'Shape': 'Compartmented (3 Cavities)',
        'Top Outer Dimensions': '229 × 179 mm',
        'Top Inner Dimensions': '214 × 164 mm',
        'Base': '194 × 144 mm',
        'Height': '31 mm',
        'Capacity': '900 ml (total)'
      }
    }
  },
  {
    id: 'barquette-compart-2',
    brand: 'twist',
    category: 'alimentaire',
    visualType: 'container-compart',
    accentColor: '#bb0112',
    image: containerCompartImg,
    fr: {
      name: 'Barquette Aluminium 2 Compartiments',
      tagline: 'Double section pour plat principal et accompagnement',
      description: 'Barquette en aluminium robuste de 750 ml avec 2 compartiments distincts. Parfaite pour séparer un plat principal chaud de sa sauce ou de son accompagnement.',
      badge: '2 Compartiments',
      features: [
        'Deux compartiments optimaux pour le portionnement des repas',
        'Excellente tenue thermique conservant la chaleur dans chaque compartiment',
        'Séparateur central surélevé évitant les débordements',
        'Recyclable et empilable à plat pour un gain de place optimal'
      ],
      specifications: {
        'Format': 'Compartimenté (2 Cavités)',
        'Dimensions Extérieures (Top Outer)': '226 × 177 mm',
        'Dimensions Intérieures (Top Inner)': '211 × 162 mm',
        'Base': '191 × 142 mm',
        'Hauteur': '29 mm',
        'Capacité': '750 ml (total)'
      }
    },
    en: {
      name: '2-Compartment Aluminium Container',
      tagline: 'Double section for main course and side division',
      description: 'Sturdy 750 ml aluminium container with 2 distinct cavities. Ideal for separating a hot main dish from its side or sauce during transport.',
      badge: '2 Compartments',
      features: [
        'Two compartments optimized for convenient meal portioning',
        'Superb thermal retention keeping both sections warm',
        'Raised central barrier preventing foods from spilling over',
        'Recyclable and nested storage saving space'
      ],
      specifications: {
        'Shape': 'Compartmented (2 Cavities)',
        'Top Outer Dimensions': '226 × 177 mm',
        'Top Inner Dimensions': '211 × 162 mm',
        'Base': '191 × 142 mm',
        'Height': '29 mm',
        'Capacity': '750 ml (total)'
      }
    }
  },

  // Kitchen Products
  {
    id: 'twist-foil',
    brand: 'twist',
    category: 'alimentaire',
    visualType: 'foil',
    accentColor: '#bb0112',
    image: twistFoilImg,
    fr: {
      name: 'Papier Aluminium',
      tagline: 'Un Geste Simple Garde Chaud',
      description: 'Papier d\'aluminium très résistant à la chaleur, conçu pour la restauration professionnelle, la cuisson et la conservation domestique rapide. Forme une barrière absolue pour retenir la chaleur, les saveurs et l\'humidité.',
      badge: 'Essentiel Cuisine',
      features: [
        'Rétention thermique supérieure gardant les plats chauds pendant des heures',
        'Résistance avancée aux déchirures et perforations - se façonne facilement',
        'Barrière parfaite protégeant les aliments de la lumière, de l\'humidité et des odeurs',
        'Épaisseur premium évitant les ruptures lors des cuissons ou rôtissages au four'
      ],
      specifications: {
        'Matériau': 'Alliage d\'Aluminium 100% Alimentaire',
        'Distribution': 'Boîte distributrice à découpe facile / rouleaux professionnels',
        'Dimensions Disponibles': ['5m', '6m', '8m', '12m', '16m', '100m', '200m']
      }
    },
    en: {
      name: 'Aluminium Foil',
      tagline: 'Keeps It Perfectly Warm',
      description: 'Highly heat-resistant aluminium foil engineered for professional catering, baking, and quick kitchen preservation. Forms an absolute barrier to lock in flavor, heat, and moisture.',
      badge: 'Kitchen Essential',
      features: [
        'Superior thermal retention keeps catering dishes warm for hours',
        'Advanced tear and puncture resistance - folds easily and stays securely shaped',
        'Provides a perfect barrier shielding foods from light, moisture, and odors',
        'Premium thickness ensures no tearing during cooking, roasting, or baking'
      ],
      specifications: {
        'Material': '100% Food-Safe Aluminium Alloy',
        'Dispensing': 'Easy-tear box design / catering size rolls',
        'Available Dimensions': ['5m', '6m', '8m', '12m', '16m', '100m', '200m']
      }
    }
  },
  {
    id: 'twist-cling',
    brand: 'twist',
    category: 'alimentaire',
    visualType: 'cling-film',
    accentColor: '#bb0112',
    image: twistClingImg,
    fr: {
      name: 'Film Alimentaire',
      tagline: 'Un Geste Simple Garde Frais',
      description: 'Préservez les saveurs et bloquez l\'humidité. Le film étirable s\'étire exceptionnellement et adhère fermement au verre, à la céramique et aux plastiques pour former un joint hermétique protecteur.',
      badge: 'Fraîcheur Verrouillée',
      features: [
        'Élasticité inégalée épousant parfaitement les saladiers, assiettes et ingrédients frais',
        'Adhérence statique puissante empêchant l\'air d\'entrer pour une fraîcheur prolongée',
        'Transparence cristalline exceptionnelle permettant de voir les aliments préservés',
        'Matériau de qualité alimentaire sans toxines pour réfrigérateur et contact direct'
      ],
      specifications: {
        'Niveau d\'Élasticité': 'Film étirable à mémoire de forme élevée',
        'Adhérence': 'Auto-scellant par charge statique naturelle',
        'Dimensions Disponibles': ['8m', '12m', '16m', '100m', '200m', '300m']
      }
    },
    en: {
      name: 'Cling Film',
      tagline: 'Keeps It Perfectly Fresh',
      description: 'Preserve flavors and lock out humidity. Our Cling Film stretches exceptionally and clings tightly to glass, ceramic, and plastics, forming a protective airtight seal to maximize freshness.',
      badge: 'Fresh Lock',
      features: [
        'Unrivaled elasticity stretches perfectly around bowls, plates, and raw ingredients',
        'Aggressive static cling locks air out to keep food fresh for longer periods',
        'Outstanding crystal-clear transparency lets you view preserved foods immediately',
        'Food-grade, toxin-free material safe for refrigerator & direct food storage'
      ],
      specifications: {
        'Elasticity Level': 'High-stretch recovery wrap',
        'Cling Action': 'Static-charged self-sealing layers',
        'Available Dimensions': ['8m', '12m', '16m', '100m', '200m', '300m']
      }
    }
  },
  {
    id: 'twist-baking',
    brand: 'twist',
    category: 'alimentaire',
    visualType: 'baking-paper',
    accentColor: '#bb0112',
    image: twistBakingImg,
    fr: {
      name: 'Papier Cuisson',
      tagline: 'Un Geste Simple Protège',
      description: 'Le partenaire idéal des pâtissiers et cuisiniers. Le papier cuisson est enduit sur les deux faces d\'une couche de silicone anti-adhésive premium, résistant aux fortes températures tout en laissant glisser vos créations.',
      badge: 'Anti-Adhésif Pro',
      features: [
        'Revêtement silicone double face de qualité supérieure - pas besoin de beurrer ou huiler',
        'Excellente résistance thermique idéale pour les fours traditionnels et micro-ondes',
        'Préserve la propreté de vos plaques en évitant que graisses et sucres ne brûlent',
        'Source de papier biodégradable éco-responsable - compostable et réutilisable'
      ],
      specifications: {
        'Revêtement': 'Silicone double face anti-adhésif',
        'Limite de Température': 'Sûr jusqu\'à 220°C (428°F)',
        'Éco-Labels': 'Biodégradable, blanchi sans chlore, certifié FSC',
        'Dimensions Disponibles': ['5m x 38cm', '8m x 38cm', '10m x 38cm']
      }
    },
    en: {
      name: 'Baking Paper',
      tagline: 'Keeps It Perfectly Safe',
      description: 'The baker\'s ultimate partner. Our Baking Paper is coated on both sides with a premium non-stick silicone layer, resisting high oven temperatures while letting baked creations slide right off.',
      badge: 'Non-Stick Pro',
      features: [
        'Premium double-sided silicone non-stick coating - no greasing or sprays needed',
        'Superb heat-resistant rating makes it perfect for standard ovens & microwaves',
        'Maintains kitchen tray hygiene by stopping grease or sugars from burning on',
        'Eco-responsible biodegradable paper source - compostable and reusable'
      ],
      specifications: {
        'Coating Formula': 'Double-sided non-stick silicone',
        'Temperature Limit': 'Safe up to 220°C (428°F)',
        'Eco Credentials': 'Biodegradable, chlorine-free bleached, FSC certified',
        'Available Dimensions': ['5m x 38cm', '8m x 38cm', '10m x 38cm']
      }
    }
  }
];

export { adproMasterImg, twistMasterImg };
