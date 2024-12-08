import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  PRODUCTS: Product[] = [
    {
        id: 1,
        name: "test1",
        price: 70.00,
        rating: 4.8,
        comments: 36,
        brand: "H§M",
        availableColors: ["White", "Black"],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse. Donec condimentum elementum convallis. Nunc sed orci a diam ultrices aliquet interdum quis nulla.",
        images: [
          "assets/img/product_single_10.jpg",
          "assets/img/shop_01.jpg",
          "assets/img/product_single_02.jpg",
          "assets/img/product_single_03.jpg",
          "assets/img/product_single_04.jpg",
          "assets/img/product_single_05.jpg",
          "assets/img/product_single_06.jpg",
          "assets/img/product_single_07.jpg",
          "assets/img/product_single_08.jpg",
          "assets/img/product_single_09.jpg"
        ],
        specifications: [
          "Lorem ipsum dolor sit",
          "Amet, consectetur",
          "Adipiscing elit, set",
          "Duis aute irure",
          "Ut enim ad minim",
          "Dolore magna aliqua",
          "Excepteur sint"
        ],
        sizes: ["S", "M", "L", "XL"]
      },
      {
        id: 2,
        name: "Casual Shoes",
        price: 40.00,
        rating: 4.5,
        comments: 20,
        brand: "FootStep",
        availableColors: ["Blue", "Black"],
        description: "Comfortable casual shoes for everyday wear. Made with premium materials for long-lasting durability.",
        images: [
            "assets/img/shop_02.jpg",
            "assets/img/shop_02.jpg",
            "assets/img/shop_02.jpg",
            "assets/img/shop_02.jpg",
            "assets/img/shop_02.jpg",
            "assets/img/shop_02.jpg",
            "assets/img/shop_02.jpg",
            "assets/img/shop_02.jpg",
            "assets/img/shop_02.jpg",
            "assets/img/shop_02.jpg",
        ],
        specifications: [
          "Soft leather upper",
          "Durable rubber sole",
          "Breathable design",
          "Available in multiple sizes"
        ],
        sizes: ["S", "M", "L"]
      },
      {
        id: 3,
        name: "Sport Jacket",
        price: 55.00,
        rating: 4.7,
        comments: 42,
        brand: "FitWear",
        availableColors: ["Red", "Black", "Blue"],
        description: "A lightweight, breathable jacket perfect for outdoor activities or casual wear.",
        images: [
            "assets/img/shop_03.jpg",
            "assets/img/shop_03.jpg",
            "assets/img/shop_03.jpg",
            "assets/img/shop_03.jpg",
            "assets/img/shop_03.jpg",
            "assets/img/shop_03.jpg",
            "assets/img/shop_03.jpg",
            "assets/img/shop_03.jpg",
            "assets/img/shop_03.jpg",
            "assets/img/shop_03.jpg",
        ],
        specifications: [
          "Water-resistant fabric",
          "Zippered pockets",
          "Reflective details",
          "Available in multiple colors"
        ],
        sizes: ["S", "M", "L", "XL"]
      },
      {
        id: 4,
        name: "Sport Jacket",
        price: 55.00,
        rating: 4.7,
        comments: 42,
        brand: "FitWear",
        availableColors: ["Red", "Black", "Blue"],
        description: "A lightweight, breathable jacket perfect for outdoor activities or casual wear.",
        images: [
            "assets/img/shop_04.jpg",
            "assets/img/shop_04.jpg",
            "assets/img/shop_04.jpg",
            "assets/img/shop_04.jpg",
            "assets/img/shop_04.jpg",
            "assets/img/shop_04.jpg",
            "assets/img/shop_04.jpg",
            "assets/img/shop_04.jpg",
            "assets/img/shop_04.jpg",
            "assets/img/shop_04.jpg",
        ],
        specifications: [
          "Water-resistant fabric",
          "Zippered pockets",
          "Reflective details",
          "Available in multiple colors"
        ],
        sizes: ["S", "M", "L", "XL"]
      },
      {
        id: 5,
        name: "Sport Jacket",
        price: 55.00,
        rating: 4.7,
        comments: 42,
        brand: "FitWear",
        availableColors: ["Red", "Black", "Blue"],
        description: "A lightweight, breathable jacket perfect for outdoor activities or casual wear.",
        images: [
            "assets/img/shop_05.jpg",
            "assets/img/shop_05.jpg",
            "assets/img/shop_05.jpg",
            "assets/img/shop_05.jpg",
            "assets/img/shop_05.jpg",
            "assets/img/shop_05.jpg",
            "assets/img/shop_05.jpg",
            "assets/img/shop_05.jpg",
            "assets/img/shop_05.jpg",
            "assets/img/shop_05.jpg",
        ],
        specifications: [
          "Water-resistant fabric",
          "Zippered pockets",
          "Reflective details",
          "Available in multiple colors"
        ],
        sizes: ["S", "M", "L", "XL"]
      },
      {
        id: 6,
        name: "Sport Jacket",
        price: 55.00,
        rating: 4.7,
        comments: 42,
        brand: "FitWear",
        availableColors: ["Red", "Black", "Blue"],
        description: "A lightweight, breathable jacket perfect for outdoor activities or casual wear.",
        images: [
            "assets/img/shop_06.jpg",
            "assets/img/shop_06.jpg",
            "assets/img/shop_06.jpg",
            "assets/img/shop_06.jpg",
            "assets/img/shop_06.jpg",
            "assets/img/shop_06.jpg",
            "assets/img/shop_06.jpg",
            "assets/img/shop_06.jpg",
            "assets/img/shop_06.jpg",
            "assets/img/shop_06.jpg",
        ],
        specifications: [
          "Water-resistant fabric",
          "Zippered pockets",
          "Reflective details",
          "Available in multiple colors"
        ],
        sizes: ["S", "M", "L", "XL"]
      },
      {
        id: 7,
        name: "Sport Jacket",
        price: 55.00,
        rating: 4.7,
        comments: 42,
        brand: "FitWear",
        availableColors: ["Red", "Black", "Blue"],
        description: "A lightweight, breathable jacket perfect for outdoor activities or casual wear.",
        images: [
            "assets/img/shop_07.jpg",
            "assets/img/shop_07.jpg",
            "assets/img/shop_07.jpg",
            "assets/img/shop_07.jpg",
            "assets/img/shop_07.jpg",
            "assets/img/shop_07.jpg",
            "assets/img/shop_07.jpg",
            "assets/img/shop_07.jpg",
            "assets/img/shop_07.jpg",
            "assets/img/shop_07.jpg",
        ],
        specifications: [
          "Water-resistant fabric",
          "Zippered pockets",
          "Reflective details",
          "Available in multiple colors"
        ],
        sizes: ["S", "M", "L", "XL"]
      },
      {
        id: 8,
        name: "Sport Jacket",
        price: 55.00,
        rating: 4.7,
        comments: 42,
        brand: "FitWear",
        availableColors: ["Red", "Black", "Blue"],
        description: "A lightweight, breathable jacket perfect for outdoor activities or casual wear.",
        images: [
            "assets/img/shop_08.jpg",
            "assets/img/shop_08.jpg",
            "assets/img/shop_08.jpg",
            "assets/img/shop_08.jpg",
            "assets/img/shop_08.jpg",
            "assets/img/shop_08.jpg",
            "assets/img/shop_08.jpg",
            "assets/img/shop_08.jpg",
            "assets/img/shop_08.jpg",
            "assets/img/shop_08.jpg",
        ],
        specifications: [
          "Water-resistant fabric",
          "Zippered pockets",
          "Reflective details",
          "Available in multiple colors"
        ],
        sizes: ["S", "M", "L", "XL"]
      },
      {
        id: 9,
        name: "Sport Jacket",
        price: 55.00,
        rating: 4.7,
        comments: 42,
        brand: "FitWear",
        availableColors: ["Red", "Black", "Blue"],
        description: "A lightweight, breathable jacket perfect for outdoor activities or casual wear.",
        images: [
            "assets/img/shop_09.jpg",
            "assets/img/shop_09.jpg",
            "assets/img/shop_09.jpg",
            "assets/img/shop_09.jpg",
            "assets/img/shop_09.jpg",
            "assets/img/shop_09.jpg",
            "assets/img/shop_09.jpg",
            "assets/img/shop_09.jpg",
            "assets/img/shop_09.jpg",
            "assets/img/shop_09.jpg",

        ],
        specifications: [
          "Water-resistant fabric",
          "Zippered pockets",
          "Reflective details",
          "Available in multiple colors"
        ],
        sizes: ["S", "M", "L", "XL"]
      },
    
];

}
