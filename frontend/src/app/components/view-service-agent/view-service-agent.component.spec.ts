import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewServiceAgentComponent } from './view-service-agent.component';

describe('ViewServiceAgentComponent', () => {
  let component: ViewServiceAgentComponent;
  let fixture: ComponentFixture<ViewServiceAgentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewServiceAgentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewServiceAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
