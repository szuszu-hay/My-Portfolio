export const PROJECTS = [
    {
        id: "e-commerce",
        title: "E-Commerce",
        description: "A full stack website that includes CRUD of products, users, orders, etc.",
        highlights: [
            "Role-based access for Admins, Staff, and Customers",
            "Admins can perform full CRUD on all products, users, and orders",
            "Staff can manage products and orders",
            "Customers can manage their cart, place orders, track delivery status, and view order history",
        ],
        tags: ["C#", "ASP.NET Core Web API"],
        repo: "https://github.com/szuszu-hay/aurevo-ecommerce.git",
        live: "https://aurevo-ecommerce.onrender.com",
        msg: "",
        images: [
            "/demo/e-commerce/ProductPage.png",
            "/demo/e-commerce/Signup.png",
            "/demo/e-commerce/Dashboard.png",
             "/demo/e-commerce/Profile.png",
            "/demo/e-commerce/ProductDetails.png",
            "/demo/e-commerce/Cart.png",
            "/demo/e-commerce/Checkout.png",
            "/demo/e-commerce/Orders.png",
        ],
        video: "/demo/e-commerce/CustomerHomepage.mp4",
        testAccounts: [
        ],
    },

    {
        id: "messaging",
        title: "Messaging",
        description: "A messaging app that allows users to make friends, create groups, and send real-time messages and file attachments.",
        highlights: [
            "Users can search friends by username and send them a friend request.",
            "Friend requests can be accepted, rejected, and cancelled.",
            "Users can either create groups or directly send real-time messages and file attachments to their friends.",
            "Users can edit and customize their profile.",
        ],
        tags: ["React", "C#", "ASP.NET Core Web API"],
        repo: "#",
        live: "#",
        msg: "Live not available yet. Will be there soon!",
        images: [
            
        ],
        video: "",
        testAccounts: [
        ],
    },

    {
        id: "hospital",
        title: "Hospital Management System",
        description: "A hospital website for patients, doctors, and nurses to view records, assign records, and book appointments.",
        highlights: [
            "Role-based access for Doctors, Nurses, and Patients",
            "Include CRUD system for creating new users, appointments, and vitals",
            "Medical records can be viewed",
            "Each user can update their personal details ",
        ],
        tags: ["Python Flask", "HTML", "CSS"],
        repo: "https://github.com/szuszu-hay/Hospital-Management-System",
        live: "#",
        msg: "Live not available yet. Will be there soon!",
        images: [
            "/demo/hospital/DoctorHome.png",
            "/demo/hospital/MissedAppt.png",
            "/demo/hospital/NurseHome.png",
            "/demo/hospital/Patients.png",
            "/demo/hospital/AddPatient.png",
            "/demo/hospital/ApptBook.png",
        ],
        video: "/demo/hospital/patient.mp4",
        testAccounts: [
            
        ],
    },
];