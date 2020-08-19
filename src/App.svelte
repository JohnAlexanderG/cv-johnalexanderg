<script>
    import Contact from './components/Contact.svelte';
    import About from './components/About.svelte';
    import Certificates from './components/Certificates.svelte';
    import WorkExperience from './components/WorkExperience.svelte';
    import Skills from './components/Skills.svelte';

    export let email;
    export let phone;
    export let shortName;
    export let position;
</script>

<style>

    @import url('https://fonts.googleapis.com/css2?family=Chelsea+Market&family=Comfortaa:wght@300;400;500;600;700&display=swap');
    /* font-family: 'Chelsea Market', cursive; */
    /* font-family: 'Comfortaa', cursive; */

    :global(:root) {
        --base-text-color: #3E423A;
        --base-bg-color: #F2F2F2;
        --base-font: 'Comfortaa', cursive;
        --base-font-size: 16px;
    }

    :global(body) {
        background-color: var(--base-bg-color);
        color: var(--base-text-color);
        font-family: var(--base-font);
        font-weight: 400;
        font-size: var(--base-font-size);
    }

    main {
        /* background-color: rgba(0, 0, 0, 0.1); */
        max-width: 1024px;
        margin: 0 auto;
        height: auto;
        padding: 1rem;
    }
    @media screen and (min-width:1024px) {
        main {
            padding: 2rem;
        }
    }

    .w-exp-and-skills {
        display: flex;
        flex-direction: column;
        justify-content: space-between; 
    }
    @media screen and (min-width:1024px) {
        .w-exp-and-skills {
            flex-direction: row;
        }
    }
</style>

<main>
    <Contact { email } { phone } />
    <About { shortName } { position } />
    <Certificates />
    <section class="w-exp-and-skills">
        <WorkExperience />
        <Skills />
    </section>
</main>