export default {
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title of blog article'
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug of your blog article',
            options: {
                source: 'title'
            }
        },
        {
            name: 'titleImage',
            type: 'image',
            title: 'Title Image',
        },
        {
            name: 'smallDescription',
            type: 'text',
            title: 'Small Description'
        },
        {
            name: 'content',
            type: 'array',
            title: 'Content',
            of: [
                {
                    type: 'block',
                }
            ]
        },
        {
            name: 'isFeatured',
            type: 'boolean',
            title: 'Is Featued'
        },
        {
            name: 'priority',
            type: 'number',
            title: 'Priority',
            validation: (Rule: any) => Rule.integer().positive()
        },
        {
            name: 'date',
            type: 'datetime',
            title: 'Date',
            options: {
                dateFormat: 'YYYY-MM-DD',
            }
        },
        {
            name: 'category',
            type: 'reference',
            title: 'Category',
            to: [{ type: 'category'}]
        }
    ]
}