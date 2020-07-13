import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IndividualEventPage } from './individual-event.page';

describe('IndividualEventPage', () => {
  let component: IndividualEventPage;
  let fixture: ComponentFixture<IndividualEventPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualEventPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IndividualEventPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
