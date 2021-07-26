import { Component, OnInit } from '@angular/core';
import { EmoteInt, emoteList } from 'src/assets/data/emoteList';

@Component({
  selector: 'app-emotes',
  templateUrl: './emotes.component.html',
  styleUrls: ['./emotes.component.css'],
})
export class EmotesComponent implements OnInit {
  emoteList: EmoteInt[] = [];
  constructor() {}

  ngOnInit(): void {
    this.emoteList = emoteList;
  }
}
