<script lang="ts">
	import '../app.css';
	import '@fontsource-variable/work-sans';
	import { page } from '$app/state';
	import {
		NavBrand,
		NavHamburger,
		NavUl,
		Navbar,
		Footer,
		FooterLinkGroup,
		FooterLink,
		FooterCopyright
	} from 'flowbite-svelte';
	import { base } from '$app/paths';

	const { children } = $props();

	const getActiveState = (path: string): boolean => {
		const pathNameArray = page.url.pathname.split(/\s*(?=\/)/);
		return pathNameArray.includes(path);
	};
</script>

{#snippet navLink(title: string, link: string)}
	{@const isActive = getActiveState(link)}
	<li class="select-none">
		<a href="{base}{link}" class={isActive ? 'text-primary-700' : undefined}>{title}</a>
	</li>
{/snippet}

<Navbar color="form">
	<NavBrand href="{base}/">
		<span
			class="	select-none self-center whitespace-nowrap text-xl font-extrabold
					text-primary-700 md:text-2xl"
		>
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

<div class="container mx-auto px-2 sm:p-0">
	{@render children()}
</div>

<Footer
	class="	bg-grey-50 absolute bottom-0 start-0 z-20 w-full p-4 text-center md:flex 
			md:items-center md:justify-between md:p-6"
>
	<FooterCopyright href="{base}/" by="Daveren Cordero" year={2025} />
	<FooterLinkGroup
		ulClass="	flex flex-wrap gap-x-4 gap-y-1 justify-center items-center mt-3 text-sm 
					text-gray-500 dark:text-gray-400 md:mt-0"
	>
		<FooterLink liClass="m-0" href="{base}/">About</FooterLink>
		<FooterLink liClass="m-0" href="{base}/">Privacy Policy</FooterLink>
		<FooterLink liClass="m-0" href="{base}/">Licensing</FooterLink>
		<FooterLink liClass="m-0" href="{base}/">Contact</FooterLink>
	</FooterLinkGroup>
</Footer>

<style>
	:global(body) {
		font-family: 'Work Sans Variable', sans-serif;
	}
</style>
