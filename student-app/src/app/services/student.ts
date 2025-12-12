import { Injectable } from '@angular/core';
import { Student } from '../../models/student';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students: Student[] = [
    {
      name: 'John Doe',
      class: '6',
      gender: 'Male',
      hasHobby: false,
      hobby: '',
      favoriteSubject: 'Math'
    },
    {
      name: 'Sara Smith',
      class: '8',
      gender: 'Female',
      hasHobby: true,
      hobby: 'Drawing',
      favoriteSubject: 'Science'
    }
  ];

  getStudents() {
    return this.students;
  }

  addStudent(student: Student) {
    this.students.push(student);
  }
}
