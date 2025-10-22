# BuildLoop Prompts Library - Clone

Clone hoàn chỉnh của trang web https://build-loop.ai/prompts với thiết kế hiện đại và responsive.

## ✨ Tính năng

- 🎨 Giao diện tối (dark mode) hiện đại và đẹp mắt
- 🌊 **Animated CSS Background** - Gradient orbs với smooth floating animations
- ✍️ **Space Grotesk Font** - Typography chuyên nghiệp
- 🔍 Tìm kiếm prompts theo từ khóa
- 🏷️ Lọc theo danh mục (Beginner, Advanced, AI Agents, Full Stack, prompting, AI & Automation)
- 📱 Responsive design - hoạt động tốt trên mọi thiết bị
- ⚡ Hiệu ứng hover và animation mượt mà
- 🎯 Grid layout tự động điều chỉnh
- 🎭 Backdrop filter blur cho header

## 🚀 Cách sử dụng

1. Mở file `index.html` trong trình duyệt web
2. Hoặc sử dụng Live Server trong VS Code

### Sử dụng Live Server (khuyên dùng)

```bash
# Nếu chưa cài đặt, cài đặt Live Server globally
npm install -g live-server

# Chạy Live Server
live-server
```

### Hoặc sử dụng Python SimpleHTTPServer

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Sau đó mở trình duyệt và truy cập: `http://localhost:8000`

## 📁 Cấu trúc file

```
├── index.html      # Cấu trúc HTML chính
├── styles.css      # Styling, responsive design và animated background
├── script.js       # JavaScript cho search, filter và render cards
└── README.md       # Tài liệu hướng dẫn
```

## 🎨 Thiết kế

- **Font**: Space Grotesk (Google Fonts)
- **Màu chủ đạo**: Lime Yellow (#CDFC39)
- **Background**: CSS animated gradient orbs với floating effect
- **Layout**: CSS Grid với responsive breakpoints
- **Icons**: SVG inline
- **Hình ảnh**: Placeholder từ Unsplash
- **Effects**: 
  - Backdrop filter blur cho header
  - Card hover với transform và glow
  - 4 animated gradient orbs chuyển động mượt mà
  - Play button với color transition

## 🛠️ Tùy chỉnh

### Thay đổi màu sắc

Chỉnh sửa CSS variables trong file `styles.css`:

```css
:root {
    --primary-color: #CDFC39;
    --bg-dark: #0A0E13;
    --bg-card: #1C2128;
    /* ... */
}
```

### Tùy chỉnh DarkVeil Background

Chỉnh sửa settings trong file `darkveil.js`:

```javascript
const settings = {
    hueShift: 120,              // Độ xoay màu (0-360)
    noiseIntensity: 0.03,       // Độ nhiễu (0-1)
    scanlineIntensity: 0,       // Độ mạnh scanline (0-1)
    speed: 0.3,                 // Tốc độ animation (0-2)
    scanlineFrequency: 0,       // Tần số scanline
    warpAmount: 0.2,            // Độ méo (0-1)
    resolutionScale: 0.8        // Chất lượng render (0.5-1)
};
```

Hoặc tắt background bằng cách thay đổi opacity trong `styles.css`:

```css
.darkveil-canvas {
    opacity: 0;  /* Tắt background */
}
```

### Thêm/Sửa prompts

Chỉnh sửa mảng `promptsData` trong file `script.js`:

```javascript
const promptsData = [
    {
        id: 1,
        title: "Tiêu đề của bạn",
        description: "Mô tả chi tiết",
        category: "beginner",
        categoryLabel: "Beginner",
        promptsCount: 8,
        thumbnail: "URL hình ảnh",
        link: "/prompts/1"
    },
    // Thêm các prompts khác...
];
```

## 📱 Responsive Breakpoints

- **Desktop**: > 1200px
- **Tablet**: 768px - 1200px
- **Mobile**: < 768px
- **Small Mobile**: < 480px

## 🌟 Các tính năng nổi bật

1. **Search động**: Tìm kiếm real-time khi gõ
2. **Filter Categories**: Lọc theo 7 danh mục khác nhau
3. **Smooth Animations**: Hiệu ứng hover, transform mượt mà
4. **Gradient Effects**: Gradient cho tiêu đề và backgrounds
5. **Card Design**: Cards với thumbnail, badge, và CTA button

## 📚 Dependencies

- **OGL (WebGL Library)**: v1.x - Lightweight WebGL framework cho DarkVeil effect
- **Google Fonts**: Space Grotesk - Typography
- **Unsplash**: Free stock photos cho thumbnails

Tất cả dependencies được load từ CDN, không cần cài đặt gì thêm.

## 🎯 WebGL Background

DarkVeil background sử dụng CPPN (Compositional Pattern Producing Networks) - một loại neural network để tạo patterns phức tạp và đẹp mắt. Effect này:

- ✨ Chạy hoàn toàn trên GPU (WebGL)
- 🚀 Performance cao, không ảnh hưởng đến UX
- 🎨 Tự động điều chỉnh theo kích thước màn hình
- 🌈 Hỗ trợ hue shifting, noise, và warp effects

## 📝 Ghi chú

- Website clone này chỉ dành cho mục đích học tập và tham khảo
- Tất cả nội dung và prompts đều là ví dụ
- Hình ảnh sử dụng từ Unsplash (free stock photos)
- DarkVeil effect adapted từ ReactBits.dev

## 🔗 Links

- Trang web gốc: https://build-loop.ai/prompts
- Clone by: Cursor AI

---

Tạo với ❤️ bởi Cursor AI

