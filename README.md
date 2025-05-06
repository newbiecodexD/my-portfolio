# Portfolio Website

Đây là trang portfolio cá nhân được xây dựng bằng Next.js, React và Tailwind CSS.

## Tính năng

- Responsive design
- Dark mode support
- Modern UI/UX
- Sections: Hero, About, Skills, Projects, Contact
- Social media links
- Contact form

## Yêu cầu hệ thống

- Node.js 18.0.0 trở lên
- npm hoặc yarn

## Cài đặt

1. Clone repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Cài đặt dependencies:
```bash
npm install
# hoặc
yarn install
```

3. Chạy development server:
```bash
npm run dev
# hoặc
yarn dev
```

4. Mở [http://localhost:3000](http://localhost:3000) trong trình duyệt để xem kết quả.

## Cấu trúc dự án

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   └── components/
├── public/
│   ├── avatar.jpg
│   └── project*.jpg
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── tsconfig.json
```

## Tùy chỉnh

1. Thay đổi thông tin cá nhân trong `src/app/page.tsx`
2. Thêm ảnh của bạn vào thư mục `public/`
3. Tùy chỉnh màu sắc trong `tailwind.config.js`
4. Thêm/sửa các section theo nhu cầu

## Build cho production

```bash
npm run build
# hoặc
yarn build
```

## License

MIT 