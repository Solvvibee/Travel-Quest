# TravelQuest 🎮🌍 - Turn Your Journey Into a Game

> **BSc IT Final Year / College Assignment Project**  
> A full-stack web application transforming traditional tourism and city exploration into a real-life gamified quest experience.

---

## 1. Project Title & Overview
**TravelQuest** is an interactive, gamified travel platform designed for college students, young travelers, and tourists. Instead of passively browsing monuments, travelers embark on city-specific **Quests** (e.g., photography, food discovery, historical exploration, walks), earning **XP (Experience Points)**, unlocking **Badges**, and competing on a live **Leaderboard**.

---

## 2. Problem Statement
Traditional travel guides and sightseeing apps are static, repetitive, and often uninspiring for younger generations:
- Tourists often take generic photos without genuinely engaging with local culture or history.
- Traditional guidebooks lack interactive motivation or goal-oriented rewards.
- Students and backpackers seek adventure, social achievement, and memorable experiences rather than standard itineraries.

---

## 3. Proposed Solution
**TravelQuest** introduces a gamified exploration model:
- **Real-World Quests:** Users receive bite-sized travel challenges across categories like *Photography*, *Food*, *History*, *Nature*, and *Art*.
- **Gamified Rewards:** Completing a quest awards instant XP and Points.
- **Progression & Levels:** Players level up from *Rookie Traveler* to *Quest Master*.
- **Collectible Badges:** Unlock achievements such as *First Explorer*, *Food Explorer*, and *City Explorer*.
- **Student Leaderboard:** Friendly competition among peers and fellow travelers.
- **Cross-Platform Access:** Works seamlessly on both desktop/laptop for viva demonstrations and on Android mobile phones for on-the-go exploration.

---

## 4. Target Users
- College students and young travelers
- Solo backpackers and youth hostel travelers
- Tourists exploring Indian cities (Mumbai, Pune, Goa, Delhi, Bengaluru)
- Academic examiners / evaluators for college project demonstrations

---

## 5. Technology Stack
Built using a beginner-friendly, reliable, and modern stack that is easy for a BSc IT student to understand, explain, and defend during viva presentations:

| Layer | Technology | Rationale |
|---|---|---|
| **Frontend** | React 18 + Vite | Lightning-fast development, component-based UI, reactive state |
| **Styling** | Modern CSS3 (Variables, Flexbox, Grid) | Responsive mobile-first design without heavy bloated frameworks |
| **Backend** | Node.js + Express.js | Standard JavaScript runtime and lightweight REST API framework |
| **Database** | SQLite (Relational) | Zero-configuration SQL database, embedded and portable |
| **Architecture** | Client-Server Architecture (REST API) | Clean separation of concerns between UI and backend logic |

---

## 6. System Requirements
- **Operating System:** Windows 10/11, macOS, or Linux
- **Node.js:** v18.0.0 or higher (Tested on Node.js v24)
- **Web Browser:** Google Chrome, Brave, Edge, or mobile browser (Chrome for Android)
- **Local Network (Optional for Mobile):** Both laptop and Android phone connected to the same Wi-Fi network or mobile hotspot.

---

## 7. Project Structure & Directory Organization

```
App Building/
├── package.json                 # Root script coordinator
├── start-dev.js                 # Concurrent runner with mobile IP detection
├── run-app.bat                  # 1-click Windows launcher (double-click to start)
├── .gitignore                   # Ignores node_modules, build, and databases
├── README.md                    # Project documentation & presentation guide
│
├── client/                      # React Frontend (Vite)
│   ├── package.json             # Frontend dependencies
│   ├── vite.config.js           # Server configuration (0.0.0.0 binding & API proxy)
│   ├── index.html               # Mobile viewport & font imports
│   └── src/
│       ├── main.jsx             # React entry point
│       ├── App.jsx              # Main App layout & navigation coordinator
│       ├── index.css            # Game & Travel design system + mobile styling
│       ├── components/          # Reusable UI components
│       │   ├── Navbar.jsx       # Responsive desktop & mobile drawer navbar
│       │   └── Footer.jsx       # Academic project footer
│       ├── pages/               # Application pages
│       │   └── LandingPage.jsx  # Hero, backend health status, feature cards, roadmap
│       ├── services/            # API communication services
│       │   └── api.js           # Fetch helper for Express backend
│       ├── context/             # State management (for subsequent phases)
│       └── assets/              # Icons and images
│
└── server/                      # Node.js + Express Backend
    ├── package.json             # Backend dependencies
    ├── server.js                # Express app, CORS, and API endpoints
    ├── config/                  # Database configuration (Phase 2)
    ├── controllers/             # Business logic handlers
    ├── routes/                  # API routing definitions
    ├── middleware/              # Auth & validation middleware
    └── data/                    # SQLite database files & seeds
```

---

## 8. How to Install & Run the Project

### Step 1: Open Terminal in Project Directory
Open PowerShell or Command Prompt in the project folder (`App Building`).

### Step 2: Install Dependencies
Run the installation command:
```bash
npm run install-all
```
*(This installs dependencies for both `server` and `client`.)*

### Step 3: Start the Application
Run:
```bash
npm run dev
```
*(Or simply double-click `run-app.bat` on Windows!)*

This will concurrently start:
- 💻 **React Frontend:** `http://localhost:3000`
- ⚙️ **Express Backend API:** `http://localhost:5000/api/health`

---

## 9. How to Test & Access on Android Mobile 📱
Because this is a real-world travel application, it is designed to run directly on an Android smartphone:
1. Ensure your laptop and Android mobile phone are connected to the **same Wi-Fi network** (or connect your laptop to your phone's Wi-Fi Hotspot).
2. When you run `npm run dev` or `node start-dev.js`, notice the terminal prints your local network IP:
   ```text
   💻 Laptop Browser:   http://localhost:3000
   📱 Android Mobile:   http://192.168.x.x:3000
   ```
3. Open Chrome on your Android mobile phone and type:
   `http://<YOUR-LAPTOP-IP>:3000`
4. The responsive UI will load with touch-friendly navigation, mobile drawer menu, and live connection to the backend!

---

## 10. Database Schema (Phase 2 Implemented)
The application utilizes an embedded relational SQLite database located at `server/data/travelquest.db`.

### Tables Overview:
1. **`users`**: `id`, `name`, `email`, `password`, `xp`, `points`, `level`, `avatar`, `created_at`
2. **`destinations`**: `id`, `name`, `description`, `image`, `location`, `created_at`
3. **`quests`**: `id`, `destination_id`, `title`, `description`, `category`, `difficulty`, `xp_reward`, `points_reward`, `location`, `estimated_time`
4. **`completed_quests`**: `id`, `user_id`, `quest_id`, `completed_at` *(UNIQUE constraint prevents duplicate rewards)*
5. **`badges`**: `id`, `name`, `description`, `requirement`, `icon`, `category`
6. **`user_badges`**: `id`, `user_id`, `badge_id`, `unlocked_at`

### Seed Data Included:
- **5 Destinations:** Mumbai (CSMT, St. Xavier's, Gateway, Marine Drive), Pune (Sinhagad, Shaniwar Wada), Goa (Old Goa, Dudhsagar), Delhi (Red Fort, Chandni Chowk), Bengaluru (Lalbagh, Church Street).
- **26 Realistic Quests:** Across Photography 📸, Food 🍴, History 🏛️, Adventure 🚶, Art & Culture 🎨, and Nature 🌳.
- **8 Badges:** First Explorer, Photographer, Food Explorer, History Hunter, City Explorer, Quest Master, Trailblazer, Culture Connoisseur.
- **6 Users:** Seeded for live leaderboard competition.

---

## 11. 11-Phase Implementation Roadmap
- [x] **Phase 1: Project Setup & Architecture** (Completed)
- [x] **Phase 2: Database & Sample Data** (Completed)
- [x] **Phase 3: Authentication** (Completed - Sign Up, Login, JWT tokens, SHA-256 hashing)
- [x] **Phase 4: User Dashboard** (Completed - Profile banner, visual XP bar, 5-level milestone road, stats grid, avatar selector)
- [x] **Phase 5: Destinations** (Completed - Explore cities: Mumbai, Pune, Goa, Delhi, Bengaluru with quest catalog, filtering & details modal)
- [x] **Phase 6: Quest System** (Completed - My Quests hub with Available vs Completed tabs, multi-city filtering, details modal, duplicate prevention, and real-time XP & point awards)
- [x] **Phase 7: XP and Level Calculation** (Completed - Level 1 to 5 tiered journey, LevelUpModal with Web Audio victory chimes, interactive LevelJourneyModal & live viva simulator)
- [x] **Phase 8: Badges & Achievements** (Completed - Dedicated Trophy Case page, locked/unlocked glowing states, category tabs, detail modals, milestone tracking)
- [x] **Phase 9: Leaderboard** (Completed - Real-time student rankings with animated podium for top 3, highlighted current user "YOU" badge, sort by XP/Points/Level, live refresh)
- [x] **Phase 10: Responsive UI & Animation Polish** (Completed - Zero-dependency canvas confetti explosion engine, Web Audio synthesized sound effects, tactile mobile touch active feedback, safe-area-insets)
- [x] **Phase 11: Final Testing & Presentation Prep** (Completed - 3-5 min presentation demonstration script, top 15 viva defense questions & answers guide in VIVA_PRESENTATION_GUIDE.md)

---

## 12. Future Scope (Beyond MVP)
Documented for college project viva:
- GPS Geolocation quest verification (auto-complete when user is within 50m of landmark)
- Camera photo upload verification with AI image recognition
- Google Maps interactive pins and route directions
- Social sharing and multi-student group quests
- Local restaurant and tourism board partnerships
