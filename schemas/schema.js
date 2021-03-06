import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import blockContent from './blockContent'
import category from './category'
import links from './links'
import post from './post'
import works from './works'
import author from './author'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([blockContent, post, author, works, links, category])
})
