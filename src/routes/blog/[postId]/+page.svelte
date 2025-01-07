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

	const getScore = (): {
		total: number;
		rating: number;
		ratingCategory: 'bad' | 'alright' | 'good';
	} => {
		const scoreArray = score.split('/');
		const rating = Number(scoreArray?.[0]);
		const total = Number(scoreArray?.[1]);
		const ratingPercentage = rating / total;

		let ratingCategory: 'bad' | 'alright' | 'good' = 'good';

		if (ratingPercentage < 0.33) {
			ratingCategory = 'bad';
		} else if (ratingPercentage < 0.66) {
			ratingCategory = 'alright';
		} else {
			ratingCategory = 'good';
		}

		return { rating, total, ratingCategory };
	};

	const ratingClassDefaults = 'mt-4 inline-block rounded px-2 py-2 text-2xl font-medium';

	const ratingClassMap = {
		bad: 'bg-red-200 text-red-900',
		alright: 'bg-amber-200 text-amber-900',
		good: 'bg-green-200 text-green-900'
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
	<div class={`${ratingClassDefaults} ${ratingClassMap[scoreObject.ratingCategory]}`}>
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
