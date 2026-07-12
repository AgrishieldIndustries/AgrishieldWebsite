import { useState } from "react";
import { Heart, Star, Search, X, Check, Building } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";

const ALL_PRODUCTS = [
  // A: PLANT GROWTH REGULATORS (Bio-Stimulants)
  {
    id: 1,
    name: "AGRISHIELD® HumiGrowth",
    type: "Organic Soil Conditioner Powder 98%",
    category: "Biostimulant",
    sizes: "500 g",
    price: "₹580",
    rating: 4.88,
    badge: true,
    img: "/product-photos/humigrowth.jpeg",
    packings: [{ size: "500 gms", price: "₹580" }]
  },
  {
    id: 2,
    name: "AGRISHIELD® FulviGrowth",
    type: "Fulvic Acid 80% Powder",
    category: "Biostimulant",
    sizes: "500 g",
    price: "₹780",
    rating: 4.85,
    badge: false,
    img: "/product-photos/fulvigrowth.jpeg",
    packings: [{ size: "500 gms", price: "₹780" }]
  },
  {
    id: 3,
    name: "AGRISHIELD® SilGrowth",
    type: "Silicone Powder 80%",
    category: "Biostimulant",
    sizes: "500 g",
    price: "₹580",
    rating: 4.79,
    badge: false,
    img: "/product-photos/silgrowth.jpeg",
    packings: [{ size: "500 gms", price: "₹580" }]
  },
  {
    id: 4,
    name: "AGRISHIELD® AmiGrowth",
    type: "Amino Acid 80% Powder",
    category: "Biostimulant",
    sizes: "500 g",
    price: "₹740",
    rating: 4.82,
    badge: false,
    img: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=600&h=600&fit=crop&q=80",
    packings: [{ size: "500 gms", price: "₹740" }]
  },
  {
    id: 5,
    name: "AGRISHIELD® SHIELD-ZYME Next",
    type: "Hi Power Bio Organic Liquid",
    category: "Biostimulant",
    sizes: "100 ml · 250 ml · 500 ml · 1 L",
    price: "₹180 - ₹1,300",
    rating: 4.90,
    badge: true,
    img: "/product-photos/shield_zyme_next.jpeg",
    packings: [
      { size: "100 ml", price: "₹180" },
      { size: "250 ml", price: "₹380" },
      { size: "500 ml", price: "₹750" },
      { size: "1000 ml", price: "₹1,300" }
    ]
  },
  {
    id: 6,
    name: "AGRISHIELD® SEAWEED Plus",
    type: "Formulated from SEAWEED Extract",
    category: "Biostimulant",
    sizes: "100 ml · 250 ml · 500 ml · 1 L",
    price: "₹225 - ₹1,100",
    rating: 4.87,
    badge: false,
    img: "/product-photos/seaweed_plus.jpeg",
    packings: [
      { size: "100 ml", price: "₹225" },
      { size: "250 ml", price: "₹420" },
      { size: "500 ml", price: "₹600" },
      { size: "1000 ml", price: "₹1,100" }
    ]
  },
  {
    id: 7,
    name: "AGRISHIELD® SHIELD BAHAR",
    type: "Formulated by Fulvic, Amino & Seaweed",
    category: "Biostimulant",
    sizes: "100 ml · 250 ml · 500 ml · 1 L",
    price: "₹175 - ₹1,070",
    rating: 4.89,
    badge: false,
    img: "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=600&h=600&fit=crop&q=80",
    packings: [
      { size: "100 ml", price: "₹175" },
      { size: "250 ml", price: "₹300" },
      { size: "500 ml", price: "₹570" },
      { size: "1000 ml", price: "₹1,070" }
    ]
  },
  {
    id: 8,
    name: "AGRISHIELD® SHIELD-ZYME + Gr",
    type: "Granulated Organic Plant Supplement",
    category: "Biostimulant",
    sizes: "5 kg · 10 kg · 25 kg",
    price: "₹1,010 - ₹3,540",
    rating: 4.84,
    badge: true,
    img: "/product-photos/shield_zyme_gr.jpeg",
    packings: [
      { size: "5 Kgs Bucket", price: "₹1,010" },
      { size: "10 Kgs Bucket", price: "₹1,820" },
      { size: "25 Kgs Bag", price: "₹3,540" }
    ]
  },
  {
    id: 9,
    name: "AGRISHIELD® SIZE PRO K-45",
    type: "Nano Plant Supplement",
    category: "Biostimulant",
    sizes: "250 ml · 500 ml · 1 L",
    price: "₹300 - ₹900",
    rating: 4.86,
    badge: false,
    img: "/product-photos/size_pro_k45.jpeg",
    packings: [
      { size: "250 ml", price: "₹300" },
      { size: "500 ml", price: "₹550" },
      { size: "1000 ml", price: "₹900" }
    ]
  },
  {
    id: 10,
    name: "AGRISHIELD® Super Power Plus",
    type: "Bio-Stimulant Booster",
    category: "Biostimulant",
    sizes: "100 ml · 250 ml · 500 ml · 1 L · 5 L",
    price: "₹190 - ₹2,750",
    rating: 4.91,
    badge: true,
    img: "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=600&h=600&fit=crop&q=80",
    packings: [
      { size: "100 ml", price: "₹190" },
      { size: "250 ml", price: "₹310" },
      { size: "500 ml", price: "₹450" },
      { size: "1000 ml", price: "₹780" },
      { size: "5 Litre", price: "₹2,750" }
    ]
  },
  {
    id: 11,
    name: "AGRISHIELD® NEEM ATTACKER",
    type: "NEEM OIL 10000 PPM",
    category: "Biostimulant",
    sizes: "250 ml · 500 ml · 1 L · 5 L",
    price: "₹350 - ₹5,500",
    rating: 4.88,
    badge: false,
    img: "/product-photos/neem_attacker.jpeg",
    packings: [
      { size: "250 ml", price: "₹350" },
      { size: "500 ml", price: "₹610" },
      { size: "1000 ml", price: "₹1,080" },
      { size: "5 Litre", price: "₹5,500" }
    ]
  },
  {
    id: 12,
    name: "AGRISHIELD® Thyrogen plus",
    type: "Natural Oil & Botanical Extract",
    category: "Biostimulant",
    sizes: "100 ml · 250 ml · 500 ml · 1 L",
    price: "₹450 - ₹3,910",
    rating: 4.93,
    badge: true,
    img: "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=600&h=600&fit=crop&q=80",
    packings: [
      { size: "100 ml", price: "₹450" },
      { size: "250 ml", price: "₹1,000" },
      { size: "500 ml", price: "₹1,940" },
      { size: "1000 ml", price: "₹3,910" }
    ]
  },

  // B: CHELATED MICRONUTRIENTS
  {
    id: 13,
    name: "AGRISHIELD® MicroEnergy Plus",
    type: "Liquid Multi Micronutrient",
    category: "Micronutrient",
    sizes: "500 ml · 1 L · 5 L · 20 L",
    price: "₹520 - ₹9,000",
    rating: 4.87,
    badge: true,
    img: "/product-photos/microenergy_plus.jpeg",
    packings: [
      { size: "500 ml", price: "₹520" },
      { size: "1000 ml", price: "₹1,100" },
      { size: "5 Ltr", price: "₹3,000" },
      { size: "20 Ltr", price: "₹9,000" }
    ]
  },
  {
    id: 14,
    name: "AGRISHIELD CHEL-COMBI",
    type: "Chelated Mixture Micronutrients",
    category: "Micronutrient",
    sizes: "250 g · 500 g",
    price: "₹410 - ₹675",
    rating: 4.82,
    badge: false,
    img: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&h=600&fit=crop&q=80",
    packings: [
      { size: "250 gms", price: "₹410" },
      { size: "500 gms", price: "₹675" }
    ]
  },
  {
    id: 15,
    name: "AGRISHIELD Magnesium Chelated EDTA 6%",
    type: "Magnesium Chelated EDTA 6%",
    category: "Micronutrient",
    sizes: "500 g",
    price: "₹710",
    rating: 4.76,
    badge: false,
    img: "/product-photos/magnesium_chelated.jpeg",
    packings: [{ size: "500 gms", price: "₹710" }]
  },
  {
    id: 16,
    name: "AGRISHIELD ZINC Chelated EDTA 12%",
    type: "ZINC Chelated EDTA 12%",
    category: "Micronutrient",
    sizes: "500 g",
    price: "₹740",
    rating: 4.83,
    badge: false,
    img: "/product-photos/zinc_chelated.jpeg",
    packings: [{ size: "500 gms", price: "₹740" }]
  },
  {
    id: 17,
    name: "AGRISHIELD Ferrous chelated EDTA 12%",
    type: "Ferrous chelated EDTA 12%",
    category: "Micronutrient",
    sizes: "500 g",
    price: "₹720",
    rating: 4.80,
    badge: false,
    img: "/product-photos/ferrous_chelated.jpeg",
    packings: [{ size: "500 gms", price: "₹720" }]
  },
  {
    id: 18,
    name: "AGRISHIELD Calcium chelated EDTA 10%",
    type: "Calcium chelated EDTA 10%",
    category: "Micronutrient",
    sizes: "500 g",
    price: "₹720",
    rating: 4.79,
    badge: false,
    img: "/product-photos/calcium_chelated.jpeg",
    packings: [{ size: "500 gms", price: "₹720" }]
  },
  {
    id: 19,
    name: "AGRISHIELD BOROSHIELD",
    type: "Boron 20%",
    category: "Micronutrient",
    sizes: "250 g · 500 g",
    price: "₹190 - ₹315",
    rating: 4.85,
    badge: false,
    img: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&h=600&fit=crop&q=80",
    packings: [
      { size: "250 gms", price: "₹190" },
      { size: "500 gms", price: "₹315" }
    ]
  },
  {
    id: 20,
    name: "AGRISHIELD CalciBoR",
    type: "Calcium 6% & Boron 5%",
    category: "Micronutrient",
    sizes: "500 g",
    price: "₹810",
    rating: 4.81,
    badge: false,
    img: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&h=600&fit=crop&q=80",
    packings: [{ size: "500 gms", price: "₹810" }]
  },
  {
    id: 21,
    name: "AGRISHIELD® MICRO MIX-1",
    type: "Soil Application Micronutrients",
    category: "Micronutrient",
    sizes: "10 kg",
    price: "₹1,260",
    rating: 4.74,
    badge: false,
    img: "/product-photos/micro_mix_1.jpeg",
    packings: [{ size: "10 Kgs Bag", price: "₹1,260" }]
  },

  // C: WATER SOLUBLE FERTILIZERS (WSF) NPK
  {
    id: 22,
    name: "AGRISHIELD WSF 19:19:19",
    type: "Water Soluble Fertilizer",
    category: "Water Soluble Fertilizers",
    sizes: "1 kg · 25 kg",
    price: "₹220 - ₹4,520",
    rating: 4.92,
    badge: true,
    img: "/product-photos/wsf_19_19_19.jpeg",
    packings: [
      { size: "1 Kg", price: "₹220" },
      { size: "25 Kgs", price: "₹4,520" }
    ]
  },
  {
    id: 23,
    name: "AGRISHIELD WSF 12:61:00",
    type: "Water Soluble Fertilizer",
    category: "Water Soluble Fertilizers",
    sizes: "1 kg · 25 kg",
    price: "₹255 - ₹5,355",
    rating: 4.88,
    badge: false,
    img: "/product-photos/wsf_12_61_00.jpeg",
    packings: [
      { size: "1 Kg", price: "₹255" },
      { size: "25 Kgs", price: "₹5,355" }
    ]
  },
  {
    id: 24,
    name: "AGRISHIELD WSF 13:00:45",
    type: "Water Soluble Fertilizer",
    category: "Water Soluble Fertilizers",
    sizes: "1 kg · 25 kg",
    price: "₹240 - ₹5,040",
    rating: 4.86,
    badge: false,
    img: "/product-photos/wsf_13_00_45.jpeg",
    packings: [
      { size: "1 Kg", price: "₹240" },
      { size: "25 Kgs", price: "₹5,040" }
    ]
  },
  {
    id: 25,
    name: "AGRISHIELD WSF 00:00:50",
    type: "Water Soluble Fertilizer",
    category: "Water Soluble Fertilizers",
    sizes: "1 kg · 25 kg",
    price: "₹200 - ₹4,200",
    rating: 4.84,
    badge: false,
    img: "/product-photos/wsf_00_00_50.jpeg",
    packings: [
      { size: "1 Kg", price: "₹200" },
      { size: "25 Kgs", price: "₹4,200" }
    ]
  },
  {
    id: 26,
    name: "AGRISHIELD WSF 00:52:34",
    type: "Water Soluble Fertilizer",
    category: "Water Soluble Fertilizers",
    sizes: "1 kg · 25 kg",
    price: "₹325 - ₹7,120",
    rating: 4.90,
    badge: true,
    img: "/product-photos/wsf_00_52_34.jpeg",
    packings: [
      { size: "1 Kg", price: "₹325" },
      { size: "25 Kgs", price: "₹7,120" }
    ]
  },
  {
    id: 27,
    name: "AGRISHIELD WSF 13:40:13",
    type: "Water Soluble Fertilizer",
    category: "Water Soluble Fertilizers",
    sizes: "1 kg · 25 kg",
    price: "₹238 - ₹5,210",
    rating: 4.83,
    badge: false,
    img: "/product-photos/wsf_13_40_13.jpeg",
    packings: [
      { size: "1 Kg", price: "₹238" },
      { size: "25 Kgs", price: "₹5,210" }
    ]
  },
  {
    id: 28,
    name: "AGRISHIELD WSF 00:00:23",
    type: "Water Soluble Fertilizer",
    category: "Water Soluble Fertilizers",
    sizes: "1 kg · 25 kg",
    price: "₹170 - ₹3,570",
    rating: 4.77,
    badge: false,
    img: "/product-photos/wsf_00_00_23.jpeg",
    packings: [
      { size: "1 Kg", price: "₹170" },
      { size: "25 Kgs", price: "₹3,570" }
    ]
  },
  {
    id: 29,
    name: "AGRISHIELD MAGASUL",
    type: "Water Soluble Fertilizer",
    category: "Water Soluble Fertilizers",
    sizes: "1 kg · 25 kg",
    price: "₹75 - ₹1,575",
    rating: 4.79,
    badge: false,
    img: "/product-photos/magasul.jpeg",
    packings: [
      { size: "1 Kg", price: "₹75" },
      { size: "25 Kgs", price: "₹1,575" }
    ]
  },
  {
    id: 30,
    name: "AGRISHIELD CalciNitro",
    type: "Water Soluble Fertilizer",
    category: "Water Soluble Fertilizers",
    sizes: "1 kg · 25 kg",
    price: "₹165 - ₹3,465",
    rating: 4.81,
    badge: false,
    img: "/product-photos/calcinitro.jpeg",
    packings: [
      { size: "1 Kg", price: "₹165" },
      { size: "25 Kgs", price: "₹3,465" }
    ]
  },

  // D: INSECTICIDES / FUNGICIDES / HERBICIDES / GROWTH REGULATORS
  {
    id: 31,
    name: "AGRISHIELD® CALTAR PLUS",
    type: "Paclobutrazol 23% SC",
    category: "Biostimulant",
    sizes: "100 ml · 250 ml · 500 ml · 1 L · 5 L",
    price: "₹750 - ₹22,100",
    rating: 4.90,
    badge: true,
    img: "/product-photos/caltar_plus.jpeg",
    packings: [
      { size: "100 ml", price: "₹750" },
      { size: "250 ml", price: "₹1,340" },
      { size: "500 ml", price: "₹2,550" },
      { size: "1000 ml", price: "₹4,700" },
      { size: "5 Ltr", price: "₹22,100" }
    ]
  },
  {
    id: 32,
    name: "AGRISHIELD WASHOUT 41",
    type: "Glyphosate 41% S.L.",
    category: "Herbicide/Fungicide/Insecticide",
    sizes: "1 L · 5 L",
    price: "₹1,080 - ₹4,850",
    rating: 4.81,
    badge: true,
    img: "/product-photos/washout_41.jpeg",
    packings: [
      { size: "1000 ml", price: "₹1,080" },
      { size: "5 Litre", price: "₹4,850" }
    ]
  },
  {
    id: 33,
    name: "AGRISHIELD FINISHER 58",
    type: "2,4-D Amine Salt 58% S.L.",
    category: "Herbicide/Fungicide/Insecticide",
    sizes: "500 ml · 1 L",
    price: "₹640 - ₹1,210",
    rating: 4.75,
    badge: false,
    img: "/product-photos/finisher_58.jpeg",
    packings: [
      { size: "500 ml", price: "₹640" },
      { size: "1000 ml", price: "₹1,210" }
    ]
  },
  {
    id: 34,
    name: "AGRISHIELD WASHOUT 71",
    type: "Ammonium Salt of Glyphosate 71% SG",
    category: "Herbicide/Fungicide/Insecticide",
    sizes: "100 g · 1 kg",
    price: "₹210 - ₹1,870",
    rating: 4.78,
    badge: false,
    img: "/product-photos/washout_71.jpeg",
    packings: [
      { size: "100 Gms", price: "₹210" },
      { size: "1000 Gms", price: "₹1,870" }
    ]
  },
  {
    id: 35,
    name: "AGRISHIELD PROTECTION",
    type: "Emamectin Benzoate 5% SG",
    category: "Herbicide/Fungicide/Insecticide",
    sizes: "100 g · 250 g · 500 g · 1 kg",
    price: "₹750 - ₹4,500",
    rating: 4.86,
    badge: true,
    img: "/product-photos/protection_new.jpeg",
    packings: [
      { size: "100 Gms", price: "₹750" },
      { size: "250 Gms", price: "₹1,250" },
      { size: "500 Gms", price: "₹2,300" },
      { size: "1000 Gms", price: "₹4,500" }
    ]
  },
  {
    id: 36,
    name: "AGRISHIELD METRISHIELD",
    type: "Metribuzin 70% W.P.",
    category: "Herbicide/Fungicide/Insecticide",
    sizes: "100 g · 250 g · 500 g · 1 kg",
    price: "₹375 - ₹3,100",
    rating: 4.76,
    badge: false,
    img: "/product-photos/metrishield.jpeg",
    packings: [
      { size: "100 Gms", price: "₹375" },
      { size: "250 Gms", price: "₹850" },
      { size: "500 Gms", price: "₹1,610" },
      { size: "1000 Gms", price: "₹3,100" }
    ]
  },
  {
    id: 37,
    name: "AGRISHIELD® FOLLI BOOSTER",
    type: "NitroBenzene 20% EW",
    category: "Biostimulant",
    sizes: "250 ml · 500 ml · 1 L",
    price: "₹680 - ₹2,410",
    rating: 4.88,
    badge: false,
    img: "/product-photos/folli_booster.jpeg",
    packings: [
      { size: "250 ml", price: "₹680" },
      { size: "500 ml", price: "₹1,250" },
      { size: "1000 ml", price: "₹2,410" }
    ]
  },
  {
    id: 38,
    name: "Agrishield Shield-Pro",
    type: "Chlorantraniliprole 9.3% + Lambda 4.6% ZC",
    category: "Herbicide/Fungicide/Insecticide",
    sizes: "250 ml · 500 ml",
    price: "₹1,510 - ₹2,950",
    rating: 4.89,
    badge: true,
    img: "/product-photos/shield_pro_render.jpeg",
    packings: [
      { size: "250 ml", price: "₹1,510" },
      { size: "500 ml", price: "₹2,950" }
    ]
  },
  {
    id: 39,
    name: "Agrishield Hunter",
    type: "Emamectin Benzoate 1.9% EC",
    category: "Herbicide/Fungicide/Insecticide",
    sizes: "500 ml · 1 L",
    price: "₹1,490 - ₹2,900",
    rating: 4.82,
    badge: false,
    img: "/product-photos/hunter_render.jpeg",
    packings: [
      { size: "500 ml", price: "₹1,490" },
      { size: "1000 ml", price: "₹2,900" }
    ]
  },
  {
    id: 40,
    name: "Agrishield Citron",
    type: "Thiamethoxam 12.6% + Lambda 9.5% ZC",
    category: "Herbicide/Fungicide/Insecticide",
    sizes: "250 ml · 500 ml · 1 L",
    price: "₹850 - ₹2,750",
    rating: 4.85,
    badge: false,
    img: "/product-photos/citron_render.jpeg",
    packings: [
      { size: "250 ml", price: "₹850" },
      { size: "500 ml", price: "₹1,450" },
      { size: "1000 ml", price: "₹2,750" }
    ]
  },
  {
    id: 41,
    name: "Agrishield Azocure",
    type: "Azoxystrobin 11% + Tebuconazole 18.3% SC",
    category: "Herbicide/Fungicide/Insecticide",
    sizes: "250 ml · 500 ml · 1 L",
    price: "₹860 - ₹3,200",
    rating: 4.87,
    badge: false,
    img: "/product-photos/azocure_render.jpeg",
    packings: [
      { size: "250 ml", price: "₹860" },
      { size: "500 ml", price: "₹1,640" },
      { size: "1000 ml", price: "₹3,200" }
    ]
  },
  {
    id: 42,
    name: "Agrishield Tebuza",
    type: "Tricyclazole 18% + Tebuconazole 14.4% SC",
    category: "Herbicide/Fungicide/Insecticide",
    sizes: "250 ml · 500 ml · 1 L",
    price: "₹740 - ₹2,700",
    rating: 4.80,
    badge: false,
    img: "/product-photos/tebuza_render.jpeg",
    packings: [
      { size: "250 ml", price: "₹740" },
      { size: "500 ml", price: "₹1,390" },
      { size: "1000 ml", price: "₹2,700" }
    ]
  },

  // E: Silicone Adjuvant
  {
    id: 43,
    name: "AGRISHIELD® DOUSE SAVER",
    type: "Non-Ionic Silicone Adjuvant Sticker/Spreader",
    category: "Adjuvant",
    sizes: "100 ml · 250 ml · 500 ml · 1 L · 5 L",
    price: "₹180 - ₹4,500",
    rating: 4.83,
    badge: false,
    img: "/product-photos/douse_saver_new.jpeg",
    packings: [
      { size: "100 ml", price: "₹180" },
      { size: "250 ml", price: "₹330" },
      { size: "500 ml", price: "₹520" },
      { size: "1000 ml", price: "₹960" },
      { size: "5 Litre", price: "₹4,500" }
    ]
  },
  {
    id: 44,
    name: "AGRISHIELD® SPREADSIL",
    type: "Superior TriSiloxane Ethoxylate Adjuvant",
    category: "Adjuvant",
    sizes: "50 ml · 100 ml · 250 ml · 500 ml · 1 L · 5 L",
    price: "₹175 - ₹8,500",
    rating: 4.91,
    badge: true,
    img: "/product-photos/spreadsil.jpeg",
    packings: [
      { size: "50 ml", price: "₹175" },
      { size: "100 ml", price: "₹320" },
      { size: "250 ml", price: "₹710" },
      { size: "500 ml", price: "₹1,250" },
      { size: "1000 ml", price: "₹2,400" },
      { size: "5 Ltr", price: "₹8,500" }
    ]
  },

  // F: Others (OT)
  {
    id: 45,
    name: "AGRISHIELD BioSulf 80",
    type: "Sulphur 80% WDG",
    category: "Herbicide/Fungicide/Insecticide",
    sizes: "500 g · 3 kg",
    price: "₹182 - ₹580",
    rating: 4.78,
    badge: false,
    img: "/product-photos/biosulf_80.jpeg",
    packings: [
      { size: "500 gms", price: "₹182" },
      { size: "3 Kgs", price: "₹580" }
    ]
  },
  {
    id: 46,
    name: "AGRISHIELD® BioSulf 20",
    type: "Sulphur Solution 20%",
    category: "Herbicide/Fungicide/Insecticide",
    sizes: "500 ml · 1 L · 5 L · 20 L",
    price: "₹390 - ₹9,750",
    rating: 4.84,
    badge: false,
    img: "/product-photos/biosulf20_new.jpeg",
    packings: [
      { size: "500 ml", price: "₹390" },
      { size: "1000 ml", price: "₹710" },
      { size: "5 Litre", price: "₹3,250" },
      { size: "20 Litre", price: "₹9,750" }
    ]
  },

  // G: Bio-Fertilizers
  {
    id: 47,
    name: "AGRISHIELD PS BACTOISHIELD",
    type: "Phosphate Solubilizing Bacteria Bio Fertilizer",
    category: "Bio-Fertilizers",
    sizes: "1 L",
    price: "On Request",
    rating: 4.85,
    badge: false,
    img: "/product-photos/ps_bactoishield.jpeg",
    packings: [
      { size: "1 Litre", price: "On Request" }
    ]
  },
  {
    id: 48,
    name: "AGRISHIELD K-MOBISHIELD",
    type: "Potash Mobilizing Bacteria Bio Fertilizer",
    category: "Bio-Fertilizers",
    sizes: "1 L",
    price: "On Request",
    rating: 4.83,
    badge: false,
    img: "/product-photos/k_mobishield.jpeg",
    packings: [
      { size: "1 Litre", price: "On Request" }
    ]
  },
  {
    id: 49,
    name: "AGRISHIELD AZOTOSHIELD",
    type: "Azospirillum Nitrogen Fixing Bio Fertilizer",
    category: "Bio-Fertilizers",
    sizes: "1 L",
    price: "On Request",
    rating: 4.87,
    badge: false,
    img: "/product-photos/azotoshield.jpeg",
    packings: [
      { size: "1 Litre", price: "On Request" }
    ]
  },
  {
    id: 50,
    name: "AGRISHIELD SHIELDZYME+GR",
    type: "Granular Bio Fertilizer with Enzyme Complex",
    category: "Bio-Fertilizers",
    sizes: "On Request",
    price: "On Request",
    rating: 4.80,
    badge: false,
    img: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&h=600&fit=crop&q=80",
    packings: []
  },

  // H: New Products
  {
    id: 51,
    name: "AGRISHIELD THYROGEN PLUS",
    type: "All-in-One: Thrips / Mites / Virus / Larvae",
    category: "Herbicide/Fungicide/Insecticide",
    sizes: "250 ml",
    price: "On Request",
    rating: 4.82,
    badge: false,
    img: "/product-photos/thyrogen_plus.jpeg",
    packings: [
      { size: "250 ml", price: "On Request" }
    ]
  },
  {
    id: 52,
    name: "AGRISHIELD SUPER POWER PLUS",
    type: "Plant Growth Promotor (Organic Manure Liquid)",
    category: "Biostimulant",
    sizes: "5 L",
    price: "₹2,750",
    rating: 4.84,
    badge: false,
    img: "/product-photos/super_power_plus.jpeg",
    packings: [
      { size: "5 Litre", price: "₹2,750" }
    ]
  },
  {
    id: 53,
    name: "AGRISHIELD SHIELD BAHAR",
    type: "Plant Health Promoter",
    category: "Biostimulant",
    sizes: "1 L",
    price: "On Request",
    rating: 4.81,
    badge: false,
    img: "/product-photos/shield_bahar.jpeg",
    packings: [
      { size: "1 Litre", price: "On Request" }
    ]
  },
  {
    id: 54,
    name: "AGRISHIELD BLOOM SHIELD",
    type: "Nitrobenzene 20% EW – Flower Growth Regulator",
    category: "Herbicide/Fungicide/Insecticide",
    sizes: "1 L",
    price: "₹950",
    rating: 4.79,
    badge: false,
    img: "/product-photos/bloom_shield.jpeg",
    packings: [
      { size: "1 Litre", price: "₹950" }
    ]
  },
  {
    id: 55,
    name: "AGRISHIELD CALTAR PLUS",
    type: "Paclobutrazol 23% SC – Plant Growth Regulator",
    category: "Herbicide/Fungicide/Insecticide",
    sizes: "1 L",
    price: "On Request",
    rating: 4.86,
    badge: false,
    img: "/product-photos/caltar_plus.jpeg",
    packings: [
      { size: "1 Litre", price: "On Request" }
    ]
  },
  {
    id: 56,
    name: "AGRISHIELD SPREADSIL",
    type: "Superior Spreading & Wetting Agent 250 ml",
    category: "Adjuvant",
    sizes: "250 ml",
    price: "On Request",
    rating: 4.78,
    badge: false,
    img: "/product-photos/spreadsil.jpeg",
    packings: [
      { size: "250 ml", price: "On Request" }
    ]
  },
  {
    id: 57,
    name: "AGRISHIELD CALCIBOR",
    type: "EDTA Chelated Calcium Ca-6% + Boron B-6%",
    category: "Micronutrient",
    sizes: "500 g",
    price: "On Request",
    rating: 4.83,
    badge: false,
    img: "/product-photos/calcibor.jpeg",
    packings: [
      { size: "500 gms", price: "On Request" }
    ]
  },
  {
    id: 58,
    name: "AGRISHIELD BORON 20%",
    type: "Boron (B-20%) Foliar Spray",
    category: "Micronutrient",
    sizes: "500 g",
    price: "On Request",
    rating: 4.80,
    badge: false,
    img: "/product-photos/boron_20.jpeg",
    packings: [
      { size: "500 gms", price: "On Request" }
    ]
  },
  {
    id: 59,
    name: "AGRISHIELD FOLLI BOOSTER+",
    type: "Nitrobenzene 20% EW – Amino & Fulvic Acid Compatible",
    category: "Herbicide/Fungicide/Insecticide",
    sizes: "500 ml",
    price: "On Request",
    rating: 4.82,
    badge: false,
    img: "/product-photos/folli_booster_plus.jpeg",
    packings: [
      { size: "500 ml", price: "On Request" }
    ]
  },
];

const CATEGORIES = ["All", "Water Soluble Fertilizers", "Biostimulant", "Bio-Fertilizers", "Micronutrient", "Herbicide/Fungicide/Insecticide", "Adjuvant", "Other"];

function ProductCard({ 
  product, 
  index, 
  onSelect 
}: { 
  product: typeof ALL_PRODUCTS[0]; 
  index: number; 
  onSelect: (product: typeof ALL_PRODUCTS[0]) => void;
}) {
  const [liked, setLiked] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.35, delay: (index % 4) * 0.06 }}
      className="group cursor-pointer bg-white border border-gray-100 hover:border-gray-200 rounded-[14px] p-3 shadow-sm hover:shadow-md transition-all duration-300"
      onClick={() => onSelect(product)}
      data-testid={`card-product-${product.id}`}
    >
      <div className="relative aspect-square rounded-[10px] overflow-hidden mb-3 bg-gray-50 flex items-center justify-center">
        <img
          src={product.img}
          alt={product.name}
          className="max-h-[90%] max-w-[90%] object-contain group-hover:scale-105 transition-transform duration-500 rounded"
        />
        {product.badge && (
          <div className="absolute top-2 left-2 bg-[#1f7a3a] text-white rounded-full px-2 py-0.5 text-[9px] font-bold shadow-sm uppercase tracking-wide">
            Dealer Fav
          </div>
        )}
        <button
          className="absolute top-2 right-2 w-7 h-7 flex items-center justify-center rounded-full bg-black/5 hover:bg-black/15 transition-colors"
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); setLiked(!liked); }}
          data-testid={`btn-like-${product.id}`}
          aria-label="Save product"
        >
          <Heart
            className={`w-[14px] h-[14px] transition-colors ${liked ? "fill-primary text-primary" : "text-gray-400 drop-shadow-sm"}`}
            strokeWidth={2}
          />
        </button>
      </div>

      <div className="px-0.5">
        <div className="flex items-start justify-between gap-1.5 mb-0.5">
          <span className="text-[13px] font-extrabold text-gray-900 leading-tight line-clamp-2 tracking-tight h-9">{product.name}</span>
          <div className="flex items-center gap-0.5 shrink-0">
            <Star className="w-3 h-3 fill-gray-900 text-gray-900" />
            <span className="text-[12px] font-semibold text-gray-900">{product.rating}</span>
          </div>
        </div>
        <div className="text-[11.5px] text-gray-400 font-medium truncate mt-1">{product.type}</div>
        <div className="text-[11.5px] text-gray-500 font-medium mt-0.5">{product.sizes}</div>
        <div className="text-[12.5px] text-gray-900 mt-2 flex items-baseline justify-between">
          <span className="font-extrabold text-[13.5px]">{product.price}</span>
          <span className="text-[10px] text-gray-400 font-medium">per pack</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<typeof ALL_PRODUCTS[0] | null>(null);

  const filtered = ALL_PRODUCTS.filter((p) => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.type.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="w-full bg-white min-h-screen relative">
      {/* Header */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 pt-10 pb-6">
        <h1 className="text-[28px] md:text-[36px] font-bold text-gray-900 mb-2">Our product catalogue</h1>
        <p className="text-[15px] text-gray-500 max-w-xl">
          Biostimulants, NPKs, chelated micronutrients, herbicides and plant protection — engineered for every Indian crop.
        </p>
      </div>

      {/* Search + Category Strip */}
      <div className="border-b border-gray-100">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6">
          <div className="relative mb-4">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search by product name or type..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full md:w-[400px] pl-10 pr-4 h-11 rounded-full border border-gray-200 text-[14px] bg-gray-50 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition"
              data-testid="input-product-search"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-0 hide-scrollbar">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                data-testid={`btn-category-${cat.toLowerCase()}`}
                className={`shrink-0 px-5 py-2.5 text-[13px] font-medium rounded-full border transition-colors whitespace-nowrap ${
                  activeCategory === cat
                    ? "border-gray-900 bg-gray-900 text-white"
                    : "border-gray-200 text-gray-700 hover:border-gray-400"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-8">
        <div className="flex items-center justify-between mb-6">
          <span className="text-[14px] text-gray-500">{filtered.length} products</span>
        </div>

        {filtered.length === 0 ? (
          <div className="py-24 text-center">
            <p className="text-gray-400 text-[15px] mb-4">No products match your search.</p>
            <button
              onClick={() => { setSearch(""); setActiveCategory("All"); }}
              className="text-[14px] font-semibold text-primary underline"
              data-testid="btn-clear-filters"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
            {filtered.map((product, i) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                index={i} 
                onSelect={(p) => setSelectedProduct(p)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Preview Modal Overlay */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.45, bounce: 0.12 }}
              className="relative bg-white rounded-2xl md:rounded-[24px] max-w-3xl w-full overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[85vh] md:max-h-[90vh] z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-gray-100/80 hover:bg-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors z-20"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Column: Image */}
              <div className="w-full md:w-1/2 h-48 md:h-auto bg-gray-50 flex items-center justify-center p-6 border-b md:border-b-0 md:border-r border-gray-100 shrink-0">
                <img
                  src={selectedProduct.img}
                  alt={selectedProduct.name}
                  className="max-h-full md:max-h-[360px] w-auto object-contain rounded-lg drop-shadow-md"
                />
              </div>

              {/* Right Column: Details */}
              <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between overflow-y-auto">
                <div className="space-y-4">
                  {/* Category Badges */}
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary px-3 py-1 rounded-full">
                      {selectedProduct.category}
                    </span>
                    {selectedProduct.badge && (
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-50 text-amber-700 border border-amber-200 px-3 py-1 rounded-full">
                        Dealer Favorite
                      </span>
                    )}
                  </div>

                  {/* Product Title */}
                  <div>
                    <h2 className="text-[20px] md:text-[24px] font-extrabold text-gray-900 leading-tight tracking-tight">
                      {selectedProduct.name}
                    </h2>
                    <p className="text-[13.5px] text-gray-500 font-medium mt-1 leading-snug">
                      {selectedProduct.type}
                    </p>
                  </div>

                  {/* Packings List */}
                  {selectedProduct.packings && selectedProduct.packings.length > 0 && (
                    <div className="space-y-2">
                      <h3 className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                        Available Packings &amp; MRP
                      </h3>
                      <div className="bg-gray-50 rounded-xl border border-gray-100 overflow-hidden divide-y divide-gray-200/60">
                        {selectedProduct.packings.map((pkg, idx) => (
                          <div key={idx} className="flex items-center justify-between px-4 py-2.5 text-[13px]">
                            <span className="font-semibold text-gray-700">{pkg.size}</span>
                            <span className="font-extrabold text-gray-900">{pkg.price}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* GST & Terms Note */}
                  <div className="bg-emerald-50/40 rounded-xl p-3 border border-emerald-100/50 text-[11.5px] text-gray-500 space-y-1">
                    <p className="font-semibold text-emerald-800 flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600" /> Rates include GST
                    </p>
                    <p>Accepted: NEFT, RTGS, QR-Code. Cash is not accepted.</p>
                  </div>
                </div>

                {/* Footer/CTA */}
                <div className="pt-5 border-t border-gray-100 mt-6 flex flex-col gap-2.5">
                  <Link
                    href="/contact"
                    onClick={() => setSelectedProduct(null)}
                    className="w-full bg-primary hover:bg-primary/90 text-white text-[13.5px] font-bold py-3 px-4 rounded-full transition-all text-center flex items-center justify-center gap-2"
                  >
                    <Building className="w-4 h-4" /> Enquire for Dealership
                  </Link>
                  <p className="text-[10px] text-gray-400 text-center">
                    Customer Care: +91 9021342901 · Pune, MH
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
