import { Metadata } from "next";
import { resolve } from "path";

type Props = {
  params: {
    productId: string;
  };
};

export const generateMetadata =  async ({ params }: Props): Promise <Metadata> => {
  const title = await new Promise (resolve => {
    setTimeout(() => {
      resolve(`iPhone ${params.productId}`)
      
    }, 100);
  })
  return {
    title: `Product ${title}`,
  };
};



export default function ProductDetails({ params }: Props) {
  return (
    <>
      <h2>Product {params.productId}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima soluta
        quo assumenda quia totam quod modi necessitatibus impedit libero,
        similique nemo dolorem nobis excepturi animi corporis dignissimos
        voluptatum sunt blanditiis.
      </p>
    </>
  );
}
