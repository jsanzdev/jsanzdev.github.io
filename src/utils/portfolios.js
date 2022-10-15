import getReadingTime from 'reading-time';

const getNormalizedPortfolio = async (portfolio) => {
    const { frontmatter, compiledContent, rawContent, file } = portfolio;
    const ID = file.split('/').pop().split('.').shift();

    return {
        id: ID,

        pubDate: frontmatter.pubDate,
        draft: frontmatter.draft,

        canonical: frontmatter.canonical,
        slug: frontmatter.slug || ID,

        title: frontmatter.title,
        description: frontmatter.description,
        body: compiledContent(),
        image: frontmatter.image,

        excerpt: frontmatter.excerpt,
        authors: frontmatter.authors,
        category: frontmatter.category,
        tags: frontmatter.tags,
        readingTime: Math.ceil(getReadingTime(rawContent()).minutes),
    };
};

const load = async function () {
    const portfolios = import.meta.glob('~/../data/portfolio/**/*.md', {
        eager: true,
    });

    const normalizedPortfolios = Object.keys(portfolios).map(async (key) => {
        const portfolio = await portfolios[key];
        return await getNormalizedPortfolio(portfolio);
    });

    const results = (await Promise.all(normalizedPortfolios))
        .sort((a, b) => new Date(b.pubDate).valueOf() - new Date(a.pubDate).valueOf())
        .filter((portfolio) => !portfolio.draft);
    return results;
};

let _portfolios;

/** */
export const fetchPortfolios = async () => {
    _portfolios = _portfolios || load();

    return await _portfolios;
};

/** */
export const findPortfoliosByIds = async (ids) => {
    if (!Array.isArray(ids)) return [];

    const portfolios = await fetchPortfolios();

    return ids.reduce(function (r, id) {
        portfolios.some(function (portfolio) {
            return id === portfolio.id && r.push(portfolio);
        });
        return r;
    }, []);
};
