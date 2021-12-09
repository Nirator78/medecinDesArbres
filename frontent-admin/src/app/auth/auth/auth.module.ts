import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../components/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        LoginComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        NgbModule
    ],
    exports : [
        LoginComponent,
    ]
})

export class AuthModule { }
