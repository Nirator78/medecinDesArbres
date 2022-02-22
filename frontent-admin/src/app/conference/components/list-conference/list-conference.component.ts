import { Component, OnInit } from '@angular/core';
import { faSync, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ConfirmationDialogService } from 'src/app/ui/confirmation-dialog/confirmation-dialog.service';
import { environment } from 'src/environments/environment';
import { ConferenceService } from '../../services/conference.service';

@Component({
  selector: 'app-list-conference',
  templateUrl: './list-conference.component.html',
  styleUrls: ['./list-conference.component.css']
})
export class ListConferenceComponent implements OnInit {

  faSync = faSync;
  faTrash = faTrash;
  confirmation;
  public conferenceList;
  public environment = environment;

  constructor(private conferenceService: ConferenceService, private confirmationDialogService: ConfirmationDialogService) {
    this.conferenceList = [];
    this.refresh();
  }

  ngOnInit(): void {
  }

  async refresh() {
    this.conferenceList = await this.conferenceService.getAllConference();
  }

  async deleteConference(id) {
    await this.confirmationDialogService.confirm('Suppression', 'Voulez-vous vraiment effacer cet fiche pédagogique ?')
      .then(confirm => this.confirmation = confirm)
      .catch(() => {});
    // Suppression d'un conference
    if(this.confirmation){
      await this.conferenceService.deleteConference(id);
    }
    // Puis on rafraichi la liste
    this.refresh();
  }
}
