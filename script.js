// MUN Event Configuration
const munConfig = {
  event: {
      name: "KKIS Model United Nations 2025",
      startDate: new Date('April 23, 2025 18:00:00'),
      endDate: new Date('April 24, 2025 22:00:00'),
      timeFormat: '6:00 PM - 10:00 PM',
      venue: {
          name: "Knights of Knowledge International School",
          address: "عبد الله بن صفوان، الربوة، جدة 23446, Saudi Arabia",
          city: "Jeddah",
          country: "Saudi Arabia",
          mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14298.748089227194!2d39.1855733!3d21.5880523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d0ec3a88e535%3A0x71423e928294e775!2z2YXYr9in2LHYsyDZgdix2LPYp9mGINin2YTZhdi52LHZgdipINin2YTYudin2YTZhdmK2Kk!5e1!3m2!1sar!2ssa!4v1744745411323!5m2!1sar!2ssa"
      },
      contact: {
          phone: "+966 4 123 4567",
          email: "mun@kkis.edu",
          website: "www.kkischools.com"
      }
  },
  committees: [
      {
          id: "unicef",
          name: "UNICEF",
          fullName: "United Nations Children's Fund",
          logo: "imgs/unicef.png",
          description: "UNICEF works to protect the rights and welfare of children worldwide. Delegates will address pressing issues concerning child health, education, protection from violence, and access to resources.",
          agenda: "Addressing the global crisis of child malnutrition and food insecurity"
      },
      {
          id: "who",
          name: "WHO",
          fullName: "World Health Organization",
          logo: "imgs/who.png",
          description: "WHO leads global efforts to promote health, keep the world safe, and serve the vulnerable. Delegates will tackle contemporary health challenges and develop international health policies.",
          agenda: "Strengthening global health systems in preparation for future pandemics"
      }
  ],
  participants: [
    {
      "id": 1,
      "name": "Ayman M. Khair",
      "photo": "imgs/pfps/ayman2.png",
      "quote": "A true diplomat builds bridges, not walls.",
      "committee": "UNICEF",
      "country": "Singapore",
      "school": "KKIS",
      "experience": "2 years in MUN",
      "achievements": "Presented a resolution at KKIS MUN 2024",
      "interests": "Children's rights, global peace"
    },
    {
      "id": 65,
      "name": "Yasser Ajaj",
      "photo": "imgs/pfps/yasser.png",
      "quote": "Small steps lead to great change.",
      "committee": "UNICEF",
      "country": "Chair",
      "school": "KKIS",
      "experience": "KKIS Senior Chair",
      "achievements": "Presented a resolution at KKIS MUN 2024",
      "interests": "Children's rights, global peace"
    },
    {
      "id": 65,
      "name": "Jewairia Ajaj",
      "photo": "imgs/pfps/jewairia.png",
      "quote": "Small steps lead to great change.",
      "committee": "WHO",
      "country": "Chair",
      "school": "KKIS",
      "experience": "KKIS Senior Chair",
      "achievements": "Active contributor WHO 2024",
      "interests": "Global unity, child rights"
    },
    {
      "id": 6,
      "name": "Rama",
      "photo": "imgs/pfps/rama.png",
      "quote": "Hope guides every negotiation.",
      "committee": "WHO",
      "country": "Co Chair",
      "school": "KKIS",
      "experience": "3 year in MUN",
      "achievements": "Active contributor WHO 2024",
      "interests": "Healthcare access, global health"
    },
    {
      "id": 32,
      "name": "Abdulrahman Ahmed Al - Baz",
      "photo": "imgs/pfps/baz.png",
      "quote": "Public health is global wealth.",
      "committee": "UNICEF",
      "country": "Co Chair",
      "school": "KKIS",
      "experience": "2 years in MUN",
      "achievements": "UNICEF Delegate Excellence Award",
      "interests": "Medicine, global health policies"
    },
    {
      "id": 19,
      "name": "Malak Youssef Ali",
      "photo": "imgs/pfps/malak.png",
      "quote": "Voices of youth shape the world.",
      "committee": "UNICEF",
      "country": "USA",
      "school": "KKIS",
      "experience": "1 year in MUN",
      "achievements": "Active contributor UNICEF 2024",
      "interests": "Global unity, child rights"
    },
    {
      "id": 12,
      "name": "Hala Mohamed Aldauod",
      "photo": "imgs/pfps/hala2.png",
      "quote": "Hope guides every negotiation.",
      "committee": "UNICEF",
      "country": "France",
      "school": "KKIS",
      "experience": "1 year in MUN",
      "achievements": "Active contributor UNICEF 2024",
      "interests": "Children’s education, equality"
    },
    {
      "id": 4,
      "name": "Hassan Naif Saaty",
      "photo": "imgs/pfps/hassan.png",
      "quote": "Every voice matters in diplomacy.",
      "committee": "UNICEF",
      "country": "New Zealand",
      "school": "KKIS",
      "experience": "2 years in MUN",
      "achievements": "Top resolution contributor 2024",
      "interests": "Youth education, sustainable development"
    },
    {
      "id": 25,
      "name": "Rudayna Ayman Munshi",
      "photo": "imgs/pfps/rudayna.png",
      "quote": "Voices of youth shape the world.",
      "committee": "UNICEF",
      "country": "Brazil",
      "school": "KKIS",
      "experience": "1 year in MUN",
      "achievements": "Active contributor UNICEF 2024",
      "interests": "Global unity, child rights"
    },
    {
      "id": 5,
      "name": "Lutfi Mohammed Aldaoud",
      "photo": "imgs/pfps/lutfi.png",
      "quote": "Diplomacy is dialogue over dominance.",
      "committee": "UNICEF",
      "country": "Egypt",
      "school": "KKIS",
      "experience": "1 year in MUN",
      "achievements": "Most Improved Delegate 2024",
      "interests": "Politics, history"
    },
    {
      "id": 47,
      "name": "Sedra Fadi Alnajjar",
      "photo": "imgs/pfps/sedra.png",
      "quote": "A healthy world is a peaceful world.",
      "committee": "WHO",
      "country": "Netherlands",
      "school": "KKIS",
      "experience": "1 year in MUN",
      "achievements": "Active contributor WHO 2024",
      "interests": "Public health, science"
    },
    {
      "id": 10,
      "name": "Aseel Yousef Tayeb",
      "photo": "imgs/pfps/aseel.png",
      "quote": "Health knows no borders.",
      "committee": "UNICEF",
      "country": "Pakistan",
      "school": "KKIS",
      "experience": "1 year in MUN",
      "achievements": "Active contributor UNICEF 2024",
      "interests": "Cultural exchange, youth empowerment"
    },
    {
      "id": 6,
      "name": "Lamar Abobaker Ahmed Ismail",
      "photo": "imgs/pfps/lamar1.png",
      "quote": "Hope guides every negotiation.",
      "committee": "UNICEF",
      "country": "Portugal",
      "school": "KKIS",
      "experience": "1 year in MUN",
      "achievements": "Active contributor UNICEF 2024",
      "interests": "Children’s education, equality"
    },
    {
      "id": 14,
      "name": "Yusra Eyas Khalaf",
      "photo": "imgs/pfps/yusra.png",
      "quote": "Small steps lead to great change.",
      "committee": "UNICEF",
      "country": "Switzerland",
      "school": "KKIS",
      "experience": "1 year in MUN",
      "achievements": "Active contributor UNICEF 2024",
      "interests": "Children’s welfare, equality"
    },
    {
      "id": 9,
      "name": "Yaman Bilal Olayan",
      "photo": "imgs/pfps/yaman.png",
      "quote": "Change starts with conversation.",
      "committee": "UNICEF",
      "country": "South Korea",
      "school": "KKIS",
      "experience": "1 year in MUN",
      "achievements": "Active contributor UNICEF 2024",
      "interests": "Youth education, sustainable development"
    },
    {
      "id": 11,
      "name": "Dima Ahmed Abdelhadi",
      "photo": "imgs/pfps/dima.png",
      "quote": "Every voice matters in diplomacy.",
      "committee": "UNICEF",
      "country": "Sudan",
      "school": "KKIS",
      "experience": "1 year in MUN",
      "achievements": "Active contributor UNICEF 2024",
      "interests": "Human rights, public speaking"
    },
    {
      "id": 15,
      "name": "Laura Hani Jambi",
      "photo": "imgs/pfps/laura.png",
      "quote": "Change starts with conversation.",
      "committee": "UNICEF",
      "country": "Afghanistan",
      "school": "KKIS",
      "experience": "1 year in MUN",
      "achievements": "Active contributor UNICEF 2024",
      "interests": "Youth education, sustainable development"
    },
    {
      "id": 8,
      "name": "Qusay Ahmed Abdaljalil",
      "photo": "imgs/pfps/qusay.png",
      "quote": "Small steps lead to great change.",
      "committee": "UNICEF",
      "country": "Sweden",
      "school": "KKIS",
      "experience": "1 year in MUN",
      "achievements": "Lead author of a passed resolution",
      "interests": "Children’s welfare, equality"
    },
    {
      "id": 18,
      "name": "Lnaa Husni Alsufani",
      "photo": "imgs/pfps/lna.png",
      "quote": "Hope guides every negotiation.",
      "committee": "UNICEF",
      "country": "Australia",
      "school": "KKIS",
      "experience": "1 year in MUN",
      "achievements": "Active contributor UNICEF 2024",
      "interests": "Children’s education, equality"
    },
    {
      "id": 20,
      "name": "Mira Ahmed Basndwah",
      "photo": "imgs/pfps/mira1.png",
      "quote": "Small steps lead to great change.",
      "committee": "UNICEF",
      "country": "Canada",
      "school": "KKIS",
      "experience": "1 year in MUN",
      "achievements": "Active contributor UNICEF 2024",
      "interests": "Children’s welfare, equality"
    },
    {
      "id": 21,
      "name": "Qamar Ibrahim Alzuhairy",
      "photo": "imgs/pfps/qamr.png",
      "quote": "Change starts with conversation.",
      "committee": "UNICEF",
      "country": "UAE",
      "school": "KKIS",
      "experience": "1 year in MUN",
      "achievements": "Active contributor UNICEF 2024",
      "interests": "Youth education, sustainable development"
    },
    {
      "id": 22,
      "name": "Reem Ahmed Alharbi",
      "photo": "imgs/pfps/reem.png",
      "quote": "Health knows no borders.",
      "committee": "UNICEF",
      "country": "Mexico",
      "school": "KKIS",
      "experience": "1 year in MUN",
      "achievements": "Active contributor UNICEF 2024",
      "interests": "Cultural exchange, youth empowerment"
    },
    {
      "id": 23,
      "name": "Reema saud Aljuaed",
      "photo": "imgs/pfps/reema.png",
      "quote": "Every voice matters in diplomacy.",
      "committee": "UNICEF",
      "country": "Netherlands",
      "school": "KKIS",
      "experience": "1 year in MUN",
      "achievements": "Active contributor UNICEF 2024",
      "interests": "Human rights, public speaking"
    },
    {
      "id": 24,
      "name": "Rital Abdulaziz Al-turkimani",
      "photo": "imgs/pfps/rital.png",
      "quote": "Hope guides every negotiation.",
      "committee": "UNICEF",
      "country": "Algeria",
      "school": "KKIS",
      "experience": "1 year in MUN",
      "achievements": "Active contributor UNICEF 2024",
      "interests": "Children’s education, equality"
    },
    {
      "id": 26,
      "name": "Tolay Almotazbellah Mirah",
      "photo": "imgs/pfps/tulay.png",
      "quote": "Small steps lead to great change.",
      "committee": "UNICEF",
      "country": "Qatar",
      "school": "KKIS",
      "experience": "1 year in MUN",
      "achievements": "Active contributor UNICEF 2024",
      "interests": "Children’s welfare, equality"
    },
    {
      "id": 27,
      "name": "Sarah Alaa Alasaad",
      "photo": "imgs/pfps/sara1.png",
      "quote": "Change starts with conversation.",
      "committee": "UNICEF",
      "country": "Palestine",
      "school": "KKIS",
      "experience": "1 year in MUN",
      "achievements": "Active contributor UNICEF 2024",
      "interests": "Youth education, sustainable development"
    },
    {
      "id": 28,
      "name": "Selwan Motaz Qutim",
      "photo": "imgs/pfps/selwan.png",
      "quote": "Health knows no borders.",
      "committee": "UNICEF",
      "country": "Spain",
      "school": "KKIS",
      "experience": "1 year in MUN",
      "achievements": "Active contributor UNICEF 2024",
      "interests": "Cultural exchange, youth empowerment"
    },
    {
      "id": 29,
      "name": "Maya Khaled Abu Amr",
      "photo": "imgs/pfps/maya.png",
      "quote": "Every voice matters in diplomacy.",
      "committee": "UNICEF",
      "country": "Georgia",
      "school": "KKIS",
      "experience": "1 year in MUN",
      "achievements": "Active contributor UNICEF 2024",
      "interests": "Human rights, public speaking"
    },
    {
      "id": 30,
      "name": "Toqa Walid Ghanem",
      "photo": "imgs/pfps/toqa.png",
      "quote": "Hope guides every negotiation.",
      "committee": "UNICEF",
      "country": "China",
      "school": "KKIS",
      "experience": "1 year in MUN",
      "achievements": "Active contributor UNICEF 2024",
      "interests": "Children’s education, equality"
    },
    {
      "id": 31,
      "name": "Maryam Reda Mansour",
      "photo": "imgs/pfps/mariam.png",
      "quote": "Small steps lead to great change.",
      "committee": "UNICEF",
      "country": "United Kingdom",
      "school": "KKIS",
      "experience": "2 years in MUN",
      "achievements": "Lead author of a passed resolution",
      "interests": "Children’s welfare, equality"
    },
    {
      "id": 33,
      "name": "Bader Mohammed Alattas",
      "photo": "imgs/pfps/badr.png",
      "quote": "Health knows no borders.",
      "committee": "WHO",
      "country": "Ukraine",
      "school": "KKIS",
      "experience": "1 year in MUN",
      "achievements": "Best Newcomer WHO Committee",
      "interests": "Biology, healthcare reform"
    },
    {
      "id": 34,
      "name": "Baraa Murad Abuomar",
      "photo": "imgs/pfps/baraa.png",
      "quote": "Healing nations begins with cooperation.",
      "committee": "WHO",
      "country": "Jordan",
      "school": "KKIS",
      "experience": "1 year in MUN",
      "achievements": "Active contributor WHO 2024",
      "interests": "Public health, global aid"
    },
    {
      "id": 35,
      "name": "Hamza Adnan Samha",
      "photo": "imgs/pfps/hamza1.png",
      "quote": "Healthy societies start with healthy children.",
      "committee": "WHO",
      "country": "South Africa",
      "school": "KKIS",
      "experience": "2 years in MUN",
      "achievements": "Active contributor WHO 2024",
      "interests": "Public health, science"
    },
    {
      "id": 36,
      "name": "Karam Murad Omar",
      "photo": "imgs/pfps/karam.png",
      "quote": "Health is a human right.",
      "committee": "WHO",
      "country": "Switzerland",
      "school": "KKIS",
      "experience": "1 year in MUN",
      "achievements": "Best Newcomer WHO Committee",
      "interests": "Healthcare access, global health"
    },
    {
      "id": 38,
      "name": "Osama Yasser awwad",
      "photo": "imgs/pfps/osama.png",
      "quote": "Access to healthcare is a right.",
      "committee": "WHO",
      "country": "China",
      "school": "KKIS",
      "experience": "1 year in MUN",
      "achievements": "Active contributor WHO 2024",
      "interests": "Healthcare reform, global health"
    },
    {
      "id": 39,
      "name": "Tamim Adel Ahmed",
      "photo": "imgs/pfps/tamim.png",
      "quote": "Every child deserves health.",
      "committee": "WHO",
      "country": "Mexico",
      "school": "KKIS",
      "experience": "1 year in MUN",
      "achievements": "Active contributor WHO 2024",
      "interests": "Child health, global aid"
    },
    {
      "id": 40,
      "name": "Hamza Mohammed Farouk",
      "photo": "imgs/pfps/hamza2.png",
      "quote": "Health is wealth.",
      "committee": "WHO",
      "country": "Spain",
      "school": "KKIS",
      "experience": "1 year in MUN",
      "achievements": "Active contributor WHO 2024",
      "interests": "Public health, science"
    },
    {
      "id": 41,
      "name": "Alma Omar Al Turk",
      "photo": "imgs/pfps/alma.png",
      "quote": "Health equity is essential.",
      "committee": "WHO",
      "country": "Finland",
      "school": "KKIS",
      "experience":      "1 year in MUN",
      "achievements": "Active contributor WHO 2024",
      "interests": "Healthcare access, global health"
    },
    {
      "id": 42,
      "name": "Aya Mohammad Ahmad",
      "photo": "imgs/pfps/aya.png",
      "quote": "Healthy children, healthy future.",
      "committee": "WHO",
      "country": "Kuwait",
      "school": "KKIS",
      "experience": "1 year in MUN",
      "achievements": "Active contributor WHO 2024",
      "interests": "Child health, global aid"
    },
    {
      "id": 43,
      "name": "Fatima Hafiz Ali",
      "photo": "imgs/pfps/fatima.png",
      "quote": "Health is a shared responsibility.",
      "committee": "WHO",
      "country": "Germany",
      "school": "KKIS",
      "experience": "1 year in MUN",
      "achievements": "Active contributor WHO 2024",
      "interests": "Public health, global policies"
    },
    {
      "id": 44,
      "name": "Hala Ahmed Mohammed",
      "photo": "imgs/pfps/hala1.png",
      "quote": "Together we can improve health.",
      "committee": "WHO",
      "country": "Turkey",
      "school": "KKIS",
      "experience": "2 years in MUN",
      "achievements": "Active contributor WHO 2024",
      "interests": "Healthcare access, global health"
    },
    {
      "id": 45,
      "name": "Jana Ahmed Mahmoud Elbaz",
      "photo": "imgs/pfps/jana.png",
      "quote": "Health is a fundamental right.",
      "committee": "WHO",
      "country": "Palestine",
      "school": "KKIS",
      "experience": "1 year in MUN",
      "achievements": "Active contributor WHO 2024",
      "interests": "Public health, global aid"
    },
    {
      "id": 46,
      "name": "Moaaz Mohammed Farouk",
      "photo": "imgs/pfps/muath.png",
      "quote": "Health for all, everywhere.",
      "committee": "WHO",
      "country": "Qatar",
      "school": "KKIS",
      "experience": "1 year in MUN",
      "achievements": "Active contributor WHO 2024",
      "interests": "Healthcare reform, global health"
    },
    {
      "id": 48,
      "name": "Lamar Thamer Bakkr",
      "photo": "imgs/pfps/lamar4.png",
      "quote": "Health is the foundation of society.",
      "committee": "WHO",
      "country": "Nigeria",
      "school": "KKIS",
      "experience": "1 year in MUN",
      "achievements": "Active contributor WHO 2024",
      "interests": "Healthcare access, global health"
    },
    {
      "id": 7,
      "name": "Motaz Yasser Awwad",
      "photo": "imgs/pfps/mutaz.png",
      "quote": "Voices of youth shape the world.",
      "committee": "UNICEF",
      "country": "Ukraine",
      "school": "KKIS",
      "experience": "1 year in MUN",
      "achievements": "Honorable Mention 2024",
      "interests": "Global unity, child rights"
    },
    {
      "id": 49,
      "name": "Lamar Ghiath Hajo",
      "photo": "imgs/pfps/lamar1.png",
      "quote": "Together for better health.",
      "committee": "WHO",
      "country": "Iraq",
      "school": "KKIS",
      "experience": "1 year in MUN",
      "achievements": "Active contributor WHO 2024",
      "interests": "Public health, global policies"
    },
    {
      "id": 50,
      "name": "Lamia Shadi Lazkani",
      "photo": "imgs/pfps/lamia.png",
      "quote": "Health is a human right.",
      "committee": "WHO",
      "country": "Morocco",
      "school": "KKIS",
      "experience": "1 year in MUN",
      "achievements": "Active contributor WHO 2024",
      "interests": "Healthcare access, global health"
    },
    {
      "id": 51,
      "name": "Lana Emad Al Adwan",
      "photo": "imgs/pfps/lana.png",
      "quote": "Health is wealth.",
      "committee": "WHO",
      "country": "Italy",
      "school": "KKIS",
      "experience": "1 year in MUN",
      "achievements": "Active contributor WHO 2024",
      "interests": "Public health, science"
    },
    {
      "id": 52,
      "name": "Masooma Rehan Haider",
      "photo": "imgs/pfps/masooma.png",
      "quote": "Healthy children, healthy future.",
      "committee": "WHO",
      "country": "Canada",
      "school": "KKIS",
      "experience": "1 year in MUN",
      "achievements": "Active contributor WHO 2024",
      "interests": "Child health, global aid"
    },
    {
      "id": 53,
      "name": "Mayyar Turki Mobaraki",
      "photo": "imgs/pfps/mayar.png",
      "quote": "Access to healthcare is a right.",
      "committee": "WHO",
      "country": "UAE",
      "school": "KKIS",
      "experience": "1 year in MUN",
      "achievements": "Active contributor WHO 2024",
      "interests": "Healthcare reform, global health"
    },
    {
      "id": 37,
      "name": "Mohammed Murad Embaby",
      "photo": "imgs/pfps/mohammad2.png",
      "quote": "Together for a healthier world.",
      "committee": "WHO",
      "country": "UK",
      "school": "KKIS",
      "experience": "2 years in MUN",
      "achievements": "WHO Delegate Excellence Award",
      "interests": "Public health, global policies"
    },
    {
      "id": 3,
      "name": "Faris Ayman Namer",
      "photo": "imgs/pfps/faris.png",
      "quote": "Change starts with conversation.",
      "committee": "UNICEF",
      "country": "Germany",
      "school": "KKIS",
      "experience": "3 years in MUN",
      "achievements": "Best Delegate KKIS MUN 2023",
      "interests": "Human rights, public speaking"
    },
    {
      "id": 54,
      "name": "Mera Murad Embaby",
      "photo": "imgs/pfps/mira2.png",
      "quote": "Together we can improve health.",
      "committee": "WHO",
      "country": "Congo",
      "school": "KKIS",
      "experience": "1 year in MUN",
      "achievements": "Active contributor WHO 2024",
      "interests": "Public health, global policies"
    },
    {
      "id": 55,
      "name": "Sham Hassan Alakhras",
      "photo": "imgs/pfps/sham.png",
      "quote": "Health is a shared responsibility.",
      "committee": "WHO",
      "country": "Sweden",
      "school": "KKIS",
      "experience": "1 year in MUN",
      "achievements": "Active contributor WHO 2024",
      "interests": "Public health, science"
    },
    {
      "id": 56,
      "name": "Sara Bilal Olayan",
      "photo": "imgs/pfps/sara2.png",
      "quote": "Healthy societies start with healthy children.",
      "committee": "WHO",
      "country": "France",
      "school": "KKIS",
      "experience": "1 year in MUN",
      "achievements": "Active contributor WHO 2024",
      "interests": "Public health, science"
    },
    {
      "id": 57,
      "name": "Yara Ammar Ajaj",
      "photo": "imgs/pfps/yara2.png",
      "quote": "Health is a fundamental right.",
      "committee": "WHO",
      "country": "Syria",
      "school": "KKIS",
      "experience": "1 year in MUN",
      "achievements": "Active contributor WHO 2024",
      "interests": "Public health, global aid"
    },
    {
      "id": 58,
      "name": "Yara Hani Al Shareef",
      "photo": "imgs/pfps/yara1.png",
      "quote": "Together for a healthier world.",
      "committee": "WHO",
      "country": "Saudi Arabia",
      "school": "KKIS",
      "experience": "1 year in MUN",
      "achievements": "Active contributor WHO 2024",
      "interests": "Healthcare access, global health"
    },
    {
      "id": 59,
      "name": "Yasmeen Amr Rasheedi",
      "photo": "imgs/pfps/yasmine.png",
      "quote": "Healthy societies start with healthy children.",
      "committee": "WHO",
      "country": "Jordan",
      "school": "KKIS",
      "experience": "1 year in MUN",
      "achievements": "Active contributor WHO 2024",
      "interests": "Child health, global aid"
    }
  ],
  gallery: {
      photos: [
          {
              id: 1,
              src: "https://placehold.co/400x300",
              caption: "Opening Ceremony - KKIS MUN 2024"
          },
          {
              id: 2,
              src: "https://placehold.co/400x300",
              caption: "Committee Debate - UNICEF"
          }
      ],
      videos: [
          {
              id: 1,
              embedUrl: "https://www.youtube.com/embed/9JP4qcStQUI?si=lKTfmndQpLOZghwe",
              title: "KKIS MUN Highlights",
              caption: "KKIS MUN 2024 Highlights"
          }
      ]
  }
};

// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
  // Initialize all components
  initNavigation();
  initCountdown();
  loadEventDetails();
  loadCommittees();
  loadParticipants();
  loadGallery();
  loadContactInfo();
  setCurrentYear();
});

// Mobile Navigation
function initNavigation() {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  const navLinks = document.querySelectorAll('.nav-link');

  if (mobileMenuToggle) {
      mobileMenuToggle.addEventListener('click', function() {
          this.classList.toggle('active');
          mobileNav.classList.toggle('active');
      });
  }

  // Close mobile menu when a link is clicked
  navLinks.forEach(link => {
      link.addEventListener('click', function() {
          mobileNav.classList.remove('active');
          mobileMenuToggle.classList.remove('active');
      });
  });

  // Active link on scroll
  window.addEventListener('scroll', function() {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          const sectionId = section.getAttribute('id');
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
              navLinks.forEach(link => {
                  link.classList.remove('active');
                  if (link.getAttribute('href') === `#${sectionId}`) {
                      link.classList.add('active');
                  }
              });
          }
      });
  });
}

// Countdown Timer
function initCountdown() {
  const daysElement = document.getElementById('days');
  const hoursElement = document.getElementById('hours');
  const minutesElement = document.getElementById('minutes');
  const secondsElement = document.getElementById('seconds');
  
  function updateCountdown() {
      const currentTime = new Date();
      const timeDifference = munConfig.event.startDate - currentTime;
      
      if (timeDifference <= 0) {
          // Event has started
          daysElement.textContent = '00';
          hoursElement.textContent = '00';
          minutesElement.textContent = '00';
          secondsElement.textContent = '00';
          
          const countdownTitle = document.querySelector('.countdown-title');
          if (countdownTitle) {
              if (currentTime < munConfig.event.endDate) {
                  countdownTitle.textContent = 'Event In Progress!';
              } else {
                  countdownTitle.textContent = 'Event Completed!';
              }
          }
          
          return;
      }
      
      // Calculate days, hours, minutes, seconds
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
      
      // Update the DOM
      daysElement.textContent = days < 10 ? `0${days}` : days;
      hoursElement.textContent = hours < 10 ? `0${hours}` : hours;
      minutesElement.textContent = minutes < 10 ? `0${minutes}` : minutes;
      secondsElement.textContent = seconds < 10 ? `0${seconds}` : seconds;
  }
  
  // Initial update
  updateCountdown();
  
  // Update every second
  setInterval(updateCountdown, 1000);
}

// Load Event Details
function loadEventDetails() {
  const eventDates = document.getElementById('event-dates');
  const eventTimes = document.getElementById('event-times');
  
  if (eventDates) {
      eventDates.textContent = formatDate(munConfig.event.startDate) + ' - ' + formatDate(munConfig.event.endDate, true);
  }
  
  if (eventTimes) {
      eventTimes.textContent = munConfig.event.timeFormat;
  }
}

// Helper function to format date
function formatDate(date, onlyDay = false) {
  const options = onlyDay 
      ? { day: 'numeric' } 
      : { month: 'long', day: 'numeric', year: 'numeric' };
  return new Date(date).toLocaleDateString('en-US', options);
}

// Load Committees
function loadCommittees() {
  const committeesContainer = document.getElementById('committees-container');
  
  if (!committeesContainer) return;
  
  let committeesHTML = '';
  
  munConfig.committees.forEach(committee => {
      committeesHTML += `
          <div class="committee-card">
              <div class="committee-logo">
                  <img src="${committee.logo}" alt="${committee.name} Logo">
              </div>
              <h3>${committee.name}</h3>
              <p>${committee.fullName}</p>
              <div class="committee-details">
                  <p>${committee.description}</p>
                  <p><strong>Agenda:</strong> "${committee.agenda}"</p>
              </div>
          </div>
      `;
  });
  
  committeesContainer.innerHTML = committeesHTML;
}

// Load Participants
function loadParticipants() {
  const participantsContainer = document.getElementById('participants-container');
  const filterButtons = document.querySelectorAll('.filter-btn');
  
  if (!participantsContainer) return;
  
  function renderParticipants(filter = 'all') {
      let participantsHTML = '';
      
      const filteredParticipants = filter === 'all' 
          ? munConfig.participants 
          : munConfig.participants.filter(participant => participant.committee === filter);
      
      filteredParticipants.forEach(participant => {
          participantsHTML += `
              <div class="participant-card" data-committee="${participant.committee}">
                  <div class="participant-front">
                      <div class="participant-image">
                          <img src="${participant.photo}" alt="${participant.name}">
                      </div>
                      <div class="participant-info">
                          <h3>${participant.name}</h3>
                          <p class="participant-quote">"${participant.quote}"</p>
                          <p class="participant-committee">${participant.committee}</p>
                          <p class="participant-country">${participant.country}</p>
                      </div>
                  </div>
                  <div class="participant-back">
                      <h3>${participant.name}</h3>
                      <p><strong>School:</strong> ${participant.school}</p>
                      <p><strong>Experience:</strong> ${participant.experience}</p>
                      <p><strong>Achievements:</strong> ${participant.achievements}</p>
                      <p><strong>Interests:</strong> ${participant.interests}</p>
                  </div>
              </div>
          `;
      });
      
      participantsContainer.innerHTML = participantsHTML;
  }
  
  // Initial render
  renderParticipants();
  
  // Filter functionality
  if (filterButtons) {
      filterButtons.forEach(button => {
          button.addEventListener('click', function() {
              const filter = this.getAttribute('data-filter');
              
              // Update active button
              filterButtons.forEach(btn => btn.classList.remove('active'));
              this.classList.add('active');
              
              // Render filtered participants
              renderParticipants(filter);
          });
      });
  }
}

// Load Gallery
function loadGallery() {
  const photosContainer = document.getElementById('photos-container');
  const videosContainer = document.getElementById('videos-container');
  const galleryTabs = document.querySelectorAll('.gallery-tab');
  const gallerySections = document.querySelectorAll('.gallery-section');
  
  // Load photos
  if (photosContainer) {
      let photosHTML = '';
      
      munConfig.gallery.photos.forEach(photo => {
          photosHTML += `
              <div class="photo-item">
                  <img src="${photo.src}" alt="${photo.caption}">
                  <div class="photo-caption">${photo.caption}</div>
              </div>
          `;
      });
      
      photosContainer.innerHTML = photosHTML;
  }
  
  // Load videos
  if (videosContainer) {
      let videosHTML = '';
      
      munConfig.gallery.videos.forEach(video => {
          videosHTML += `
              <div class="video-item">
                  <div class="video-wrapper">
                      <iframe width="560" height="315" src="${video.embedUrl}" title="${video.title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                  <div class="video-caption">${video.caption}</div>
              </div>
          `;
      });
      
      videosContainer.innerHTML = videosHTML;
  }
  
  // Gallery tabs functionality
  if (galleryTabs.length > 0 && gallerySections.length > 0) {
      galleryTabs.forEach(tab => {
          tab.addEventListener('click', function() {
              const targetId = this.getAttribute('data-target');
              
              // Update active tab
              galleryTabs.forEach(t => t.classList.remove('active'));
              this.classList.add('active');
              
              // Show target section, hide others
              gallerySections.forEach(section => {
                  section.classList.remove('active');
                  if (section.id === targetId) {
                      section.classList.add('active');
                  }
              });
          });
      });
  }
}

// Load Contact Information
function loadContactInfo() {
  const contactDetails = document.getElementById('contact-details');
  const locationMap = document.getElementById('location-map');
  
  if (contactDetails) {
      const venue = munConfig.event.venue;
      const contact = munConfig.event.contact;
      
      contactDetails.innerHTML = `
          <div class="contact-item">
              <i class="fas fa-map-marker-alt"></i>
              <p>${venue.name}<br>${venue.address}<br>${venue.city}, ${venue.country}</p>
          </div>
          <div class="contact-item">
              <i class="fas fa-phone"></i>
              <p>${contact.phone}</p>
          </div>
          <div class="contact-item">
              <i class="fas fa-envelope"></i>
              <p>${contact.email}</p>
          </div>
          <div class="contact-item">
              <i class="fas fa-globe"></i>
              <p>${contact.website}</p>
          </div>
      `;
  }
  
  if (locationMap) {
      locationMap.src = munConfig.event.venue.mapEmbedUrl;
  }
}

// Set Current Year in Footer
function setCurrentYear() {
  const yearElement = document.getElementById('current-year');
  
  if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
  }
}












let displayedParticipants = 6; // Number of participants to display initially

function loadParticipants() {
    const participantsContainer = document.getElementById('participants-container');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    if (!participantsContainer) return;
    
    function renderParticipants(filter = 'all') {
        let participantsHTML = '';
        
        const filteredParticipants = filter === 'all' 
            ? munConfig.participants 
            : munConfig.participants.filter(participant => participant.committee === filter);
        
        // Limit the number of displayed participants
        const participantsToShow = filteredParticipants.slice(0, displayedParticipants);
        
        participantsToShow.forEach(participant => {
            participantsHTML += `
                <div class="participant-card" data-committee="${participant.committee}">
                    <div class="participant-front">
                        <div class="participant-image">
                            <img src="${participant.photo}" alt="${participant.name}">
                        </div>
                        <div class="participant-info">
                            <h3>${participant.name}</h3>
                            <p class="participant-quote">"${participant.quote}"</p>
                            <p class="participant-committee">${participant.committee}</p>
                            <p class="participant-country">${participant.country}</p>
                        </div>
                    </div>
                    <div class="participant-back">
                        <h3>${participant.name}</h3>
                        <p><strong>School:</strong> ${participant.school}</p>
                        <p><strong>Experience:</strong> ${participant.experience}</p>
                        <p><strong>Achievements:</strong> ${participant.achievements}</p>
                        <p><strong>Interests:</strong> ${participant.interests}</p>
                    </div>
                </div>
            `;
        });
        
        participantsContainer.innerHTML = participantsHTML;
        
        // Hide the "View More" button if all participants are displayed
        document.getElementById('view-more').style.display = filteredParticipants.length <= displayedParticipants ? 'none' : 'block';
    }
    
    // Initial render
    renderParticipants();
    
    // Filter functionality
    if (filterButtons) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                const filter = this.getAttribute('data-filter');
                
                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                // Render filtered participants
                displayedParticipants = 10; // Reset to initial display count
                renderParticipants(filter);
            });
        });
    }
    
    // View More functionality
    document.getElementById('view-more').addEventListener('click', function() {
        displayedParticipants += 10; // Increase the number of displayed participants
        renderParticipants(); // Re-render participants
    });
}








  const now = new Date();
  const deadline = new Date('2025-04-24T22:00:00'); // 10PM

  if (now >= deadline) {
    // Disable the ::before by adding a class
    document.getElementById('gallery').classList.add('no-before');
  }
