import styles from "./index.module.scss"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h2 className={styles.layout}>Inner layout</h2>
      {children}
    </>
  );
}
