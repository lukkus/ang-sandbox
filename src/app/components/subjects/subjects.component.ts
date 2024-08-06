import { Component, OnInit } from '@angular/core';
import { SubjectsService } from 'app/services/subjects.service';

@Component({
  selector: 'app-subjects',
  host: {
    '(click)': 'onClick()'
  },
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {

  constructor(private service: SubjectsService) { }

  ngOnInit(): void {
    this.service.subject.subscribe(x => {
      console.log("Subject: ", x);
    });

    this.service.behavioralSubject.subscribe(x => {
      console.log("behavioralSubject: ", x);
    });

    this.service.replaySubject.subscribe(x => {
      console.log("replaySubject: ", x);
    });
  }

  onClick(): void {
    alert("xD");
  }

}
