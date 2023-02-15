import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { StudentDataService } from '../../services/student-data.service';

@Component({
  selector: 'app-studentform',
  templateUrl: './studentform.component.html',
  styleUrls: ['./studentform.component.scss']
})
export class StudentformComponent implements OnInit {
  @ViewChild('studentForm') studentForm !: NgForm;
  singStdData !: any;
  objectId !: string;
  isUpdate: boolean = false;
  gender !: string;
  genderArray: string[] = ['Female', 'Male', 'Other']

  constructor(private _route: ActivatedRoute,
    private _stdService: StudentDataService,
    private _router: Router) { }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      console.log(params);
      if (params['id']) {
        this.isUpdate = true;
      }
      this.objectId = params['id'];
      console.log(this.objectId);
      this.singStdData = this._stdService.getSingleStdData(this.objectId);
    })
    setTimeout(() => {
      this.studentForm.form.patchValue(this.singStdData)
    }, 0)
  }

  onStudentForm() {
    console.log(this.studentForm.value);
    this._stdService.studentData.push({
      id: this._stdService.uuid(),
      username: this.studentForm.value.username,
      password: this.studentForm.value.password,
      gender: this.studentForm.value.gender,
      contact: this.studentForm.value.contact
    });
    this._router.navigate(['dashboard'])
  }

  onstdDataUpdate() {
    this._stdService.onUpdateStdData(this.objectId, this.studentForm.value)
    this._router.navigate(['dashboard'])
  }

}
