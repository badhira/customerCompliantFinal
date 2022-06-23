import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddServiceAgentComponent } from './add-service-agent.component';

describe('AddServiceAgentComponent', () => {
  let component: AddServiceAgentComponent;
  let fixture: ComponentFixture<AddServiceAgentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddServiceAgentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddServiceAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
