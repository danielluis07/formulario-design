import "./globals.css";

export const metadata = {
  title: "Frontend Mentor | Newsletter sign-up form with success message",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link
        rel="icon"
        href="/icon?<generated>"
        type="image/<generated>"
        sizes="<generated>"
      />
      <body className="bg-darkslategrey">{children}</body>
    </html>
  );
}
