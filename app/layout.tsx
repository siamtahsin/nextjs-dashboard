// @ts-ignore
import './ui/global.css';
// @ts-ignore

import { inter } from './ui/font';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning >
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
