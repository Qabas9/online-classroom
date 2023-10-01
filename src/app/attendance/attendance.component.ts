import { Component } from '@angular/core';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent  {
  students: any[] = [ // Initialize with an array of student objects
    { name: 'Qabas', attendanceStatus: 'Present' },
    { name: ' Noor', attendanceStatus: 'Absent' },
    {name: ' Noof', attendanceStatus: 'Absent'},
    { name: 'Sara', attendanceStatus: 'Present' },
    // Add more student objects as needed
  ];
  onAttendanceChange(student: any) {
    console.log('Attendance status changed for:', student.name);
  }
  
}
