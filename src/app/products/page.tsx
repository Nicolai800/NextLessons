type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
};

// import Link from "next/link";

export default async function ProductPage() {
  const response = await fetch("http://localhost:3001/products", {
    next: { revalidate: 10 },
  });
  const products = await response.json();
  return (
    <ul className="space-y-4 p-4">
      {products.map((product: Product) => (
        <li
          key={product.id}
          className="p-4 bg-white shadow-md rounded-lg text-gray-700"
        >
          <h2 className="text-xl font-semibold">{product.title}</h2>
          <p>{product.description}</p>
          <p className="text-lg font-medium">${product.price}</p>
        </li>
      ))}
    </ul>
  );
}

// export default function ProductList() {
//   const productId = 100;
//   return (
//     <>
//       <h1>Product List</h1>
//       <h2>
//         <Link href="products/1">Product 1</Link>
//       </h2>
//       <h2>
//         <Link href="products/2">Product 2</Link>
//       </h2>
//       <h2>
//         <Link href="products/3" replace>
//           Product 3
//         </Link>
//       </h2>
//       <h2>
//         <Link href="products/4">Product 4</Link>
//       </h2>
//       <h2>
//         <Link href={`products/${productId}`}>Product {productId}</Link>
//       </h2>
//     </>
//   );
// }
