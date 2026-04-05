"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroBillboardTestimonial from '@/components/sections/hero/HeroBillboardTestimonial';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import { Award, Beef, Car, Flame, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="directional-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="small"
        sizing="largeSmallSizeMediumTitles"
        background="circleGradient"
        cardStyle="glass-depth"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        { name: "Home", id: "hero"},
        { name: "Menu", id: "menu"},
        { name: "Reviews", id: "reviews"},
        { name: "Contact", id: "contact"},
      ]}
      brandName="Hamburgasme"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardTestimonial
      background={{ variant: "plain" }}
      title="Hamburgasme 🍔🔥"
      description="أفضل burgers في Ariana! Buns pur beurre, viande fraîche, et un goût unique."
      testimonials={[
        { name: "Ahmed K.", handle: "@ahmedk", testimonial: "Burger bnina barcha 🔥 n3awed nji kol jem3a", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/top-view-burger-ingredients_23-2148235086.jpg?_wi=1", imageAlt: "gourmet burger close up appetizing" },
        { name: "Sarra M.", handle: "@sarram", testimonial: "Service rapide w qualité top 💯", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/front-view-burger-red-tasty-fried-inside-plate-light-wall_140725-11599.jpg?_wi=1", imageAlt: "gourmet premium burger studio shot" },
        { name: "Fares B.", handle: "@faresb", testimonial: "A7sen burger fi Ariana 🍔🔥", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/fancy-cuisine-with-yummy-hamburger_23-2148374860.jpg?_wi=1", imageAlt: "mushroom swiss burger top down view" },
        { name: "Amira H.", handle: "@amirah", testimonial: "Frites w sauces haja o5ra 😍", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/tasty-healthy-burgers-with-chicken-breast_1220-7109.jpg?_wi=1", imageAlt: "grilled chicken burger fresh lettuce" },
        { name: "Karim J.", handle: "@karimj", testimonial: "Top quality and amazing taste!", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/vertical-shot-delicious-burger-with-chicken-onions-rocket-served-with-fried-potatoes_181624-56472.jpg?_wi=1", imageAlt: "classic beef burger simple delicious" }
      ]}
      buttons={[{ text: "اطلب توّا 🍔", href: "tel:21013464" }]}
      imageSrc="http://img.b2bpic.net/free-photo/top-view-burger-ingredients_23-2148235086.jpg?_wi=2"
      imageAlt="Hamburgasme signature burger"
      avatars={[
        { src: "http://img.b2bpic.net/free-photo/front-view-burger-red-tasty-fried-inside-plate-light-wall_140725-11599.jpg", alt: "Customer 1" },
        { src: "http://img.b2bpic.net/free-photo/fancy-cuisine-with-yummy-hamburger_23-2148374860.jpg", alt: "Customer 2" },
        { src: "http://img.b2bpic.net/free-photo/tasty-healthy-burgers-with-chicken-breast_1220-7109.jpg", alt: "Customer 3" },
        { src: "http://img.b2bpic.net/free-photo/vertical-shot-delicious-burger-with-chicken-onions-rocket-served-with-fried-potatoes_181624-56472.jpg", alt: "Customer 4" },
        { src: "http://img.b2bpic.net/free-photo/front-view-delicious-meat-hamburger-with-red-tomatoes-dark-background_179666-19341.jpg", alt: "Customer 5" }
      ]}
      marqueeItems={[
        { type: "text-icon", text: "Fresh Beef", icon: Beef },
        { type: "text-icon", text: "Pur Beurre Buns", icon: Award },
        { type: "text-icon", text: "Fast Delivery", icon: Car },
        { type: "text-icon", text: "Ariana Best", icon: Star },
        { type: "text-icon", text: "Secret Sauce", icon: Flame }
      ]}
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        { id: "p1", name: "Hamburgasme", price: "27.000 TND", imageSrc: "http://img.b2bpic.net/free-photo/front-view-burger-red-tasty-fried-inside-plate-light-wall_140725-11599.jpg?_wi=2" },
        { id: "p2", name: "Mushroom Burger", price: "23.500 TND", imageSrc: "http://img.b2bpic.net/free-photo/fancy-cuisine-with-yummy-hamburger_23-2148374860.jpg?_wi=2" },
        { id: "p3", name: "The White House", price: "24.500 TND", imageSrc: "http://img.b2bpic.net/free-photo/front-view-burger-red-tasty-fried-inside-plate-light-wall_140725-11599.jpg?_wi=3" },
        { id: "p4", name: "Formidable Chicken", price: "24.500 TND", imageSrc: "http://img.b2bpic.net/free-photo/tasty-healthy-burgers-with-chicken-breast_1220-7109.jpg?_wi=2" },
        { id: "p5", name: "Classic Burger", price: "19.000 TND", imageSrc: "http://img.b2bpic.net/free-photo/vertical-shot-delicious-burger-with-chicken-onions-rocket-served-with-fried-potatoes_181624-56472.jpg?_wi=2" },
        { id: "p6", name: "Lucifer Burger", price: "20.000 TND", imageSrc: "http://img.b2bpic.net/free-photo/front-view-delicious-meat-hamburger-with-red-tomatoes-dark-background_179666-19341.jpg?_wi=1" }
      ]}
      title="Our Menu"
      description="Delicious choices for every craving."
    />
  </div>

  <div id="reviews" data-section="reviews">
      <TestimonialCardThirteen
      textboxLayout="split"
      animationType="slide-up"
      useInvertedBackground={false}
      testimonials={[
        { id: "t1", name: "Ahmed K.", handle: "@ahmedk", testimonial: "Burger bnina barcha 🔥 n3awed nji kol jem3a", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/front-view-delicious-meat-hamburger-with-red-tomatoes-dark-background_179666-19341.jpg?_wi=2", imageAlt: "spicy burger chili pepper topping" },
        { id: "t2", name: "Sarra M.", handle: "@sarram", testimonial: "Service rapide w qualité top 💯", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/us-labor-day-celebration-with-burgers_23-2150347439.jpg", imageAlt: "kids burger meal nuggets fries" },
        { id: "t3", name: "Fares B.", handle: "@faresb", testimonial: "A7sen burger fi Ariana 🍔🔥", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/japanese-street-food-restaurant-with-bright-sign_23-2149410168.jpg?_wi=1", imageAlt: "cozy burger restaurant entrance front view" },
        { id: "t4", name: "Amira H.", handle: "@amirah", testimonial: "Frites w sauces haja o5ra 😍", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/top-view-burger-ingredients_23-2148235086.jpg?_wi=3", imageAlt: "gourmet burger close up appetizing" },
        { id: "t5", name: "Karim J.", handle: "@karimj", testimonial: "Amazing burgers, consistent quality every time.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/front-view-burger-red-tasty-fried-inside-plate-light-wall_140725-11599.jpg?_wi=4", imageAlt: "gourmet premium burger studio shot" }
      ]}
      showRating={true}
      title="آراء الحرفاء"
      description="What our customers say about their experience at Hamburgasme."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={true}
      title="Get in Touch"
      description="Visit us at Av. Mustapha Hjeij, Ariana or give us a call."
      inputs={[
        { name: "name", type: "text", placeholder: "Your Name", required: true },
        { name: "phone", type: "tel", placeholder: "Phone Number", required: true }
      ]}
      textarea={{ name: "message", placeholder: "Your message", rows: 4 }}
      imageSrc="http://img.b2bpic.net/free-photo/japanese-street-food-restaurant-with-bright-sign_23-2149410168.jpg?_wi=2"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="Hamburgasme"
      copyrightText="© 2025 Hamburgasme | All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}