import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditServiceAgentComponent } from './edit-service-agent.component';

describe('EditServiceAgentComponent', () => {
  let component: EditServiceAgentComponent;
  let fixture: ComponentFixture<EditServiceAgentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditServiceAgentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditServiceAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
