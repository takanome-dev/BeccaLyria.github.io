import { ComponentFixture, TestBed } from '@angular/core/testing';
import { emoteList } from 'src/assets/data/emoteList';

import { EmotesComponent } from './emotes.component';

describe('EmotesComponent', () => {
  let component: EmotesComponent;
  let fixture: ComponentFixture<EmotesComponent>;
  let compiled: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmotesComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(EmotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load the art data correctly', () => {
    expect(component.emoteList).toEqual(emoteList);
  });

  it('should render the opening texts correctly', () => {
    const title = compiled.querySelector('h1');
    const intro = compiled.querySelector('p');
    expect(title.innerText.trim()).toBe('Emotes!');
    expect(intro.innerText.trim()).toBe(
      'These emotes were all commissioned from Starfazers.'
    );
  });

  it('should render the art data correctly', () => {
    const emoteTiles = compiled.querySelectorAll('.grid-box');
    emoteList.forEach((emote, i) => {
      const emoteLink = emoteTiles[i].querySelector('img').getAttribute('src');
      const emoteName = emoteTiles[i]
        .querySelector('.emote-name')
        .innerText.trim();
      expect(emoteLink).toContain(emote.fileName);
      expect(emoteName).toBe(emote.emoteName);
    });
  });
});
