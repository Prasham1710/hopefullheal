
import AboutUs from "./_components/AboutUs";
import Footer from "./_components/Footer";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <div>
      <AboutUs />
      <Footer />
      <Toaster />
    </div>
  );
}
