import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Article } from 'src/models/article.model';

@Injectable({ 
  providedIn: 'root'
})
export class ArticleService {
  articles: Array<Article>=[];
  filteredRate: number = 0;
  filteredArticle: Array<Article>=[];
  drArticles: Array<Article>=[];
  baseUrl = 'http://internet-helper.mcdir.ru/api'

  constructor( private http: HttpClient) {
  }
  getAll(): Observable<Article[]> {
    return this.http.get(`${this.baseUrl}/list`).pipe(
      map((res) => {
        this.articles = res['data'];
        return this.articles;
    }),
    catchError(this.handleError));
  }
  addArticle(article: Article): Observable<Article[]>{
    this.articles.push(article);
    return this.http.post(`${this.baseUrl}/store`, { data: article })
      .pipe(map((res) => {
        this.articles.push(res['data']);
        return this.articles;
      }),
      catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse) {
    console.log(error);
    return throwError('Error! something went wrong.');
  }
  getArticlesProv(prov:string){
    this.filteredArticle = this.articles.filter(article => article.provider === prov);
    return this.filteredArticle;
  }
  getRateProv(prov:string){
    this.filteredArticle = this.articles.filter(article => article.provider === prov);
    let temp = 0;
    for (let item of this.filteredArticle){
      temp += item.currentRate * 10;
    }
    this.filteredRate = temp / this.filteredArticle.length; 
    return this.filteredRate;
  }
  getArticlesDr(){
    this.drArticles=this.articles.filter(article => article.drProv === true);
    return this.drArticles;
  }
}