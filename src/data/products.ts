// Import the generated high-quality brand master images
import adproMasterImg from '../assets/adpro_industrial_tapes.png';
import twistMasterImg from '../assets/twist_food_packaging.png';

// Import the high-quality product images
import adproStandardImg from '../assets/adpro_standard.png';
import adproPrintedImg from '../assets/adpro_printed.png';
import adproDoubleSidedImg from '../assets/adpro_double_sided.png';
import adproStretchFilmImg from '../assets/adpro_stretch_film.png';
import adproMaskingImg from '../assets/adpro_masking.png';
import adproInsulatingImg from '../assets/adpro_insulating.png';
import adproFloorImg from '../assets/adpro_floor.png';
import adproDuctImg from '../assets/adpro_duct.png';
import adproContainersImg from '../assets/adpro_containers.png';
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
  category: 'tapes' | 'packaging' | 'kitchen';
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
    category: 'tapes',
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
    category: 'tapes',
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
    category: 'tapes',
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
    category: 'packaging',
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
    category: 'tapes',
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
    category: 'tapes',
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
    category: 'tapes',
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
        'Résistance à l\'Usure': 'Haute résistance à l\'abrasion et au roulement de chariots',
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
    category: 'tapes',
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
  {
    id: 'adpro-containers',
    brand: 'ADPRO',
    category: 'packaging',
    visualType: 'container',
    accentColor: '#00288e',
    image: adproContainersImg,
    fr: {
      name: 'Barquettes en Aluminium',
      tagline: 'Emballages Rigides Résistant à la Chaleur',
      description: 'Emballages alimentaires écologiques et haut de gamme, fabriqués à partir d\'aluminium 100% recyclable. Conçus pour supporter les températures de congélation comme de cuisson tout en préservant les saveurs.',
      badge: 'Restauration',
      features: [
        'Alliage d\'aluminium premium 100% alimentaire et sain',
        'Polyvalence thermique totale - passe de façon sûre au congélateur, au four et au micro-ondes',
        'Parois plissées rigides empêchant les déformations et les fuites de liquides',
        'Modèle léger, éco-responsable et recyclable à l\'infini'
      ],
      specifications: {
        'Recyclabilité': 'Recyclage infini 100% respectueux de l\'environnement',
        'Sécurité Alimentaire': 'Stérile, inerte et non réactif avec les aliments',
        'Dimensions Disponibles': [
          '3 Compartiments : 229 x 179 x 31 mm (idéal plats combinés)',
          'Standard Rectangulaire : 218 x 178 x 39 mm',
          'Moyen Rectangulaire : 200 x 139 x 40 mm',
          'Petit Rectangulaire : 152 x 105 x 40 mm',
          'Moule à Cake : 230 x 101 x 51 mm',
          'Gobelet Portion Rond : 82 x 36 mm'
        ]
      }
    },
    en: {
      name: 'Aluminium Food Containers',
      tagline: 'Rigid Heat-Resistant Gastronomy Packaging',
      description: 'Eco-friendly and premium food containers, crafted from 100% recyclable food-grade aluminium. Designed to withstand freezing to baking temperatures seamlessly, maintaining meal flavor and rigid shape.',
      badge: 'Food Service',
      features: [
        '100% food-safe, high-grade premium aluminium alloy construction',
        'Unmatched temperature versatility - perfectly freezer, oven, and microwave safe',
        'Rigid fluted sidewall engineering prevents flexing and messy leaks',
        'Eco-responsible and fully recyclable lightweight design'
      ],
      specifications: {
        'Recyclability': '100% eco-friendly infinite recycling',
        'Safety Status': 'Sterile, inert, and non-reactive with foodstuffs',
        'Available Dimensions': [
          '3-Compartment Container: 229 x 179 x 31 mm (ideal for combo meals)',
          'Standard Rectangular Pan: 218 x 178 x 39 mm',
          'Medium Rectangular Pan: 200 x 139 x 40 mm',
          'Small Rectangular Pan: 152 x 105 x 40 mm',
          'Deep Loaf Pan: 230 x 101 x 51 mm',
          'Round Portion Cup: 82 x 36 mm (perfect for desserts or sauces)'
        ]
      }
    }
  },
  {
    id: 'twist-foil',
    brand: 'twist',
    category: 'kitchen',
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
    category: 'kitchen',
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
    category: 'kitchen',
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
