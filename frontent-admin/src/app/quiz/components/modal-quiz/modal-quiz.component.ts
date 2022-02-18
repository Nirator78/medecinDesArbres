import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { QuizService } from '../../services/quiz.service';
import { ListQuizComponent } from '../list-quiz/list-quiz.component';

@Component({
  selector: 'app-modal-quiz',
  templateUrl: './modal-quiz.component.html',
  styleUrls: ['./modal-quiz.component.css']
})
export class ModalQuizComponent{

  @Input() mode!: string;
  @Input() quiz: any = {};

  faPlus = faPlus;
  file;

  ngOnInit(): void {
      
  }
  constructor(private modalService: NgbModal, private quizService: QuizService, private listQuizComponent: ListQuizComponent) {
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: "modal-basic-title", size: "lg"});
  }

  onSubmit(form: NgForm){
    let methode = "";
    if(this.quiz.id){
      methode="updateQuiz"
      form.value.id = JSON.parse(this.quiz.id);
    }
    else {
      methode="createQuiz"
    }

    // Post l"utilisateur
    this.quizService[methode](form).then(async (res) => {
      // Upload du fichier après création de l'quiz
      if(this.file){
        const formData = new FormData();

        formData.append("image", this.file);

        await this.quizService.uploadImageQuiz(res.id, formData);
      }

      // Ferme le modal
      this.modalService.dismissAll();
      // Refresh la liste des utilisateurs
      this.listQuizComponent.refresh();
    });
  }

  onFileSelected(event) {
    this.file = event.target.files[0];
  }


}
