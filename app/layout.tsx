import "@styles/app.scss";
import "@styles/swiper.scss";
import "@styles/navigation.scss";
import { AppContextProvider } from "context/App";
import { ModalContextProvider } from "@components/ui/context/Modal";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <AppContextProvider>
          <ModalContextProvider>{children}</ModalContextProvider>
        </AppContextProvider>
      </body>
    </html>
  );
}
