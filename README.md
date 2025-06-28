# 🏡 Kingsukh Guest House – Static Website  
A fully responsive, SEO-ready static website for a nature-rich guest house in Baranti, West Bengal — built with **React** and **Tailwind CSS**.
---
## 📸 Live Demo

🔗 [mykingsukhguesthouse](https://mykingsukhguesthouse.netlify.app)

---

## 🔧 Tech Stack & Tools

| Tool/Library         | Purpose                                  |
|----------------------|-------------------------------------------|
| **React**            | Component-based UI framework              |
| **Vite**             | Fast build tool and dev server            |
| **Tailwind CSS**     | Utility-first CSS for responsive design   |
| **React Icons**      | Icon packs (FontAwesome)  |
| **Framer Motion**    | Smooth and modern animations              |
| **AOS**              | Animate on scroll effects                 |
| **React Hook Form**  | Contact form handling & validation        |
| **EmailJS**          | Send emails without backend               |
| **React Helmet Async** | SEO meta tag management              |
| **React Hot Toast**  | User-friendly notifications               |
| **React Scroll**     | Smooth scrolling to sections              |

---
## 🧪 Testing

- ✅ Lighthouse Testing:
---

## 🚀 Getting Started

```bash
# Step 1: Create the app
npm create vite@latest .

# Step 2: Install dependencies
npm install tailwindcss @tailwindcss/vite
npm install react-router-dom framer-motion aos react-hook-form react-icons react-scroll
npm install @emailjs/browser
npm install react-hot-toast --legacy-peer-deps
```


---

## 📂 Folder Structure

```bash
src/
├── assets/         # Images, icons
├── components/     # Navbar, Footer, Card, etc.
├── pages/          # Home, About, Rooms, Services, Contact
├── App.jsx
├── main.jsx
├── index.html      # Global <head> configuration (if needed)
└── vite.config.js
```

---

## ✨ Features

- 📱 Fully mobile responsive
- 📩 Contact form with real-time validation + email delivery via EmailJS
- 🎨 Scroll animations (AOS + Framer Motion)
- 🔔 Toast notifications for form feedback
- 🔎 SEO optimized 
- 📍 Google Maps embed for directions

---

## 🧠 Fonts Used

- `Playfair Display SC` – for logo  
- `Playfair Display` – for headings  
- `Lato` – for navigation links  
- `Open Sans` – for body/content

---

## 📚 Helpful References

- 🔗 [react-icons](https://react-icons.github.io/react-icons/search?q=phone)
- 🔗 [EmailJS Docs](https://www.emailjs.com/docs/examples/reactjs/)
- 🔗 [React Router](https://reactrouter.com/home)
- 🔗 [Tailwind Vite Setup](https://tailwindcss.com/docs/installation/using-vite)
- 🔗 [AOS Animation](https://github.com/michalsnik/aos)
- 🔗 [Framer Motion Docs](https://motion.dev/docs/react-quick-start)
- 🔗 [React Hook Form](https://react-hook-form.com/get-started)
- 🔗 [Hot Toast](https://react-hot-toast.com/)


---

## 📬 Contact Feature

- Uses **EmailJS** to send messages directly to admin email.
- Configurable via `.env` file:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

> Form validates: required fields, correct email & 10-digit mobile number

---
## 🧑‍💻 Author

Made with 💙 by **Vishal patel**

📧 Contact: [patelvishal14642@gmail.com](mailto:patelvishal14642@gmail.com)

---

## 💬 Feedback or Suggestions?

Feel free to open an [Issue](https://github.com/vishalpatel7777/Book-Recommandation-app/issues) or [Contact Me](mailto:patelvishal14642@gmail.com). I'm always open to ideas that make mykingsukhguesthouse better!

