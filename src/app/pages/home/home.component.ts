import { Component } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  featuredPostsArray: any;
  latestPostsArray: any;
  constructor(
    private postService: PostsService
  ){
  }

  ngOnInit(): void{
    this.postService.loadFeatured().subscribe(data => {
      this.featuredPostsArray = data;
     });  
     this.postService.loadLatest().subscribe(data => {
      this.latestPostsArray = data;
     });  
  }
}
