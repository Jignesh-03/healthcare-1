# 🏥 Medivance Hospital Website

A full React.js + Tailwind CSS hospital website with separate component files.

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          ← Sticky nav with Home, Doctors, Contact, Book Appointment
│   ├── Footer.jsx          ← Full footer with links
│   ├── EmergencyBar.jsx    ← Top emergency alert bar
│   └── DoctorCard.jsx      ← Reusable doctor card component
├── pages/
│   ├── Home.jsx            ← Landing page with hero, services, doctors, testimonials
│   ├── Doctors.jsx         ← All doctors with filter + detail modal
│   ├── BookAppointment.jsx ← 3-step appointment booking form
│   └── Contact.jsx         ← Contact form + department directory
├── data/
│   └── doctors.js          ← Doctor data (easily editable)
├── App.jsx                 ← Router setup
├── index.js                ← Entry point
└── index.css               ← Tailwind + Google Fonts
```

## 🚀 Setup & Run

```bash
# 1. Install dependencies
npm install

# 2. Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# 3. Start development server
npm start
```

## 🎨 Tech Stack
- **React.js 18** — Component-based UI
- **React Router v6** — Multi-page navigation
- **Tailwind CSS** — Utility-first styling
- **Google Fonts** — Cormorant Garamond + DM Sans

## 📄 Pages
| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, services, doctors preview, testimonials |
| Doctors | `/doctors` | All doctors with specialty filter + detail modal |
| Book Appointment | `/book-appointment` | 3-step booking form with validation |
| Contact | `/contact` | Contact form + department directory |
