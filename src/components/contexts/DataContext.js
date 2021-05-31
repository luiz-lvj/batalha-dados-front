import { createContext } from "react";

export const dataUsable = {
    "students": getStudents(),
    "subjects": getSubjects(),
    "teachers": getTeachers()
}

const DataContext = createContext();

export default DataContext;

function getStudents(){
    const json = require('../../data/students.json');
    return json.students;
}

function getSubjects(){
    const json = require('../../data/subjects.json');
    return json.subjects;
}

function getTeachers(){
    const json = require('../../data/teachers.json');
    return json.teachers;
}
