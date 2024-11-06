import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from '../comment-components/modal/modal.service';
import { BlogItemCommentService } from 'src/app/shared/services/blog-item-comment/blog-item-comment.service';
// import { CommentsService } from '../comments.service';
// import { Comment } from '../models/comment';
// import { User } from '../models/user';
//import { ModalService } from '../components/modal/modal.service';
// import { Reply } from '../models/reply';

@Component({
  selector: 'app-comments-section',
  templateUrl: './comments-section.component.html',
  styleUrls: ['./comments-section.component.scss']
})
export class CommentsSectionComponent implements OnInit {
  @Input() idBlog: any;
  
  //https://jeth0214.github.io/FE-interactive-comments-section/

  comments: Comment[];
  // currentUser: User;
  // commentToDelete: Comment | Reply;


  constructor(
    //private commentService: CommentsService, 
    private blogItemCommentService: BlogItemCommentService,
    private modalService: ModalService 
  ) { }

  ngOnInit(): void {
    //this.currentUser = this.commentService.getUser();
    this.getAllComments();
  }

  getAllComments() {
    this.blogItemCommentService.getCommentsByBlogItem(this.idBlog).subscribe(xx=>{
      console.log('xx:',xx)
      //this.comments = 
    })
  }

  addComment(newComment: Comment) {
    //this.comments = this.commentService.addComment(newComment);
  }

  updateComment(comment: Comment) {
    //this.commentService.updateComment(comment)
  }

  onDeleteComment(comment) {
    //this.commentToDelete = comment;
    //this.modalService.open('modal-1');
  }

  deleteComment() {
    // console.log(this.commentToDelete);
    // this.comments = this.commentService.deleteComment(this.commentToDelete);
    this.onCancel();
  }

  onCancel() {
    //this.modalService.close('modal-1');
  }

  updateScore(comment) {
    this.updateComment(comment);
  }



}
