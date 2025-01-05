<script lang="ts">
	import '../app.css';
	import '@fontsource-variable/work-sans';
	import { page } from '$app/state';
	import {
		NavBrand,
		NavHamburger,
		NavUl,
		NavLi,
		Navbar,
		Footer,
		FooterLinkGroup,
		FooterLink,
		FooterCopyright
	} from 'flowbite-svelte';
	import { base } from '$app/paths';

	const { children } = $props();
</script>

{#snippet navLink(title: string, link: string)}
	<NavLi href="{base}{link}">{title}</NavLi>
{/snippet}

<Navbar color="form">
	<NavBrand href="{base}/">
		<span class="self-center whitespace-nowrap text-xl font-extrabold text-primary-700 md:text-2xl">
			Conflicted Artist
		</span>
	</NavBrand>
	<NavHamburger />
	<NavUl class="mr-3" activeUrl={page.url.pathname}>
		{@render navLink('Home', '/')}
		{@render navLink('Blog', '/blog')}
		<!-- <NavLi href="/photography">Photography</NavLi> -->
		<!-- <NavLi href="/projects">Projects</NavLi> -->
		<!-- <NavLi href="/illustrations">Projects</NavLi> -->
		<!-- <NavLi href="/contact">Contact</NavLi> -->
	</NavUl>
</Navbar>

<div class="container mx-auto mt-4 p-2 md:p-0">
	{@render children()}
</div>

<Footer
	class="bg-grey-50 absolute bottom-0 start-0 z-20 w-full p-4 text-center md:flex md:items-center md:justify-between md:p-6"
>
	<FooterCopyright href="/" by="Daveren Cordero" year={2025} />
	<FooterLinkGroup
		ulClass="flex flex-wrap gap-x-4 gap-y-1 justify-center items-center mt-3 text-sm text-gray-500 dark:text-gray-400 md:mt-0"
	>
		<FooterLink liClass="m-0" href="/">About</FooterLink>
		<FooterLink liClass="m-0" href="/">Privacy Policy</FooterLink>
		<FooterLink liClass="m-0" href="/">Licensing</FooterLink>
		<FooterLink liClass="m-0" href="/">Contact</FooterLink>
	</FooterLinkGroup>
</Footer>

<style>
	:global(body) {
		font-family: 'Work Sans Variable', sans-serif;
	}
</style>
