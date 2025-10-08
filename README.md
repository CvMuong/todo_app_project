# ✅ Todo App - Ứng dụng Quản lý Công việc

![React](https://img.shields.io/badge/React-18.x-61DAFB?style=flat-square&logo=react)
![CSS3](https://img.shields.io/badge/CSS3-Modern-1572B6?style=flat-square&logo=css3)
![LocalStorage](https://img.shields.io/badge/Storage-LocalStorage-orange?style=flat-square)

Ứng dụng quản lý công việc (Todo App) hiện đại được xây dựng với React, cho phép người dùng tổ chức và theo dõi công việc hàng ngày một cách hiệu quả.

## 🎯 Tính năng chính

### ✨ Quản lý Task
- **Thêm công việc mới** với giao diện trực quan
- **Chỉnh sửa nội dung** task trực tiếp trong danh sách
- **Xóa task** không cần thiết
- **Đánh dấu hoàn thành** với animation mượt mà

### 🔍 Lọc và Tìm kiếm
- **3 chế độ lọc**: Tất cả / Đang làm / Hoàn thành
- **Thống kê real-time**: Hiển thị số lượng task theo từng trạng thái
- **Xóa hàng loạt**: Xóa tất cả task đã hoàn thành chỉ với 1 click

### 💾 Lưu trữ Dữ liệu
- **LocalStorage**: Dữ liệu được lưu trữ cục bộ, không mất khi tải lại trang
- **Tự động đồng bộ**: Mọi thay đổi được lưu ngay lập tức

### 🎨 Giao diện
- **Modern UI/UX**: Thiết kế gradient đẹp mắt, animation mượt mà
- **Responsive Design**: Tối ưu cho mọi kích thước màn hình
- **Dark mode friendly**: Màu sắc dễ nhìn, thân thiện với mắt

## 🛠️ Công nghệ sử dụng

### Frontend Framework
- **React 18.x**: Sử dụng Hooks (useState, useEffect)
- **JavaScript ES6+**: Arrow functions, destructuring, spread operator

### State Management
- **React Hooks**: Quản lý state với useState
- **LocalStorage API**: Lưu trữ persistent data

### Styling
- **CSS3**: Flexbox, Grid, Animation, Gradient
- **Responsive Design**: Mobile-first approach
- **CSS Variables**: Dễ dàng tùy chỉnh theme

## 📂 Cấu trúc dự án

```
todo-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── TodoForm.js        # Form thêm task mới
│   │   ├── TodoForm.css
│   │   ├── TodoList.js        # Danh sách tasks
│   │   ├── TodoList.css
│   │   ├── TodoItem.js        # Component từng task
│   │   ├── TodoItem.css
│   │   ├── FilterButtons.js   # Nút lọc và xóa
│   │   └── FilterButtons.css
│   ├── App.js                 # Component chính
│   ├── App.css
│   ├── index.js
│   └── index.css
├── .gitignore
└── package.json
```

## 🚀 Cài đặt và Chạy dự án

### Yêu cầu
- Node.js >= 14.x
- npm hoặc yarn

### Các bước cài đặt

```bash
# Clone repository
git clone https://github.com/yourusername/todo-app.git

# Di chuyển vào thư mục dự án
cd todo-app

# Cài đặt dependencies
npm install

# Chạy ứng dụng ở chế độ development
npm start

# Build cho production
npm run build
```

Ứng dụng sẽ chạy tại `http://localhost:3000`

## 💡 Kiến thức và Kỹ năng áp dụng

### React Fundamentals
- **Component Architecture**: Tách nhỏ thành các component tái sử dụng
- **Props & State**: Truyền dữ liệu và quản lý trạng thái hiệu quả
- **Event Handling**: Xử lý các sự kiện người dùng
- **Conditional Rendering**: Hiển thị có điều kiện

### React Hooks
- **useState**: Quản lý state của component
- **useEffect**: Đồng bộ với LocalStorage, side effects

### JavaScript
- **Array Methods**: map, filter, reduce
- **Object Manipulation**: spread operator, destructuring
- **Local Storage API**: CRUD operations

### CSS Advanced
- **Flexbox & Grid**: Layout hiện đại
- **Animations**: Smooth transitions, keyframes
- **Pseudo-classes**: Hover effects, active states
- **Media Queries**: Responsive breakpoints

## 🎓 Học được gì từ dự án

1. **Component-based Architecture**: Cách xây dựng ứng dụng modular
2. **State Management**: Quản lý và đồng bộ state giữa các component
3. **Data Persistence**: Lưu trữ dữ liệu với LocalStorage
4. **UI/UX Design**: Thiết kế giao diện thân thiện, trực quan
5. **Code Organization**: Cấu trúc code sạch, dễ bảo trì

## 🔮 Tính năng có thể mở rộng

- [ ] Thêm categories/tags cho tasks
- [ ] Sắp xếp theo độ ưu tiên
- [ ] Tìm kiếm tasks
- [ ] Dark mode toggle
- [ ] Due date & reminders
- [ ] Drag & drop để sắp xếp
- [ ] Export/Import dữ liệu
- [ ] Backend integration với API

## 📝 License

MIT License - Tự do sử dụng cho mục đích học tập và thương mại.

## 👤 Tác giả

**[Tên của bạn]**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourname)
- Email: your.email@example.com

---

⭐ Nếu bạn thấy dự án hữu ích, hãy cho một star nhé!