import { Component } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';
/* Model => Interface. View => Component. Controller => Service (MVC) */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testapplication';
  products: IProduct[] =[];
  constructor(private productService: ProductService){} 
  /**injectable means it just asks for it
   * components only view the data not contain the logic
   * controller which is service contains the logic like fetch api data 
   * from the backend
   */
}
