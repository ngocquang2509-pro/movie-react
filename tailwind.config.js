/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Bao gồm các tệp HTML
    "./src/**/*.{js,jsx,ts,tsx}", // Quét các tệp JS, JSX, TS, và TSX trong thư mục src
  ],
  darkMode: false, // Hoặc 'media' hoặc 'class' để bật chế độ tối
  theme: {
    extend: {}, // Bạn có thể mở rộng theme của Tailwind tại đây
  },
  variants: {
    extend: {}, // Mở rộng các biến thể của lớp CSS tại đây (ví dụ: hover, focus, active)
  },
  plugins: [], // Thêm các plugin nếu cần (ví dụ: @tailwindcss/forms, @tailwindcss/typography, v.v.)
};
