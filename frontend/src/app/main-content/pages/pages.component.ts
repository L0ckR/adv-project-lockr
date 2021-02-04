import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/services/article.service';
import { Article } from 'src/models/article.model';
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  articles: Article[];
  drArticles: Array<Article>=[];
  filteredArticle: Array<Article>=[];
  RostelArticles: Array<Article>=[];
  QWERTYArticles: Array<Article>=[];
  MGTSArticles: Array<Article>=[];
  AvocadoArticles: Array<Article>=[];
  SpeedyArticles: Array<Article>=[];
  constructor(private ArticleService: ArticleService) { }

  ngOnInit(): void {
    this.RostelArticles = this.ArticleService.getArticlesProv( "Rostelecom" );
    this.QWERTYArticles = this.ArticleService.getArticlesProv( "QWERTY" );
    this.MGTSArticles = this.ArticleService.getArticlesProv( "MGTS" );
    this.AvocadoArticles = this.ArticleService.getArticlesProv( "Avocado" );
    this.SpeedyArticles = this.ArticleService.getArticlesProv( "SpeedyLine" );
    this.drArticles = this.ArticleService.getArticlesDr();
    this.articles = this.ArticleService.articles;
  }
  getArticles(): void{
    this.ArticleService.getAll().subscribe(
      (res: Article[]) => {
        this.articles = res;
      }
    )
    }
  getOther(){
    this.RostelArticles = this.ArticleService.getArticlesProv( "Rostelecom" );
    this.QWERTYArticles = this.ArticleService.getArticlesProv( "QWERTY" );
    this.MGTSArticles = this.ArticleService.getArticlesProv( "MGTS" );
    this.AvocadoArticles = this.ArticleService.getArticlesProv( "Avocado" );
    this.SpeedyArticles = this.ArticleService.getArticlesProv( "SpeedyLine" );
    this.drArticles = this.ArticleService.getArticlesDr();
  }

}
