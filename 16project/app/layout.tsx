import NewsletterPopup from './components/NewsletterPopup';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <NewsletterPopup />
      </body>
    </html>
  );
}










