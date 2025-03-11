const bcrypt = require('bcryptjs');

const plainPassword = 'password'; // The actual password you want to test
bcrypt.hash(plainPassword, 10).then((hashedPassword) => {
    console.log('New hashed password:', hashedPassword);
});
