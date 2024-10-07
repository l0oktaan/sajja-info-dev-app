const express = require('express');
const app = express();
const path = require('path');

// กำหนดพาธสำหรับไฟล์ static (เช่น ไฟล์ HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// สร้างเส้นทางสำหรับ front-end
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// เส้นทางสำหรับ API หรือ back-end
app.get('/api/data', (req, res) => {
    const data = { message: "Hello from the backend!" };
    res.json(data);
});

// เริ่ม server
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on`);
});
