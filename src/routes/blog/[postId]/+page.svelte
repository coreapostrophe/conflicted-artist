<script lang="ts">
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { Badge, Button, Rating } from 'flowbite-svelte';

	const { data } = $props();
	const { Blog, metadata } = data;
	const { tags, score } = metadata;

	const goBack = () => {
		goto(`${base}/blog`);
	};

	const getScore = (): { total: number; rating: number } => {
		const scoreArray = score.split('/');
		return {
			total: Number(scoreArray?.[1]),
			rating: Number(scoreArray?.[0])
		};
	};
</script>

<Button outline size="sm" class="mb-4 px-3 py-1" onclick={goBack}>Back</Button>

<Blog />

{#if tags?.length}
	<div class="mt-4 flex gap-2">
		{#each tags as tag}
			<Badge border>{tag}</Badge>
		{/each}
	</div>
{/if}

{#if score}
	{@const scoreObject = getScore()}
	<div
		class="	mt-4 inline-block rounded bg-primary-200 px-2 py-2 text-2xl font-medium
				text-primary-900"
	>
		{scoreObject.rating}/{scoreObject.total}
	</div>
{/if}

<style lang="postcss">
	:global {
		h1 {
			@apply mb-2 text-3xl font-semibold;
		}
		p {
		}
	}
</style>
