import express from 'express';
import Student from './Entity/Student.js';
import ClassData from './Entity/Class.js';
import {uid} from 'uid';

const app = express();
const port = 3000;


let studentArray = [];
let classArray = [];
classArray.push(new ClassData(uid(), 'toan'));
classArray.push(new ClassData(uid(), 'tin'));
classArray.push(new ClassData(uid(), 'van'));
studentArray.push(new Student(uid(), 'Huy', classArray[0]));
studentArray.push(new Student(uid(), 'Lam', classArray[1]));
studentArray.push(new Student(uid(), 'Nam', classArray[2]));
studentArray.push(new Student(uid(), 'Anh', classArray[0]));
studentArray.push(new Student(uid(), 'Hung', classArray[1]));
studentArray.push(new Student(uid(), 'Trang', classArray[2]));

app.use(express.json());
// toan bo hoc sinh
app.get('/student', (req, res) => {
    res.status(200).json(studentArray)
});
// toan bo lop hoc
app.get('/class', (req, res) => {
    res.json(classArray);
})
//hoc sinh theo id
app.get('/student/:id', (req, res) => {
    const id = req.params.id;
    const student = studentArray.find(student => student.id === id);
    if (!student) {
        res.status(400).json({"message":`Không tìm thấy học sinh ${id}`});
        return;
    }
    res.json(student);
})
// hoc sinh theo ten
app.get('/student/name/:name', (req, res) => {
    const name = req.params.name;
    const student = studentArray.filter(student => student.name.indexOf(name) > -1);
    if (student.length === 0) {
        res.status(400).json({'message':`Không tìm thấy học sinh ${name}`});
        return;
    }
    res.json(student);
});
// hoc sinh theo lop
app.get('/student/class/:studentClass', (req, res) => {
    const studentClass = req.params.studentClass;
    const ClassData = classArray.find(ClassData => ClassData.name === studentClass);
    if (!ClassData) {
        res.status(400).json({'message':`Không tìm thấy lớp ${studentClass}`});
        return;
    }
    const student = studentArray.filter(student => student.studentClass.name === studentClass);
    if (student.length === 0) {
        res.status(400).json({'message':`Không có học sinh trong lớp ${studentClass}`});
        return;
    }
    res.json(student);
});
// them hoc sinh
app.post('/student', (req, res) => {
    const id = uid();
    const {name, nameClass} = req.body;
    if (!name || !nameClass) {
        res.status(400).json({'message':'Thiếu thông tin'});
        return;
    }
    const studentClass = classArray.find(ClassData => ClassData.name === nameClass);
    if (!studentClass) {
        res.status(400).json(`lớp ${nameClass} không tồn tại`);
        return;
    }
    const subStudent = studentArray.find(student => student.name === name);
    if (subStudent) {
        res.status(400).json({'message':`Học sinh ${name} đã tồn tại`});
        return;
    }
    const newStudent = new Student(id, name, studentClass);
    studentArray.push(newStudent);
    res.json(newStudent);
})
// cap nhat hoc sinh theo id
app.put('/student/:id', (req, res) => {
    const studentId = req.params.id;
    const {name, nameClass} = req.body
    const student = studentArray.find(student => student.id === studentId);
    if (!student) {
        res.status(400).json({'message':`Không tìm thấy học sinh ${studentId}`});
        return;
    }
    const subStudent = studentArray.find(student => student.name === name);
    if (subStudent) {
        res.status(400).json({'message':`Học sinh ${name} đã tồn tại`});
        return;
    }
    const studentClass = classArray.find(ClassData => ClassData.name === nameClass);
    if (!studentClass) {
        res.status(400).json({'message':`Lớp ${nameClass} không tồn tại`});
        return;
    }
    student.name = name;
    student.studentClass = studentClass
    res.json(student);
})
// xoa hoc sinh theo id
app.delete('/student/:id', (req, res) => {
    const studentId = req.params.id;
    const student = studentArray.find(student => student.id === studentId);
    if (!student) {
        res.status(400).json({'message':`Không tìm thấy học sinh ${studentId}`});
        return;
    }
    studentArray = studentArray.filter(student => student.id !== studentId);
    res.json(student);
})
// them lop hoc
app.post('/class', (req, res) => {
    const {name} = req.body;
    if (!name) {
        res.status(400).json({'message':'Thiếu thông tin'});
        return;
    }
    const ClassData = classArray.find(ClassData => ClassData.name === name);
    if (ClassData) {
        res.status(400).json({'message':`Lớp ${name} đã tồn tại`});
        return;
    }
    let id = uid();
    const newClass = new ClassData(id, name);
    classArray.push(newClass);
    res.json(newClass);
})
// cap nhat lop hoc theo id
app.put('/class/:id', (req, res) => {
    const classId = req.params.id;
    const {name} = req.body;
    if (!name) {
        res.status(400).json({'message':'Thiếu thông tin'});
        return;
    }
    const ClassData = classArray.find(ClassData => ClassData.id === classId);
    if (!ClassData) {
        res.status(400).json({'message':`Không tìm thấy lớp ${classId}`});
        return;
    }
    const ClassData2 = classArray.find(ClassData => ClassData.name === name);
    if (ClassData2) {
        res.status(400).json({'message':`Lớp ${name} đã tồn tại`});
        return;
    }
    ClassData.name = name;
    res.json(ClassData);
})
// xoa lop hoc theo id
app.delete('/class/:id', (req, res) => {
    const classId = req.params.id;
    const ClassData = classArray.find(ClassData => ClassData.id === classId);
    if (!ClassData) {
        res.status(400).json({'message':`Không tìm thấy lớp ${classId}`});
        return;
    }
    const student = studentArray.find(student => student.studentClass === ClassData);
    if (student) {
        res.status(400).json({'message':`Không thể xóa lớp ${classId} vì có học sinh trong lớp`});
        return;
    }
    classArray = classArray.filter(ClassData => ClassData.id !== classId);
    res.json(ClassData);
})
// thong tin lop hoc theo id
app.get('/class/:id', (req, res) => {
    const id = req.params.id;
    const ClassData = classArray.find(ClassData => ClassData.id === id);
    if (!ClassData) {
        res.status(400).json({'message':`Không tìm thấy lớp ${id}`});
        return;
    }
    res.json(ClassData);
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
