# Komarock Works - Professional Media & Creative Services

A production-ready, fully responsive Next.js 14+ web application for Komarock Works, built with TypeScript, Tailwind CSS, and Lucide React icons.

## 🎨 Design System

### Color Palette (Zero Gradients - Flat Colors Only)
- **Deep Navy**: `#0B1B3D` - Primary brand color
- **Royal Blue**: `#0066CC` - Action buttons, links
- **Sky Blue**: `#2997FF` - Accents, highlights
- **Clean Pure White**: `#FFFFFF` - Backgrounds
- **Off-White / Light Gray**: `#F4F6F9` - Secondary backgrounds
- **Dark Slate Charcoal**: `#1A1D20` - Primary text
- **Muted Gray**: `#5A626A` - Secondary text

### Typography
- **Headings**: Montserrat (400, 500, 600, 700, 800, 900)
- **Body Text**: Inter (300, 400, 500, 600, 700)

## 📁 Project Structure

```
komarock-works/
├── app/
│   ├── about/
│   │   └── page.tsx              # About Us page
│   ├── contact/
│   │   └── page.tsx              # Contact & Booking page
│   ├── portfolio/
│   │   └── page.tsx              # Portfolio & Media Gallery
│   ├── services/
│   │   └── page.tsx              # Services page with inquiry modal
│   ├── trainings/
│   │   └── page.tsx              # Trainings & Short Courses
│   ├── globals.css               # Global styles and Tailwind config
│   ├── layout.tsx                # Root layout with fonts
│   └── page.tsx                  # Home page
├── components/
│   ├── Footer.tsx                # Site footer
│   ├── Hero.tsx                  # Hero banner component
│   ├── InquiryModal.tsx          # Service inquiry modal
│   ├── Navbar.tsx                # Navigation bar
│   ├── Pillars.tsx               # 5 Core Expert Pillars
│   ├── WhatsAppButton.tsx        # Floating WhatsApp button
│   └── WhyChooseUs.tsx           # Why Choose Us section
├── lib/
│   └── data.ts                   # All data and content
└── public/                       # Static assets

## 🚀 Features Implemented

### 1. Home Page
- Hero banner with "Speak. Create. Influence." headline
- Two CTA buttons (Explore Services, View Portfolio)
- Video showreel preview container
- 5 Core Expert Pillars grid with interactive cards
- Why Choose Us section
- Partner & Community Impact statistics

### 2. About Us Page
- Brand story section
- Mission and Vision statements
- Core Values (Authenticity, Excellence, Impact, Innovation)
- Interactive organizational structure tree

### 3. Services Page
- Branch A: Media Production services (6 services)
- Weekly Digital Content Management Tiers (Bronze, Silver, Gold)
- Branch B: Public Speaking & Coaching (4 services)
- Dynamic "Request Custom Quote" modal

### 4. Trainings & Sponsored Short Courses
- Course dashboard with real-time capacity counters
- Three courses: Graphic Design, Public Speaking, AI
- Course details: 1 Month duration, Kshs. 500 certificate fee
- Visual capacity progress bars

### 5. Portfolio & Media Gallery
- Filterable category buttons
- High-definition media grid
- Lightbox photo/video previews
- Case study drawers with client info and outcomes

### 6. Contact & Booking Portal
- Interactive contact form
- Direct contact information
- M-Pesa payment information
- Global floating WhatsApp button

## 🛠️ Technical Stack

- **Next.js**: 16.4.3 (App Router)
- **React**: 19.3.0
- **TypeScript**: 5.x
- **Tailwind CSS**: 4.x
- **Lucide React**: ^0.468.0

## 📦 Installation & Setup

```bash
cd komarock-works
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📝 Contact Information

- **Phone/WhatsApp**: +254 740 061 365
- **WhatsApp Link**: https://wa.me/254740061365
- **Email**: info@komarockworks.co.ke
- **Location**: Nairobi, Kenya

### M-Pesa Payment Details
- **Till Number**: 714888
- **Account Number**: 215097
- **Account Name**: Komarock Works

## 📄 License

© 2026 Komarock Works. All rights reserved.
```
