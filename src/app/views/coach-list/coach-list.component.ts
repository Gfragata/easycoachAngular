import { Component, OnInit } from '@angular/core';
import { coachees } from 'src/app/coachees';
import { MatDialog } from '@angular/material/dialog';
import { CoacheeDetailsComponent } from '../coachee-details/coachee-details.component';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-coach-list',
  templateUrl: './coach-list.component.html',
  styleUrls: ['./coach-list.component.css']
})
export class CoachListComponent implements OnInit {
  
  displayedColumns: string[] = ['sessionNumber', 'scheduledDateTime', 'description', 'edit', 'delete'];
  dataSource = coachees;
  data: any = []

  constructor(public dialog: MatDialog,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.GetCoachees()
  }

  GetCoachees() {
    this.http.get(`${environment.apiUrl}/sessions`).subscribe(data => {
      this.data = data
    })
  }

  DeleteCoachees(coachee: any) {
    this.http.delete(`${environment.apiUrl}/sessions/${coachee.id}`).toPromise()
    this.GetCoachees();
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
