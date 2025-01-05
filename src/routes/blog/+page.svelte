<script lang="ts">
	import { base } from '$app/paths';

	const { data } = $props();
	const { blogPosts } = data;
	$inspect(blogPosts);
</script>

<h1 class="mb-4 text-3xl">Posts</h1>

<div class="flex flex-col gap-3">
	{#each blogPosts as blogPost}
		{@const slug = blogPost.path.replace('/src/content/blogs/', '').replace('.svx', '')}
		{@const publishedDate = new Date(blogPost.metadata.publishedDate)}
		<a class="w-full cursor-pointer rounded bg-primary-100 px-3 py-2" href="{base}/blog/{slug}">
			<h2 class="text-xl font-normal">
				{blogPost.metadata.title}
			</h2>
			<p class="text-sm text-gray-500">{publishedDate.toDateString()}</p>
		</a>
	{/each}
</div>
