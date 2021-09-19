import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-writer-info-box',
  templateUrl: './writer-info-box.component.html',
  styleUrls: ['./writer-info-box.component.css']
})
export class WriterInfoBoxComponent implements OnInit {


  @Input() user !: User;

  constructor(readonly router : Router) { }

  ngOnInit(): void {
  }

  websiteClicked(){
    window.open(this.user.website, '_blank');
  }

  nameClicked(){
    this.router.navigate(['/user', this.user.id]);
  }


}
