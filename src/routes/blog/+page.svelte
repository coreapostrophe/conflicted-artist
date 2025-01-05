<script lang="ts">
	import { Card } from 'flowbite-svelte';

	const { data } = $props();
	const { blogPosts } = data;
</script>

<h1 class="mb-4 text-3xl">Posts</h1>

<div class="flex flex-col gap-3">
	{#each blogPosts as blogPost}
		{@const publishedDate = new Date(blogPost.metadata.publishedDate)}

		<div class="w-full cursor-pointer rounded bg-primary-100 px-3 py-2">
			<h2 class="text-xl font-normal">
				{blogPost.metadata.title}
			</h2>
			<p class="text-sm text-gray-500">{publishedDate.toDateString()}</p>
		</div>
	{/each}
</div>
