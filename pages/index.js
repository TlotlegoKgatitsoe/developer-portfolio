import Layout from '../components/MyLayout'
import Image from 'react-bootstrap/Image'

export default () => (
	<Layout>
	    <h1> My Developer Portfolio Using Next.js </h1>
	    <Image className='my-image' src="/static/images/nextLogo.png" thumbnail />
		<style jsx>{`
			body {
				background-color: #f1f1f1
			}
			h1 {
				color: gray;
				margin: 8px 0px;
				text-decoration: underline;
			}
		`}</style>
  	</Layout>
);