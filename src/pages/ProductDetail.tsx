import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingBag, Sparkles, Check, Shield, ChevronRight } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { useQuote } from '../context/QuoteContext';
import { ProductCard } from '../components/ProductCard';

export const ProductDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { addItem } = useQuote();

  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 text-center">
        <h2 className="font-serif text-2xl font-bold text-white">Product Not Found</h2>
        <p className="text-sm text-[#586956] mt-2 mb-6">
          The requested packaging item could not be located in our catalogue.
        </p>
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 bg-[#5C8358] hover:bg-[#4F724B] text-white px-5 py-2.5 rounded-md text-xs font-bold shadow-lg shadow-[#5C8358]/20"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Catalogue</span>
        </Link>
      </div>
    );
  }

  // Active states
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedCapacity, setSelectedCapacity] = useState(product.capacities[0] || 'Standard');
  const [quantity, setQuantity] = useState(product.moq);
  const [includeBranding, setIncludeBranding] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  // Find active variant if any
  const currentVariant = product.variants.find((v) => v.capacity === selectedCapacity) || product.variants[0];

  const handleAddToQuote = () => {
    addItem(
      {
        productId: product.id,
        productName: product.name,
        productSlug: product.slug,
        categoryName: product.categoryName,
        material: product.material,
        image: product.images[selectedImageIndex] || product.images[0],
        capacity: selectedCapacity,
        moq: product.moq,
        customBranding: includeBranding,
      },
      quantity
    );

    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2500);
  };

  // Related products
  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  return (
    <div className="pt-24 pb-16 sm:pt-28 sm:pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-[#586956] mb-6">
        <Link to="/" className="hover:text-[#5C8358] transition-colors">Home</Link>
        <ChevronRight className="w-3 h-3 text-[#7A8C78]" />
        <Link to="/shop" className="hover:text-[#5C8358] transition-colors">Shop</Link>
        <ChevronRight className="w-3 h-3 text-[#7A8C78]" />
        <Link to={`/shop?category=${product.category}`} className="hover:text-[#5C8358] transition-colors">
          {product.categoryName}
        </Link>
        <ChevronRight className="w-3 h-3 text-[#7A8C78]" />
        <span className="text-white font-medium truncate max-w-xs">{product.name}</span>
      </nav>

      {/* Main Product Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
        {/* Left Gallery */}
        <div className="lg:col-span-6 space-y-4">
          {/* Main Stage */}
          <div className="aspect-square bg-white rounded-2xl border border-[#D7E3D4] p-6 sm:p-10 flex items-center justify-center relative overflow-hidden shadow-2xl">
            <img
              src={product.images[selectedImageIndex] || product.images[0]}
              alt={product.name}
              className="max-h-full max-w-full object-contain transition-all duration-300 drop-shadow-2xl"
            />
            <span className="absolute top-4 left-4 bg-[#F4F7F2] backdrop-blur-xs text-xs font-semibold uppercase tracking-wider text-[#5C8358] px-3 py-1 rounded-md border border-[#D7E3D4]">
              {product.material}
            </span>
          </div>

          {/* Thumbnails */}
          {product.images.length > 1 && (
            <div className="flex gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`w-20 h-20 bg-[#F4F7F2] rounded-lg border p-2 flex items-center justify-center transition-all ${
                    selectedImageIndex === idx
                      ? 'border-[#5C8358] ring-1 ring-[#5C8358] shadow-md shadow-[#5C8358]/20'
                      : 'border-[#D7E3D4] hover:border-[#5C8358]/50'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-contain" />
                </button>
              ))}
            </div>
          )}

          {/* Sourcing Assurance Note */}
          <div className="bg-[#F4F7F2] rounded-xl p-4 border border-[#D7E3D4] space-y-2 text-xs text-[#586956]">
            <p className="font-semibold text-white flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-[#5C8358]" />
              <span>Commercial Packaging Verification</span>
            </p>
            <p className="leading-relaxed">
              Standard laboratory and production batch samples available on request. Please verify chemical compatibility with your formulation before large-scale production.
            </p>
          </div>
        </div>

        {/* Right Info & Order Matrix */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[11px] uppercase tracking-luxury text-[#5C8358] font-semibold">
                {product.categoryName}
              </span>
              <span className="text-[#7A8C78]">•</span>
              <span className="text-xs text-[#7A8C78] font-mono">
                SKU: {currentVariant?.sku || product.id.toUpperCase()}
              </span>
            </div>

            <h1 className="font-serif text-2xl sm:text-3xl text-[#1E2B1D] font-normal tracking-tight">
              {product.name}
            </h1>

            <p className="text-xs sm:text-sm text-[#586956] mt-3 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Capacity Selection */}
          <div>
            <label className="block text-xs uppercase tracking-luxury text-[#586956] font-semibold mb-2">
              Select Capacity / Size:
            </label>
            <div className="flex flex-wrap gap-2">
              {product.capacities.map((cap) => (
                <button
                  key={cap}
                  onClick={() => setSelectedCapacity(cap)}
                  className={`text-xs px-3.5 py-2 rounded-md border font-medium transition-all ${
                    selectedCapacity === cap
                      ? 'bg-[#5C8358] hover:bg-[#4F724B] text-white border-[#5C8358] font-bold shadow-md shadow-[#5C8358]/20'
                      : 'bg-[#F4F7F2] text-[#586956] border-[#D7E3D4] hover:border-[#5C8358]'
                  }`}
                >
                  {cap}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Input */}
          <div>
            <label className="block text-xs uppercase tracking-luxury text-[#586956] font-semibold mb-2">
              Order Quantity (Pcs):
            </label>
            <div className="flex items-center gap-3">
              <input
                type="number"
                min={product.moq}
                step={100}
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || product.moq))}
                className="w-36 bg-[#F4F7F2] border border-[#D7E3D4] rounded-md px-3 py-2.5 text-sm font-semibold text-white focus:outline-none focus:border-[#5C8358] shadow-inner"
              />
              <span className="text-xs text-[#7A8C78]">
                Minimum order quantity: {product.moq.toLocaleString()} pcs
              </span>
            </div>
          </div>

          {/* Custom Branding Checkbox */}
          <div className="p-4 bg-white rounded-xl border border-[#D7E3D4] space-y-2">
            <label className="flex items-start gap-3 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={includeBranding}
                onChange={(e) => setIncludeBranding(e.target.checked)}
                className="mt-1 w-4 h-4 text-[#5C8358] rounded border-[#D7E3D4] focus:ring-[#5C8358] accent-[#5C8358]"
              />
              <div>
                <span className="text-xs sm:text-sm font-semibold text-white flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#5C8358]" />
                  <span>Include Custom Branding / Printing Enquiry</span>
                </span>
                <p className="text-xs text-[#586956] mt-0.5">
                  Request pricing for silk-screen logo printing, custom label application, or metallic closure finishes.
                </p>
              </div>
            </label>
          </div>

          {/* Primary Action Button */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={handleAddToQuote}
              type="button"
              className={`flex-1 inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-bold py-3.5 px-6 rounded-md shadow-lg transition-all ${
                isAdded
                  ? 'bg-emerald-600 text-white'
                  : 'bg-[#5C8358] hover:bg-[#4F724B] text-white shadow-[#5C8358]/20 active:scale-[0.98]'
              }`}
            >
              {isAdded ? (
                <>
                  <Check className="w-4 h-4 text-white" />
                  <span>Added to Quote Basket!</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4 text-white" />
                  <span>Add {quantity.toLocaleString()} Pcs to Quote Basket</span>
                </>
              )}
            </button>

            <Link
              to="/quote"
              className="inline-flex items-center justify-center bg-[#F4F7F2] hover:bg-[#EAF1E8] text-[#5C8358] border border-[#C3D9BF] text-xs sm:text-sm font-semibold py-3.5 px-6 rounded-md transition-colors text-center"
            >
              <span>View Quote Basket</span>
            </Link>
          </div>

          {/* Structured Specification Table */}
          <div className="border-t border-[#D7E3D4] pt-6">
            <h3 className="font-serif text-base font-semibold text-white mb-4">
              Packaging Specifications
            </h3>
            <div className="border border-[#D7E3D4] rounded-xl overflow-hidden text-xs">
              <div className="grid grid-cols-3 p-3 bg-[#F4F7F2]/60 border-b border-[#D7E3D4]">
                <span className="font-medium text-[#7A8C78]">Material</span>
                <span className="col-span-2 font-semibold text-[#3D4D3B]">{product.specs.material}</span>
              </div>
              <div className="grid grid-cols-3 p-3 bg-white border-b border-[#D7E3D4]">
                <span className="font-medium text-[#7A8C78]">Neck Finish</span>
                <span className="col-span-2 font-semibold text-[#3D4D3B]">{product.specs.neckFinish}</span>
              </div>
              <div className="grid grid-cols-3 p-3 bg-[#F4F7F2]/60 border-b border-[#D7E3D4]">
                <span className="font-medium text-[#7A8C78]">Available Colours</span>
                <span className="col-span-2 font-semibold text-[#3D4D3B]">{product.specs.colour.join(', ')}</span>
              </div>
              <div className="grid grid-cols-3 p-3 bg-white border-b border-[#D7E3D4]">
                <span className="font-medium text-[#7A8C78]">Closure Options</span>
                <span className="col-span-2 font-semibold text-[#3D4D3B]">{product.specs.closureOptions.join(', ')}</span>
              </div>
              {product.specs.dimensions && (
                <div className="grid grid-cols-3 p-3 bg-[#F4F7F2]/60">
                  <span className="font-medium text-[#7A8C78]">Dimensions</span>
                  <span className="col-span-2 font-semibold text-[#3D4D3B]">{product.specs.dimensions}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Related Products Grid */}
      {relatedProducts.length > 0 && (
        <section className="border-t border-[#D7E3D4] pt-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-[11px] uppercase tracking-luxury text-[#5C8358] font-semibold mb-1">
                Complementary Stock
              </p>
              <h2 className="font-serif text-2xl font-normal text-white">
                Related {product.categoryName}
              </h2>
            </div>
            <Link
              to={`/shop?category=${product.category}`}
              className="text-xs font-semibold text-[#5C8358] hover:text-[#385934] transition-colors"
            >
              View Category
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {relatedProducts.map((rel) => (
              <ProductCard key={rel.id} product={rel} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
