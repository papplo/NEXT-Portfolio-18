import Link from 'next/link'
import Layout from '../components/layout'
import fetch from 'isomorphic-unfetch'
import sanity from '../lib/sanity'
import sanityClient from '../lib/sanity'

import Query from '../lib/query'

const PostLink = (props) => (
  <li>
    <Link as={`/post/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

const Index = (props) => (
  <Layout>
    <h1>This is the title</h1>
    <ul>
      {props.posts.map(({post}) => (
        <li key={post.id}>
          <Link as={`/p/${post.id}`} href={`/post?id=${post.id}`}>
            <a>{post.name} asdad </a>
          </Link>
        </li>
      ))}
      // <PostLink id="ux-ui-design" title="Ux/Ui-design"/>
      // <PostLink id="web-development" title="Web Development"/>
      // <PostLink id="other-projects" title="Other projects"/>
    </ul>
  </Layout>
)

Index.getInitialProps = async function() {
  console.log(this.props);
  // console.log(`Show data fetched. Count: ${data.length}`)

  return {
    posts: await sanity.fetch(Query)
  }
}

export default Index
