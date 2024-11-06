import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
// import { CommentsService } from 'src/app/comments.service';
// import { Comment } from 'src/app/models/comment';
// import { Reply } from 'src/app/models/reply';
// import { User } from '../../models/user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, AfterViewInit {
  // @Input() currentUser: User;
  // @Input() replyingTo;
  // @Output() add = new EventEmitter<Comment | Reply>();
  // @Output() onReplyMode = new EventEmitter<Reply>();

  @ViewChild("textarea") textarea: ElementRef

  comment: string;

  constructor(
  //  private commentService: CommentsService
  ) { }

  ngOnInit(): void {
    // if (this.replyingTo) {
    //   this.comment = `@${this.replyingTo.user.username} `
    // }
  }

  ngAfterViewInit() {
    // if (this.replyingTo) {
    //   this.textarea.nativeElement.focus();
    // }
  }

  addComment() {
    // if (this.comment === "" || this.comment == undefined) {
    //   return;
    // }
    // const prevalue = {
    //   id: Date.now() as number,
    //   content: this.comment.trim(),
    //   createdAt: new Date().toString(),
    //   user: this.currentUser,
    //   vote: {
    //     score: 0,
    //     voters: []
    //   },
    // }
    // if (this.replyingTo) {
    //   let comment_id = this.replyingTo.comment_id ? this.replyingTo.comment_id : this.replyingTo.id;
    //   prevalue.content = this.comment.replace(`@${this.replyingTo.user.username} `, '')
    //   let reply: Reply = { ...prevalue, replyingTo: this.replyingTo.user.username, comment_id: comment_id }
    //   this.commentService.addComment(reply, comment_id);
    //   this.onReplyMode.emit(reply);
    // } else {
    //   let newComment: Comment = { ...prevalue, replies: [] }
    //   this.add.emit(newComment)
    // }
    // this.comment = "";
  }


}
