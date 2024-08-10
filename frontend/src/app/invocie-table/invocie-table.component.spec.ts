import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvocieTableComponent } from './invocie-table.component';

describe('InvocieTableComponent', () => {
  let component: InvocieTableComponent;
  let fixture: ComponentFixture<InvocieTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvocieTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvocieTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
