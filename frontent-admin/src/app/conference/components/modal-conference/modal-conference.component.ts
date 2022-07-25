import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faClone, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/user/services/user.service';
import { ConferenceService } from '../../services/conference.service';
import { ListConferenceComponent } from '../list-conference/list-conference.component';

@Component({
  selector: 'app-modal-conference',
  templateUrl: './modal-conference.component.html',
  styleUrls: ['./modal-conference.component.css']
})
export class ModalConferenceComponent implements OnInit {

  @Input() mode!: string;
  @Input() conference: any = {};
  faPlus = faPlus;
  faTrash = faTrash;
  faClone = faClone;
  showConferenceParticipantsForm;
  conferenceParticipants = {};  
  userList;

  constructor(private modalService: NgbModal, private conferenceService: ConferenceService, private listConferenceComponent: ListConferenceComponent, private userService: UserService) {
    this.userList = []
  }

  ngOnInit(): void {
  }

  async open(content) {
    this.modalService.open(content, { ariaLabelledBy: "modal-basic-title", size: "lg"}).result.then((result) => {
    }, (reason) => {
      this.listConferenceComponent.refresh()
    });
    if(this.mode === "modal"){
      this.conference = {}
    };

    this.userList = await this.userService.getAllUser();
  }

  onSubmit(form: NgForm){
    let methode = "";
    if(this.conference.id){
      methode="updateConference"
      form.value.id = JSON.parse(this.conference.id);
    }
    else {
      methode="createConference"
    }
      form.value.conferenceParticipants = this.conference.conferenceParticipants
      // Post de la fiche pédagogique
      this.conferenceService[methode](form).then(async (res) => {
      // Ferme le modal
      form.resetForm();
      this.modalService.dismissAll();
      // Refresh la liste des utilisateurs
      this.listConferenceComponent.refresh();
    });
  }

  addConferenceParticipants(formConferenceParticipants: NgForm){
    const conferenceParticipants = formConferenceParticipants.value;

    // Si on est en création, la conference courante n'a pas encore de ligne de conference du coup cette condition sera vraie
    if (! Array.isArray(this.conference.conferenceParticipants)) {
        // On crée alors la ligne de conference avec un item;
        this.conference.conferenceParticipants = [ conferenceParticipants ];
    }

    // Si on est en modification, on unshift le nouvel item (on rajoute le nouvel élément au début de l'array)
    else {
        if (! this.conference.conferenceParticipants.includes(conferenceParticipants)) {
            this.conference.conferenceParticipants.push(conferenceParticipants);
        }
    }

  }
  
  toggleShowConferenceParticipantsForm(show) {
    this.showConferenceParticipantsForm = show;
  }

  selectConferenceParticipants(conferenceParticipants) {

    this.toggleShowConferenceParticipantsForm(true);
    Object.assign(this.conference,conferenceParticipants)
  }

  async deleteConferenceParticipants(index) {
    const conferenceParticipants = this.conference.conferenceParticipants;

    /*await this.confirmationDialogService.confirm('Suppression', 'Voulez-vous vraiment effacer cet conference ?')
      .then(confirm => this.confirmation = confirm)
      .catch(() => {});*/
    // Suppression d'une conference

    // suppression de l'élément du tableau
    conferenceParticipants.splice(index, 1);
    //this.refresh();
  }
}
