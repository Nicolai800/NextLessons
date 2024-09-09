import { Suspense } from "react";

import { Product } from "@/components/product";
import { Rewiews } from "@/components/rewiews";

export default function ProductDetailPage() {
  return (
    <div>
      <h1>Product detail page</h1>
      <Suspense fallback = {<p>Loading product details...</p>}>
        <Product />
      </Suspense>
      <Suspense fallback = {<p>Loading rewiews...</p>}>
        <Rewiews />
      </Suspense>
    </div>
  );
}
