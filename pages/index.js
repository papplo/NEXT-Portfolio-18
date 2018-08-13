import Link from 'next/link'
import Layout from '../components/layout'

const PostLink = (props) => (
  <li>
    <Link as={`/post/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

export default () => (
  <Layout>
    <h1>This is the title</h1>
    <ul>
      <PostLink id="ux-ui-design" title="Ux/Ui-design"/>
      <PostLink id="web-development" title="Web Development"/>
      <PostLink id="other-projects" title="Other projects"/>
    </ul>
  </Layout>
)
