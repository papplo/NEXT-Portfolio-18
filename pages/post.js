import {withRouter} from 'next/router'
import Layout from '../components/layout'
import fetch from 'isomorphic-unfetch'

const Post = (props) => {
  console.log('---> ready: ' + props.ready)
return (
  <Layout>
    <h1>{props.posts.map(({post}) => (
      post.result.title
    ))}</h1>
  </Layout>
)}

Post.getInitialProps = async function (context) {
  const ready = false;
  const { id } = context.query
  const sanityUrl = 'https://pphn0i1g.api.sanity.io/v1/data/query/production?query='
  const sanityQuery = '*[_id == $id]{title,_id, _type, _createdAt, author->{name}}'

  const res = await fetch(sanityUrl + sanityQuery)

  const data = await res.json()
  console.log(`Show data fetched. Count: ${data.length}`)

  console.log(`Fetched post: ${id}`)
  return { posts : res, ready: !ready}
}

export default Post
