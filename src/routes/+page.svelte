<script lang="ts"></script>

{#snippet hobbyButtons(title: string, link: string)}
	<a class="font-bold text-primary-700" href={link}>
		<h2 class="text-xl">{title}</h2>
	</a>
{/snippet}

<p class="justify-self-center text-4xl">Hi, I'm Core!</p>
<p class="justify-self-center text-lg">
	I happen to dabble in a lot of creative things that you might find interesting.
</p>

<div class="mt-2 flex justify-center gap-2">
	{@render hobbyButtons('Writing', '/blog')}
</div>
