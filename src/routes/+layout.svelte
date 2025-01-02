<script>
	import { page } from '$app/state';
	import '../app.css';
	import { NavBrand, NavHamburger, NavUl, NavLi, Navbar } from 'flowbite-svelte';

	const activeUrl = page.url.pathname;
</script>

<Navbar rounded color="form">
	<NavBrand href="/">
		<span class="self-center whitespace-nowrap text-xl font-bold text-primary-600">
			Conflicted Artist
		</span>
	</NavBrand>
	<NavHamburger />
	<NavUl {activeUrl}>
		<NavLi data-sveltekit-reload href="/">Home</NavLi>
		<NavLi href="/about">Blog</NavLi>
		<NavLi href="/photography">Photography</NavLi>
		<NavLi href="/contact">Contact</NavLi>
	</NavUl>
</Navbar>

<div>
	<slot></slot>
</div>
