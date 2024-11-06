import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import { Comment } from 'src/app/models/comment';
// import { User } from 'src/app/models/user';
// import { getAgoTime } from 'src/app/helper/date';
// import { Reply } from 'src/app/models/reply';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() comment: Comment;
  //@Input() currentUser: User;
  @Output() update = new EventEmitter<Comment>();
  //@Output() delete = new EventEmitter<Comment | Reply>();
  @Output() vote = new EventEmitter<Comment>();

  commentToUpdate: string = "";
  onEditMode = false;
  createdAt: string;
  showForm = false;

  constructor() { }

  ngOnInit(): void {
    //this.commentToUpdate = this.comment.content;
  }


  onDelete(
  //  comment: Reply | Comment
  ) {
    //console.log(comment);
    //this.delete.emit(comment);
  }

  onEdit() {
    this.onEditMode = !this.onEditMode;
  }

  onCancel() {
    //this.commentToUpdate = this.comment.content;
    this.onEditMode = false;
  }


  updateComment(comment: Comment) {

    if (this.commentToUpdate == "" || this.commentToUpdate == undefined) {
      return;
    }

    //comment.content = this.commentToUpdate.trim();
    console.log(comment)
    this.update.emit(comment);
    this.onEditMode = false;
  }

  onVote(vote) {
    //console.log(vote);
    //this.comment.vote = vote;
    this.vote.emit(this.comment);
  }

  onReply(e) {
    this.showForm = !this.showForm;
    //this.reply.emit(username);
  }

  ngOnDestroy() {
    //clearInterval();
  }

}
