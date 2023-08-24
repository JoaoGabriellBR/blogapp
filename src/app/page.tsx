import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";
import { NewsCategoryProvider } from "@/context";

export default function Home() {
  return (
    <NewsCategoryProvider>
      <div className="flex flex-col overflow-hidden min-h-screen">
        <Header />
        <Main />
        <Footer />
      </div>
    </NewsCategoryProvider>
  );
}
