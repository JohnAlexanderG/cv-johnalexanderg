<script>

</script>

<style>
    .certificates-wrapper {
        margin-bottom: 2rem;
    }
    
    .certificates-wrapper .title {
        font-family: 'Chelsea Market', cursive;
        font-weight: normal;
        font-size: 1.75rem;
        margin: 2rem 0;
        text-align: center;
    }

    .certificates-wrapper .certificates {
        display: flex;
        flex-direction: column;
    }
    @media screen and (min-width:1024px) {
        .certificates-wrapper .certificates {
            flex-direction: row;
            justify-content: space-between;
        }
    }

    .certificates-wrapper .certificates .item {
        color: #3A4240;
    }
    .certificates-wrapper .certificates .item,
    .certificates-wrapper .certificates .item p {
        display: flex;
        align-items: center;
    }
    @media screen and (min-width:1024px) {
        .certificates-wrapper .certificates .item {
            flex-direction: column;
            justify-content: center;
        }
    }

    .certificates-wrapper .certificates .item p img {
        margin-top: 0.5rem;
        margin-right: 0.5rem;
        margin-bottom: 0.5rem;
        margin-left: 0.5rem;
    }
    @media screen and (min-width:1024px) {
        .certificates-wrapper .certificates .item p img {
            order: 2;
            margin-top: 0;
            margin-right: 0;
            margin-bottom: 0;
            margin-left: 0.5rem;
        }
    }
</style>

<section class="certificates-wrapper">
    <h2 class="title">Certificados</h2>
    <div class="certificates">
        <a class="item" href="/cert/vtex.pdf" target="_blank">
            <img style="width:60px;" src="/img/icons/certificate.svg" alt="certificate-icon">
            <p><img style="width:15px;" src="/img/icons/down-arrow.svg" alt="down-arrow-icon">VTEX Support </p>
        </a>
        <a class="item" href="/cert/javascript-avanzado.png" target="_blank">
            <img style="width:60px;" src="/img/icons/certificate.svg" alt="certificate-icon">
            <p><img style="width:15px;" src="/img/icons/down-arrow.svg" alt="down-arrow-icon">JavaScript Avanzado</p>
        </a>
        <a class="item" href="/cert/es6.png" target="_blank">
            <img style="width:60px;" src="/img/icons/certificate.svg" alt="certificate-icon">
            <p><img style="width:15px;" src="/img/icons/down-arrow.svg" alt="down-arrow-icon">ES6 for Everyone</p>
        </a>
        <a class="item" href="/cert/firebase.png" target="_blank">
            <img style="width:60px;" src="/img/icons/certificate.svg" alt="certificate-icon">
            <p><img style="width:15px;" src="/img/icons/down-arrow.svg" alt="down-arrow-icon">Firebase</p>
        </a>
        <a class="item" href="/cert/desarrollo-personal.png" target="_blank">
            <img style="width:60px;" src="/img/icons/certificate.svg" alt="certificate-icon">
            <p><img style="width:15px;" src="/img/icons/down-arrow.svg" alt="down-arrow-icon">Desarrollo personal</p>
        </a>
    </div>
</section>