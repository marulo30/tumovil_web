import React from "react";
import "../../App.css";
import Footer from "../Footer";
import Hero from "../Hero";
import PanelLeft from "../PanelLeft";
import PanelRight from "../PanelRight";
import Registro from "../Registro";

export default function Aliados() {
  return (
    <>
      <Hero
        title="ALIADOS"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor felis id varius vulputate."
        // image="images/driver.jpg"
        video="/videos/video-1.mp4"
      />
      <PanelLeft
        style="panel-uno"
        image="/images/img-1.jpg"
        title="Un aliado de TuMovil es muy importante para nosotros."
        text="Nuestra misión es que puedas comunicarte con tus clientes actuales y futuros. Tu servicio, tu pronta respuesta a una solicitud de servicio, la tarifa que cobres y la calidad de tu servicio marcaran la diferencia. Estamos seguros  que la APP facilitara que cumplas con tus metas."
      />
      <PanelRight
        style="panel-dos"
        image="/images/img-2.jpg"
        title="Con nuestra app puedes:"
        text="Recibir las solicitudes de tus clients actuales o futuros.\n
        Conocer el destino de la solicitud antes de comenzarla.\n
        Rechazar o aceptar solicitudes de servicio.\n
        Recibir reservas de servicios para horas o dias siguientes.\n
        Acceder a beneficios exclusivos con nuestras empresas aliadas.\n
        Con nuestra app alguien te buscara o contactara con lo cual tu eficiencia en la prestacion del servicio aumentara.\n
        "
      />
      <PanelLeft
        style="panel-tres"
        image="/images/img-3.jpg"
        title="Sobre nuestra seguridad:"
        text="Todos tus viajes quedaran registrados en una base de datos.
        Mantendremos la privacidad de numeros telefonicos.\n
        Tu servicio sera valorado y puedes ser elegido como un conductor preferido.\n
        Mantendremos soporte tecnico 24/7.\n
        Podras asistir a sesiones informativas sobre la app de manera virtual.
      "
      />
      <PanelRight
        style="panel-uno"
        image="/images/img-7.jpg"
        title="Requisitos para ser un aliado"
        text="Condiciones:\n
        \n
        Ser mayor de edad y tener una licencia de conduccion vigente.\n
        Un vehiculo afiliado a una empresa de transporte.\n
        Convenio aceptado y firmado entre el Conductor La empresa de Transporte y Tumovil.\n
        \n
        Documentos:\n
        Licencia de conduccion colombiana vigente y active (categorias B1,B2,B3).\n
        Tarjeta  de propiedad del vehiculo inscrito a nombre del conductor aliado o en su defecto carta de autorizacion para operar expedida por el propietario del vehiculo y que figure en la tarjeta de propiedad.\n
        SOAT Vigente e inscrito en el Runt.\n
        Foto (selfie) donde tambien se registre una imagen de la licencia de conducir.\n
        "
      />
      <PanelLeft
        style="panel-dos"
        image="/images/img-8.jpg"
        title="Tambien Puedes ser un taxi aliado"
        text="Todos tus viajes quedaran registrados en una base de datos.
        Alianzas con empresas acreditadas de servicio de taxis es una opcion que opera en ciudades intermedias.\n
        Con tu Movil puedes buscar el servicio de taxis en ciudades INTERMEDIAS.
      "
      />
      <PanelRight
        style="panel-tres"
        image="/images/img-9.jpg"
        title="Requisitos para ser un taxi aliado"
        text="Condiciones:\n
        Estar afiliado a la empresa de taxis que establezca alianzas de colaboracion con TuMovil\n
        Tener toda la documentancion que exija la empresa de Taxis vigente y estar al dia con todos los compromisos con dicha empresa.\n
        Para tener acceso a la app TuMovil Aliado Taxista debe registrar toda la documentacion legal.\n
        Cedula de Identidad valida vigente.\n
        Permisos y documentos  exigidos por la secretaria de transito local (licencia de conducIr profesional categoria A1,A2,A3, )
      "
      />
      <Registro />
      <Footer />
    </>
  );
}
