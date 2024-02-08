import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-convertidor',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './convertidor.component.html',
  styleUrl: './convertidor.component.css'
})
export class ConvertidorComponent {
  cantidad = 0;
  tengo = 'USD';
  quiero = 'EUR';
  total = 0;
  monedas: string[] = ['USD', 'EUR', 'ARS'];

  tasasDeCambio: { [key: string]: { [key: string]: number } } = {
    'USD': { 'USD': 1, 'EUR': 0.93, 'ARS': 1170 },
    'EUR': { 'USD': 1.08, 'EUR': 1, 'ARS': 893.72 },
    'ARS': { 'USD': 0.0008547, 'EUR': 0.0011, 'ARS': 1 }
  };

  constructor(){    
    console.log(this.monedas);
  }

  ngOnInit(): void {
    this.conversion();
  }

  conversion():void{
    if (!(this.tengo in this.tasasDeCambio) || !(this.quiero in this.tasasDeCambio)) {
      console.error('Monedas no válidas');
      return;
    }

    this.total = this.cantidad * this.tasasDeCambio[this.tengo][this.quiero];
  }
}
