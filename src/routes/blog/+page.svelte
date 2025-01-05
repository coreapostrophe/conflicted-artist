<script lang="ts">
	import { Card } from 'flowbite-svelte';

	const { data } = $props();
	const { blogPosts } = data;
</script>

{#snippet postItem()}
	<Card>test</Card>
{/snippet}

<h1 class="text-3xl">Posts</h1>
{@render postItem()}
