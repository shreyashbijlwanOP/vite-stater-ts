import { ReactElement, ReactNode } from "react";
import Product from "../types/product";
interface PropsType {
  render?: (data: Product[]) => ReactElement;
  title: string;
  children?: (data: Product[] | string | null) => ReactNode;
}

export default function Products(props: PropsType) {
  const products: Product[] = [
    {
      id: 1,
      name: "Laptop",
      price: 85000,
      category: "Electronics",
      inStock: true,
      rating: 4.5,
    },
    {
      id: 2,
      name: "Smartphone",
      price: 45000,
      category: "Electronics",
      inStock: true,
      rating: 4.7,
    },
    {
      id: 3,
      name: "Wireless Headphones",
      price: 8000,
      category: "Accessories",
      inStock: false,
      rating: 4.3,
    },
    {
      id: 4,
      name: "Coffee Maker",
      price: 3000,
      category: "Home Appliances",
      inStock: true,
      rating: 4.0,
    },
    {
      id: 5,
      name: "Gaming Console",
      price: 30000,
      category: "Electronics",
      inStock: true,
      rating: 4.8,
    },
    {
      id: 6,
      name: "Bluetooth Speaker",
      price: 6000,
      category: "Accessories",
      inStock: true,
      rating: 4.6,
    },
  ];
  return (
    <div>
      {props.title}
      {props.render && <div> {props?.render(products)}</div>}
      {props.children && (
        <div className="children">{props?.children(products)}</div>
      )}
    </div>
  );
}
// Render props lets you have the functionality of higher Order function
