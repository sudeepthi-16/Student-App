import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { StudentService } from '../../services/student';

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './add-student.html',
  styleUrl: './add-student.css'
})
export class AddStudentComponent implements OnInit {

  form!: FormGroup;   // declare it first

  constructor(
    private fb: FormBuilder,
    private studentService: StudentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // initialize form here (AFTER fb exists)
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      class: ['', Validators.required],
      gender: ['', Validators.required],
      hasHobby: [false],
      hobby: [''],
      favoriteSubject: ['']
    });
  }

  save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const data = this.form.value;

    this.studentService.addStudent({
      name: data.name!,
      class: data.class!,
      gender: data.gender!,
      hasHobby: data.hasHobby!,
      hobby: data.hasHobby ? data.hobby! : '',
      favoriteSubject: data.favoriteSubject!
    });

    this.router.navigate(['/home']);
  }
}
