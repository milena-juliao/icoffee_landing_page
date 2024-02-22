import { Inter } from "next/font/google";
import styles from './styles/styles.module.scss'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "i-Coffee | Sua loja do Café",
  description: "i-Coffee, para amantes de café!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={styles.container}>{children}</body>
    </html>
  );
}
