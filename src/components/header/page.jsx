import styles from "./index.module.scss";
import Link from "next/link";

export default function HeaderComponent() {
  return (
    <div className={styles.headerWrapper}>
      <h2>Header</h2>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        voluptates ratione enim minus! Aliquam rem dolores facilis. Numquam, ab
        ratione. Blanditiis iure eum voluptatibus quaerat nisi reprehenderit,
        repudiandae nostrum ea!
      </div>
      <div className={styles.navPanel}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/products">Products</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/order-product">Order</Link>
        <Link href="/login">Login</Link>
        <Link href="/complex-dashboard">Dashboard</Link>
        <Link href="/f1">Folder 1</Link>
        <Link href="/photo-feed">Photo feed</Link>
        <Link href="/comments">Comments</Link>
      </div>
    </div>
  );
}
