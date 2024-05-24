import "./App.css";
import Header from "./componentes/Header";
import MyCard from "./componentes/MyCard";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./componentes/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <>
      <div className="container-header">
        <Header title="Adopta un Perrito" />
        <FontAwesomeIcon icon={faPaw} className="patita"/>
      </div>

      <div className="container">
        <MyCard
          imagen="./src/assets/perrito1.jpg"
          title="Caramelo"
          description="Juguetón, lleno de energía y muy sociable. ¡Dale a Caramelo el hogar amoroso que se merece!"
          razas="Caniche"
          colorButton="warning"
        />
        <MyCard
          imagen="./src/assets/perrito2.png"
          title="Toby"
          description="Lleno de energía, cariñoso con los niños y listo para jugar. ¡Haz de Toby parte de tu familia hoy mismo!"
          razas="Golden retriever"
          colorButton="success"
        />
        <MyCard
          imagen="./src/assets/perrito3.png"
          title="Chester"
          description="Pequeño en tamaño, grande en corazón. Hazte amigo de Chester y vive un amor incondicional."
          razas="Corgi"
          colorButton="danger"
        />
        <MyCard
          imagen="./src/assets/perrito4.png"
          title="Kira"
          description="Una compañera cariñosa y leal, que ama los abrazos y mimos. ¡Ayuda a Kira a encontrar su final feliz!"
          razas="Yorkshire"
          colorButton="info"
        />
      </div>
      <Footer footer="Explora nuestra galería de adopción de perros para encontrar a tu amigo ideal. ©Dereches Reservados 2024." />
    </>
  );
}

export default App;
