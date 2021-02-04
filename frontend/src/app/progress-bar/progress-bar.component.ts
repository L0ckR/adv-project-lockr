import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/services/article.service';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit{
  rateRostel: number;
  rateQWERTY: number;
  rateMGTS: number;
  rateAvocado: number;
  rateSpeedy: number;
  constructor(private ArticleService: ArticleService) { 
  }
  ngOnInit(): void {
    this.rateRostel = this.ArticleService.getRateProv( "Rostelecom" );
    this.rateQWERTY = this.ArticleService.getRateProv( "QWERTY" );
    this.rateMGTS = this.ArticleService.getRateProv( "MGTS" );
    this.rateAvocado = this.ArticleService.getRateProv( "Avocado" );
    this.rateSpeedy = this.ArticleService.getRateProv( "SpeedyLine" );
  }
  progress(){
    this.rateRostel = this.ArticleService.getRateProv( "Rostelecom" );
    this.rateQWERTY = this.ArticleService.getRateProv( "QWERTY" );
    this.rateMGTS = this.ArticleService.getRateProv( "MGTS" );
    this.rateAvocado = this.ArticleService.getRateProv( "Avocado" );
    this.rateSpeedy = this.ArticleService.getRateProv( "SpeedyLine" );
  }

}
