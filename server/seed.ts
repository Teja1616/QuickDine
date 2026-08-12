import "dotenv/config";
import bcrypt from "bcrypt";
import mongoose from "mongoose";
import { User } from "./models/User.js";
import { Restaurant } from "./models/Restaurant.js";
import { Booking } from "./models/Booking.js";

const MONGO_URI = process.env.MONGODB_URI || "";

const seedData = async () => {
    try {
        console.log("Connecting to database for seeding...");

        await mongoose.connect(MONGO_URI);

        console.log("Database connected. Clearing existing collections...");

        await User.deleteMany({});
        await Restaurant.deleteMany({});
        await Booking.deleteMany({});

        console.log("Creating default users...");
        
        const salt = await bcrypt.genSalt(10);
        const adminPassword = await bcrypt.hash("admin123", salt);
        const userPassword = await bcrypt.hash("user123", salt);
        const ownerPassword = await bcrypt.hash("owner123", salt);
        
        // Admin 
        const adminUser = await User.create({
            name: "Alex Mercer",
            email: "admin@example.com",
            password: adminPassword,
            phone: "+01234567788",
            role: "admin",
        });

        // user
          const testUser = await User.create({
            name: "Sarah Jenkins",
            email: "user@example.com",
            password: userPassword,
            phone: "+01234567789",
            role: "user",
        });

        // owner
          const ownerUser = await User.create({
            name: "Marc Dubios",
            email: "owner@example.com",
            password: ownerPassword,
            phone: "+01234567790",
            role: "owner",
        });

        console.log("Creating restaurants...");

const restaurantsData= [
    {
        name: "L'Essence",
        slug: "l-essence",
        description:
            "An intimate, Parisian-inspired fine dining chamber wrapped in dark velvet and soft golden candle glow. L'Essence specializes in meticulous plating of haute gastronomy, creating a rich sensory dialogue between modern culinary innovation and classic romance.",
        cuisine: "French",
        priceRange: "$$$$",
        rating: 4.9,
        reviewCount: 88,
        location: "Manhattan, NY",
        address: "115 Greenwich St, New York, NY 10006",
        image: "/restaurant_5.png",
        chef: "Jean-Luc Picard",
        tags: ["Romantic", "Velvet Booths", "Candlelit", "Haute Cuisine"],
        availableSlots: ["18:00", "19:00", "20:00", "21:00", "22:00"],
        featured: true,
        exclusive: false,
        
    },
    {
        name: "Terraza Cielo",
        slug: "terraza-cielo",
        description:
            "A sun-drenched rooftop oasis celebrating Italian and Mediterranean lifestyles. Featuring floor-to-ceiling foliage, white marble bistro tables, and panoramic skyline views, Terraza Cielo serves hand-crafted pastas and coastal seafood paired with bright botanical cocktails.",
        cuisine: "Italian",
        priceRange: "$$$",
        rating: 4.7,
        reviewCount: 205,
        location: "Manhattan, NY",
        address: "244 Fifth Ave Rooftop, New York, NY 10001",
        image: "/restaurant_3.jpg",
        chef: "Elena Rossi",
        tags: ["Rooftop", "Skyline Views", "Handmade Pasta", "Craft Cocktails"],
        availableSlots: ["12:00", "13:00", "17:00", "18:00", "19:00", "20:00", "21:00"],
        featured: true,
        exclusive: false,
    },
    {
        name: "Kuro Omakase",
        slug: "kuro-omakase",
        description:
            "An atmospheric, moody sanctuary of premium Japanese gastronomy. Seated at a dark, polished basalt-stone counter, guests experience a deeply focused sushi omakase. Chef Kenji Sato translates the freshest seasonal ingredients directly from Tokyo's fish markets into elegant, edible poetry.",
        cuisine: "Japanese",
        priceRange: "$$$$",
        rating: 4.8,
        reviewCount: 92,
        location: "Manhattan, NY",
        address: "18 Orchard St, New York, NY 10002",
        image: "/restaurant_2.jpg",
        chef: "Kenji Sato",
        tags: ["Omakase", "Basalt Counter", "Japanese", "Zen Atmosphere"],
        availableSlots: ["18:00", "20:30"],
        featured: true,
        exclusive: true,
    },
    {
        name: "Flora Garden",
        slug: "flora-garden",
        description:
            "A bright, airy conservatory celebrating organic, plant-forward gastronomy. Nestled under glass ceilings with floor-to-ceiling botanicals, Flora Garden transforms fresh seasonal crops into delicate, high-end editorial culinary works of art.",
        cuisine: "Vegetarian",
        priceRange: "$$$",
        rating: 4.8,
        reviewCount: 110,
        location: "Manhattan, NY",
        address: "90 Grand St, New York, NY 10013",
        image: "/restaurant_6.png",
        chef: "Chloe Mercer",
        tags: ["Plant-Based", "Glasshouse", "Organic", "Bright & Airy"],
        availableSlots: ["11:30", "13:00", "14:30", "17:30", "19:00", "20:30"],
        featured: false,
        exclusive: false,
    },
    {
        name: "Ember Grille",
        slug: "ember-grille",
        description:
            "An upscale modern steakhouse with exposed brick walls, leather booths, and warm, industrial-chic pendant lighting. Offering Prime dry-aged cuts grilled over live hickory and cherrywood embers. Gourmet dining elevated into a sophisticated nocturnal experience.",
        cuisine: "Steakhouse",
        priceRange: "$$$$",
        rating: 4.6,
        reviewCount: 142,
        location: "Manhattan, NY",
        address: "320 Bowery, New York, NY 10012",
        image: "/restaurant_1.png",
        chef: "Marcus Vance",
        tags: ["Dry-Aged Beef", "Wood Fire", "Moody Lighting", "Wine Room"],
        availableSlots: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
        featured: false,
        exclusive: false,
    },
    {
        name: "L'Artiste",
        slug: "l-artiste",
        description:
            "An avant-garde journey through modern French gastronomy. L'Artiste blends classic French culinary foundations with contemporary visual artistry, resulting in a sensory dining experience that is both theatrical and deeply satisfying. Set in a gorgeous high-ceilinged room with minimal charcoal and gold design language.",
        cuisine: "French",
        priceRange: "$$$$",
        rating: 4.9,
        reviewCount: 124,
        location: "Manhattan, NY",
        address: "420 Mercer St, New York, NY 10003",
        image: "/restaurant_4.png",
        chef: "Jean-Pierre Dubois",
        tags: ["Michelin Star", "Fine Dining", "Tasting Menu", "Romantic"],
        availableSlots: ["17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30"],
        featured: true,
        exclusive: true,
    }
    
];
       
    console.log("Inserting restaurants...");
    const updatedRestaurantsData = restaurantsData.map((rest,idx) => {
        const {...restInfo} = rest;
        return {
            ...restInfo,
            owner: ownerUser._id,
            status: "approved",
            totalSeats: 20 + idx * 5, 
        }
    });

        await Restaurant.insertMany(updatedRestaurantsData);
        console.log("Seeding complete! Disconnecting...");
        
        await mongoose.disconnect();
        console.log("Disconnected from database.");

    }catch (error:any) {
        console.error("Seeding failed:", error);
        process.exit(1);
    }
}

seedData();