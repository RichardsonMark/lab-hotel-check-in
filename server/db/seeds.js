use guests;
db.dropDatabase();

db.bookings.insertMany([
    {
        name: "Johnny Rose",
        email: "johnnyrose@buddmotel.com",
        status: "Checked In"
    },
    {
        name: "Moira Rose",
        email: "moirarose@buddmotel.com",
        status: "Checked In"
    },
    {
        name: "David Rose",
        email: "davidrose@buddmotel.com",
        status: "Checked Out"
    },
    {
        name: "Stevie Budd",
        email: "steviebudd@buddmotel.com",
        status: "Checked Out"
    },
])