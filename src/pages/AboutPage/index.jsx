import About from "./components/About";
import Vision from "./components/Vision";
import Mission from "./components/Mission";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const AboutPage = () => {
  return (
    <div className="font-sans mx-auto max-w-full sm:max-w-md md:max-w-md lg:max-w-md xl:max-w-md shadow-xl bg-white">
      <Header />
      <main className="px-4">
        <About />
        <Vision />
        <Mission />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
