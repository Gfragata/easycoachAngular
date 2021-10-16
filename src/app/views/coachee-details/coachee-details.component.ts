import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';

export interface ModalData {
  id: number;
  title: string;
  description: string;
  hasCancellationFee: boolean;
  inviteUrl: string;
  scheduledDateTime: string;
  sessionNumber: number;
}

@Component({
  selector: 'app-coachee-details',
  templateUrl: './coachee-details.component.html',
  styleUrls: ['./coachee-details.component.css']
})
export class CoacheeDetailsComponent implements OnInit {

  formCoachee!: FormGroup

  constructor(
    public dialogRef: MatDialogRef<CoacheeDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.formCoachee = new FormGroup({
      id: new FormControl(""),
      title: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required]),
      hasCancellationFee: new FormControl("", [Validators.required]),
      inviteUrl: new FormControl("", [Validators.required]),
      scheduledDateTime: new FormControl(this.data, [Validators.required]),
      sessionNumber: new FormControl("", [Validators.required]),
    })
    if (this.data.id)
      this.loadForm();
  }

  loadForm() {
    debugger
    this.formCoachee.patchValue({
      id: this.data.id,
      title: this.data.title,
      description: this.data.description,
      hasCancellationFee: this.data.hasCancellationFee,
      inviteUrl: this.data.inviteUrl,
      scheduledDateTime: this.data.scheduledDateTime,
      sessionNumber: this.data.sessionNumber,
    })
    console.log(this.formCoachee.value)
  }

  async saveCoachee() {
    if(!this.data.id){
      await this.http.post<any>(`${environment.apiUrl}/sessions/`, this.formCoachee.value).toPromise()
    } else {
      await this.http.put<any>(`${environment.apiUrl}/sessions/${this.data.id}`, this.formCoachee.value).toPromise()      
    }
    this.close();
  }

  async close() {
    this.dialogRef.close();
  }

}
