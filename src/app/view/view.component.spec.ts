import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewComponent } from './view.component';

describe('ViewComponent', () => {
  let component: ViewComponent;
  let fixture: ComponentFixture<ViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render title', () => {
    const fixture = TestBed.createComponent(ViewComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.col h1').textContent).toContain('Formula peso');
  });
  it('should render inputText', () => {
    const fixture = TestBed.createComponent(ViewComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.col input').placeholder).toContain('Ingrese la masa');
  });
  it('should render inputBottom ', () => {
    const fixture = TestBed.createComponent(ViewComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.btn').value).toContain('Calcular peso');
  });
  it('should render resultado ', () => {
    const fixture = TestBed.createComponent(ViewComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.life-container').textContent).toContain('0');
  });
  it('should render descripcion ', () => {
    const fixture = TestBed.createComponent(ViewComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.sn').textContent).toContain('Fomulario para calcular el peso de un objeto (peso = masa * gravedad) donde la gravedad es igual a 9.8 m/s');
  });
});
