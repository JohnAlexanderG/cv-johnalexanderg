<script>
    export let shortName;
	export let position;
</script>

<style>
    .about-me-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center
    }
    @media screen and (min-width:720px) {
        .about-me-wrapper {
            flex-direction: row;
        }
    }    

    .about-me-wrapper .photo {
        width: 100%;
        margin-bottom: 1rem;
    }
    @media screen and (min-width:720px) {
        .about-me-wrapper .photo {
            margin-right: 2rem;
            width: 45%;
        }
    }

    .about-me-wrapper .photo img {
        width: 100%;
        height: 100%;
    }

    .about-me {
        width: 100%;
    }
    @media screen and (min-width:720px) {
        .about-me {
            width: 55%;
        }
    }  

    .about-me .title .name, 
    .about-me .title .position {
        font-family: 'Chelsea Market', cursive;
        font-size: 1.25rem;
        margin: 0;
        font-weight: normal;
    }
    .about-me .title .position {
        font-size: 1.5rem;
    }
    @media screen and (min-width:520px) {
        .about-me .title .name, 
        .about-me .title .position {
            font-size: 2rem
        }
    }
</style>

<section class="about-me-wrapper">
    <div class="photo">
        <img src="/img/photo@2x.png" alt="john-foto-perfil" />  
    </div>
    <div class="about-me">
        <div class="title">
            <h1 class="name">Hola! soy { shortName }</h1>
            <p class="position">{ position }</p>
        </div>
        <div class="text">
            <p>
                Orientado a la calidad y cumplimiento de mis actividades, destaco por tener un enfoque autodidacta lo cual me ha hecho crecer en el mundo del desarrollo y personal.
            </p>
            <p>
                Cuento con amplio conocimiento no solo en el desarrollo, abarco temas de TI, soporte técnico, manejo de herramientas multimedia como lo son Photoshop, Illustrator, After Effects entre otros pero me especializo en el desarrollo Front-end y una parte de Back-end en base de datos no relacionales Firebase y MongoDB, eCommerce con VTEX y desarrollo móvil con Flutter
            </p>
        </div>
    </div>
</section>
