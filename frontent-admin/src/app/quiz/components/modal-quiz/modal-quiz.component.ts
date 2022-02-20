import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faClone, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';
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
  faTrash = faTrash;
  faClone = faClone;
  file;
  showQuizQuestionForm;
  public environment = environment;


  constructor(private modalService: NgbModal, private quizService: QuizService, private listQuizComponent: ListQuizComponent) {

  }

  async open(content) {
    this.modalService.open(content, { ariaLabelledBy: "modal-basic-title", size: "lg"}).result.then((result) => {
    }, (reason) => {
      this.listQuizComponent.refresh()
    });
    if(this.mode === "modal"){
      this.quiz = {}
    };
    this.showQuizQuestionForm = !this.quiz.id;

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
    form.value.reponses = this.quiz.reponses
    // Post de la quiz
    this.quizService[methode](form).then(async (res) => {
      // Ferme le modal
      this.modalService.dismissAll();
      // Refresh la liste des utilisateurs
      this.listQuizComponent.refresh();
    });
  }

  onFileSelected(event) {
    this.file = event.target.files[0];
  }

  addQuizQuestion(formQuestion: NgForm){
        console.log(formQuestion.value)
        const quizQuestion = formQuestion.value;

        // Si on est en création, la quiz courante n'a pas encore de ligne de quiz du coup cette condition sera vraie
        if (! Array.isArray(this.quiz.quizQuestions)) {
            // On crée alors la ligne de quiz avec un item;
            this.quiz.quizQuestions = [ quizQuestion ];
        }

        // Si on est en modification, on unshift le nouvel item (on rajoute le nouvel élément au début de l'array)
        else {
            if (! this.quiz.quizQuestions.includes(quizQuestion)) {
              console.log(quizQuestion)
                this.quiz.quizQuestions.push(quizQuestion);
            }
        }

  }

  toggleShowQuizQuestionForm(show) {
    this.showQuizQuestionForm = show;
  }

  selectQuizQuestion(quizQuestions) {

    this.toggleShowQuizQuestionForm(true);
    Object.assign(this.quiz,quizQuestions)
  }

  async deleteQuizQuestion(index) {
    const quizQuestions = this.quiz.quizQuestions;
    /*await this.confirmationDialogService.confirm('Suppression', 'Voulez-vous vraiment effacer cet quiz ?')
      .then(confirm => this.confirmation = confirm)
      .catch(() => {});*/
    // Suppression d'une quiz

    // suppression de l'élément du tableau
    quizQuestions.splice(index, 1);
    //this.refresh();
  }

}
