import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

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

interface ProductTranslation {
  name: string;
  tagline: string;
  description: string;
  badge: string;
  features: string[];
  specifications: {
    [key: string]: string | string[];
  };
}

interface Product {
  id: string;
  brand: 'ADPRO' | 'twist';
  category: 'tapes' | 'packaging' | 'kitchen';
  visualType: string;
  accentColor: string;
  image: string;
  fr: ProductTranslation;
  en: ProductTranslation;
}

const products: Product[] = [
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
      description: 'Conçus sur un support Polypropylène (PP) hautement résistant, nos rubans standards sont étudiés pour un emballage fluide sur lignes manuelles ou automatiques. Disponibles en trois formules d\'adhésif sur mesure.',
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
      description: 'Valorisez votre marque et sécurisez vos envois en un seul geste. Nos rubans imprimés sur mesure affichent des graphismes haute résolution qui transforment chaque boîte en support publicitaire tout en signalant immédiatement toute tentative d\'effraction.',
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
      tagline: 'One Twist Keeps It Warm',
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
      description: 'Préservez les saveurs et bloquez l\'humidité. Le film étirable twist s\'étire exceptionnellement et adhère fermement au verre, à la céramique et aux plastiques pour former un joint hermétique protecteur.',
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
      tagline: 'One Twist Keeps It Fresh',
      description: 'Preserve flavors and lock out humidity. twist Cling Film stretches exceptionally and clings tightly to glass, ceramic, and plastics, forming a protective airtight seal to maximize freshness.',
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
      description: 'Le partenaire idéal des pâtissiers et cuisiniers. Le papier cuisson twist est enduit sur les deux faces d\'une couche de silicone anti-adhésive premium, résistant aux fortes températures tout en laissant glisser vos créations.',
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
      tagline: 'One Twist Keeps It Safe',
      description: 'The baker\'s ultimate partner. twist Baking Paper is coated on both sides with a premium non-stick silicone layer, resisting high oven temperatures while letting baked creations slide right off.',
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

function ProductVisual({ visualType }: { visualType: string }) {
  // Renders a high-end styled CSS/SVG graphic illustrating the product
  switch (visualType) {
    case 'standard-tape':
      return (
        <svg className="w-24 h-24 text-primary" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="8" strokeOpacity="0.1" />
          <circle cx="50" cy="50" r="32" stroke="#d97706" strokeWidth="12" strokeDasharray="4 2" />
          <circle cx="50" cy="50" r="22" fill="#edeeef" stroke="#c4c5d5" strokeWidth="2" />
          <circle cx="50" cy="50" r="10" fill="#ffffff" />
          <path d="M70 20 L80 15 M78 30 L88 25" stroke="#d97706" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case 'printed-tape':
      return (
        <svg className="w-24 h-24 text-primary" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="8" strokeOpacity="0.1" />
          <circle cx="50" cy="50" r="32" stroke="#00288e" strokeWidth="12" />
          <circle cx="50" cy="50" r="32" stroke="#ffffff" strokeWidth="4" strokeDasharray="3 3" />
          <circle cx="50" cy="50" r="22" fill="#edeeef" stroke="#c4c5d5" strokeWidth="2" />
          <circle cx="50" cy="50" r="10" fill="#ffffff" />
          <text x="50" y="53" textAnchor="middle" fill="#00288e" fontSize="6" fontWeight="bold" fontFamily="sans-serif">ADPRO</text>
        </svg>
      );
    case 'double-tape':
      return (
        <svg className="w-24 h-24 text-primary" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="8" strokeOpacity="0.1" />
          <circle cx="50" cy="50" r="34" stroke="#e1e3e4" strokeWidth="6" />
          <circle cx="50" cy="50" r="30" stroke="#bb0112" strokeWidth="2" />
          <circle cx="50" cy="50" r="26" stroke="#ffffff" strokeWidth="6" />
          <circle cx="50" cy="50" r="18" fill="#edeeef" stroke="#c4c5d5" strokeWidth="2" />
          <circle cx="50" cy="50" r="8" fill="#ffffff" />
        </svg>
      );
    case 'stretch-film':
      return (
        <svg className="w-24 h-24 text-primary" viewBox="0 0 100 100" fill="none">
          <rect x="38" y="10" width="24" height="80" rx="3" fill="#e1e3e4" stroke="#c4c5d5" strokeWidth="2" />
          <rect x="34" y="20" width="32" height="60" rx="4" fill="#60a5fa" fillOpacity="0.2" stroke="#3b82f6" strokeWidth="1.5" strokeOpacity="0.5" />
          <path d="M34 30 C 45 35, 55 25, 66 30" stroke="#ffffff" strokeWidth="2" strokeOpacity="0.6" />
          <path d="M34 50 C 45 55, 55 45, 66 50" stroke="#ffffff" strokeWidth="2" strokeOpacity="0.6" />
          <path d="M34 70 C 45 75, 55 65, 66 70" stroke="#ffffff" strokeWidth="2" strokeOpacity="0.6" />
        </svg>
      );
    case 'masking-tape':
      return (
        <svg className="w-24 h-24 text-primary" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="8" strokeOpacity="0.1" />
          <circle cx="50" cy="50" r="32" stroke="#fef08a" strokeWidth="12" strokeOpacity="0.8" />
          <circle cx="50" cy="50" r="22" fill="#fcf9e8" stroke="#eab308" strokeWidth="1" strokeDasharray="2 1" />
          <circle cx="50" cy="50" r="12" fill="#ffffff" stroke="#c4c5d5" strokeWidth="2" />
        </svg>
      );
    case 'insulating-tape':
      return (
        <svg className="w-24 h-24 text-primary" viewBox="0 0 100 100" fill="none">
          <circle cx="45" cy="45" r="28" stroke="#111827" strokeWidth="8" />
          <circle cx="45" cy="45" r="20" fill="#edeeef" stroke="#c4c5d5" />
          <circle cx="55" cy="55" r="28" stroke="#ef4444" strokeWidth="8" strokeOpacity="0.9" />
          <circle cx="55" cy="55" r="20" fill="#edeeef" stroke="#c4c5d5" />
        </svg>
      );
    case 'floor-tape':
      return (
        <svg className="w-24 h-24 text-primary" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="8" strokeOpacity="0.1" />
          <circle cx="50" cy="50" r="32" stroke="#eab308" strokeWidth="12" />
          <circle cx="50" cy="50" r="32" stroke="#111827" strokeWidth="12" strokeDasharray="8 8" />
          <circle cx="50" cy="50" r="22" fill="#edeeef" stroke="#c4c5d5" strokeWidth="2" />
          <circle cx="50" cy="50" r="10" fill="#ffffff" />
        </svg>
      );
    case 'duct-tape':
      return (
        <svg className="w-24 h-24 text-primary" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="8" strokeOpacity="0.1" />
          <circle cx="50" cy="50" r="32" stroke="#9ca3af" strokeWidth="12" />
          <circle cx="50" cy="50" r="32" stroke="#4b5563" strokeWidth="1" strokeDasharray="1 1" />
          <circle cx="50" cy="50" r="22" fill="#374151" stroke="#1f2937" strokeWidth="2" />
          <circle cx="50" cy="50" r="10" fill="#ffffff" />
        </svg>
      );
    case 'container':
      return (
        <svg className="w-24 h-24 text-primary" viewBox="0 0 100 100" fill="none">
          <rect x="15" y="25" width="70" height="50" rx="6" fill="#f3f4f6" stroke="#9ca3af" strokeWidth="3" />
          <rect x="22" y="32" width="56" height="36" rx="2" fill="none" stroke="#d1d5db" strokeWidth="2" strokeDasharray="4 2" />
          <line x1="38" y1="25" x2="38" y2="75" stroke="#9ca3af" strokeWidth="2" />
          <line x1="62" y1="25" x2="62" y2="75" stroke="#9ca3af" strokeWidth="2" />
        </svg>
      );
    case 'foil':
      return (
        <svg className="w-24 h-24 text-secondary" viewBox="0 0 100 100" fill="none">
          <rect x="10" y="38" width="80" height="24" rx="3" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="2" />
          <rect x="15" y="34" width="70" height="32" rx="4" fill="#9ca3af" fillOpacity="0.3" stroke="#d1d5db" strokeWidth="1.5" />
          <line x1="10" y1="50" x2="90" y2="50" stroke="#ffffff" strokeWidth="2" strokeOpacity="0.8" />
        </svg>
      );
    case 'cling-film':
      return (
        <svg className="w-24 h-24 text-secondary" viewBox="0 0 100 100" fill="none">
          <rect x="10" y="38" width="80" height="24" rx="3" fill="#eff6ff" stroke="#93c5fd" strokeWidth="2" />
          <rect x="15" y="32" width="70" height="36" rx="4" fill="#3b82f6" fillOpacity="0.1" stroke="#60a5fa" strokeWidth="1" strokeOpacity="0.4" />
          <path d="M15 45 Q 50 35 85 45" stroke="#ffffff" strokeWidth="2" strokeOpacity="0.6" />
        </svg>
      );
    case 'baking-paper':
      return (
        <svg className="w-24 h-24 text-secondary" viewBox="0 0 100 100" fill="none">
          <rect x="10" y="38" width="80" height="24" rx="3" fill="#fef08a" stroke="#ca8a04" strokeWidth="2" />
          <rect x="15" y="36" width="70" height="28" rx="2" fill="#fef9c3" stroke="#eab308" strokeWidth="1" />
          <path d="M10 50 L90 50" stroke="#ffffff" strokeWidth="1" strokeDasharray="3 3" />
        </svg>
      );
    default:
      return (
        <span className="material-symbols-outlined text-4xl text-primary">box</span>
      );
  }
}

export default function Products() {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedDimension, setSelectedDimension] = useState<string>('');

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter products based on category and search query
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === 'all' ||
        (selectedCategory === 'adpro-tapes' && product.brand === 'ADPRO' && product.category === 'tapes') ||
        (selectedCategory === 'adpro-packaging' && product.brand === 'ADPRO' && product.category === 'packaging') ||
        (selectedCategory === 'twist-food' && product.brand === 'twist');

      const productData = language === 'fr' ? product.fr : product.en;
      const matchesSearch =
        productData.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        productData.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        productData.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        productData.features.some(f => f.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery, language]);

  // Set default dimension when modal opens
  const handleOpenProduct = (product: Product) => {
    setSelectedProduct(product);
    const productData = language === 'fr' ? product.fr : product.en;
    const dimensions = productData.specifications['Available Dimensions'] || 
                       productData.specifications['Available Lengths'] ||
                       productData.specifications['Dimensions Disponibles'] ||
                       productData.specifications['Longueurs Disponibles'];
    if (dimensions && Array.isArray(dimensions)) {
      setSelectedDimension(dimensions[0]);
    } else if (dimensions && typeof dimensions === 'string') {
      setSelectedDimension(dimensions);
    } else {
      setSelectedDimension('');
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30, filter: 'blur(4px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="bg-surface min-h-screen">
      {/* HERO SECTION */}
      <section className="py-24 bg-surface-container-lowest border-b border-border-muted relative overflow-hidden bg-pattern-dot">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-surface/20 pointer-events-none" />
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-primary/5 text-primary px-4 py-1.5 rounded-full font-label-sm text-label-sm mb-6 border border-primary/10 shadow-sm uppercase tracking-wider">
              <span className="material-symbols-outlined text-[16px] text-primary">verified</span>
              {t('products.badge')}
            </motion.div>
            <motion.h1 variants={fadeInUp} className="font-display-lg text-display-lg text-on-surface mb-6 md:text-[56px]">
              {language === 'fr' ? (
                <>Nos <span className="text-primary">Produits</span></>
              ) : (
                <>Our <span className="text-primary">Products</span></>
              )}
            </motion.h1>
            <motion.p variants={fadeInUp} className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-2xl mx-auto leading-relaxed">
              {t('products.subtitle')}
            </motion.p>
          </motion.div>

          {/* Quick Metrics */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-6"
          >
            <div className="bg-surface border border-border-muted p-5 rounded-2xl shadow-subtle hover:border-primary/20 transition-colors">
              <div className="font-display-lg text-headline-xl text-primary mb-1">2</div>
              <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">{t('products.statBrands')}</div>
            </div>
            <div className="bg-surface border border-border-muted p-5 rounded-2xl shadow-subtle hover:border-primary/20 transition-colors">
              <div className="font-display-lg text-headline-xl text-primary mb-1">12+</div>
              <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">{t('products.statCategories')}</div>
            </div>
            <div className="bg-surface border border-border-muted p-5 rounded-2xl shadow-subtle hover:border-primary/20 transition-colors">
              <div className="font-display-lg text-headline-xl text-secondary mb-1">100%</div>
              <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">{t('products.statFood')}</div>
            </div>
            <div className="bg-surface border border-border-muted p-5 rounded-2xl shadow-subtle hover:border-primary/20 transition-colors">
              <div className="font-display-lg text-headline-xl text-primary mb-1">
                {language === 'fr' ? 'Sur Mesure' : 'Custom'}
              </div>
              <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">{t('products.statPrinting')}</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* BRAND MASTER PRESENTATION MODULES */}
      <section className="py-16 bg-surface">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop space-y-16">
          
          {/* ADPRO Master Module */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="bg-surface-container-lowest border border-border-muted rounded-3xl overflow-hidden shadow-subtle grid md:grid-cols-2 gap-0"
          >
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="text-primary font-label-md text-label-md uppercase tracking-wider mb-2">
                {language === 'fr' ? 'Gamme Haute Performance' : 'High Performance Range'}
              </div>
              <h2 className="font-display-lg text-headline-xl text-on-surface mb-4">ADPRO</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                {t('products.adproDesc')}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-primary/5 text-primary text-[12px] font-medium px-3 py-1 rounded-full border border-primary/10">Acrylic, Solvent & Hotmelt</span>
                <span className="bg-primary/5 text-primary text-[12px] font-medium px-3 py-1 rounded-full border border-primary/10">Custom Printing</span>
                <span className="bg-primary/5 text-primary text-[12px] font-medium px-3 py-1 rounded-full border border-primary/10">5S Standards</span>
              </div>
              <button 
                onClick={() => setSelectedCategory('adpro-tapes')} 
                className="inline-flex items-center gap-2 text-primary font-label-md text-label-md hover:underline text-left self-start group cursor-pointer"
              >
                {language === 'fr' ? 'Filtrer le Portfolio ADPRO' : 'Filter ADPRO Portfolio'} 
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </div>
            <div className="relative min-h-[280px] bg-surface-container overflow-hidden group">
              <img 
                src={adproMasterImg} 
                alt="ADPRO Industrial Tapes" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-6 left-6 text-white z-10">
                <p className="text-label-sm font-label-sm uppercase tracking-wider opacity-85">
                  {language === 'fr' ? 'Excellence Industrielle' : 'Manufacturing Excellence'}
                </p>
                <h4 className="font-headline-lg text-headline-lg">
                  {language === 'fr' ? 'Production de Pointe' : 'State-of-the-Art Production'}
                </h4>
              </div>
            </div>
          </motion.div>

          {/* twist Master Module */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="bg-surface-container-lowest border border-border-muted rounded-3xl overflow-hidden shadow-subtle grid md:grid-cols-2 gap-0"
          >
            <div className="relative min-h-[280px] bg-surface-container overflow-hidden group order-2 md:order-1">
              <img 
                src={twistMasterImg} 
                alt="twist Food Packaging" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-6 left-6 text-white z-10">
                <p className="text-label-sm font-label-sm uppercase tracking-wider opacity-85">
                  {language === 'fr' ? 'Matériaux Alimentaires Sûrs' : 'Food Safe Materials'}
                </p>
                <h4 className="font-headline-lg text-headline-lg">
                  {language === 'fr' ? 'Fraîcheur Longue Durée' : 'Fresh Lock Technology'}
                </h4>
              </div>
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center order-1 md:order-2">
              <div className="text-secondary font-label-md text-label-md uppercase tracking-wider mb-2">
                {language === 'fr' ? 'Solutions Restauration & Cuisine' : 'Food Service & Kitchen Solutions'}
              </div>
              <h2 className="font-display-lg text-headline-xl text-on-surface mb-4">twist</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                {t('products.twistDesc')}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-secondary/5 text-secondary text-[12px] font-medium px-3 py-1 rounded-full border border-secondary/10">100% Recyclable Foil</span>
                <span className="bg-secondary/5 text-secondary text-[12px] font-medium px-3 py-1 rounded-full border border-secondary/10">Double-Sided Silicone</span>
                <span className="bg-secondary/5 text-secondary text-[12px] font-medium px-3 py-1 rounded-full border border-secondary/10">Superior Elasticity</span>
              </div>
              <button 
                onClick={() => setSelectedCategory('twist-food')} 
                className="inline-flex items-center gap-2 text-secondary font-label-md text-label-md hover:underline text-left self-start group cursor-pointer"
              >
                {language === 'fr' ? 'Filtrer la Collection twist' : 'Filter twist Collection'} 
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </div>
          </motion.div>

        </div>
      </section>

      {/* FILTER & INTERACTIVE SHOWCASE SECTION */}
      <section className="py-20 bg-surface-container-low border-t border-border-muted">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          
          <div className="text-center mb-12">
            <h2 className="font-display-lg text-headline-xl text-on-surface mb-4">
              {language === 'fr' ? 'Recherche de Produits Interactive' : 'Interactive Product Finder'}
            </h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-xl mx-auto">
              {language === 'fr' 
                ? 'Utilisez nos onglets de catégorie et la recherche en temps réel pour explorer nos spécifications et tailles.' 
                : 'Use our live category tabs and real-time product search to explore exact specifications and sizes.'}
            </p>
          </div>

          {/* Interactive Filters Bar */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-10">
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 bg-surface p-1.5 rounded-2xl border border-border-muted shadow-subtle w-full md:w-auto">
              {[
                { id: 'all', label: t('products.all'), icon: 'grid_view' },
                { id: 'adpro-tapes', label: t('products.tapes'), icon: 'layers' },
                { id: 'adpro-packaging', label: language === 'fr' ? 'ADPRO Spécialités' : 'ADPRO Specialty', icon: 'package_2' },
                { id: 'twist-food', label: language === 'fr' ? 'twist Emballages' : 'twist Food Wrap', icon: 'restaurant' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-label-sm text-label-sm transition-all duration-300 relative cursor-pointer ${
                    selectedCategory === tab.id
                      ? 'bg-primary text-white shadow-sm'
                      : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
                  }`}
                >
                  <span className="material-symbols-outlined text-[18px]">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80 shadow-subtle rounded-2xl">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">
                search
              </span>
              <input
                type="text"
                placeholder={language === 'fr' ? 'Rechercher des produits et spécifications...' : 'Search products & specs...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-10 py-3 rounded-2xl bg-surface border border-border-muted text-on-surface focus:outline-none focus:border-primary transition-all font-body-sm text-body-sm"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px]">close</span>
                </button>
              )}
            </div>
          </div>

          {/* Dynamic Grid Layout */}
          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => {
                const productData = language === 'fr' ? product.fr : product.en;
                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    key={product.id}
                    whileHover={{ y: -6, transition: { duration: 0.3 } }}
                    className="bg-surface-container-lowest rounded-2xl overflow-hidden border border-border-muted shadow-subtle hover:shadow-lg transition-all flex flex-col justify-between group"
                  >
                    {/* Card Image/Icon Header */}
                    <div className="aspect-[4/3] bg-surface relative overflow-hidden flex items-center justify-center border-b border-border-muted">
                      {/* Product image with sleek zoom effect */}
                      <img 
                        src={product.image} 
                        alt={productData.name} 
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      
                      {/* Brand indicator bubble */}
                      <div className="absolute top-4 left-4 flex gap-1.5">
                        <span className={`px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider border shadow-sm ${
                          product.brand === 'ADPRO'
                            ? 'bg-primary/5 text-primary border-primary/20'
                            : 'bg-secondary/5 text-secondary border-secondary/20'
                        }`}>
                          {product.brand}
                        </span>
                        <span className="bg-surface border border-border-muted text-on-surface-variant px-2.5 py-1 rounded-md text-[11px] font-medium shadow-sm">
                          {productData.badge}
                        </span>
                      </div>
                    </div>

                    {/* Card Information Body */}
                    <div className="p-6 flex-grow flex flex-col justify-between">
                      <div>
                        <h3 className="font-headline-lg text-headline-lg text-on-surface mb-1 group-hover:text-primary transition-colors">
                          {productData.name}
                        </h3>
                        <p className="italic text-[13px] font-medium text-on-surface-variant/80 mb-3 block">
                          "{productData.tagline}"
                        </p>
                        <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3 mb-6">
                          {productData.description}
                        </p>
                      </div>

                      <div className="space-y-4 pt-2">
                        <div className="flex flex-wrap gap-1.5">
                          {productData.features.slice(0, 2).map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-1 text-[12px] text-on-surface-variant/90 bg-surface rounded-lg px-2.5 py-1 border border-border-muted">
                              <span className="material-symbols-outlined text-[14px] text-primary">check_circle</span>
                              <span className="line-clamp-1">{feature}</span>
                            </div>
                          ))}
                        </div>

                        <button
                          onClick={() => handleOpenProduct(product)}
                          className={`w-full py-3 rounded-xl font-label-sm text-label-sm transition-all duration-300 border flex items-center justify-center gap-2 group-hover:shadow-sm cursor-pointer ${
                            product.brand === 'ADPRO'
                              ? 'bg-primary/5 hover:bg-primary hover:text-white border-primary/20 text-primary'
                              : 'bg-secondary/5 hover:bg-secondary hover:text-white border-secondary/20 text-secondary'
                          }`}
                        >
                          {language === 'fr' ? 'Fiche Technique & Tailles' : 'Technical Details & Sizes'}
                          <span className="material-symbols-outlined text-[18px]">info</span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>

            {/* Zero States Search result fallback */}
            {filteredProducts.length === 0 && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full py-16 text-center"
              >
                <div className="w-16 h-16 bg-surface-container rounded-full flex items-center justify-center mx-auto mb-4 text-on-surface-variant">
                  <span className="material-symbols-outlined text-3xl">search_off</span>
                </div>
                <h3 className="font-headline-lg text-on-surface mb-2">
                  {language === 'fr' ? 'Aucun produit correspondant trouvé' : 'No matching products found'}
                </h3>
                <p className="font-body-sm text-on-surface-variant mb-6">
                  {language === 'fr' 
                    ? `Nous n'avons rien trouvé correspondant à "${searchQuery}". Veuillez vérifier l'orthographe.` 
                    : `We couldn't find anything matching "${searchQuery}". Please check your spelling or try standard categories.`}
                </p>
                <button
                  onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
                  className="bg-primary text-white px-5 py-2.5 rounded-xl font-label-sm text-label-sm hover:bg-primary-container transition-colors shadow-sm cursor-pointer"
                >
                  {language === 'fr' ? 'Réinitialiser la Recherche' : 'Reset Filter Search'}
                </button>
              </motion.div>
            )}
          </motion.div>

        </div>
      </section>

      {/* PRODUCT SPECIFICATION GLASSMORPHIC DETAIL MODAL */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="bg-surface rounded-3xl border border-border-muted shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className={`p-6 md:p-8 text-white relative ${
                selectedProduct.brand === 'ADPRO' ? 'bg-primary' : 'bg-secondary'
              }`}>
                <div className="absolute top-6 right-6 flex items-center gap-2">
                  <button 
                    onClick={() => setSelectedProduct(null)}
                    className="w-10 h-10 bg-white/10 hover:bg-white/20 transition-colors rounded-full flex items-center justify-center border border-white/20 text-white cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[20px]">close</span>
                  </button>
                </div>

                <div className="inline-block bg-white/10 text-white border border-white/20 px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider mb-3">
                  {selectedProduct.brand} • {(language === 'fr' ? selectedProduct.fr : selectedProduct.en).badge}
                </div>
                <h2 className="font-display-lg text-headline-xl md:text-3xl mb-1">
                  {(language === 'fr' ? selectedProduct.fr : selectedProduct.en).name}
                </h2>
                <p className="italic text-[14px] opacity-90">
                  "{(language === 'fr' ? selectedProduct.fr : selectedProduct.en).tagline}"
                </p>
              </div>

              {/* Modal Content Scrollable Area */}
              <div className="p-6 md:p-8 overflow-y-auto space-y-8 flex-grow">
                {/* Product Description & Image Grid */}
                <div className="grid md:grid-cols-5 gap-6 items-center">
                  <div className="md:col-span-3">
                    <h4 className="font-headline-lg text-headline-lg text-on-surface mb-3">
                      {language === 'fr' ? 'Présentation du Produit' : 'Product Overview'}
                    </h4>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {(language === 'fr' ? selectedProduct.fr : selectedProduct.en).description}
                    </p>
                  </div>
                  <div className="md:col-span-2 aspect-[4/3] rounded-2xl overflow-hidden border border-border-muted shadow-sm bg-surface-container relative">
                    <img 
                      src={selectedProduct.image} 
                      alt={(language === 'fr' ? selectedProduct.fr : selectedProduct.en).name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Grid: Features & Specifications */}
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Features List */}
                  <div>
                    <h4 className="font-headline-lg text-headline-lg text-on-surface mb-4">
                      {t('products.features')}
                    </h4>
                    <ul className="space-y-3.5">
                      {(language === 'fr' ? selectedProduct.fr : selectedProduct.en).features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                          <span className={`material-symbols-outlined text-[20px] shrink-0 mt-0.5 ${
                            selectedProduct.brand === 'ADPRO' ? 'text-primary' : 'text-secondary'
                          }`}>
                            check_circle
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technical Specifications */}
                  <div>
                    <h4 className="font-headline-lg text-headline-lg text-on-surface mb-4">
                      {language === 'fr' ? 'Données Techniques' : 'Technical Data'}
                    </h4>
                    <div className="border border-border-muted rounded-2xl overflow-hidden bg-surface-container-lowest">
                      <table className="w-full text-left font-body-sm text-body-sm">
                        <tbody>
                          {Object.entries((language === 'fr' ? selectedProduct.fr : selectedProduct.en).specifications).map(([key, val], idx) => (
                            <tr key={idx} className="border-b last:border-0 border-border-muted">
                              <td className="p-3.5 font-semibold text-on-surface bg-surface-container-low/50 w-2/5 border-r border-border-muted">
                                {key}
                              </td>
                              <td className="p-3.5 text-on-surface-variant w-3/5">
                                {Array.isArray(val) ? (
                                  <ul className="list-disc pl-4 space-y-1">
                                    {val.map((item, i) => <li key={i}>{item}</li>)}
                                  </ul>
                                ) : (
                                  val
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* Interactive Dimension / Option Selector Widget */}
                {(() => {
                  const productData = language === 'fr' ? selectedProduct.fr : selectedProduct.en;
                  const dims = productData.specifications['Available Dimensions'] || 
                               productData.specifications['Available Lengths'] ||
                               productData.specifications['Dimensions Disponibles'] ||
                               productData.specifications['Longueurs Disponibles'];
                  if (dims) {
                    return (
                      <div className="bg-surface-container p-6 rounded-2xl border border-border-muted">
                        <h4 className="font-headline-lg text-body-lg text-on-surface mb-3 flex items-center gap-2">
                          <span className="material-symbols-outlined text-[22px]">format_size</span>
                          {language === 'fr' ? 'Sélectionner la Spécification' : 'Select Package Specification'}
                        </h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">
                          {language === 'fr' 
                            ? 'Choisissez parmi nos tailles standard pour pré-remplir votre demande de devis.' 
                            : 'Choose from our standard sizes to pre-fill a sample or quote request.'}
                        </p>
                        <div className="flex flex-wrap gap-2.5">
                          {(Array.isArray(dims) ? dims : [dims]).map((dim, idx) => (
                            <button
                              key={idx}
                              onClick={() => setSelectedDimension(dim)}
                              className={`px-4 py-2.5 rounded-xl font-label-sm text-label-sm transition-all duration-300 border cursor-pointer ${
                                selectedDimension === dim
                                  ? selectedProduct.brand === 'ADPRO'
                                    ? 'bg-primary border-primary text-white shadow-sm'
                                    : 'bg-secondary border-secondary text-white shadow-sm'
                                  : 'bg-surface hover:bg-surface-container-high text-on-surface-variant border-border-muted'
                              }`}
                            >
                              {dim}
                            </button>
                          ))}
                        </div>
                      </div>
                    );
                  }
                  return null;
                })()}
              </div>

              {/* Modal Footer (Action CTAs) */}
              <div className="p-6 md:p-8 bg-surface-container border-t border-border-muted flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div className="text-left">
                  <div className="text-label-sm font-label-sm text-on-surface-variant">
                    {language === 'fr' ? 'Vous recherchez une solution sur mesure ?' : 'Looking for a custom solution?'}
                  </div>
                  <div className="font-body-sm text-body-sm text-on-surface">
                    {language === 'fr' 
                      ? 'Nous fabriquons des formats, largeurs et impressions personnalisés.' 
                      : 'We manufacture custom sizes, widths and prints.'}
                  </div>
                </div>

                <div className="flex gap-3 w-full sm:w-auto">
                  <button 
                    onClick={() => setSelectedProduct(null)}
                    className="px-5 py-3 rounded-xl border border-border-muted font-label-sm text-label-sm hover:bg-surface-container-high transition-colors bg-surface cursor-pointer"
                  >
                    {language === 'fr' ? 'Fermer' : 'Close'}
                  </button>
                  <Link
                    to={`/contact?product=${encodeURIComponent((language === 'fr' ? selectedProduct.fr : selectedProduct.en).name)}${selectedDimension ? `&spec=${encodeURIComponent(selectedDimension)}` : ''}`}
                    onClick={() => setSelectedProduct(null)}
                    className={`px-6 py-3 rounded-xl font-label-sm text-label-sm text-white shadow-md text-center transition-all flex items-center justify-center gap-1.5 hover:shadow-lg cursor-pointer ${
                      selectedProduct.brand === 'ADPRO'
                        ? 'bg-primary hover:bg-primary-container'
                        : 'bg-secondary hover:bg-secondary-container'
                    }`}
                  >
                    {t('products.requestQuote')}
                    <span className="material-symbols-outlined text-[18px]">shopping_cart</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
