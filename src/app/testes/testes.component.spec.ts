import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestesComponent } from './testes.component';

describe('TestesComponent', () => {
  let component: TestesComponent;
  let fixture: ComponentFixture<TestesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
