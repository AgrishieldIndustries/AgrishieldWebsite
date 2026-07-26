import { ALL_PRODUCTS } from "../pages/Products";

export interface Product {
  id: number;
  name: string;
  type: string;
  category: string;
  sizes: string;
  price: string;
  rating: number;
  badge: boolean;
  img: string;
  packings: Array<{ size: string; price: string }>;
  // Dynamic agricultural metadata
  crops: string[];
  stages: string[];
  concerns: string[];
  dosage?: string;
  method?: string;
  composition?: string;
  compatible?: string[];
  pdf?: string;
  tags?: string[];
}

export interface Crop {
  id: string;
  name: string;
}

export interface GrowthStage {
  id: string;
  name: string;
}

export interface Concern {
  id: string;
  name: string;
}

// Helper to sanitize name to ID
const toId = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, "-");

// Default initial crops
const DEFAULT_CROPS: string[] = [
  "Tomato", "Grapes", "Cotton", "Soybean", "Sugarcane", 
  "Wheat", "Banana", "Pomegranate", "Onion", "Chilli", 
  "Maize", "Rice"
];

// Default initial stages
const DEFAULT_STAGES: string[] = [
  "Seed Treatment", "Germination", "Vegetative Growth", 
  "Branch Development", "Flowering", "Fruit Setting", 
  "Fruit Development", "Ripening", "Harvest", "Post Harvest"
];

// Default initial concerns
const DEFAULT_CONCERNS: string[] = [
  "Faster Growth", "Root Development", "Flowering", "Fruit Setting", 
  "Fruit Size", "Colour Development", "Sugar Content", "Yield Increase", 
  "Micronutrient Deficiency", "Nitrogen Deficiency", "Zinc Deficiency", 
  "Calcium Deficiency", "Yellow Leaves", "Leaf Curl", "Pest Control", 
  "Disease Control", "Stress Recovery", "Drought Stress", "Water Retention", 
  "Soil Health", "Quality Improvement"
];

// Seed metadata for the 53 products to make the cascading filter extremely realistic
const enrichProductMetadata = (p: typeof ALL_PRODUCTS[0]): Product => {
  const name = p.name.toUpperCase();
  
  let crops: string[] = ["All supported crops"];
  let stages: string[] = ["Vegetative Growth", "Flowering"];
  let concerns: string[] = ["Yield Increase", "Quality Improvement"];
  let dosage = "1.0 - 2.0 ml per Litre of water";
  let method = "Foliar Spray";
  let composition = "Balanced Agrochemical Compound";
  let compatible: string[] = [];

  // Categorized assignments
  if (p.category === "Water Soluble Fertilizers") {
    crops = ["Rice", "Wheat", "Sugarcane", "Tomato", "Grapes", "Cotton"];
    stages = ["Vegetative Growth", "Branch Development", "Fruit Development"];
    concerns = ["Faster Growth", "Yield Increase", "Nitrogen Deficiency", "Quality Improvement"];
    dosage = "3 - 5 grams per Litre of water";
    method = "Foliar Spray or Drip Irrigation";
    composition = name.includes("19:19:19") ? "N:P:K 19:19:19 Nitrogen-Phosphorus-Potassium complex" : "Highly soluble NPK formulation";
  } else if (p.category === "Biostimulant") {
    crops = ["Tomato", "Grapes", "Pomegranate", "Banana", "Chilli", "Onion"];
    stages = ["Root Development", "Vegetative Growth", "Flowering", "Fruit Setting", "Fruit Development"];
    concerns = ["Faster Growth", "Root Development", "Flowering", "Fruit Setting", "Fruit Size", "Stress Recovery", "Drought Stress"];
    dosage = "1.5 - 2.0 ml per Litre of water";
    method = "Foliar Spray & Soil Drenching";
    if (name.includes("HUMIGROWTH")) {
      composition = "Biologically activated Humic Acid (98%) & Potassium Humate";
    } else if (name.includes("NEEM ATTACKER")) {
      composition = "Pure cold-pressed Neem Oil containing Azadirachtin 10000 PPM";
      concerns.push("Pest Control");
    } else {
      composition = "Premium Seaweed Extract enriched with Amino acids and Fulvic acid";
    }
  } else if (p.category === "Micronutrient") {
    crops = ["Grapes", "Pomegranate", "Tomato", "Chilli", "Cotton", "Onion"];
    stages = ["Vegetative Growth", "Branch Development", "Flowering", "Fruit Development"];
    concerns = ["Micronutrient Deficiency", "Zinc Deficiency", "Calcium Deficiency", "Yellow Leaves", "Quality Improvement"];
    dosage = "0.5 - 1.0 gram per Litre of water";
    method = "Foliar Spray";
    if (name.includes("ZINC")) {
      composition = "Zinc Chelated EDTA 12%";
      concerns = ["Zinc Deficiency", "Yellow Leaves"];
    } else if (name.includes("MAGNESIUM")) {
      composition = "Magnesium Chelated EDTA 6%";
      concerns = ["Micronutrient Deficiency", "Yellow Leaves"];
    } else if (name.includes("CALCIUM")) {
      composition = "Calcium Chelated EDTA 10%";
      concerns = ["Calcium Deficiency", "Fruit Size"];
    } else if (name.includes("BOROSHIELD")) {
      composition = "Boron 20% Soluble Powder";
      concerns = ["Flowering", "Fruit Setting"];
    } else {
      composition = "Multi-Micronutrient Chelated Mixture";
    }
  } else if (p.category === "Herbicide/Fungicide/Insecticide") {
    crops = ["Soybean", "Cotton", "Sugarcane", "Rice", "Maize"];
    stages = ["Seed Treatment", "Germination", "Vegetative Growth", "Harvest"];
    dosage = "2.0 - 2.5 ml per Litre of water";
    method = "Foliar Spray";
    if (name.includes("WASHOUT")) {
      concerns = ["Pest Control", "Soil Health"];
      composition = "Glyphosate systemic post-emergence herbicide formulation";
    } else if (name.includes("PROTECTION") || name.includes("HUNTER")) {
      concerns = ["Pest Control", "Leaf Curl"];
      composition = "Emamectin Benzoate active insecticide complex";
    } else if (name.includes("AZOCURE") || name.includes("TEBUZA")) {
      concerns = ["Disease Control", "Stress Recovery"];
      composition = "Systemic fungicide formulation combining Azoxystrobin & Tebuconazole";
    } else {
      concerns = ["Pest Control", "Disease Control"];
      composition = "Advanced broad-spectrum crop protection compound";
    }
  } else if (p.category === "Bio-Fertilizers") {
    crops = ["Sugarcane", "Rice", "Wheat", "Banana", "Soybean"];
    stages = ["Seed Treatment", "Germination", "Vegetative Growth", "Post Harvest"];
    concerns = ["Soil Health", "Root Development", "Stress Recovery", "Yield Increase"];
    dosage = "1.0 - 2.0 Litres per Acre";
    method = "Soil Application or Drip Irrigation";
    if (name.includes("BACTOISHIELD")) {
      composition = "Phosphate Solubilizing Bacteria (PSB) liquid culture";
    } else if (name.includes("MOBISHIELD")) {
      composition = "Potash Mobilizing Bacteria (KMB) liquid culture";
    } else if (name.includes("AZOTOSHIELD")) {
      composition = "Azospirillum Nitrogen Fixing biological culture";
    } else {
      composition = "Multi-strain beneficial microbial consortium";
    }
  } else if (p.category === "Adjuvant") {
    crops = ["Tomato", "Grapes", "Cotton", "Soybean", "Sugarcane", "Chilli", "Onion", "Pomegranate"];
    stages = ["Vegetative Growth", "Flowering", "Fruit Development"];
    concerns = ["Quality Improvement", "Water Retention", "Yield Increase"];
    dosage = "0.25 - 0.50 ml per Litre of water";
    method = "Foliar Spray Adjuvant / Mixing Sticker";
    composition = "Silicon-based non-ionic super spreader & activator adjuvant";
  }

  return {
    ...p,
    crops,
    stages,
    concerns,
    dosage,
    method,
    composition,
    compatible,
    tags: [p.category.toLowerCase(), p.type.toLowerCase()]
  };
};

export const initializeDatabase = () => {
  // 1. Initialize Crops
  if (!localStorage.getItem("agrishield_crops")) {
    const crops = DEFAULT_CROPS.map(name => ({ id: toId(name), name }));
    localStorage.setItem("agrishield_crops", JSON.stringify(crops));
  }

  // 2. Initialize Stages
  if (!localStorage.getItem("agrishield_stages")) {
    const stages = DEFAULT_STAGES.map(name => ({ id: toId(name), name }));
    localStorage.setItem("agrishield_stages", JSON.stringify(stages));
  }

  // 3. Initialize Concerns
  if (!localStorage.getItem("agrishield_concerns")) {
    const concerns = DEFAULT_CONCERNS.map(name => ({ id: toId(name), name }));
    localStorage.setItem("agrishield_concerns", JSON.stringify(concerns));
  }

  // 4. Initialize Products
  if (!localStorage.getItem("agrishield_db_products")) {
    const enriched = ALL_PRODUCTS.map(enrichProductMetadata);
    localStorage.setItem("agrishield_db_products", JSON.stringify(enriched));
  }
};

// Database Query Helpers
export const getCrops = (): Crop[] => {
  initializeDatabase();
  return JSON.parse(localStorage.getItem("agrishield_crops") || "[]");
};

export const getStages = (): GrowthStage[] => {
  initializeDatabase();
  return JSON.parse(localStorage.getItem("agrishield_stages") || "[]");
};

export const getConcerns = (): Concern[] => {
  initializeDatabase();
  return JSON.parse(localStorage.getItem("agrishield_concerns") || "[]");
};

export const getProducts = (): Product[] => {
  initializeDatabase();
  return JSON.parse(localStorage.getItem("agrishield_db_products") || "[]");
};

// Cascading Filter Logic
export const getStagesForCrop = (cropName: string): GrowthStage[] => {
  if (!cropName || cropName === "All supported crops") {
    return getStages();
  }
  const products = getProducts();
  const applicableStages = new Set<string>();
  products.forEach(p => {
    const supportsCrop = p.crops.includes(cropName) || p.crops.includes("All supported crops") || p.crops.includes("All");
    if (supportsCrop) {
      p.stages.forEach(s => applicableStages.add(s));
    }
  });
  
  const allStages = getStages();
  return allStages.filter(s => applicableStages.has(s.name));
};

export const getConcernsForCropAndStage = (cropName: string, stageName: string): Concern[] => {
  const allConcerns = getConcerns();
  const products = getProducts();
  const applicableConcerns = new Set<string>();

  products.forEach(p => {
    const supportsCrop = !cropName || cropName === "All supported crops" || p.crops.includes(cropName) || p.crops.includes("All supported crops") || p.crops.includes("All");
    const supportsStage = !stageName || stageName === "All" || p.stages.includes(stageName);
    
    if (supportsCrop && supportsStage) {
      p.concerns.forEach(c => applicableConcerns.add(c));
    }
  });

  return allConcerns.filter(c => applicableConcerns.has(c.name));
};

// Admin Operations
export const saveCrops = (crops: Crop[]) => {
  localStorage.setItem("agrishield_crops", JSON.stringify(crops));
};

export const saveStages = (stages: GrowthStage[]) => {
  localStorage.setItem("agrishield_stages", JSON.stringify(stages));
};

export const saveConcerns = (concerns: Concern[]) => {
  localStorage.setItem("agrishield_concerns", JSON.stringify(concerns));
};

export const saveProducts = (products: Product[]) => {
  localStorage.setItem("agrishield_db_products", JSON.stringify(products));
};
