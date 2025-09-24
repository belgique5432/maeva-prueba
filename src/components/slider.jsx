import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

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

      {/* Botones personalizados */}


      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".btn-next",
          prevEl: ".btn-prev",
        }}
        pagination={{ clickable: true }}
        spaceBetween={20}
        loop={true}
        slidesPerView={4}
        breakpoints={{
          0: { slidesPerView: 1 }, // celulares
          630: {slidesPerView: 2},
          1025: { slidesPerView: 4 }, // tablets/desktop
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={paquetes} alt="paquetes-turisticos" className="card-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={viajes} alt="viajes" className="card-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={aereos} alt="vuelos" className="card-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hoteles} alt="hoteles" className="card-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={alquilerAutos} alt="alquiler-autos" className="card-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bodas} alt="bodas" className="card-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={lunasdemiel} alt="luna-de-miel" className="card-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={traslados} alt="traslados" className="card-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={eventosDeportivos} alt="eventos-deportivos" className="card-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={asistenciaalviajero} alt="asistencia-al-viajero" className="card-image" />
        </SwiperSlide>
      </Swiper>
      <button className="btn-prev"><img src={back} alt="" width="50px"/></button>
      <button className="btn-next"><img src={go} alt="" width="50px"/></button>
    </section>
  );
}
