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
            "Profile management",
            "Mobile responsive pages",
            "Google Authentication",
            "Email Verification",
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
            "Google Authentication",
            "Email Verification",
            "Users can search friends by username and send them a friend request.",
            "Friend requests can be accepted, rejected, and cancelled.",
            "Users can either create groups or directly send real-time messages and file attachments to their friends.",
            "Users can edit and customize their profile.",
        ],
        tags: ["React", "C#", "ASP.NET Core Web API"],
        repo: "https://github.com/szuszu-hay/aurevo-ecommerce.git",
        live: "https://pixcord-chatapp-react.onrender.com/login",
        msg: "",
        images: [
            "/demo/messaging/login.png",
            "/demo/messaging/register.png",
            "/demo/messaging/friends.png",
            "/demo/messaging/group.png",
            "/demo/messaging/profile.png"
        ],
        video: "/demo/messaging/chatapp.mp4",
        testAccounts: [
            {
                role: "Test User",
                username: "may@email.com",
                password: "mayPassword1!"
            },
            {
                role: "Test User",
                username: "charles@email.com",
                password: "charlesPassword1!"
            },
            {
                role: "Test User",
                username: "tom@email.com",
                password: "tomPassword1!"
            }
        ],
    },

    {
        id: "hospital",
        title: "Hospital Management System",
        description: "A hospital website for patients, doctors, and nurses to view records, assign records, and book appointments.",
        highlights: [
            "Role-based access for Doctors, Nurses, and Patients",
            "Include CRUD system for creating new users, appointments, and vitals",
            "Profile management",
            "Mobile responsive pages"
        ],
        tags: ["Python Flask", "HTML", "CSS"],
        repo: "https://github.com/szuszu-hay/Hospital-Management-System.git",
        live: "https://hospital-management-system-cqxe.onrender.com/",
        msg: "",
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
            {
                role: "Test Doctor",
                username: "james01",
                password: "jameshollanddoctorpw"
            },
            {
                role: "Test Nurse",
                username: "grace04",
                password: "gracemorgannursepw"
            },
            {
                role: "Test Patient",
                username: "PAT01",
                password: "ahmedalipatientpw"
            }
        ],
    },

    {
        id: "film",
        title: "Film & Actors Catalogue",
        description: "A window form application for managing films and actors.",
        highlights: [
            "Include search functionalities",
            "Include CRUD system for films and actors",
            "Reject duplications",
        ],
        tags: ["C#"],
        repo: "https://github.com/szuszu-hay/film-actor-app.git",
        live: "https://drive.google.com/file/d/1yPu21lXgd9lmkvXZpGLKA_WJGZ5XDqEj/view?usp=sharing",
        msg: "Please download the zip file to take a look around the application, and sorry for the low quality demo video.",
        images: [
            "/demo/film/film.png",
            "/demo/film/add-film.png",
            "/demo/film/filmlist.png",
            "/demo/film/actor.png",
            "/demo/film/add-actor.png",
            "/demo/film/search.png",
        ],
        video: "demo/film/film.mp4",
        testAccounts: [
            
        ],
    },

    {
        id: "university",
        title: "University Website",
        description: "A university website that delivers university information with database integration.",
        highlights: [
            "A flask based project",
            "Database integration",
        ],
        tags: ["Python Flask", "HTML", "CSS"],
        repo: "https://github.com/szuszu-hay/cantor-college-flask-website.git",
        live: "https://cantor-college-flask-website.onrender.com/",
        msg: "",
        images: [
            "/demo/university/hero.png",
            "/demo/university/courses.png",
            "/demo/university/course.png",
            "/demo/university/services.png",
            "/demo/university/footer.png",
        ],
        video: "/demo/university/uni.mp4",
        testAccounts: [
            
        ],
    },

    {
        id: "Duplicate",
        title: "File Duplicate Finder",
        description: "A small console application for finding and removing duplicate files in computer",
        highlights: [
            "Any folder can be chosen to find duplicates",
            "Automatically removes duplicates once confirmed"
        ],
        tags: ["C#"],
        repo: "https://github.com/szuszu-hay/File-Duplicate-Finder.git",
        live: "https://drive.google.com/file/d/125KLVKJendQ_DgFdMjZUXQ4pokreWlqV/view?usp=sharing",
        msg: "Please download the zip file to take a look around the application.",
        images: [
        ],
        video: "demo/file/duplicates.mp4",
        testAccounts: [
            
        ],
    },

    {
        id: "SHUber",
        title: "SHUber Customer & Driver Management",
        description: "A window form, application for viewing and managing customer and driver database and graphical reports of a small taxi company",
        highlights: [
            "Database Integration",
            "CRUD operations",
            "Graphical Illustrations"
        ],
        tags: ["C#", "SqLite"],
        repo: "https://github.com/szuszu-hay/SHUber.git",
        live: "https://drive.google.com/file/d/1xDuFkSYNno0oUXKPD48KviRauwHioGNI/view?usp=sharing",
        msg: "Please download the zip file to take a look around the application.",
        images: [
            "/demo/shuber/menu.png",
            "/demo/shuber/customer.png",
            "/demo/shuber/driver.png",
            "/demo/shuber/reports.png",
            "/demo/shuber/customer-report.png",
            "/demo/shuber/driver-report.png"
        ],
        video: "",
        testAccounts: [
            
        ],
    }
];