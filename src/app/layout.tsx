import "@/styles/tailwind.css";
import "modaltic/styles.css";
import "@/styles/app.scss";
import "@/styles/swiper.scss";
import "@/styles/navigation.scss";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { ModalLayout } from "@/components/layout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <ThemeProvider>
          <ModalLayout>
            {children}
          </ModalLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
