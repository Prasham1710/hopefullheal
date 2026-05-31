import prisma from "@/lib/db/prisma";
import Image from "next/image";
import { notFound } from "next/navigation";
import { cache } from "react";
import Link from "next/link";
import { formatPrice } from "@/lib/format";
import AddToCartButton from "../../../_components/AddToCartButton";
import { incrementProductQuantity } from "./actions";
import { BsShieldCheck, BsCartCheck } from "react-icons/bs";
import { FaTruck, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FlaskConical, Package, Stethoscope } from "lucide-react";

interface ProductPageProps {
  params: { id: string };
}

const getProduct = cache(async (id: string) => {
  const product = await prisma.product.findUnique({ where: { id } });
  if (!product) notFound();
  return product;
});

const trustBadges = [
  { Icon: BsShieldCheck, label: "100% Authentic", sub: "Pharmacy verified" },
  { Icon: FaTruck,       label: "Free Delivery",  sub: "On all orders"     },

  { Icon: BsCartCheck,   label: "Secure Checkout", sub: "Encrypted payment" },
];

const tags = ["Oncology Grade", "Pharmacy Verified", "Prescription Ready", "Secure Packaging"];

export default async function ProductPage({ params: { id } }: ProductPageProps) {
  const product = await getProduct(id);
  const isNew = Date.now() - new Date(product.createdAt).getTime() < 1000 * 60 * 60 * 24 * 7;

  return (
    <div className="min-h-screen bg-[#f0f4f8]">

      {/* Breadcrumb */}
      <div className="bg-white border-b border-[#e4e5e6]">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center gap-2 text-sm text-[#688ca2]">
          <Link href="/" className="hover:text-[#00416a] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/doctor" className="hover:text-[#00416a] transition-colors">Medicines</Link>
          <span>/</span>
          <span className="text-[#243a50] font-medium line-clamp-1">{product.name}</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* ── Left: Image ── */}
          <div className="flex flex-col gap-4">
            <div className="relative bg-white rounded-3xl overflow-hidden border border-[#e4e5e6] shadow-sm aspect-square flex items-center justify-center p-10">
              {isNew && (
                <span className="absolute top-4 left-4 bg-[#ff6f61] text-white text-xs font-bold px-3 py-1 rounded-full shadow z-10">
                  New Arrival
                </span>
              )}
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={460}
                height={460}
                className="object-contain w-full h-full"
                priority
              />
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-2 gap-3">
              {trustBadges.map(({ Icon, label, sub }) => (
                <div key={label} className="bg-white rounded-2xl p-4 border border-[#e4e5e6] shadow-sm flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#00416a]/10 flex items-center justify-center shrink-0">
                    <Icon className="text-[#00416a]" size={16} />
                  </div>
                  <div>
                    <p className="text-[#243a50] text-xs font-bold leading-tight">{label}</p>
                    <p className="text-[#688ca2] text-xs">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Details ── */}
          <div className="flex flex-col gap-5">

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-0.5">
                {[1,2,3,4].map((s) => <FaStar key={s} size={14} className="text-[#ff6f61]" />)}
                <FaStarHalfAlt size={14} className="text-[#ff6f61]" />
              </div>
              <span className="text-[#688ca2] text-sm">4.5 · Verified product</span>
            </div>

            {/* Name */}
            <h1 className="font-black text-2xl sm:text-3xl text-[#243a50] leading-snug">
              {product.name}
            </h1>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-black text-[#00416a]">{formatPrice(product.price)}</span>
              <span className="text-sm text-[#688ca2] bg-[#e4e5e6] px-2.5 py-1 rounded-full">incl. all taxes</span>
            </div>

            <div className="border-t border-[#e4e5e6]" />

            {/* Description */}
            <div>
              <h2 className="font-bold text-[#243a50] mb-2 text-sm uppercase tracking-wider">
                About this product
              </h2>
              <p className="text-[#688ca2] text-sm leading-relaxed">{product.description}</p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span key={tag} className="bg-[#00416a]/8 text-[#00416a] text-xs font-semibold px-3 py-1.5 rounded-full border border-[#00416a]/20">
                  {tag}
                </span>
              ))}
            </div>

            {/* Delivery info */}
            <div className="bg-white rounded-2xl border border-[#e4e5e6] p-4 flex items-start gap-3">
              <FaTruck className="text-[#00416a] mt-0.5 shrink-0" size={16} />
              <div>
                <p className="text-[#243a50] text-sm font-semibold">Free delivery available</p>
                <p className="text-[#688ca2] text-xs mt-0.5 leading-relaxed">
                  Usually dispatched within 24 hours. Delivered in verified, tamper-proof packaging.
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3 pt-1">
              <AddToCartButton
                productId={product.id}
                incrementProductQuantity={incrementProductQuantity}
              />
              <Link
                href="/doctor/cart"
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl text-sm font-bold border-2 border-[#00416a] text-[#00416a] hover:bg-[#00416a] hover:text-white transition-all duration-200"
              >
                View Cart
              </Link>
            </div>

            {/* Back link */}
            <Link
              href="/doctor"
              className="text-[#688ca2] hover:text-[#00416a] text-sm font-medium hover:underline transition-colors"
            >
              ← Back to all medicines
            </Link>
          </div>
        </div>

        {/* Bottom info strip */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[
            { Icon: FlaskConical, title: "Clinically Verified",  desc: "All medications are sourced from licensed pharmaceutical manufacturers." },
            { Icon: Package,      title: "Safe Packaging",       desc: "Tamper-proof, temperature-controlled packaging for sensitive medications." },
            { Icon: Stethoscope, title: "Doctor Consultation",  desc: "Not sure about this medication? Book a consultation with our oncologists." },
          ].map(({ Icon, title, desc }) => (
            <div key={title} className="bg-white rounded-2xl p-6 border border-[#e4e5e6] shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#00416a]/10 flex items-center justify-center mb-3">
                <Icon size={18} className="text-[#00416a]" />
              </div>
              <h3 className="font-bold text-[#243a50] text-sm mb-1">{title}</h3>
              <p className="text-[#688ca2] text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
