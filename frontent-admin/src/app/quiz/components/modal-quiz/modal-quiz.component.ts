import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-quiz',
  templateUrl: './modal-quiz.component.html',
  styleUrls: ['./modal-quiz.component.css']
})
export class ModalQuizComponent implements OnInit {
  @Input() mode!: string;
  @Input() quiz: any = {};

  constructor() { }

  ngOnInit(): void {
  }

}
