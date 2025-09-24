import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules"; // agregamos Autoplay

// Importa los estilos de Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import back from "../assets/iconos/chevron-back.svg"
import go from "../assets/iconos/chevron-go.svg"

import paquetes from "../assets/carousel/paquetes-turisticos.png";
import aereos from "../assets/carousel/aereos.png"
import hoteles from "../assets/carousel/hoteles.png"
import viajes from "../assets/carousel/viajes.png"
import alquilerAutos from "../assets/carousel/alquilerdeautos.png"
import bodas from "../assets/carousel/bodas.png"
import lunasdemiel from "../assets/carousel/lunasdemiel.png"
import traslados from "../assets/carousel/traslados.png"
import eventosDeportivos from "../assets/carousel/eventosdeportivos.png"
import asistenciaalviajero from "../assets/carousel/asistenciaalviajero.png"

export default function ServiciosCarousel() {
  return (
    <section className="servicios-desktop" style={{ position: "relative" }}>
      <h2>Servicios que ofrecemos</h2>

      <Swiper
        modules={[Navigation, Autoplay]} // agregamos Autoplay
        navigation={{
          nextEl: ".btn-next",
          prevEl: ".btn-prev",
        }}
        autoplay={{
          delay: 3000, // tiempo en milisegundos entre cada slide
          disableOnInteraction: false, // sigue autoplay aunque el usuario interactúe
        }}
        loop={true}
        spaceBetween={20}
        slidesPerView={4}
        breakpoints={{
          0: { slidesPerView: 1 },
          630: { slidesPerView: 2 },
          1025: { slidesPerView: 4 },
        }}
        className="mySwiper"
      >
        {[paquetes, viajes, aereos, hoteles, alquilerAutos, bodas, lunasdemiel, traslados, eventosDeportivos, asistenciaalviajero].map((img, i) => (
          <SwiperSlide key={i}>
            <img src={img} alt="" className="card-image" />
          </SwiperSlide>
        ))}
      </Swiper>

      <button className="btn-prev"><img src={back} alt="" width="100%" /></button>
      <button className="btn-next"><img src={go} alt="" width="100%" /></button>
    </section>
  );
}
