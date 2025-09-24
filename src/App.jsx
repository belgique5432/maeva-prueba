import "./App.css";
import maevaVideo from "./assets/video/maeva_web_ios.mp4";
import maevaLogo from "./assets/logos/maeva-white.png";
import arrow from "./assets/iconos/down-arrow.png";
import maevaNosotros from "./assets/logos/bitmap.png";
import mundi from "./assets/trama/mapamundi.svg"
import wpp from "./assets/iconos/logo-whatsapp.svg"
import ig from "./assets/iconos/logo-instagram.svg"
import mail from "./assets/iconos/mail.svg"
import fb from "./assets/iconos/logo-facebook.svg"

import ServiciosCarousel from "./components/slider";

function App() {
  return (
    <>
      <section className="first-section">
        <div className="video-background">
          <video autoPlay muted loop playsInline  webkit-playsinline="true" poster="./assests/trama/trama1.png">
            <source src={maevaVideo} type="video/mp4" />
          </video>
        </div>
        <div className="contenido">
          <img src={maevaLogo} alt="maeva-logo" width="60%" className="maeva-logo-sm" />
          <h1>Bienvenido a tu próximo destino</h1>
          <p className="title-text">No solo organizamos viajes, creamos experiencias que dejan huella</p>
          <img src={arrow} alt="flecha" width="22px" height="87px" className="arrow" />
        </div>
      </section>
      <section>
        <div className="desktop-view-main">
          <section className="">
            <div className="video-background-desktop">
              <video autoPlay muted loop playisline>
                <source src={maevaVideo} type="video/mp4" />
              </video>
            </div>
            <div className="contenido-desktop">
              <div className="contenido-desktop-text">
                <img
                  src={maevaLogo}
                  alt="maeva-logo"
                  width="60%"
                  className="maeva-logo-desk"
                />
                <h1>Bienvenido a tu próximo destino</h1>
                <p className="title-text">
                  Creamos experiencias que dejan huella
                </p>
              </div>
              <section className="form-desktop" id="form-desktop">
  <h2>Empecemos a planificar tu viaje</h2>
  <p className="form-desktop-subtitle">
    Dejanos tus datos a continuación y nos pondremos en contacto a la brevedad.
  </p>

  <div className="formulario-contacto-desktop">
    <form
      action="https://formsubmit.co/seniniezequiel780@gmail.com"
      method="POST"
    >
      {/* configuración oculta */}
      <input
        type="hidden"
        name="_next"
        value="http://localhost:5173/"
      />
      <input type="hidden" name="_captcha" value="false" />

      {/* Nombre */}
      <div className="form-columns">
      <div className="separation-form">
      <div className="form-input">
        <label>Nombre completo</label>
        <input
          type="text"
          name="name"
          placeholder="Ej. Juan Gonzalez"
          required
        />
      </div>

      {/* Teléfono */}
      <div className="telefono-form-desktop">
        <label className="margen-top">Teléfono</label>
        <input type="text" name="telefono" placeholder="Escriba su teléfono" />
      </div>

      {/* Destino */}
      <div className="margen-top-destino">
        <label>Destino de viaje</label>
        <input
          name="destino"
          type="text"
          placeholder="Escriba su destino"
          className="border-1 rounded p-1 w-full"
        />
      </div>
      </div>
      <div>

      {/* Mail */}
      <div className="telefono-form-desktop form-input">
        <label>Mail</label>
        <input
          name="mail"
          type="email"
          placeholder="Ej. juan@gmail.com"
          required
        />
      </div>

      {/* Método de comunicación */}
      <p className="metodo-preferencia-desktop">
        Método de comunicación de preferencia
      </p>
      <div className="metodo-de-preferencia">
        <div>
          <input
            type="radio"
            id="checkbox-mail"
            name="preferencia"
            value="mail"
          />
          <label htmlFor="checkbox-mail">Mail</label>
        </div>

        <div>
          <input
            type="radio"
            id="checkbox-telefono"
            name="preferencia"
            value="telefono"
          />
          <label htmlFor="checkbox-telefono">Teléfono</label>
        </div>
      </div>

      {/* Fecha */}
      <div className="margen-top-fecha-desk">
        <label>Fecha estimada de viaje</label>
        <select name="mes" className="select-mes">
          <option value="" disabled selected>
            Seleccione mes
          </option>
          <option value="enero">Enero</option>
          <option value="febrero">Febrero</option>
          <option value="marzo">Marzo</option>
          <option value="abril">Abril</option>
          <option value="mayo">Mayo</option>
          <option value="junio">Junio</option>
          <option value="julio">Julio</option>
          <option value="agosto">Agosto</option>
          <option value="septiembre">Septiembre</option>
          <option value="octubre">Octubre</option>
          <option value="noviembre">Noviembre</option>
          <option value="diciembre">Diciembre</option>
        </select>

        <div className="year">
          <input
            type="radio"
            id="anio2025"
            name="anio"
            value="2025"
            className="radio-fecha"
          />
          <label htmlFor="anio2025">2025</label>

          <input
            type="radio"
            id="anio2026"
            name="anio"
            value="2026"
            className="radio-fecha"
          />
          <label htmlFor="anio2026">2026</label>
        </div>
      </div>
      </div>

      {/* Consulta */}
      </div>
            <div className="consulta-form">
      <label className="margen-top-fecha-desk">Dejanos tu consulta</label>
      <textarea
        name="consulta"
        placeholder="Escribe tu comentario"
        className="margen-top-consulta"
      />
      </div>
      {/* Botón */}
      <div className="boton-enviar-form-desktop">
        <button type="submit" className="button-enviar">Enviar</button>
      </div>
    </form>
  </div>
</section>

            </div>
          </section>
        </div>
      </section>
      <section className="mobile-form" id="form">
  <div className="form-background">
    <h2>Empecemos a planificar tu viaje</h2>
    <p className="margen-top-fecha-desk">
      Dejanos tus datos a continuación y nos pondremos en contacto a la brevedad.
    </p>

    <div className="margen-top form-container">
      <form
        action="https://formsubmit.co/seniniezequiel780@gmail.com"
        method="POST"
      >
        {/* Configuración oculta */}
        <input type="hidden" name="_next" value="http://localhost:5173/" />
        <input type="hidden" name="_captcha" value="false" />

        {/* Nombre */}
        <div className="form-input">
          <label>Nombre completo</label>
          <input
            type="text"
            name="name"
            placeholder="Ej. Juan Gonzalez"
            required
          />
        </div>

        {/* Mail */}
        <div className="form-input">
          <label>Mail</label>
          <input
            name="mail"
            type="email"
            placeholder="Ej. juan@gmail.com"
            required
          />
        </div>

        {/* Teléfono */}
        <div className="form-input">
          <label>Teléfono</label>
          <input
            type="text"
            name="telefono"
            placeholder="Escriba su teléfono"
          />
        </div>

        {/* Método de preferencia */}
        <p className="form-input">Método de comunicación de preferencia</p>
        <div className="metodo-preferencia-mobile">
          <div className="metodo-preferencia-mobile-text">
            <input
              type="radio"
              id="checkbox-mail"
              name="preferencia"
              value="mail"
            />
            <label htmlFor="checkbox-mail">Mail</label>
          </div>
          <div className="metodo-preferencia-mobile-text">
            <input
              type="radio"
              id="checkbox-telefono"
              name="preferencia"
              value="telefono"
            />
            <label htmlFor="checkbox-telefono">Teléfono</label>
          </div>
        </div>

        {/* Destino */}
        <div className="form-input">
          <label>Destino de viaje</label>
          <input
            name="destino"
            type="text"
            placeholder="Escriba su destino"
          />
        </div>

        {/* Fecha */}
        <div className="margen-top">
          <label>Fecha estimada de viaje</label>
          <select name="mes" className="select-mes">
            <option value="" disabled selected>
              Seleccione mes
            </option>
            <option value="enero">Enero</option>
            <option value="febrero">Febrero</option>
            <option value="marzo">Marzo</option>
            <option value="abril">Abril</option>
            <option value="mayo">Mayo</option>
            <option value="junio">Junio</option>
            <option value="julio">Julio</option>
            <option value="agosto">Agosto</option>
            <option value="septiembre">Septiembre</option>
            <option value="octubre">Octubre</option>
            <option value="noviembre">Noviembre</option>
            <option value="diciembre">Diciembre</option>
          </select>
        <div className="year">
          <input
            type="radio"
            id="anio2025"
            name="anio"
            value="2025"
            className="radio-fecha"
          />
          <label htmlFor="anio2025">2025</label>

          <input
            type="radio"
            id="anio2026"
            name="anio"
            value="2026"
            className="radio-fecha"
          />
          <label htmlFor="anio2026">2026</label>
        </div>
        </div>

        {/* Consulta */}
        <div className="margen-top left">
          <label>Dejanos tu consulta</label>
          <textarea
            name="consulta"
            placeholder="Escriba su comentario"
            className="consulta-mobile"
          />
        </div>

        {/* Botón dentro del form */}
        <div className="boton-enviar-form-desktop">
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  </div>
</section>

      <section className="nosotros-mobile">
        <h2>Nosotros</h2>
        <p>
          En <span>MAEVA</span> creemos que viajar es mucho más que trasladarse
          de un lugar a otro: es abrir la puerta a nuevas experiencias,
          descubrir culturas, conectar con personas y vivir momentos que se
          transforman en recuerdos para toda la vida.
        </p>
        <p>
          Nuestro nombre proviene de la lengua tahitiana y{" "}
          <span>significa bienvenida</span>. Eso es precisamente lo que queremos
          que vivas: que te sientas recibido, acompañado y cuidado, desde el
          primer contacto con nosotros hasta tu regreso a casa.
        </p>
      </section>
      <section className="nosotros-desktop">
        <div className="nosotros-desktop-text">
          <h2>Nosotros</h2>
          <p>
            En <span>MAEVA</span> creemos que viajar es mucho más que
            trasladarse de un lugar a otro: es abrir la puerta a nuevas
            experiencias, descubrir culturas, conectar con personas y vivir
            momentos que se transforman en recuerdos para toda la vida.
          </p>
          <p>
            Nuestro nombre proviene de la lengua tahitiana y{" "}
            <span>significa bienvenida</span>. Eso es precisamente lo que
            queremos que vivas: que te sientas recibido, acompañado y cuidado,
            desde el primer contacto con nosotros hasta tu regreso a casa.
          </p>
        </div>
        <div className="maeva-nosotros-container">
          <img src={maevaNosotros} alt="maeva-isologo" width="350px" />
        </div>
      </section>
      <section className="servicios-desktop">
        <ServiciosCarousel/>
      </section>
      <section className="elegirnos">
        <div>
          <h2>¿Por qué elegirnos? </h2>
          <p>
            Diseñamos cada viaje con dedicación, escuchando tus deseos y
            acompañándote en cada paso. Nos encanta armar itinerarios pensados
            para vos, elegir alojamientos que enamoran y crear el viaje que
            siempre soñaste.
          </p>
          <p>
            No solo organizamos viajes: creamos experiencias que dejan huella.
          </p>
          <p className="strong-elegirnos">
            - Nuestro servicio es 100% personalizado y a medida - Gestionamos
            cada paso de tu reserva
          </p>
          <p className="strong-elegirnos">Bienvenido a donde sea que vayas.</p>
        </div>
      </section>
      <section className="elegirnos-desktop">
        <div className="father-container">
          <h2>¿Por qué elegirnos? </h2>
          <div className="elegirnos-container">
          <div className="elegirnos-container-text">
          <p>
            Diseñamos cada viaje con dedicación, escuchando tus deseos y
            acompañándote en cada paso. Nos encanta armar itinerarios pensados
            para vos, elegir alojamientos que enamoran y crear el viaje que
            siempre soñaste.
          </p>
          <p>
            No solo organizamos viajes: creamos experiencias que dejan huella.
          </p>
          </div>
          <div className="elegirnos-container-text">
          <p className="strong-elegirnos">
            - Nuestro servicio es 100% personalizado y a medida <br />- Gestionamos
            cada paso de tu reserva
          </p>
          </div>
          </div>
          <div className="bienvenido">
          <p>Bienvenido a donde sea que vayas.</p>
          </div>
        </div>
      </section>
      <section className="mundi">
        <div className="mundi-parte-1">
          <h2>te llevamos A donde quieras ir </h2>
          <p>El mundo al alcance de tus manos.</p>
          <div className="mundi-button mundi-button-desktop">
          <button><a href="#form-desktop">Viajá con nosotros</a></button>
          </div>
          <div className="mundi-button mundi-button-mobile">
          <button><a href="#form">Viajá con nosotros</a></button>
          </div>
        </div>
        <div><img src={mundi} alt="mapamundi" /></div>
      </section>
      <footer>
        <div className="maeva-footer">
          <img src={maevaLogo} alt="maeva-logo" width="330px" className="footer-maeva"/>
        </div>
        <div className="footer-contacto">
          <p>Contacto</p>
          <ul>
            <li><img src={mail} alt="mail" className="footer-icon"/><a href="mailto:info@maevaviajes.com ">info@maevaviajes.com </a></li>
            <li><img src={wpp} alt="whatsapp" className="footer-icon"/><a href="https://wa.me/5491130059809">+54 9 11 3005-9809</a></li>
          </ul>
        </div>
        <div className="footer-redes">
          <p>Redes sociales</p>
          <ul>
            <li><img src={ig} alt="instagram" className="footer-icon"/><a href="https://www.instagram.com/maevaviajes/">@maevaviajes</a></li>
            <li><img src={fb} alt="facebook" className="footer-icon"/><a href="">Maeva Viajes</a></li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default App;
