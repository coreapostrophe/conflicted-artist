const blogsImport = import.meta.glob('/src/content/blogs/*.svx');

type Metadata = { title: string; publishedDate: Date };

export const getBlogPosts = async () => {
	const blogs = await Promise.all(
		Object.entries(blogsImport).map(async ([path, blogImport]) => {
			const blog = await blogImport();
			const metadata = (blog as { metadata: Metadata }).metadata;
			return { path, metadata };
		})
	);

	return blogs.sort((firstBlog, secondBlog) => {
		const firstBlogDate = new Date(firstBlog.metadata.publishedDate);
		const secondBlogDate = new Date(secondBlog.metadata.publishedDate);
		return firstBlogDate.getTime() - secondBlogDate.getTime();
	});
};
