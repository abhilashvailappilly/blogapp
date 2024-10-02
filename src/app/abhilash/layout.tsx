

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <>
        
        <h1>inner layout abhilash nav item</h1>
        {children}
   </> 
  );
}
