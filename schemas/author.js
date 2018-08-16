export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'tagline',
      title: 'Bold Tagline',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96
      }
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'text'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      type: 'object',
      name: 'feeds',
      title: 'My Feeds',
      fieldsets: [
        {name: 'social', title: 'Social media handles'}
      ],
      fields: [
        {
          name: 'phone',
          title: 'Phone',
          type: 'string',
          fieldset: 'social'
        },
        {
          name: 'email',
          title: 'E-mail',
          type: 'string',
          fieldset: 'social'
        },
        {
          name: 'linkedin',
          title: 'LinkedIn',
          type: 'url',
          fieldset: 'social'
        },
        {
          name: 'instagram',
          title: 'Instagram',
          type: 'url',
          fieldset: 'social'
        },
        {
          name: 'github',
          title: 'GitHub',
          type: 'url',
          fieldset: 'social'
        },
        {
          name: 'flickr',
          title: 'Flickr',
          type: 'url',
          fieldset: 'social'
        },
        {
          name: 'biolinks',
          title: 'My Links',
          type: 'array',
          of: [
            {type: 'reference', to: {type: 'links'}}
          ]
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image'
    }
  }
}
