import type { SvelteComponent } from 'svelte';
import type { PageLoad } from '../$types';

export const load: PageLoad<{ Blog: SvelteComponent; metadata: Record<string, any> }> = async (
	event
) => {
	const { params } = event;
	const blog = await import(`../../../content/blogs/${(params as { postId: string }).postId}.svx`);
	return { Blog: blog.default, metadata: blog.metadata };
};
