import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products = [
    {
      name:'Phone XL',
      description:'A large phone with one of the best screens',   
    },
    {
      name:'Phone Mini',
      description:'A great phone with one of the best screens'
    },
    {
      name:'Phone Standard',
    
    },
  ]

  share(){
    console.log('share');
  }
}
