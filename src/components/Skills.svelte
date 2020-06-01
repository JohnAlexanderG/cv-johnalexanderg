<script>
    import Rect from './Rect.svelte';
</script>

<style>
    .skills {
        position: relative;
        width: 40%;
        padding-top: 2rem;
    }

    .skills .title-content {
        display: flex;
        align-items: center;
        position: absolute;
        transform: rotate(-90deg);
        top: 8rem;
        left: -8rem;
    }

    .skills .title-content .title {
        font-family: 'Chelsea Market', cursive;
        font-weight: normal;
        font-size: 1.75rem;
        margin: 0;
        text-align: center;
    }

    .skills .content {
        background-color: #ffffff;
        border: 5px solid #3A4240;
        padding: 2rem;
        box-shadow: 10px 10px 0px 0px rgba(58, 66, 64, 0.8);
    }

    .skills .content .item {
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-bottom: 0.5rem; 
    }
    
    .skills .content .item:last-child {
        margin-bottom: 0; 
    }

</style>

<div class="skills">
    <div class="title-content">
        <img style="width:30px;margin-right:1rem;" src="/img/icons/user.svg" alt="user-icon">
        <span class="title">Habilidades</span>
    </div>
    <div class="content">
        <div class="item">
            <span>React</span>				
            <Rect porcent='76' />
        </div>
        <div class="item">
            <span>Javascript</span>				
            <Rect porcent='80' />
        </div>
        <div class="item">
            <span>HTML</span>				
            <Rect porcent='82' />
        </div>
        <div class="item">
            <span>CSS</span>				
            <Rect porcent='82' />
        </div>
        <div class="item">
            <span>Git</span>				
            <Rect porcent='74' />
        </div>
        <div class="item">
            <span>Node JS</span>				
            <Rect porcent='60' />
        </div>
        <div class="item">
            <span>Firebase</span>				
            <Rect porcent='66' />
        </div>
        <div class="item">
            <span>Sass</span>				
            <Rect porcent='58' />
        </div>
        <div class="item">
            <span>Redux</span>				
            <Rect porcent='52' />
        </div>
        <div class="item">
            <span>Flutter</span>				
            <Rect porcent='38' />
        </div>
        <div class="item">
            <span>VTEX</span>				
            <Rect porcent='48' />
        </div>
        <div class="item">
            <span>Svelte</span>				
            <Rect porcent='38' />
        </div>
    </div>
</div>
