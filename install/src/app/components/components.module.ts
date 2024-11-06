import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './comment-components/card/card.component';
//import { VoteButtonComponent } from './vote-button/vote-button.component';
import { FormComponent } from './comment-components/form/form.component';
import { FormsModule } from '@angular/forms';
import { GetAgoPipe } from '../shared/helper/pipe/get-ago.pipe';
import { ModalComponent } from './comment-components/modal/modal.component';
//import { TimeagoModule } from 'ngx-timeago';
import { CommentsSectionComponent } from './comments-section/comments-section.component';

@NgModule({
  declarations: [
    CardComponent,
    CommentsSectionComponent,
    //VoteButtonComponent,
    FormComponent,
    GetAgoPipe,
    ModalComponent
  ],
  imports: [
    CommonModule,    
    FormsModule,
    //TimeagoModule
  ],
  exports: [
    CardComponent,
    CommentsSectionComponent,
    //VoteButtonComponent,
    FormComponent,
    ModalComponent,
  ]
})
export class CommentComponentsModule { }
