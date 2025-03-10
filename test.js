// let yourToken='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2N2M1Zjc3NThhNTNjY2RjNjlmZThlMmEiLCJpYXQiOjE3NDEyODI2MDksImV4cCI6MTc0MTM2OTAwOX0.Eq1rM3D0ITP1QyJcyxEPEtTo8fDDIpcdUe912CxHXJE';

// fetch('http://localhost:8000/api/cart', {
//     method: 'GET',
//     headers: {
//         'Authorization': `Bearer ${yourToken}`,
//     }
// })
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.error('Error:', error));


// const mongoose = require('mongoose');
// const Product = require('./models/productModel');  // Adjust path to your model

// // MongoDB Atlas connection URI
// const dbURI = 'mongodb+srv://kshitijbagal:pFZW8BR8KmCPKNiY@shoppyglobe.ir4rd.mongodb.net/?retryWrites=true&w=majority&appName=ShoppyGlobe';

// mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(async () => {
//     console.log('Connected to MongoDB Atlas');

//     // Define a mapping of product IDs (or names) to their respective image URLs
//     const productImageMap = {
//       "67c9e8e4c51e9c13cb981d91": "https://www.google.com/imgres?q=Wireless%20Bluetooth%20Headphones&imgurl=https%3A%2F%2Fwww.boat-lifestyle.com%2Fcdn%2Fshop%2Fproducts%2Fmain2_b66dce6b-710d-49cb-9d1c-2bc8c9c0ab15_600x.png%3Fv%3D1645698328&imgrefurl=https%3A%2F%2Fwww.boat-lifestyle.com%2Fproducts%2Frockerz-425-wireless-bluetooth-headphone&docid=Z4KzvQ-V9LcuHM&tbnid=JJdrccU0XCPX8M&vet=12ahUKEwin07SjivuLAxXYSWwGHYWmMk0QM3oECBgQAA..i&w=600&h=600&hcb=2&ved=2ahUKEwin07SjivuLAxXYSWwGHYWmMk0QM3oECBgQAA",
//       "67c9e8e4c51e9c13cb981d94": "https://www.google.com/imgres?q=Gaming%20Laptop&imgurl=https%3A%2F%2Fimages.jdmagicbox.com%2Fquickquotes%2Fimages_main%2Fdell-laptops-04-01-2024-24-272725655-y40fuckz.png&imgrefurl=https%3A%2F%2Fwww.justdial.com%2Fjdmart%2FVaranasi%2FDELL-Alienware-x16-Gaming-Laptops-Windows-11-Home-RAM-32-GB-1-TB-Intel-Core-i9-13900HK-13th-Gen-NVIDIA-GeForce-RTX-4080-16-in-Lunar-Silver%2Fpid-272725655%2F0542PX542-X542-160509144326-T9F4&docid=c4eSbYTKsd3V_M&tbnid=4XjeS-Ze_zknVM&vet=12ahUKEwj7zJ7FjvuLAxXWTGwGHUhjCQYQM3oECHcQAA..i&w=680&h=402&hcb=2&ved=2ahUKEwj7zJ7FjvuLAxXWTGwGHUhjCQYQM3oECHcQAA",
//       "67c9e8e4c51e9c13cb981d97": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.alibaba.com%2Fshowroom%2Fbrand-new-cell-phones-for-sale.html&psig=AOvVaw2qPlcOz4kSGhKG9g7qJ-tO&ust=1741545026733000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLihiv6O-4sDFQAAAAAdAAAAABAd",
//       "67c9e8e4c51e9c13cb981d9a": "https://www.google.com/imgres?q=Smartwatch&imgurl=https%3A%2F%2Fassets.myntassets.com%2Fh_1440%2Cq_100%2Cw_1080%2Fv1%2Fassets%2Fimages%2F23529200%2F2023%2F6%2F30%2F5012dc86-9e0c-484d-aa71-29a14524081f1688107020944-Noise-NoiseFit-Crew--Smartwatch---Rose-Pink-3431688107020877-1.jpg&imgrefurl=https%3A%2F%2Fwww.myntra.com%2Fsmart-watches%2Fnoise%2Fnoise-crew-with-bt-calling--metallic-finish-ip68-rating-138-round-display-smartwatch%2F23529200%2Fbuy&docid=iHSEOwDoBiELhM&tbnid=W-NDsw0iZpZy5M&vet=12ahUKEwiDhJi2jvuLAxWDR2wGHSPYMlMQM3oECFwQAA..i&w=1080&h=1440&hcb=2&ved=2ahUKEwiDhJi2jvuLAxWDR2wGHSPYMlMQM3oECFwQAA",
//       "67c9e8e4c51e9c13cb981d9d": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.in%2FKLIM-Rechargeable-Wireless-Ergonomic-Waterproof%2Fdp%2FB07FLKYRFB&psig=AOvVaw35zKy1XioD_W_-hzoD-Dhp&ust=1741544850899000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCICquqWO-4sDFQAAAAAdAAAAABAE",
//       "67c9e8e4c51e9c13cb981da0": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.in%2FBRUTON-Lite-Sport-Shoes-Running%2Fdp%2FB0DHGM2NFQ&psig=AOvVaw2KOagYQwVpGY6y0RTzgDHz&ust=1741544701318000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLCN1IKO-4sDFQAAAAAdAAAAABAU",
//       "67c9e8e4c51e9c13cb981da3": "https://www.google.com/imgres?q=4K%20Ultra%20HD%20TV&imgurl=https%3A%2F%2Fcdn.lotuselectronics.com%2Fwebpimages%2F658903IM.webp&imgrefurl=https%3A%2F%2Fwww.lotuselectronics.com%2Fproduct%2F4k-ultra-hd-tv%2Ftcl-4k-ultra-hd-tv-139-cm-55-inches-android-55p755-pro-black%2F38416&docid=6EbwQJbliEEHoM&tbnid=MCjh0znwyo8jhM&vet=12ahUKEwjlse_GjfuLAxVFSWwGHdsjDBYQM3oECFkQAA..i&w=450&h=337&hcb=2&ved=2ahUKEwjlse_GjfuLAxVFSWwGHdsjDBYQM3oECFkQAA",
//       "67c9e8e4c51e9c13cb981da6": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.maxbhi.com%2F10000mah-power-bank-portable-charger-for-movil-iq100.html&psig=AOvVaw0DQYFG6c2bKjC1Lw4_Cays&ust=1741544625412000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJCQibaN-4sDFQAAAAAdAAAAABAE",
//       "67c9e8e4c51e9c13cb981da9": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.chennaichairs.com%2Fcomfort-and-support-inox-ergonomic-full-mesh-office-chair&psig=AOvVaw2dOFedmIkkvM3g9lltYXD3&ust=1741544573122000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMjFsqWN-4sDFQAAAAAdAAAAABAE",
//       "67c9e8e4c51e9c13cb981dac": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fstarwork.in%2Fproducts%2F800ml-stainless-steel-water-bottle-the&psig=AOvVaw28htq-DnedAe56wP0a9oex&ust=1741544512394000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLiTwY-N-4sDFQAAAAAdAAAAABAE",
//       "67c9e8e4c51e9c13cb981daf": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.in%2FS640-Graphics-Battery-Free-Function-Sensitivity%2Fdp%2FB092VM5CVF&psig=AOvVaw2M5rSL0FeZ7HC8fq_V9XaI&ust=1741544480093000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPjA9PKM-4sDFQAAAAAdAAAAABAE",
//       "67c9e8e4c51e9c13cb981db2": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.getuscart.com%2Fbusiness-backpack-for-men-17-inchslim-expandable-waterproof-travel-laptop-backpack-with-usb-charger-portanti-theft-lightweight-large-work-computer-bagcollege-laptop-backpacks-gifts-for-men-women&psig=AOvVaw1GNYLwK8U34vl8IbyBPi_S&ust=1741544428226000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNCtq9uM-4sDFQAAAAAdAAAAABAJ",
//       "67c9e8e4c51e9c13cb981db5": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdynamicdistributors.in%2Fproduct%2Fbosch-rechargeable-cordless-vacuum-cleaner-bcs71petin-black%2F&psig=AOvVaw0bsGnlIyMwJ-5Gk-zhs4gt&ust=1741544386090000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNCM-MWM-4sDFQAAAAAdAAAAABAJ",
//       "67c9e8e4c51e9c13cb981db8": "https://www.google.com/imgres?q=Wireless%20Bluetooth%20Earbuds&imgurl=https%3A%2F%2Fwww.yuvaflowers.com%2Fcdn%2Fshop%2Ffiles%2F61q-2yzbBtL._SX522.jpg%3Fv%3D1716103320&imgrefurl=https%3A%2F%2Fwww.yuvaflowers.com%2Fproducts%2Fboat-wireless-earbuds-for-gaming-low-latency-gaming-wireless-bluetooth-earbuds&docid=nl5hjZgbgOHmKM&tbnid=orfuGqMkPnTQ_M&vet=12ahUKEwiEs8uwjPuLAxUmTGwGHd8qLFYQM3oECHoQAA..i&w=522&h=522&hcb=2&ved=2ahUKEwiEs8uwjPuLAxUmTGwGHd8qLFYQM3oECHoQAA",
//       "67c9e8e4c51e9c13cb981dbb": "https://www.google.com/imgres?q=Smart%20Fitness%20Watch&imgurl=https%3A%2F%2F5.imimg.com%2Fdata5%2FSELLER%2FDefault%2F2023%2F2%2FCI%2FQU%2FFP%2F148827935%2Fid116-plus-smart-fitness-tracker-color-screen-smartwatch-500x500.jpg&imgrefurl=https%3A%2F%2Fwww.indiamart.com%2Fproddetail%2Fid116-plus-smart-fitness-tracker-color-screen-smartwatch-26310962797.html&docid=k3x_qqWyn2rXDM&tbnid=3U5HLQRVaNP35M&vet=12ahUKEwj8876JjPuLAxWvUWwGHfIcAboQM3oECCYQAA..i&w=500&h=500&hcb=2&ved=2ahUKEwj8876JjPuLAxWvUWwGHfIcAboQM3oECCYQAA",
//       // Add other product-image mappings
//     };

//     // Iterate over each product and update the image URL
//     for (let [productId, imageUrl] of Object.entries(productImageMap)) {
//       await Product.findByIdAndUpdate(productId, { $set: { image: imageUrl } });
//       console.log(`Product ${productId} updated with image URL ${imageUrl}`);
//     }
//   })
//   .catch((err) => {
//     console.error('Error:', err);
//   })
//   .finally(() => {
//     mongoose.connection.close();
//   });

const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/userModel');
const bcrypt = require('bcryptjs');

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection failed:', err));

const seedUsers = async () => {
    try {
        await User.deleteMany(); // Clear existing users (optional)

        const users = [
            {
                firstName: 'John',
                lastName: 'Doe',
                age: 28,
                gender: 'Male',
                email: 'john@example.com',
                phone: '1234567890',
                username: 'john_doe',
                password: await bcrypt.hash('password123', 10),
                birthDate: new Date('1996-05-15'),
                address: {
                    street: '123 Main St',
                    city: 'New York',
                    state: 'NY',
                    postalCode: '10001',
                    country: 'USA',
                },
                role: 'user',
            },
            {
                firstName: 'Jane',
                lastName: 'Smith',
                age: 25,
                gender: 'Female',
                email: 'jane@example.com',
                phone: '0987654321',
                username: 'jane_smith',
                password: await bcrypt.hash('securePass456', 10),
                birthDate: new Date('1999-08-22'),
                address: {
                    street: '456 Oak St',
                    city: 'Los Angeles',
                    state: 'CA',
                    postalCode: '90001',
                    country: 'USA',
                },
                role: 'user',
            },
            {
                firstName: 'Alice',
                lastName: 'Johnson',
                age: 30,
                gender: 'Female',
                email: 'alice@example.com',
                phone: '1122334455',
                username: 'alice_johnson',
                password: await bcrypt.hash('alice1234', 10),
                birthDate: new Date('1994-03-10'),
                address: {
                    street: '789 Pine St',
                    city: 'Chicago',
                    state: 'IL',
                    postalCode: '60601',
                    country: 'USA',
                },
                role: 'admin',
            },
            {
                firstName: 'Bob',
                lastName: 'Brown',
                age: 35,
                gender: 'Male',
                email: 'bob@example.com',
                phone: '6677889900',
                username: 'bob_brown',
                password: await bcrypt.hash('bobpassword', 10),
                birthDate: new Date('1989-11-02'),
                address: {
                    street: '321 Maple St',
                    city: 'Houston',
                    state: 'TX',
                    postalCode: '77001',
                    country: 'USA',
                },
                role: 'user',
            },
            {
                firstName: 'Charlie',
                lastName: 'White',
                age: 29,
                gender: 'Male',
                email: 'charlie@example.com',
                phone: '5566778899',
                username: 'charlie_white',
                password: await bcrypt.hash('charliepass', 10),
                birthDate: new Date('1995-01-25'),
                address: {
                    street: '654 Birch St',
                    city: 'San Francisco',
                    state: 'CA',
                    postalCode: '94101',
                    country: 'USA',
                },
                role: 'admin',
            },
        ];

        await User.insertMany(users);
        console.log('User database populated successfully with detailed accounts!');
        mongoose.connection.close();
    } catch (err) {
        console.error('Error populating user database:', err);
        mongoose.connection.close();
    }
};

seedUsers();
