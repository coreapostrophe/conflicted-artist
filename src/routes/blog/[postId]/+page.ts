import type { PageLoad } from '../$types';

export const load: PageLoad = async (event) => {
	const { params } = event;
	const blog = await import(`../../../content/blogs/${(params as { postId: string }).postId}.svx`);
	return { Blog: blog.default };
};
