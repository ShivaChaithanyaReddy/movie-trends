import { Component, OnInit } from '@angular/core';
import {CelebrityService} from './celebrity.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-celebrity',
  templateUrl: './celebrity.component.html',
  styleUrls: ['./celebrity.component.css'],
  providers: [CelebrityService]
})
export class CelebrityComponent implements OnInit {

  celebrityId : string;
  celebrity : string;

  constructor(private celbrityService: CelebrityService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.celebrityId = this.router.snapshot.params['id'];
    this.celbrityService.getCelebrity(this.celebrityId)
      .subscribe((result) => {
        this.celebrity = result;
          console.log(result);
      });
  }

}
