import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent implements OnInit {
  nbClicks = 0;
  constructor() {}

  @Input()
  name = '';

  @Output()
  counterClick = new EventEmitter();

  ngOnInit(): void {}

  onClick() {
    this.nbClicks++;
    this.counterClick.emit();
  }

  get evaluateTemplate() {
    console.log(`Evaluating template - ${this.name}`);
    return '';
  }
}
