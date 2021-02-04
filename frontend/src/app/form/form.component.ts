import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ArticleService } from 'src/services/article.service';
import { Article } from 'src/models/article.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent  implements OnInit {
  closeResult = '';
  article: Article;
  drProvider: string = "";

  constructor(private modalService: NgbModal, private ArticleService: ArticleService) {
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
    
  }

  addNewArticle(){
    if( (this.article.provider != 'Rostelecom')&&(this.article.provider != 'QWERTY')&&(this.article.provider != 'Avocado')&&(this.article.provider != 'MGTS')&&(this.article.provider != 'SpeedyLine')){
      this.article.provider = this.drProvider;
      this.article.drProv = true;
    }
    this.ArticleService.addArticle(this.article);
    this.article = new Article();
    this.drProvider = "";
  }

  ngOnInit(){
    this.article = new Article()
  }
}