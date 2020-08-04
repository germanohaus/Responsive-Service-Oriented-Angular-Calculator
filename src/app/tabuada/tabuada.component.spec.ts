import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabuadaComponent } from './tabuada.component';

describe('TabuadaComponent', () => {
  let component: TabuadaComponent;
  let fixture: ComponentFixture<TabuadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabuadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabuadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
