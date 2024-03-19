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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Sail&display=swap" rel="stylesheet" />
      </head>

      <body suppressHydrationWarning={true} className={styles.container}>{children}</body>
    </html>
  );
}
