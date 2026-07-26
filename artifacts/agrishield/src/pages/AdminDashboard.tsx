import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Plus, Trash2, Edit2, Save, X, Settings, ShoppingBag, Sprout, Activity, AlertCircle } from "lucide-react";
import { 
  getCrops, getStages, getConcerns, getProducts,
  saveCrops, saveStages, saveConcerns, saveProducts,
  Product, Crop, GrowthStage, Concern
} from "../lib/dbStore";
import { useToast } from "@/hooks/use-toast";

export default function AdminDashboard() {
  const { toast } = useToast();
  
  // Data State
  const [products, setProducts] = useState<Product[]>([]);
  const [crops, setCrops] = useState<Crop[]>([]);
  const [stages, setStages] = useState<GrowthStage[]>([]);
  const [concerns, setConcerns] = useState<Concern[]>([]);

  // Navigation state inside dashboard
  const [activeTab, setActiveTab] = useState<"products" | "crops" | "stages" | "concerns">("products");

  // Create/Edit Modals state
  const [editingItem, setEditingItem] = useState<{ type: string; data: any } | null>(null);
  const [newItemName, setNewItemName] = useState("");

  // Edit Product Form State
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [prodCrops, setProdCrops] = useState<string[]>([]);
  const [prodStages, setProdStages] = useState<string[]>([]);
  const [prodConcerns, setProdConcerns] = useState<string[]>([]);
  const [prodDosage, setProdDosage] = useState("");
  const [prodComposition, setProdComposition] = useState("");
  const [prodMethod, setProdMethod] = useState("");

  // Load Database State
  useEffect(() => {
    setProducts(getProducts());
    setCrops(getCrops());
    setStages(getStages());
    setConcerns(getConcerns());
  }, []);

  // CRUD for Crops
  const handleAddCrop = () => {
    if (!newItemName.trim()) return;
    const name = newItemName.trim();
    const id = name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    
    if (crops.some(c => c.name.toLowerCase() === name.toLowerCase())) {
      toast({ title: "Validation Error", description: "Crop name already exists.", variant: "destructive" });
      return;
    }

    const updated = [...crops, { id, name }];
    setCrops(updated);
    saveCrops(updated);
    setNewItemName("");
    toast({ title: "Crop Added", description: `"${name}" added successfully.` });
  };

  const handleDeleteCrop = (id: string) => {
    const cropToDelete = crops.find(c => c.id === id);
    if (!cropToDelete) return;
    const updated = crops.filter(c => c.id !== id);
    setCrops(updated);
    saveCrops(updated);
    
    // Also remove from any products
    const updatedProducts = products.map(p => ({
      ...p,
      crops: p.crops.filter(c => c !== cropToDelete.name)
    }));
    setProducts(updatedProducts);
    saveProducts(updatedProducts);
    
    toast({ title: "Crop Deleted", description: `"${cropToDelete.name}" removed.` });
  };

  // CRUD for Growth Stages
  const handleAddStage = () => {
    if (!newItemName.trim()) return;
    const name = newItemName.trim();
    const id = name.toLowerCase().replace(/[^a-z0-9]+/g, "-");

    if (stages.some(s => s.name.toLowerCase() === name.toLowerCase())) {
      toast({ title: "Validation Error", description: "Growth stage already exists.", variant: "destructive" });
      return;
    }

    const updated = [...stages, { id, name }];
    setStages(updated);
    saveStages(updated);
    setNewItemName("");
    toast({ title: "Growth Stage Added", description: `"${name}" added successfully.` });
  };

  const handleDeleteStage = (id: string) => {
    const stageToDelete = stages.find(s => s.id === id);
    if (!stageToDelete) return;
    const updated = stages.filter(s => s.id !== id);
    setStages(updated);
    saveStages(updated);

    // Also remove from products
    const updatedProducts = products.map(p => ({
      ...p,
      stages: p.stages.filter(s => s !== stageToDelete.name)
    }));
    setProducts(updatedProducts);
    saveProducts(updatedProducts);

    toast({ title: "Growth Stage Deleted", description: `"${stageToDelete.name}" removed.` });
  };

  // CRUD for Concerns
  const handleAddConcern = () => {
    if (!newItemName.trim()) return;
    const name = newItemName.trim();
    const id = name.toLowerCase().replace(/[^a-z0-9]+/g, "-");

    if (concerns.some(c => c.name.toLowerCase() === name.toLowerCase())) {
      toast({ title: "Validation Error", description: "Concern name already exists.", variant: "destructive" });
      return;
    }

    const updated = [...concerns, { id, name }];
    setConcerns(updated);
    saveConcerns(updated);
    setNewItemName("");
    toast({ title: "Concern Added", description: `"${name}" added successfully.` });
  };

  const handleDeleteConcern = (id: string) => {
    const concernToDelete = concerns.find(c => c.id === id);
    if (!concernToDelete) return;
    const updated = concerns.filter(c => c.id !== id);
    setConcerns(updated);
    saveConcerns(updated);

    // Also remove from products
    const updatedProducts = products.map(p => ({
      ...p,
      concerns: p.concerns.filter(c => c !== concernToDelete.name)
    }));
    setProducts(updatedProducts);
    saveProducts(updatedProducts);

    toast({ title: "Concern Deleted", description: `"${concernToDelete.name}" removed.` });
  };

  // Product Mapping Edit
  const openEditProduct = (prod: Product) => {
    setSelectedProduct(prod);
    setProdCrops(prod.crops);
    setProdStages(prod.stages);
    setProdConcerns(prod.concerns);
    setProdDosage(prod.dosage || "");
    setProdComposition(prod.composition || "");
    setProdMethod(prod.method || "");
  };

  const handleToggleProductCrop = (cropName: string) => {
    setProdCrops(prev => 
      prev.includes(cropName) ? prev.filter(c => c !== cropName) : [...prev, cropName]
    );
  };

  const handleToggleProductStage = (stageName: string) => {
    setProdStages(prev => 
      prev.includes(stageName) ? prev.filter(s => s !== stageName) : [...prev, stageName]
    );
  };

  const handleToggleProductConcern = (concernName: string) => {
    setProdConcerns(prev => 
      prev.includes(concernName) ? prev.filter(c => c !== concernName) : [...prev, concernName]
    );
  };

  const handleSaveProduct = () => {
    if (!selectedProduct) return;
    
    const updatedProducts = products.map(p => {
      if (p.id === selectedProduct.id) {
        return {
          ...p,
          crops: prodCrops.length === 0 ? ["All supported crops"] : prodCrops,
          stages: prodStages,
          concerns: prodConcerns,
          dosage: prodDosage,
          composition: prodComposition,
          method: prodMethod
        };
      }
      return p;
    });

    setProducts(updatedProducts);
    saveProducts(updatedProducts);
    setSelectedProduct(null);
    toast({ title: "Product Saved", description: `"${selectedProduct.name}" updated successfully.` });
  };

  return (
    <div className="w-full bg-[#fcfcfc] min-h-screen pt-12 pb-24 text-gray-900">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 border-b border-gray-100 pb-8">
          <div>
            <h1 className="text-[28px] md:text-[36px] font-bold text-gray-900 tracking-tight flex items-center gap-2">
              <Settings className="w-8 h-8 text-primary" /> Recommendation System Admin
            </h1>
            <p className="text-gray-500 text-[14.5px] mt-1.5">
              Manage agricultural recommendation parameters. Changes apply to homepage filters instantly.
            </p>
          </div>
          <Link href="/">
            <span className="inline-flex items-center justify-center bg-gray-900 text-white text-[13px] font-bold px-5 py-2.5 rounded-full hover:bg-gray-800 transition cursor-pointer shadow-sm">
              Back to Website
            </span>
          </Link>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-gray-200 mb-8 overflow-x-auto hide-scrollbar">
          {[
            { id: "products", label: "Product Mapping", Icon: ShoppingBag },
            { id: "crops", label: "Crops", Icon: Sprout },
            { id: "stages", label: "Growth Stages", Icon: Activity },
            { id: "concerns", label: "Concerns", Icon: AlertCircle },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => { setActiveTab(tab.id as any); setSelectedProduct(null); }}
              className={`flex items-center gap-2 px-6 py-3.5 text-[14px] font-bold border-b-2 transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? "border-primary text-primary"
                  : "border-transparent text-gray-500 hover:text-gray-800"
              }`}
            >
              <tab.Icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab 1: Product Mapping */}
        {activeTab === "products" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Products List Grid */}
            <div className={`bg-white border border-gray-200 rounded-[16px] p-6 shadow-sm overflow-hidden ${selectedProduct ? "lg:col-span-6" : "lg:col-span-12"}`}>
              <h2 className="text-[18px] font-bold mb-4 flex items-center justify-between">
                <span>Agrishield Inventory ({products.length})</span>
                <span className="text-[12px] font-normal text-gray-400">Click Edit to assign crops/stages/concerns</span>
              </h2>
              
              <div className="divide-y divide-gray-100 max-h-[600px] overflow-y-auto pr-2">
                {products.map(p => (
                  <div key={p.id} className="py-4 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-12 h-12 bg-gray-50 rounded-lg border border-gray-100 flex items-center justify-center shrink-0">
                        <img src={p.img} alt="" className="max-h-[90%] max-w-[90%] object-contain" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-[13.5px] font-bold text-gray-900 truncate leading-snug">{p.name}</h4>
                        <p className="text-[11.5px] text-gray-400 truncate">{p.type} · <span className="font-semibold text-primary">{p.category}</span></p>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {p.crops.map(c => (
                            <span key={c} className="text-[9px] bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded border border-emerald-100">{c}</span>
                          ))}
                          <span className="text-[9px] bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded border border-blue-100">{p.stages.length} Stages</span>
                          <span className="text-[9px] bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded border border-amber-100">{p.concerns.length} Concerns</span>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => openEditProduct(p)}
                      className="shrink-0 flex items-center gap-1 bg-gray-50 text-[12px] font-bold text-gray-700 hover:bg-gray-100 border border-gray-200 px-3 py-1.5 rounded-full transition"
                    >
                      <Edit2 className="w-3.5 h-3.5" /> Edit
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Editing Product panel */}
            {selectedProduct && (
              <div className="lg:col-span-6 bg-white border border-gray-200 rounded-[16px] p-6 shadow-md sticky top-24">
                <div className="flex items-start justify-between mb-6 pb-4 border-b border-gray-100">
                  <div>
                    <h3 className="text-[17px] font-extrabold text-gray-900">Map Parameters</h3>
                    <p className="text-[13px] text-gray-400 font-semibold">{selectedProduct.name}</p>
                  </div>
                  <button onClick={() => setSelectedProduct(null)} className="p-1 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-6 max-h-[550px] overflow-y-auto pr-2">
                  
                  {/* Supported Crops */}
                  <div>
                    <label className="block text-[12px] font-bold uppercase tracking-wider text-gray-400 mb-2">Supported Crops</label>
                    <div className="flex flex-wrap gap-2">
                      {crops.map(c => {
                        const active = prodCrops.includes(c.name);
                        return (
                          <button
                            key={c.id}
                            onClick={() => handleToggleProductCrop(c.name)}
                            className={`px-3 py-1.5 text-[12.5px] font-semibold border rounded-full transition ${
                              active 
                                ? "bg-emerald-50 border-emerald-300 text-emerald-800" 
                                : "bg-white border-gray-200 text-gray-600 hover:border-gray-300"
                            }`}
                          >
                            {c.name}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Growth Stages */}
                  <div>
                    <label className="block text-[12px] font-bold uppercase tracking-wider text-gray-400 mb-2">Applicable Growth Stages</label>
                    <div className="flex flex-wrap gap-2">
                      {stages.map(s => {
                        const active = prodStages.includes(s.name);
                        return (
                          <button
                            key={s.id}
                            onClick={() => handleToggleProductStage(s.name)}
                            className={`px-3 py-1.5 text-[12.5px] font-semibold border rounded-full transition ${
                              active 
                                ? "bg-blue-50 border-blue-300 text-blue-800" 
                                : "bg-white border-gray-200 text-gray-600 hover:border-gray-300"
                            }`}
                          >
                            {s.name}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Concerns */}
                  <div>
                    <label className="block text-[12px] font-bold uppercase tracking-wider text-gray-400 mb-2">Solves Concerns / Solutions</label>
                    <div className="flex flex-wrap gap-2">
                      {concerns.map(cn => {
                        const active = prodConcerns.includes(cn.name);
                        return (
                          <button
                            key={cn.id}
                            onClick={() => handleToggleProductConcern(cn.name)}
                            className={`px-3 py-1.5 text-[12.5px] font-semibold border rounded-full transition ${
                              active 
                                ? "bg-amber-50 border-amber-300 text-amber-800" 
                                : "bg-white border-gray-200 text-gray-600 hover:border-gray-300"
                            }`}
                          >
                            {cn.name}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Product Specification Info */}
                  <div className="grid grid-cols-1 gap-4 pt-4 border-t border-gray-100">
                    <div>
                      <label className="block text-[12.5px] font-medium text-gray-700 mb-1">Recommended Dosage</label>
                      <input 
                        value={prodDosage}
                        onChange={e => setProdDosage(e.target.value)}
                        placeholder="e.g. 1.0 - 2.0 ml per Litre of water"
                        className="w-full h-10 px-3 border border-gray-200 rounded-[6px] text-[13.5px] focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div>
                      <label className="block text-[12.5px] font-medium text-gray-700 mb-1">Application Method</label>
                      <input 
                        value={prodMethod}
                        onChange={e => setProdMethod(e.target.value)}
                        placeholder="e.g. Foliar Spray, Soil Drenching"
                        className="w-full h-10 px-3 border border-gray-200 rounded-[6px] text-[13.5px] focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div>
                      <label className="block text-[12.5px] font-medium text-gray-700 mb-1">Chemical/Organic Composition</label>
                      <input 
                        value={prodComposition}
                        onChange={e => setProdComposition(e.target.value)}
                        placeholder="e.g. Chelated EDTA Zinc 12%"
                        className="w-full h-10 px-3 border border-gray-200 rounded-[6px] text-[13.5px] focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>

                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-3">
                  <button
                    onClick={handleSaveProduct}
                    className="flex-1 h-11 bg-primary hover:bg-primary/95 text-white font-bold text-[14px] rounded-full transition flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Save className="w-4 h-4" /> Save Mappings
                  </button>
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="h-11 px-5 border border-gray-200 hover:bg-gray-50 text-gray-700 font-bold text-[14px] rounded-full transition"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}

          </div>
        )}

        {/* Tab 2: Manage Crops */}
        {activeTab === "crops" && (
          <div className="max-w-2xl bg-white border border-gray-200 rounded-[16px] p-6 shadow-sm">
            <h2 className="text-[18px] font-bold text-gray-900 mb-6">Manage Crop Dictionary</h2>
            
            {/* Add Panel */}
            <div className="flex gap-3 mb-6">
              <input
                value={newItemName}
                onChange={e => setNewItemName(e.target.value)}
                placeholder="Add new crop name (e.g. Maize)..."
                className="flex-1 h-11 px-4 border border-gray-200 rounded-[8px] text-[14px] outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition"
              />
              <button
                onClick={handleAddCrop}
                className="h-11 px-5 bg-primary hover:bg-primary/95 text-white font-bold text-[13.5px] rounded-[8px] transition flex items-center gap-1.5"
              >
                <Plus className="w-4 h-4" /> Add Crop
              </button>
            </div>

            {/* List */}
            <div className="border border-gray-100 rounded-xl divide-y divide-gray-100 overflow-hidden">
              {crops.length === 0 ? (
                <p className="p-6 text-center text-gray-400 text-[14px]">No crops configured.</p>
              ) : (
                crops.map(c => (
                  <div key={c.id} className="px-5 py-3.5 flex items-center justify-between hover:bg-gray-50/40 transition">
                    <span className="text-[14px] font-bold text-gray-800">{c.name}</span>
                    <button
                      onClick={() => handleDeleteCrop(c.id)}
                      className="p-2 text-gray-400 hover:text-red-600 rounded-full hover:bg-red-50 transition"
                      title="Delete crop"
                    >
                      <Trash2 className="w-4.5 h-4.5" />
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* Tab 3: Manage Stages */}
        {activeTab === "stages" && (
          <div className="max-w-2xl bg-white border border-gray-200 rounded-[16px] p-6 shadow-sm">
            <h2 className="text-[18px] font-bold text-gray-900 mb-6">Manage Growth Stages Dictionary</h2>

            {/* Add Panel */}
            <div className="flex gap-3 mb-6">
              <input
                value={newItemName}
                onChange={e => setNewItemName(e.target.value)}
                placeholder="Add new stage name (e.g. Pre-Harvest)..."
                className="flex-1 h-11 px-4 border border-gray-200 rounded-[8px] text-[14px] outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition"
              />
              <button
                onClick={handleAddStage}
                className="h-11 px-5 bg-primary hover:bg-primary/95 text-white font-bold text-[13.5px] rounded-[8px] transition flex items-center gap-1.5"
              >
                <Plus className="w-4 h-4" /> Add Stage
              </button>
            </div>

            {/* List */}
            <div className="border border-gray-100 rounded-xl divide-y divide-gray-100 overflow-hidden">
              {stages.length === 0 ? (
                <p className="p-6 text-center text-gray-400 text-[14px]">No growth stages configured.</p>
              ) : (
                stages.map(s => (
                  <div key={s.id} className="px-5 py-3.5 flex items-center justify-between hover:bg-gray-50/40 transition">
                    <span className="text-[14px] font-bold text-gray-800">{s.name}</span>
                    <button
                      onClick={() => handleDeleteStage(s.id)}
                      className="p-2 text-gray-400 hover:text-red-600 rounded-full hover:bg-red-50 transition"
                      title="Delete stage"
                    >
                      <Trash2 className="w-4.5 h-4.5" />
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* Tab 4: Manage Concerns */}
        {activeTab === "concerns" && (
          <div className="max-w-2xl bg-white border border-gray-200 rounded-[16px] p-6 shadow-sm">
            <h2 className="text-[18px] font-bold text-gray-900 mb-6">Manage Concerns Dictionary</h2>

            {/* Add Panel */}
            <div className="flex gap-3 mb-6">
              <input
                value={newItemName}
                onChange={e => setNewItemName(e.target.value)}
                placeholder="Add new concern name (e.g. Iron Deficiency)..."
                className="flex-1 h-11 px-4 border border-gray-200 rounded-[8px] text-[14px] outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition"
              />
              <button
                onClick={handleAddConcern}
                className="h-11 px-5 bg-primary hover:bg-primary/95 text-white font-bold text-[13.5px] rounded-[8px] transition flex items-center gap-1.5"
              >
                <Plus className="w-4 h-4" /> Add Concern
              </button>
            </div>

            {/* List */}
            <div className="border border-gray-100 rounded-xl divide-y divide-gray-100 overflow-hidden">
              {concerns.length === 0 ? (
                <p className="p-6 text-center text-gray-400 text-[14px]">No concerns configured.</p>
              ) : (
                concerns.map(c => (
                  <div key={c.id} className="px-5 py-3.5 flex items-center justify-between hover:bg-gray-50/40 transition">
                    <span className="text-[14px] font-bold text-gray-800">{c.name}</span>
                    <button
                      onClick={() => handleDeleteConcern(c.id)}
                      className="p-2 text-gray-400 hover:text-red-600 rounded-full hover:bg-red-50 transition"
                      title="Delete concern"
                    >
                      <Trash2 className="w-4.5 h-4.5" />
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
