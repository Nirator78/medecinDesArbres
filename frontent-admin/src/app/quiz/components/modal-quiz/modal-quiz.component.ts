import { Component, Input } from '@angular/core';
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
  filesQuestions: any[] = [];
  currentFileQuestion;
  showQuizQuestionForm;
  showQuizReponse: boolean[] = [];
  public environment = environment;
  reponses: any[] = [];

  constructor(private modalService: NgbModal, private quizService: QuizService, private listQuizComponent: ListQuizComponent) {
  }

  async open(content) {
    this.modalService.open(content, { ariaLabelledBy: "modal-basic-title", size: "lg"}).result.then((result) => {
    }, (reason) => {
      this.listQuizComponent.refresh()
    });

    if(this.mode === "modal"){
      this.quiz = {};
      this.reponses = [];
    }

    this.showQuizQuestionForm = !this.quiz.id;

  }

  onSubmit(form: NgForm){

    let methode = "";
    if(this.quiz.id){
      methode="updateQuiz";
      form.value.id = JSON.parse(this.quiz.id);
    }
    else {
      methode="createQuiz"
    }
    form.value.questions = this.quiz.questions;

    form.value.questions.map((obj) => {
      // On vire les images du formulaire
      this.filesQuestions.push(obj.image);
      delete obj.image;
    });
    // Post de la quiz
    this.quizService[methode](form).then(async (res) => {
      // Upload du fichier après création du quiz
      if(this.file){
        const formData = new FormData();

        formData.append("image", this.file);

        await this.quizService.uploadImageQuiz(res.id, formData);
      }

      res.questions.map( async (obj, idx) => {
        if(this.filesQuestions[idx]) {
          const formDataImage = new FormData();
          formDataImage.append("image", this.filesQuestions[idx]);
          await this.quizService.uploadImageQuizQuestion(obj.id, formDataImage);
        }
      });

      // Ferme le modal
      form.resetForm();
      this.modalService.dismissAll();
      // Refresh la liste des utilisateurs
      this.listQuizComponent.refresh();
    });
  }

  onFileSelected(event) {
    this.file = event.target.files[0];
  }

  onFileQuizQuestionSelected(event) {
    this.currentFileQuestion = true;
    this.filesQuestions.push(event.target.files[0]);
  }

  addQuizQuestion(formQuestion: NgForm){
        const quizQuestion = formQuestion.value;

        this.currentFileQuestion ? this.currentFileQuestion = false : this.filesQuestions.push(null);

        quizQuestion.reponse = this.reponses;
        this.reponses = [];
        // Si on est en création, la quiz courante n'a pas encore de ligne de quiz du coup cette condition sera vraie
        if (! Array.isArray(this.quiz.questions)) {
            // On crée alors la ligne de quiz avec un item;
            this.quiz.questions = [ quizQuestion ];
        }

        // Si on est en modification, on unshift le nouvel item (on rajoute le nouvel élément au début de l'array)
        else {
            if (! this.quiz.questions.includes(quizQuestion)) {
                this.quiz.questions.push(quizQuestion);
            }
        }
  }

  addQuizReponse(formReponse: NgForm){
    const quizReponse = formReponse.value;

    // Si on est en création, la quiz courante n'a pas encore de ligne de quiz du coup cette condition sera vraie
    if (! Array.isArray(this.reponses)) {
        // On crée alors la ligne de quiz avec un item;
        this.reponses = [ quizReponse ];
    }

    // Si on est en modification, on unshift le nouvel item (on rajoute le nouvel élément au début de l'array)
    else {
      this.reponses.push(quizReponse);
    }
}


  toggleShowQuizQuestionForm(show) {
    this.showQuizQuestionForm = show;
  }

  toggleShowQuizReponse(index){
    this.showQuizReponse[index] = true;
  }

  toggleDontShowQuizReponse(index){
    this.showQuizReponse[index] = false;
  }

  selectQuizQuestion(quizQuestions) {

    this.toggleShowQuizQuestionForm(true);
    Object.assign(this.quiz,quizQuestions)
  }

  async deleteQuizQuestion(index) {
    const quizQuestions = this.quiz.questions;

    /*await this.confirmationDialogService.confirm('Suppression', 'Voulez-vous vraiment effacer cet quiz ?')
      .then(confirm => this.confirmation = confirm)
      .catch(() => {});*/
    // Suppression d'une quiz

    // suppression de l'élément du tableau
    quizQuestions.splice(index, 1);
    //this.refresh();
  }

  async deleteQuizReponse(indexReponse , indexQuestion) {
    const quizReponse = this.quiz.questions;

    // suppression de l'élément du tableau
    quizReponse[indexQuestion].reponse.splice(indexReponse, 1);
    //this.refresh();
  }

}
