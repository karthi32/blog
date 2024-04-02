import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit{
  post: any;
  similarPostArray: any;
  constructor(
    private route: ActivatedRoute,
    private postService: PostsService
  ){}

  ngOnInit(){
    this.route.params.subscribe(params =>{
      this.postService.countViews(params['id']);
      this.postService.loadSinglePost(params['id']).subscribe(data=>{
        this.post = data;
        this.loadSimilarPost(this.post.category.categoryId);
      })
    })
  }

  loadSimilarPost(catId){
    this.postService.loadSimilar(catId).subscribe(data =>{
      this.similarPostArray = data;
    });
  }
}
