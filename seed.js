const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const Product = require('./models/productModel');

dotenv.config();
connectDB();

const products = [
    {
        title: "Wireless Bluetooth Headphones",
        image: "https://www.google.com/imgres?q=shop%20item%20png&imgurl=https%3A%2F%2Fw7.pngwing.com%2Fpngs%2F15%2F271%2Fpng-transparent-computer-icons-online-shopping-shopping-cart-service-shopping-cart-icon-text-service-retail-thumbnail.png&imgrefurl=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Dshopping&docid=IQcuUHQQTuQ0oM&tbnid=My2kXIicIGQ-iM&vet=12ahUKEwi_vZTLhvaLAxWB4zQHHTTsF_kQM3oECHAQAA..i&w=360&h=360&hcb=2&ved=2ahUKEwi_vZTLhvaLAxWB4zQHHTTsF_kQM3oECHAQAA",
        description: "Over-ear noise-canceling headphones with immersive sound.",
        category: "Electronics",
        price: 120,
        discountPercentage: 10,
        rating: 4.5,
        stock: 50,
        tags: ["audio", "wireless", "headphones"],
        brand: "SoundWave",
        sku: "SW-H100",
        weight: 0.5,
        dimensions: { width: 20, height: 25, depth: 10 },
        warrantyInformation: "1 year manufacturer warranty",
        shippingInformation: "Free shipping worldwide",
        availabilityStatus: "In Stock",
        reviews: [
            {
                rating: 5,
                comment: "Amazing sound quality and super comfortable!",
                reviewerName: "John Doe",
                reviewerEmail: "john@example.com"
            },
            {
                rating: 4,
                comment: "Great product, but battery life could be better.",
                reviewerName: "Jane Smith",
                reviewerEmail: "jane@example.com"
            }
        ]
    },
    {
        title: "Gaming Laptop",
        image: "https://www.google.com/imgres?q=shop%20item%20png&imgurl=https%3A%2F%2Fw7.pngwing.com%2Fpngs%2F15%2F271%2Fpng-transparent-computer-icons-online-shopping-shopping-cart-service-shopping-cart-icon-text-service-retail-thumbnail.png&imgrefurl=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Dshopping&docid=IQcuUHQQTuQ0oM&tbnid=My2kXIicIGQ-iM&vet=12ahUKEwi_vZTLhvaLAxWB4zQHHTTsF_kQM3oECHAQAA..i&w=360&h=360&hcb=2&ved=2ahUKEwi_vZTLhvaLAxWB4zQHHTTsF_kQM3oECHAQAA",
        description: "High-performance gaming laptop with RTX graphics card.",
        category: "Computers",
        price: 1500,
        discountPercentage: 15,
        rating: 4.8,
        stock: 30,
        tags: ["gaming", "laptop", "performance"],
        brand: "TechMaster",
        sku: "TM-LG2024",
        weight: 2.5,
        dimensions: { width: 35, height: 24, depth: 3 },
        warrantyInformation: "2 years warranty",
        shippingInformation: "Express delivery available",
        availabilityStatus: "In Stock",
        reviews: [
            {
                rating: 5,
                comment: "Handles all games like a beast. Worth every penny!",
                reviewerName: "Alice Brown",
                reviewerEmail: "alice@example.com"
            },
            {
                rating: 4.5,
                comment: "Fantastic laptop, but it's a bit heavy.",
                reviewerName: "Mark Johnson",
                reviewerEmail: "mark@example.com"
            }
        ]
    },
    {
        title: "Smartphone",
        image: "https://www.google.com/imgres?q=shop%20item%20png&imgurl=https%3A%2F%2Fw7.pngwing.com%2Fpngs%2F15%2F271%2Fpng-transparent-computer-icons-online-shopping-shopping-cart-service-shopping-cart-icon-text-service-retail-thumbnail.png&imgrefurl=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Dshopping&docid=IQcuUHQQTuQ0oM&tbnid=My2kXIicIGQ-iM&vet=12ahUKEwi_vZTLhvaLAxWB4zQHHTTsF_kQM3oECHAQAA..i&w=360&h=360&hcb=2&ved=2ahUKEwi_vZTLhvaLAxWB4zQHHTTsF_kQM3oECHAQAA",
        description: "Latest smartphone with AMOLED display and 5G connectivity.",
        category: "Mobile Phones",
        price: 800,
        discountPercentage: 5,
        rating: 4.7,
        stock: 100,
        tags: ["smartphone", "5G", "AMOLED"],
        brand: "PixelPro",
        sku: "PP-S500",
        weight: 0.3,
        dimensions: { width: 7, height: 15, depth: 0.8 },
        warrantyInformation: "1 year warranty",
        shippingInformation: "Next-day delivery",
        availabilityStatus: "In Stock",
        reviews: [
            {
                rating: 4.8,
                comment: "Blazing fast and a gorgeous screen!",
                reviewerName: "Chris Evans",
                reviewerEmail: "chris@example.com"
            },
            {
                rating: 4.2,
                comment: "Camera is amazing, but the battery drains fast.",
                reviewerName: "Linda Carter",
                reviewerEmail: "linda@example.com"
            }
        ]
    },
    {
        title: "Smartwatch",
        image: "https://www.google.com/imgres?q=shop%20item%20png&imgurl=https%3A%2F%2Fw7.pngwing.com%2Fpngs%2F15%2F271%2Fpng-transparent-computer-icons-online-shopping-shopping-cart-service-shopping-cart-icon-text-service-retail-thumbnail.png&imgrefurl=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Dshopping&docid=IQcuUHQQTuQ0oM&tbnid=My2kXIicIGQ-iM&vet=12ahUKEwi_vZTLhvaLAxWB4zQHHTTsF_kQM3oECHAQAA..i&w=360&h=360&hcb=2&ved=2ahUKEwi_vZTLhvaLAxWB4zQHHTTsF_kQM3oECHAQAA",
        description: "Water-resistant smartwatch with heart rate and fitness tracking.",
        category: "Wearables",
        price: 200,
        discountPercentage: 10,
        rating: 4.6,
        stock: 75,
        tags: ["smartwatch", "fitness", "wearable"],
        brand: "FitLife",
        sku: "FL-W100",
        weight: 0.2,
        dimensions: { width: 4, height: 4, depth: 1 },
        warrantyInformation: "1 year limited warranty",
        shippingInformation: "Standard shipping",
        availabilityStatus: "In Stock",
        reviews: [
            {
                rating: 5,
                comment: "Perfect for tracking my workouts!",
                reviewerName: "Emma Wilson",
                reviewerEmail: "emma@example.com"
            },
            {
                rating: 4,
                comment: "Great watch, but I wish the screen was a bit bigger.",
                reviewerName: "David Clark",
                reviewerEmail: "david@example.com"
            }
        ]
    },
    {
        title: "Wireless Keyboard",
        image: "https://www.google.com/imgres?q=shop%20item%20png&imgurl=https%3A%2F%2Fw7.pngwing.com%2Fpngs%2F15%2F271%2Fpng-transparent-computer-icons-online-shopping-shopping-cart-service-shopping-cart-icon-text-service-retail-thumbnail.png&imgrefurl=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Dshopping&docid=IQcuUHQQTuQ0oM&tbnid=My2kXIicIGQ-iM&vet=12ahUKEwi_vZTLhvaLAxWB4zQHHTTsF_kQM3oECHAQAA..i&w=360&h=360&hcb=2&ved=2ahUKEwi_vZTLhvaLAxWB4zQHHTTsF_kQM3oECHAQAA",
        description: "Mechanical wireless keyboard with RGB lighting.",
        category: "Accessories",
        price: 90,
        discountPercentage: 12,
        rating: 4.4,
        stock: 60,
        tags: ["keyboard", "wireless", "RGB"],
        brand: "KeyMaster",
        sku: "KM-WK200",
        weight: 1.2,
        dimensions: { width: 45, height: 15, depth: 3 },
        warrantyInformation: "2 years warranty",
        shippingInformation: "Free standard shipping",
        availabilityStatus: "In Stock",
        reviews: [
            {
                rating: 4.5,
                comment: "Love the RGB lighting! Feels great to type on.",
                reviewerName: "Sophia Lee",
                reviewerEmail: "sophia@example.com"
            },
            {
                rating: 3.8,
                comment: "Keys are a bit too loud, but overall a good keyboard.",
                reviewerName: "Daniel Harris",
                reviewerEmail: "daniel@example.com"
            }
        ]
    },
    {
        title: "Running Shoes",
        image: "https://www.google.com/imgres?q=shop%20item%20png&imgurl=https%3A%2F%2Fw7.pngwing.com%2Fpngs%2F15%2F271%2Fpng-transparent-computer-icons-online-shopping-shopping-cart-service-shopping-cart-icon-text-service-retail-thumbnail.png&imgrefurl=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Dshopping&docid=IQcuUHQQTuQ0oM&tbnid=My2kXIicIGQ-iM&vet=12ahUKEwi_vZTLhvaLAxWB4zQHHTTsF_kQM3oECHAQAA..i&w=360&h=360&hcb=2&ved=2ahUKEwi_vZTLhvaLAxWB4zQHHTTsF_kQM3oECHAQAA",
        description: "Lightweight running shoes with cushioned soles.",
        category: "Footwear",
        price: 120,
        discountPercentage: 15,
        rating: 4.8,
        stock: 100,
        tags: ["shoes", "running", "sports"],
        brand: "SprintPro",
        sku: "SP-RS300",
        weight: 0.8,
        dimensions: { width: 30, height: 12, depth: 10 },
        warrantyInformation: "6 months warranty",
        shippingInformation: "Free shipping",
        availabilityStatus: "In Stock",
        reviews: [
            {
                rating: 5,
                comment: "Super comfy and perfect for long runs!",
                reviewerName: "Mia Johnson",
                reviewerEmail: "mia@example.com"
            },
            {
                rating: 4.5,
                comment: "Good fit, but takes a few days to break in.",
                reviewerName: "Liam Miller",
                reviewerEmail: "liam@example.com"
            }
        ]
    },
    {
        title: "4K Ultra HD TV",
        image: "https://www.google.com/imgres?q=shop%20item%20png&imgurl=https%3A%2F%2Fw7.pngwing.com%2Fpngs%2F15%2F271%2Fpng-transparent-computer-icons-online-shopping-shopping-cart-service-shopping-cart-icon-text-service-retail-thumbnail.png&imgrefurl=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Dshopping&docid=IQcuUHQQTuQ0oM&tbnid=My2kXIicIGQ-iM&vet=12ahUKEwi_vZTLhvaLAxWB4zQHHTTsF_kQM3oECHAQAA..i&w=360&h=360&hcb=2&ved=2ahUKEwi_vZTLhvaLAxWB4zQHHTTsF_kQM3oECHAQAA",
        description: "65-inch Smart TV with stunning 4K resolution and Dolby Atmos sound.",
        category: "Electronics",
        price: 1200,
        discountPercentage: 8,
        rating: 4.9,
        stock: 20,
        tags: ["TV", "4K", "Smart TV"],
        brand: "VisionTech",
        sku: "VT-4K65",
        weight: 15,
        dimensions: { width: 145, height: 85, depth: 10 },
        warrantyInformation: "3 years warranty",
        shippingInformation: "Free home delivery",
        availabilityStatus: "In Stock",
        reviews: [
            {
                rating: 5,
                comment: "Absolutely breathtaking visuals! Feels like a cinema at home.",
                reviewerName: "Michael Scott",
                reviewerEmail: "michael@example.com"
            },
            {
                rating: 4.7,
                comment: "Fantastic picture quality, but the remote feels cheap.",
                reviewerName: "Pam Beesly",
                reviewerEmail: "pam@example.com"
            }
        ]
    },
    {
        title: "Portable Power Bank",
        image: "https://www.google.com/imgres?q=shop%20item%20png&imgurl=https%3A%2F%2Fw7.pngwing.com%2Fpngs%2F15%2F271%2Fpng-transparent-computer-icons-online-shopping-shopping-cart-service-shopping-cart-icon-text-service-retail-thumbnail.png&imgrefurl=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Dshopping&docid=IQcuUHQQTuQ0oM&tbnid=My2kXIicIGQ-iM&vet=12ahUKEwi_vZTLhvaLAxWB4zQHHTTsF_kQM3oECHAQAA..i&w=360&h=360&hcb=2&ved=2ahUKEwi_vZTLhvaLAxWB4zQHHTTsF_kQM3oECHAQAA",
        description: "10,000mAh portable charger with fast charging support.",
        category: "Accessories",
        price: 35,
        discountPercentage: 5,
        rating: 4.6,
        stock: 150,
        tags: ["charger", "power bank", "portable"],
        brand: "ChargeUp",
        sku: "CU-PB100",
        weight: 0.25,
        dimensions: { width: 10, height: 15, depth: 2 },
        warrantyInformation: "1 year warranty",
        shippingInformation: "Standard shipping available",
        availabilityStatus: "In Stock",
        reviews: [
            {
                rating: 4.8,
                comment: "Charges my phone super fast and lasts all day!",
                reviewerName: "Dwight Schrute",
                reviewerEmail: "dwight@example.com"
            },
            {
                rating: 4.2,
                comment: "Compact and handy, but the cable is a bit short.",
                reviewerName: "Jim Halpert",
                reviewerEmail: "jim@example.com"
            }
        ]
    },
    {
        title: "Ergonomic Office Chair",
        image: "https://www.google.com/imgres?q=shop%20item%20png&imgurl=https%3A%2F%2Fw7.pngwing.com%2Fpngs%2F15%2F271%2Fpng-transparent-computer-icons-online-shopping-shopping-cart-service-shopping-cart-icon-text-service-retail-thumbnail.png&imgrefurl=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Dshopping&docid=IQcuUHQQTuQ0oM&tbnid=My2kXIicIGQ-iM&vet=12ahUKEwi_vZTLhvaLAxWB4zQHHTTsF_kQM3oECHAQAA..i&w=360&h=360&hcb=2&ved=2ahUKEwi_vZTLhvaLAxWB4zQHHTTsF_kQM3oECHAQAA",
        description: "Comfortable office chair with lumbar support and adjustable height.",
        category: "Furniture",
        price: 250,
        discountPercentage: 12,
        rating: 4.5,
        stock: 40,
        tags: ["chair", "office", "furniture"],
        brand: "ComfySeat",
        sku: "CS-OC400",
        weight: 12,
        dimensions: { width: 60, height: 120, depth: 60 },
        warrantyInformation: "2 years warranty",
        shippingInformation: "Assembly required",
        availabilityStatus: "In Stock",
        reviews: [
            {
                rating: 4.9,
                comment: "My back pain is gone! Super comfortable.",
                reviewerName: "Angela Martin",
                reviewerEmail: "angela@example.com"
            },
            {
                rating: 4.3,
                comment: "Very sturdy, but the armrests could be softer.",
                reviewerName: "Kevin Malone",
                reviewerEmail: "kevin@example.com"
            }
        ]
    },
    {
        title: "Stainless Steel Water Bottle",
        image: "https://www.google.com/imgres?q=shop%20item%20png&imgurl=https%3A%2F%2Fw7.pngwing.com%2Fpngs%2F15%2F271%2Fpng-transparent-computer-icons-online-shopping-shopping-cart-service-shopping-cart-icon-text-service-retail-thumbnail.png&imgrefurl=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Dshopping&docid=IQcuUHQQTuQ0oM&tbnid=My2kXIicIGQ-iM&vet=12ahUKEwi_vZTLhvaLAxWB4zQHHTTsF_kQM3oECHAQAA..i&w=360&h=360&hcb=2&ved=2ahUKEwi_vZTLhvaLAxWB4zQHHTTsF_kQM3oECHAQAA",
        description: "Insulated bottle keeps drinks cold for 24 hours or hot for 12 hours.",
        category: "Kitchen",
        price: 25,
        discountPercentage: 10,
        rating: 4.7,
        stock: 200,
        tags: ["bottle", "kitchen", "hydration"],
        brand: "HydroMax",
        sku: "HM-SB500",
        weight: 0.7,
        dimensions: { width: 8, height: 30, depth: 8 },
        warrantyInformation: "Lifetime warranty",
        shippingInformation: "Standard delivery",
        availabilityStatus: "In Stock",
        reviews: [
            {
                rating: 5,
                comment: "Keeps my water ice cold all day long!",
                reviewerName: "Stanley Hudson",
                reviewerEmail: "stanley@example.com"
            },
            {
                rating: 4.5,
                comment: "Good build quality, but a bit heavy to carry around.",
                reviewerName: "Oscar Martinez",
                reviewerEmail: "oscar@example.com"
            }
        ]
    },
    {
        title: "Digital Drawing Tablet",
        image: "https://www.google.com/imgres?q=shop%20item%20png&imgurl=https%3A%2F%2Fw7.pngwing.com%2Fpngs%2F15%2F271%2Fpng-transparent-computer-icons-online-shopping-shopping-cart-service-shopping-cart-icon-text-service-retail-thumbnail.png&imgrefurl=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Dshopping&docid=IQcuUHQQTuQ0oM&tbnid=My2kXIicIGQ-iM&vet=12ahUKEwi_vZTLhvaLAxWB4zQHHTTsF_kQM3oECHAQAA..i&w=360&h=360&hcb=2&ved=2ahUKEwi_vZTLhvaLAxWB4zQHHTTsF_kQM3oECHAQAA",
        description: "Graphics tablet with pressure-sensitive pen for digital art.",
        category: "Electronics",
        price: 180,
        discountPercentage: 8,
        rating: 4.6,
        stock: 30,
        tags: ["tablet", "drawing", "art"],
        brand: "ArtFlow",
        sku: "AF-DT700",
        weight: 1.5,
        dimensions: { width: 40, height: 30, depth: 2 },
        warrantyInformation: "1 year warranty",
        shippingInformation: "Free shipping",
        availabilityStatus: "In Stock",
        reviews: [
            {
                rating: 4.9,
                comment: "Perfect for my digital art projects. Very responsive!",
                reviewerName: "Kelly Kapoor",
                reviewerEmail: "kelly@example.com"
            },
            {
                rating: 4.2,
                comment: "Great value for money, but the pen feels a little light.",
                reviewerName: "Ryan Howard",
                reviewerEmail: "ryan@example.com"
            }
        ]
    },
    {
        title: "Backpack with USB Charging Port",
        image: "https://www.google.com/imgres?q=shop%20item%20png&imgurl=https%3A%2F%2Fw7.pngwing.com%2Fpngs%2F15%2F271%2Fpng-transparent-computer-icons-online-shopping-shopping-cart-service-shopping-cart-icon-text-service-retail-thumbnail.png&imgrefurl=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Dshopping&docid=IQcuUHQQTuQ0oM&tbnid=My2kXIicIGQ-iM&vet=12ahUKEwi_vZTLhvaLAxWB4zQHHTTsF_kQM3oECHAQAA..i&w=360&h=360&hcb=2&ved=2ahUKEwi_vZTLhvaLAxWB4zQHHTTsF_kQM3oECHAQAA",
        description: "Durable backpack with multiple compartments and built-in USB port.",
        category: "Bags",
        price: 70,
        discountPercentage: 10,
        rating: 4.7,
        stock: 80,
        tags: ["backpack", "bag", "travel"],
        brand: "TravelMate",
        sku: "TM-BP900",
        weight: 1.2,
        dimensions: { width: 35, height: 50, depth: 20 },
        warrantyInformation: "1 year warranty",
        shippingInformation: "Standard shipping",
        availabilityStatus: "In Stock",
        reviews: [
            {
                rating: 5,
                comment: "Super spacious and the USB port is a game changer!",
                reviewerName: "Meredith Palmer",
                reviewerEmail: "meredith@example.com"
            },
            {
                rating: 4.4,
                comment: "Very durable, but could use more padding on the straps.",
                reviewerName: "Toby Flenderson",
                reviewerEmail: "toby@example.com"
            }
        ]
    },
    {
        title: "Cordless Vacuum Cleaner",
        image: "https://www.google.com/imgres?q=shop%20item%20png&imgurl=https%3A%2F%2Fw7.pngwing.com%2Fpngs%2F15%2F271%2Fpng-transparent-computer-icons-online-shopping-shopping-cart-service-shopping-cart-icon-text-service-retail-thumbnail.png&imgrefurl=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Dshopping&docid=IQcuUHQQTuQ0oM&tbnid=My2kXIicIGQ-iM&vet=12ahUKEwi_vZTLhvaLAxWB4zQHHTTsF_kQM3oECHAQAA..i&w=360&h=360&hcb=2&ved=2ahUKEwi_vZTLhvaLAxWB4zQHHTTsF_kQM3oECHAQAA",
        description: "Lightweight vacuum with powerful suction and HEPA filter.",
        category: "Home Appliances",
        price: 300,
        discountPercentage: 15,
        rating: 4.8,
        stock: 25,
        tags: ["vacuum", "cleaning", "cordless"],
        brand: "CleanWave",
        sku: "CW-VC1100",
        weight: 2.8,
        dimensions: { width: 25, height: 110, depth: 20 },
        warrantyInformation: "2 years warranty",
        shippingInformation: "Free shipping",
        availabilityStatus: "In Stock",
        reviews: [
            {
                rating: 5,
                comment: "Super powerful and easy to maneuver!",
                reviewerName: "Phyllis Vance",
                reviewerEmail: "phyllis@example.com"
            },
            {
                rating: 4.6,
                comment: "Great suction, but the battery drains fast on max power.",
                reviewerName: "Creed Bratton",
                reviewerEmail: "creed@example.com"
            }
        ]
    },
    {
        title: "Wireless Bluetooth Earbuds",
        image: "https://www.google.com/imgres?q=shop%20item%20png&imgurl=https%3A%2F%2Fw7.pngwing.com%2Fpngs%2F15%2F271%2Fpng-transparent-computer-icons-online-shopping-shopping-cart-service-shopping-cart-icon-text-service-retail-thumbnail.png&imgrefurl=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Dshopping&docid=IQcuUHQQTuQ0oM&tbnid=My2kXIicIGQ-iM&vet=12ahUKEwi_vZTLhvaLAxWB4zQHHTTsF_kQM3oECHAQAA..i&w=360&h=360&hcb=2&ved=2ahUKEwi_vZTLhvaLAxWB4zQHHTTsF_kQM3oECHAQAA",
        description: "Noise-canceling earbuds with immersive sound and long battery life.",
        category: "Electronics",
        price: 120,
        discountPercentage: 10,
        rating: 4.8,
        stock: 60,
        tags: ["earbuds", "bluetooth", "audio"],
        brand: "SoundBeats",
        sku: "SB-E100",
        weight: 0.2,
        dimensions: { width: 6, height: 4, depth: 3 },
        warrantyInformation: "1 year warranty",
        shippingInformation: "Free express shipping",
        availabilityStatus: "In Stock",
        reviews: [
            {
                rating: 5,
                comment: "Amazing sound quality and super comfortable to wear!",
                reviewerName: "Jan Levinson",
                reviewerEmail: "jan@example.com"
            },
            {
                rating: 4.7,
                comment: "The noise-canceling feature is impressive, but the case is a bit bulky.",
                reviewerName: "Darryl Philbin",
                reviewerEmail: "darryl@example.com"
            }
        ]
    },
    {
        title: "Smart Fitness Watch",
        image: "https://www.google.com/imgres?q=shop%20item%20png&imgurl=https%3A%2F%2Fw7.pngwing.com%2Fpngs%2F15%2F271%2Fpng-transparent-computer-icons-online-shopping-shopping-cart-service-shopping-cart-icon-text-service-retail-thumbnail.png&imgrefurl=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Dshopping&docid=IQcuUHQQTuQ0oM&tbnid=My2kXIicIGQ-iM&vet=12ahUKEwi_vZTLhvaLAxWB4zQHHTTsF_kQM3oECHAQAA..i&w=360&h=360&hcb=2&ved=2ahUKEwi_vZTLhvaLAxWB4zQHHTTsF_kQM3oECHAQAA",
        description: "Track your fitness, heart rate, and sleep patterns with real-time data.",
        category: "Wearables",
        price: 150,
        discountPercentage: 12,
        rating: 4.6,
        stock: 45,
        tags: ["fitness", "smartwatch", "wearable"],
        brand: "FitPulse",
        sku: "FP-SW200",
        weight: 0.3,
        dimensions: { width: 4, height: 4, depth: 1 },
        warrantyInformation: "2 years warranty",
        shippingInformation: "Free shipping within 2-3 days",
        availabilityStatus: "In Stock",
        reviews: [
            {
                rating: 4.8,
                comment: "Great for tracking my workouts and the battery lasts a week!",
                reviewerName: "Holly Flax",
                reviewerEmail: "holly@example.com"
            },
            {
                rating: 4.4,
                comment: "Accurate tracking, but the screen could be brighter outdoors.",
                reviewerName: "Roy Anderson",
                reviewerEmail: "roy@example.com"
            }
        ]
    }

];



// Insert products into the database
const seedProducts = async () => {
    try {
        await Product.deleteMany();
        console.log("Existing products deleted.");
        
        await Product.insertMany(products);
        console.log("Sample products added successfully!");

        mongoose.connection.close();
    } catch (error) {
        console.error("Error seeding products:", error);
        mongoose.connection.close();
    }
};

seedProducts();
