import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { coachees } from 'src/app/coachees';

export interface ModalData {
  dataSessao: string;
  numeroSessao: number;
  coachee: string;
  especialidade: string;
  titulo: string;
  descricao: string;
  linkMeet: string;
  username: string;
  cobrarTaxa: boolean;
}

@Component({
  selector: 'app-coachee-details',
  templateUrl: './coachee-details.component.html',
  styleUrls: ['./coachee-details.component.css']
})
export class CoacheeDetailsComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CoacheeDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData) {}

  ngOnInit(): void {
  }

}
