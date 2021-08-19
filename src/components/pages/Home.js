import "../../App.css";
import Footer from "../Footer";
import HeroHome from "../HeroHome";

function Home() {
  return (
    <>
      <HeroHome
        title="VIAJA CON NOSOTROS"
        text="Nos interesa tu seguridad y te ofrecemos confort, prontitud en el servicio que contrates"
        video="/videos/mi_video.mov"
      />
      <Footer />
    </>
  );
}

export default Home;
