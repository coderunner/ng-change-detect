import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'change-detect';

  total = 0;

  onClick() {
    this.total++;
  }

  get evaluateTemplate() {
    console.log(`Evaluating template - app`);
    return '';
  }
}
