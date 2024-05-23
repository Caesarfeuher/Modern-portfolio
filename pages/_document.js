import { Html, Main, Head, NextScript } from 'next/document'
// import Head from 'next/head'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      
       {/* <!-- Primary Meta Tags --> */}
         <title>Akrasi Daniel Portfolio</title>
        <meta name="Akrasi Daniel Portfolio" content="drasdev at work" />
        <meta name="drasdev at work" content="drasdev at work" />
       
       {/* Favicon */}
       <link rel="icon" href="/eng.jpg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/eng.jpg" />
        <link rel="shortcut icon" href="/eng.jpg" type="image/eng.jpg" />

        {/* <!-- Open Graph / Facebook --> */}
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://modern-portfolio-sand.vercel.app/" />
        <meta name="og:title" content="Akrasi Daniel Portfolio" />
        <meta property="og:description" content="Code with Caesar Effortlessly." />
        <meta property="og:image" content="https://modern-portfolio-sand.vercel.app/eng.jpg" />

        {/* <!-- Twitter --> */}
				<meta property="twitter:card" content="summary_large_image" />
        <meta property="og:url" content="https://modern-portfolio-sand.vercel.app/" />
				<meta property="twitter:title" content="Akrasi Daniel Portfolio" />
				<meta property="twitter:description" content="Code with Caesar Effortlessly." />
				<meta property="twitter:image" content="https://modern-portfolio-sand.vercel.app/eng.jpg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}


