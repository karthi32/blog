import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit, OnChanges{
@Input() post: any;
posts: any;
constructor(){  
}

ngOnInit(){
}

ngOnChanges(changes: SimpleChanges) {
  let post = changes['post'].currentValue;
  this.post = post;
  console.log(post);
  
}

}
