import { Component, OnInit } from '@angular/core';
import { coachees } from 'src/app/coachees';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoacheeDetailsComponent } from '../coachee-details/coachee-details.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptions } from '@angular/http';

@Component({
  selector: 'app-coach-list',
  templateUrl: './coach-list.component.html',
  styleUrls: ['./coach-list.component.css']
})
export class CoachListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'hour', 'description', 'edit', 'delete'];
  dataSource = coachees;

  constructor(public dialog: MatDialog,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.GetCoachees()
  }
  api = "http://localhost:8099/";

  GetCoachees() {
    let token = window.localStorage.getItem('token')
    let header = new HttpHeaders({'Authorization': `Bearer ${token}`})
    const result = this.http.get(`http://localhost:8099/sessions`, {headers: header, withCredentials: true}).subscribe(data =>
      console.log(data)
    )
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CoacheeDetailsComponent, {
      width: '500px',
      height: '650px',
      data: { name: this.dataSource[1].name }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
