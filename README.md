# pttkyc
1. Môi trường cài đặt để chạy source code
- Cài đặt node, link để download node https://nodejs.org/en/download/
- Cài đặt expo bằng cách mở cmd và gõ lệnh npm install --global expo-cli
- Sau khi cài xong, mở nén zip, vào trong thư mục source code / app và mở lên trong Visual Studio Code, tại terminal gõ lệnh npm start, quét mã qr hiện lên để chạy 
source code trên thiết bị thật

2. Database và api 
- Mở xampp
- Tại thư mục htdoc trong xampp, bỏ file login.php vào , phân cấp thư mục như sau:
![image](https://user-images.githubusercontent.com/97238264/173172853-757264c3-1092-45ab-b86d-c81a5f31ad8b.png)

- Mở mysql trong xampp, tạo một database với tên chính xác là pttkyc
- Vào database mới vừa tạo, import file sql đã cung cấp trong source code / source vào

3. File biên dịch apk
- Để chạy file biên dịch apk, chỉ cần cấu hình database và api như ở mục 2, sau đó đưa file apk lên thiết bị máy ảo android chờ máy ảo cài đặt xong, sau đó mở app và dùng.
