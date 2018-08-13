import Link from 'next/link'
import Layout from '../components/layout'
import fetch from 'isomorphic-unfetch'
import sanity from '../lib/sanity'
import sanityClient from '../lib/sanity'


const Index = (props) => (
  <Layout>
    <h1>This is the title</h1>
    <ul>
    {props.posts.map(({post}) => (
      <li key={post.id}>
          <Link as={`/post/${post.id}`} href={`/post?id=${post.id}`}>
            <a>{post.name}</a>
          </Link>
        </li>
      ))}
      //
      // <PostLink id="web-development" title="Web Development"/>
      // <PostLink id="other-projects" title="Other projects"/>
    </ul>
  </Layout>
)

Index.getInitialProps = async function() {
  const res = await fetch('https://pphn0i1g.api.sanity.io/v1/data/query/production?query=*[type=="category"][0...5]')
  const data = await res.json()
  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    posts: data
  }
}
export default Index
