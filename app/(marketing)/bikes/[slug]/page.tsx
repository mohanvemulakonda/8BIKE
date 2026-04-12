import { Metadata } from "next";
import { notFound } from "next/navigation";
import { allBikes, getBikeBySlug } from "../../../data/bikes";
import { BikeDetailContent } from "./BikeDetailContent";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return allBikes.map((bike) => ({ slug: bike.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const bike = getBikeBySlug(slug);
  if (!bike) return { title: "Bike Not Found | EIGHT" };

  return {
    title: `${bike.name} | EIGHT`,
    description: bike.description,
  };
}

export default async function BikeDetailPage({ params }: Props) {
  const { slug } = await params;
  const bike = getBikeBySlug(slug);
  if (!bike) notFound();

  return <BikeDetailContent bike={bike} />;
}
