export const SITE = {
	name: 'Jesus Sanz',

	origin: 'https://jsanz.dev',
	basePathname: '/',

	title: 'Jesus Sanz | iOS Softwre Engineer',
	description: '🧑🏻‍💻 Jesus Sanz | iOS Software Engineer Portfolio',

	// googleAnalyticsId: false, // or "G-XXXXXXXXXX",
	// googleSiteVerificationId: 'orcPxI47GSa-cRvY11tUe6iGg2IO_RPvnA1q95iEM3M',
};

export const BLOG = {
	disabled: false,
	postsPerPage: 4,

	blog: {
		disabled: false,
		pathname: 'blog', // blog main path, you can change this to "articles" (/articles)
	},

	post: {
		disabled: false,
		pathname: '', // empty for /some-post, value for /pathname/some-post 
	},

	category: {
		disabled: false,
		pathname: 'category', // set empty to change from /category/some-category to /some-category
	},

	tag: {
		disabled: false,
		pathname: 'tag', // set empty to change from /tag/some-tag to /some-tag
	},
};
export const PORT = {
	disabled: false,
	postsPerPage: 4,

	portfolio: {
		disabled: false,
		pathname: 'portfolio', // portfolio main path, you can change this to "articles" (/articles)
	},

	portfolioPost: {
		disabled: false,
		pathname: 'portfolio-post', // empty for /some-post, value for /pathname/some-post 
	},

	category: {
		disabled: true,
		pathname: 'category', // set empty to change from /category/some-category to /some-category
	},

	tag: {
		disabled: true,
		pathname: 'tag', // set empty to change from /tag/some-tag to /some-tag
	},
};
