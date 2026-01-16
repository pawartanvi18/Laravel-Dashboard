# 📊 Dashboard UI – Laravel + Inertia + shadcn/ui

A modern, responsive **Dashboard UI** built using **Laravel**, **Inertia.js**, **React**, **Tailwind CSS**, and **shadcn/ui**.  
This project focuses on **real-world dashboard architecture**, clean UI composition, and smooth user experience.

---

## 🚀 Tech Stack
- **Backend:** Laravel  
- **Frontend:** React + TypeScript  
- **Routing & State Bridge:** Inertia.js  
- **Styling:** Tailwind CSS  
- **UI Components:** shadcn/ui  
- **Icons:** Lucide React  

---

## ✨ Features

### 📌 Dashboard (Home)
- Stats cards overview
- Analytics graph (responsive)
- Running projects summary
- Running tasks summary

### 👥 People
- Profile cards with avatar placeholders
- People table (name, role, email, status)
- Clean separation from dashboard

### 📁 Projects
- Running projects list
- Active projects card
- Focused project overview page

### 🔔 Notifications
- Notification dropdown (dummy)
- Dedicated notifications page
- Empty state: **“No notifications yet”**

### 🧭 Layout & UX
- Persistent **collapsible sidebar**
- Sidebar collapse button inside sidebar
- Mobile-friendly slide-in sidebar
- Dynamic header title based on route
- User avatar as profile holder
- Smooth transitions throughout the app
- Skeleton loaders (visual only)
- Empty state placeholders

---

## 📱 Responsiveness

- Desktop: Collapsible sidebar with icon-only mode
- Mobile: Hamburger menu with slide-in sidebar
- Fully responsive layouts using Tailwind CSS

---

## 🧠 Key Learnings

- Proper dashboard layout composition
- Route-based UI separation using Inertia
- Shared layout pattern for persistent navigation
- Building reusable UI components with shadcn
- Managing responsive behavior without extra libraries

---

## ⚙️ Setup Instructions

```bash
# Clone the repository
git clone <repo-url>

# Install PHP dependencies
composer install

# Install frontend dependencies
npm install

# Run development servers
php artisan serve
npm run dev
```

## Project Structure

```
├── app/                    # Laravel application code
├── resources/
│   ├── js/                 # React frontend
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   └── types/          # TypeScript type definitions
│   └── css/                # Stylesheets
├── routes/                 # Web routes
├── database/               # Migrations and seeders
├── tests/                  # Test files
├── public/                 # Public assets
└── config/                 # Configuration files
```

---
## 🔮 Future Improvements

- Authentication & role-based access
- Profile switcher logic
- Real backend data integration
- Charts with live data
- Dark mode support

---
## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
