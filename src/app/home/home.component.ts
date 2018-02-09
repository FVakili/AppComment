import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IComment } from '../comment';
import { DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements
OnInit,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked  {

  comments: IComment[] = [];

  @ViewChild('commentText') comm: ElementRef;

  constructor() {
    console.log("constructor called");
    console.log("textArea: " + this.comm.nativeElement.value);
  }

  ngOnInit() {
    console.log("ngOnInit called");
    console.log("textArea: " + this.comm.nativeElement.value);

  }
  ngDoCheck() {
    console.log("ngdocheck called");
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit Called");
  }

  ngAfterContentChecked(): void {
    console.log("ngaftercontentchecked called");
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit Called");
  }

  ngAfterViewChecked(): void {
    console.log("ngafterviwechecked called");
  }

  reviewsCount(c: IComment, n: HTMLInputElement) {
    c.numberOfReviews++;
    c.star += parseInt(n.value);
  }

  addComment() {
    let c: IComment = {
      comment: this.comm.nativeElement.value,
      like: 0,
      dislike: 0,
      numberOfReviews: 0,
      star: 0
    };
    this.comments.push(c);
  }

  commenLike(c: IComment) {
    c.like++;
  }

  commenDislike(c: IComment) {
    c.dislike++;
  }
}
