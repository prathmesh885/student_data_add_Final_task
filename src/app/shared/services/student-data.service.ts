import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentDataService {

  studentData: any[] = [
    {
      id: "1",
      username: 'Hydrogen',
      password: " qwerty",
      gender: 'Male',
      contact: 1234567990,
    },
    {
      id: "2",
      username: 'Oxygen',
      password: " pouytre",
      gender: 'Female',
      contact: 9874563210,
    },
  ];

  constructor() { }
  uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  getSingleStdData(id: string) {
    return this.studentData.find(obj => obj.id === id)
  }

  onUpdateStdData(id: any, obj: any) {
    return this.studentData.forEach((std) => {
      if (std.id == id) {
        std.username = obj.username,
          std.password = obj.password,
          std.gender = obj.gender,
          std.contact = obj.contact
      }
    })
  }

  onDeleteStdData(id: any) {
    let stdIndex = this.studentData.findIndex((std) => std.id == id)
    return this.studentData.splice(stdIndex, 1)
  }

}
