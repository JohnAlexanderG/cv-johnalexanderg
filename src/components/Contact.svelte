<script>
    import tippy from 'tippy.js';
    import 'tippy.js/dist/tippy.css';

    import { onMount } from 'svelte';

	export let email;
    export let phone;

    let LinkedInButton;
    let GitHubButton;
    let BehanceButton;
    
    onMount(() => {
        tippy(LinkedInButton, {
            content: "LinkedIn/jhonalexanderg",
        });
        tippy(GitHubButton, {
            content: "GitHub/johnalexanderg",
        });
        tippy(BehanceButton, {
            content: "Behance/johnalexanderg",
        });
    });
</script>

<style>
    .contact {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2rem;
    }

    .contact .contact-direct {
        display: none;
    }
    @media screen and (min-width:1024px) {
        .contact .contact-direct {
            display: flex;
        }
    }

    .contact .contact-social-media {
        display: flex;
        justify-content: flex-end;
        width: 100%;
    }
    @media screen and (min-width:1024px) {
        .contact .contact-social-media {
            width: auto;
        }
    }

    .contact .contact-direct .email,
    .contact .contact-direct .phone {
        display: flex;
        align-items: center
    }

    .contact .contact-direct .email {
        margin-right: 2rem;
    }
    .contact .contact-direct .email img,
    .contact .contact-direct .phone img {
        margin-right: 1rem;
    }

    .contact .contact-social-media .item {
        margin-right: 1rem;
    }
    .contact .contact-social-media .item:last-child {
        margin-right: 0;
    }
</style>

<section class="contact">
    <div class="contact-direct">
        <div class="email">
            <img style="width:30px;" src="/img/icons/mail.svg" alt="email-icon">
            <span>{email}</span>
        </div>
        <div class="phone">
            <img style="width:30px;" src="/img/icons/phone.svg" alt="phone-icon">
            <span>{phone}</span>
        </div>
    </div>
    <div class="contact-social-media">
        <a bind:this={LinkedInButton} class="item contact-linkedin" href="https://www.linkedin.com/in/jhonalexanderg/" target="_blank">
            <img style="width:30px;" src="/img/icons/linkedin.svg" alt="linkedin-icon">
        </a>
        <a bind:this={GitHubButton} class="item contact-github" href="https://github.com/johnalexanderg" target="_blank">
            <img style="width:30px;" src="/img/icons/github.svg" alt="github-icon">
        </a>
        <a bind:this={BehanceButton} class="item contact-behance" href="https://www.behance.net/johnalexanderg" target="_blank">
            <img style="width:30px;" src="/img/icons/behance.svg" alt="behance-icon">
        </a>
    </div>
</section>