# Tài liệu API

**URL cơ bản**: [http://localhost:3000](http://localhost:3000)
## Cách chạy ứng dụng với Docker Compose
Để chạy, hãy sử dụng lệnh `docker-compose up --build`.
## Các Endpoint:
### 1. Lấy tất cả học sinh
- **URL**: [http://localhost:3000/student](http://localhost:3000/student)
- **Phương thức**: `GET`
- **Phản hồi**: Mảng chứa tất cả học sinh
### 2. Lấy học sinh theo ID
- **URL**: [http://localhost:3000/student/:id](http://localhost:3000/student/:id)
- **Phương thức**: `GET`
- **Tham số URL**: `id=[string]`
- **Phản hồi**: Đối tượng học sinh hoặc thông báo lỗi nếu không tìm thấy
### 3. Lấy học sinh theo tên
- **URL**: [http://localhost:3000/student/name/:name](http://localhost:3000/student/name/:name)
- **Phương thức**: `GET`
- **Tham số URL**: `name=[string]`
- **Phản hồi**: Mảng học sinh có tên phù hợp hoặc thông báo lỗi nếu không tìm thấy

### 4. Lấy học sinh theo lớp
- **URL**: [http://localhost:3000/student/class/:studentClass](http://localhost:3000/student/class/:studentClass)
- **Phương thức**: `GET`
- **Tham số URL**: `studentClass=[string]`
- **Phản hồi**: Mảng học sinh trong lớp hoặc thông báo lỗi nếu không tìm thấy

### 5. Thêm học sinh mới
- **URL**: [http://localhost:3000/student](http://localhost:3000/student)
- **Phương thức**: `POST`
- **Nội dung body**: `{ name: [string], nameClass: [string] }`
- **Phản hồi**: Đối tượng học sinh mới hoặc thông báo nếu lỗi

### 6. Cập nhật học sinh theo ID
- **URL**: [http://localhost:3000/student/:id](http://localhost:3000/student/:id)
- **Phương thức**: `PUT`
- **Tham số URL**: `id=[string]`
- **Nội dung body**: `{ name: [string], nameClass: [string] }`
- **Phản hồi**: Đối tượng học sinh đã cập nhật hoặc thông báo nếu lỗi

### 7. Xóa học sinh theo ID
- **URL**: [http://localhost:3000/student/:id](http://localhost:3000/student/:id)
- **Phương thức**: `DELETE`
- **Tham số URL**: `id=[string]`
- **Phản hồi**: Đối tượng học sinh đã xóa hoặc thông báo lỗi nếu không tìm thấy

### 8. Lấy tất cả các lớp
- **URL**: [http://localhost:3000/class](http://localhost:3000/class)
- **Phương thức**: `GET`
- **Phản hồi**: Mảng chứa tất cả các lớp

### 9. Lấy lớp học theo ID
- **URL**: [http://localhost:3000/class/:id](http://localhost:3000/class/:id)
- **Phương thức**: `GET`
- **Tham số URL**: `id=[string]`
- **Phản hồi**: Đối tượng lớp học hoặc thông báo lỗi nếu không tìm thấy

### 10. Thêm lớp học mới
- **URL**: [http://localhost:3000/class](http://localhost:3000/class)
- **Phương thức**: `POST`
- **Nội dung body**: `{ name: [string] }`
- **Phản hồi**: Đối tượng lớp học mới hoặc thông báo nếu lỗi

### 11. Cập nhật lớp học theo ID
- **URL**: [http://localhost:3000/class/:id](http://localhost:3000/class/:id)
- **Phương thức**: `PUT`
- **Tham số URL**: `id=[string]`
- **Nội dung body**: `{ name: [string] }`
- **Phản hồi**: Đối tượng lớp học đã cập nhật hoặc thông báo nếu lỗi

### 12. Xóa lớp học theo ID
- **URL**: [http://localhost:3000/class/:id](http://localhost:3000/class/:id)
- **Phương thức**: `DELETE`
- **Tham số URL**: `id=[string]`
- **Phản hồi**: Đối tượng lớp học đã xóa hoặc thông báo lỗi nếu không tìm thấy hoặc nếu có học sinh trong lớp
