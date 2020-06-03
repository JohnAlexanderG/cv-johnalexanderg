<style>
    .work-experience {
        max-width: 480px;
    }    
    @media screen and (min-width:1024px){
        .work-experience {
            width: 50%;
        }
    }

    .work-experience .title-content {
        display: flex;
        align-items: center;
    }

    .title-content .title {
        font-family: 'Chelsea Market', cursive;
        font-weight: normal;
        margin: 0;
        text-align: center;
        font-size: 1.4rem;
    }
    @media screen and (min-width:1024px) {
        .title-content .title {
            font-size: 1.75rem;
        }
    }

    .content {
        border-left: 1px solid #707070;
        margin-left: 15px;
        padding: 2rem;
        padding-left: 1.8125rem;
    }

    .content .title {
        position: relative;
        font-size: 1.25rem;
        font-weight: 700;
    }
    
    .content .title::before {
        content: "";
        position: absolute;
        left: -2.8rem;
        top: -0.25rem;
        background-color: #FFFFFF;
        border: 1px solid #707070;
        border-radius: 50%;
        width: 30px;
        height: 30px;
    }

</style>

<div class="work-experience">
    <div class="title-content">
        <img style="width:30px;margin-right:1rem;" src="/img/icons/work.svg" alt="work-icon">
        <span class="title">Experiencia laboral</span>
    </div>
    <div class="content">
        <div>
            <span class="title">BlackSip - 2019 - 2020</span>
            <p class="text">Desarrollador Front-end trabando en plataformas de eCommerce ( VTEX y Oracle Commerce Cloud ) Soporte en tiendas ( Sony, Haceb, Coomultrasan ) e Implementación con VTEX IO.</p>
        </div>
        <div>
            <span class="title">KIUX S.A.S - 2016 - 2019</span>
            <p class="text">Desarrollador Front-end  en la actualización del sistema de registro de actividades  KIUX desarrollo de aplicación PWA e integración con push notification en firebase.</p>
        </div>
        <div>
            <span class="title">Solmaq Bunzl - 2015</span>
            <p class="text">Auxiliar de servicio al cliente en asesoría y venta de productos de EPP ( Elemenentos de Protección Personal ) y cargos administrativos.</p>
        </div>
        <div>
            <span class="title">Integra TIC S.A.S - 2014</span>
            <p class="text">Desarrollo de sitios web, soporte técnico preventivo, instalación y configuración de CCTV y Telefonía VoIP.</p>
        </div>
    </div>
</div>