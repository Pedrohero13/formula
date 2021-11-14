import { Component, OnInit } from '@angular/core';
import { FormulaPeso } from '../Formula/FormulaPeso';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  
  btnText: string ="Calcular peso";
  masaText: string ="";
  resultado = 0.0;

  constructor() { }

  ngOnInit(): void {
  }

  calcular(){
     let formula: FormulaPeso = new FormulaPeso();
     this.resultado = formula.calcularPeso(Number.parseInt(this.masaText));
     
  }

}
