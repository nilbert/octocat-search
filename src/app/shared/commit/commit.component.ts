import { Component, OnInit, Input } from '@angular/core';
import { Commit } from 'src/app/core/models/commit';

@Component({
  selector: 'app-commit',
  templateUrl: './commit.component.html',
  styleUrls: ['./commit.component.scss']
})
export class CommitComponent implements OnInit {
 @Input() commit: Commit;
 // commit:Commit;
  constructor() { }

  ngOnInit() {
    // this.commit=new Commit;
    // this.commit.message='asdasd';
    // this.commit.date='2012-03-06T23:06:50Z';
  }

}
