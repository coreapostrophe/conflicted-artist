import { getBlogPosts } from '$lib';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const blogPosts = (await getBlogPosts()).toReversed();
	return { blogPosts };
};
