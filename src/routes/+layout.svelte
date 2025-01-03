<script lang="ts">
	import '../app.css';
	import '@fontsource-variable/work-sans';
	import { page } from '$app/state';
	import { NavBrand, NavHamburger, NavUl, NavLi, Navbar } from 'flowbite-svelte';
	import { base } from '$app/paths';

	const { children } = $props();
</script>

{#snippet navLink(title: string, link: string)}
	<NavLi class="cursor-pointer" href="{base}{link}">{title}</NavLi>
{/snippet}

<Navbar rounded color="form">
	<NavBrand href="/">
		<span class="self-center whitespace-nowrap text-2xl font-extrabold text-primary-700">
			Conflicted Artist
		</span>
	</NavBrand>
	<NavHamburger />
	<NavUl activeUrl={page.url.pathname}>
		{@render navLink('Home', '/')}
		{@render navLink('Blog', '/blog')}
		<!-- <NavLi href="/photography">Photography</NavLi> -->
		<!-- <NavLi href="/projects">Projects</NavLi> -->
		<!-- <NavLi href="/illustrations">Projects</NavLi> -->
		<!-- <NavLi href="/contact">Contact</NavLi> -->
	</NavUl>
</Navbar>

<div class="container mx-auto mt-4">
	{@render children()}
</div>

<style>
	:global(body) {
		font-family: 'Work Sans Variable', sans-serif;
	}
</style>
