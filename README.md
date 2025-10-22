# BuildLoop Prompts Library - React Version

Clone hoàn chỉnh của trang web https://build-loop.ai/prompts được build với **React + Vite** và **DarkVeil WebGL Background**.

## ✨ Tính năng

- ⚛️ **React 18 + Vite** - Fast Refresh và HMR cực nhanh
- 🌊 **DarkVeil WebGL Background** - CPPN Neural Network patterns animated
- ✍️ **Space Grotesk Font** - Typography chuyên nghiệp từ Google Fonts
- 🔍 **Real-time Search** - Tìm kiếm prompts tức thì
- 🏷️ **Category Filtering** - 7 danh mục (Beginner, Advanced, AI Agents, etc.)
- 📱 **Fully Responsive** - Hoạt động hoàn hảo trên mọi thiết bị
- ⚡ **Performance Optimized** - useMemo hooks, lazy loading images
- 🎨 **Modern UI/UX** - Smooth animations, hover effects, backdrop blur
- 🎯 **CSS Grid Layout** - Tự động điều chỉnh theo màn hình

## 🚀 Cài đặt và Chạy

### Prerequisites
- Node.js 18+ 
- npm hoặc yarn

### Installation

```bash
# Clone repository
git clone https://github.com/givhvy/allvids.git
cd allvids

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Sau khi chạy `npm run dev`, mở trình duyệt tại: **http://localhost:5173**

## 📁 Cấu trúc Project

```
allvids/
├── src/
│   ├── components/
│   │   ├── DarkVeil.jsx           # WebGL animated background
│   │   ├── DarkVeil.css
│   │   ├── Header.jsx             # Top navigation
│   │   ├── Header.css
│   │   ├── Hero.jsx               # Hero section với title
│   │   ├── Hero.css
│   │   ├── SearchFilter.jsx       # Search + filter buttons
│   │   ├── SearchFilter.css
│   │   ├── PromptCard.jsx         # Card component
│   │   └── PromptCard.css
│   ├── data/
│   │   └── prompts.js             # Prompts data và categories
│   ├── App.jsx                    # Main app component
│   ├── App.css
│   ├── main.jsx                   # React entry point
│   └── index.css                  # Global styles
├── backup/                        # Vanilla JS version backup
├── public/
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

## 🎨 Tech Stack

### Core
- **React 18.3.1** - UI library
- **Vite 6.0** - Build tool & dev server
- **OGL 1.0.6** - Lightweight WebGL library cho DarkVeil

### Styling
- **CSS3** - Custom properties, Grid, Flexbox
- **Space Grotesk** - Google Fonts
- **Responsive Design** - Mobile-first approach

### Features
- **React Hooks** - useState, useMemo, useEffect, useRef
- **Component-based Architecture** - Modular và reusable
- **Performance** - Lazy loading, memoization, optimized renders

## 🌊 DarkVeil Background

DarkVeil sử dụng **CPPN (Compositional Pattern Producing Networks)** để tạo animated patterns trên WebGL canvas:

### Tuning Parameters

Edit trong `src/App.jsx`:

```jsx
<DarkVeil 
  hueShift={120}              // Màu sắc (0-360)
  noiseIntensity={0.03}       // Độ nhiễu (0-1)
  speed={0.3}                 // Tốc độ animation (0-2)
  warpAmount={0.2}            // Độ méo/warp (0-1)
  resolutionScale={0.8}       // Chất lượng render (0.5-1)
/>
```

### Performance Tips
- Giảm `resolutionScale` xuống 0.6-0.7 cho performance tốt hơn
- Tăng `speed` để animation nhanh hơn
- Adjust `opacity` trong `DarkVeil.css` (hiện tại: 0.4)

## 🛠️ Customization

### Thêm/Sửa Prompts

Edit file `src/data/prompts.js`:

```javascript
export const promptsData = [
    {
        id: 1,
        title: "Your Title",
        description: "Your description",
        category: "beginner",
        categoryLabel: "Beginner",
        promptsCount: 8,
        thumbnail: "image-url",
        link: "/prompts/1"
    },
    // Add more...
];
```

### Thay đổi Colors

Edit CSS variables trong `src/index.css`:

```css
:root {
    --primary-color: #CDFC39;    /* Lime yellow */
    --bg-dark: #0A0E13;          /* Background */
    --text-primary: #FFFFFF;      /* White text */
    --text-secondary: #8B96A5;    /* Gray text */
}
```

### Add New Categories

1. Update `src/data/prompts.js`:
```javascript
export const categories = [
    // ...existing
    { id: 'new-category', label: 'New Category' }
];
```

2. Add prompts với `category: 'new-category'`

## 📦 Build & Deploy

### Production Build

```bash
npm run build
```

Generates optimized static files trong `dist/` folder.

### Deploy Options

**Vercel** (Recommended):
```bash
npm install -g vercel
vercel
```

**Netlify**:
```bash
npm install -g netlify-cli
netlify deploy
```

**GitHub Pages**:
1. Build: `npm run build`
2. Deploy folder `dist/`

## 🎯 Features Breakdown

### Real-time Search
- Tìm kiếm trong title, description, và category
- No debounce - instant results
- Case-insensitive matching

### Category Filtering
- 7 categories: All, Beginner, Advanced, AI Agents, Full Stack, prompting, AI & Automation
- Active state với primary color
- Combines với search

### Responsive Design
- **Desktop** (> 1200px): 3-column grid
- **Tablet** (768-1200px): 2-column grid  
- **Mobile** (< 768px): 1-column grid
- Horizontal scroll cho filter buttons trên mobile

### Card Hover Effects
- Transform translateY(-6px)
- Border glow với primary color
- Image zoom 1.05x
- Play button changes to lime background
- "View All" arrow animation

## 📝 Development Notes

### Hot Module Replacement (HMR)
Vite cung cấp instant HMR - changes reflect ngay lập tức không cần reload.

### Component Structure
- Mỗi component có file CSS riêng
- Props drilling minimal
- State management với useState ở App level

### Performance Optimizations
- `useMemo` cho filtered prompts
- Lazy loading images với `loading="lazy"`
- CSS transforms thay vì top/left positioning
- WebGL canvas chỉ render 1 lần

## 🔗 Links

- **Live Demo**: Deploy và chia sẻ link của bạn
- **GitHub**: https://github.com/givhvy/allvids.git
- **Original Site**: https://build-loop.ai/prompts
- **OGL Library**: https://github.com/oframe/ogl
- **DarkVeil Credit**: Adapted from ReactBits.dev

## 📄 License

This is a clone project for learning purposes. 

## 👨‍💻 Author

Created with ❤️ by **Cursor AI**

---

### Vanilla JS Version

Version HTML/CSS/JS thuần được backup trong folder `backup/`. 

Để sử dụng version đó:
```bash
cd backup
# Open index.html in browser
```

---

**Enjoy building với React! 🚀✨**
