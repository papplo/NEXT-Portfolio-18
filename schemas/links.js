export default {
  name: 'links',
  title: 'Links',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string'
    },
    {
      name: 'url',
      title: 'Url',
      type: 'string'
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'url',
      description: 'category'
    }
  }

}
