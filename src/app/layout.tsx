import { FC, ReactNode } from "react";
import "../styles/globals.css";
import { ThemeProvider } from "../components/providers/Theme";
import { Header } from "../components/shared/Header"

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <html
      lang="en"
      suppressContentEditableWarning
    >
      <body>
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

export default RootLayout;
