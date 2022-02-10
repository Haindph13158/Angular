import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Api/iProducts';


@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css'],
  

  
})
export class ProductlistComponent implements OnInit {
  constructor() {}

  products: IProduct[] = [];
  productList: IProduct[] = [
    {
      productId: 1,
      productName: 'Leaf Rake',
      productCode: 'GDN-0011',
      releaseDate: 'March 19, 2016',
      description: 'Leaf rake with 48-inch wooden handle.',
      price: 19.95,
      starRating: 3.2,
      imageUrl:
        'http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png',
    },
    {
      productId: 5,
      productName: 'Hammer',
      productCode: 'TBX-0048',
      releaseDate: 'May 21, 2016',
      description: 'Curved claw steel hammer',
      price: 8.9,
      starRating: 4.8,
      imageUrl:
        'http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png',
    },
    {
      productId: 8,
      productName: 'Saw',
      productCode: 'TBX-0022',
      releaseDate: 'May 15, 2016',
      description: '15-inch steel blade hand saw',
      price: 11.55,
      starRating: 3.7,
      imageUrl:
        'http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png',
    },
    {
      productId: 10,
      productName: 'Video Game Controller',
      productCode: 'GMG-0042',
      releaseDate: 'October 15, 2015',
      description: 'Standard two-button video game controller',
      price: 35.95,
      starRating: 4.6,
      imageUrl:
        'http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png',
    },
  ];
 
  loading = false;
  filter(e: any) {
    let that = this;
    that.loading = true;
    setTimeout(() => {
      this.products = this.productList.filter((product: IProduct) =>
        product.productName.toLowerCase().includes(e.target.value.toLowerCase())
      );
      that.loading = false;
    }, 100);
  }
  ngOnInit(): void {
    let that = this;
    that.loading = true;
    setTimeout(() => {
      that.products = that.productList;
      that.loading = false;
    }, 200);
  }
  setStarCheck(data: any) {
    const {id, starRating} = data;
    const product = this.productList.find((product: IProduct) => product.productId === id);
    if(product){
      product.starRating = starRating;
      
      
    }
  }
  
}
