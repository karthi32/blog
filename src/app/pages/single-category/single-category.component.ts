import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.scss']
})
export class SingleCategoryComponent {

  postArray: any;
  category!: string;
  constructor(
    private route: ActivatedRoute,
    private postService: PostsService
    ){}
  ngOnInit(): void{
    this.route.params.subscribe(params =>{
      this.category = params['category'];
      this.postService.loadCategoryPosts(params['id']).subscribe(post =>{
        this.postArray = post;
      })
    })
  }
}
