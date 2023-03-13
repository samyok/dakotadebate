import Document, { Head, Html, Main, NextScript } from "next/document";

const gtm = `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-10862125283');`;
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel={"preconnect"} href={"https://fonts.googleapis.com"} />
          <link rel={"preconnect"} href={"https://fonts.gstatic.com"} />
          <link
            href={
              "https://fonts.googleapis.com/css2?family=Gothic+A1:wght@100;200;300;400;500;600;700;800;900&family=Spectral:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap"
            }
            rel={"stylesheet"}
          />

          <script
            async
            defer
            data-website-id={"9581c235-7870-44ae-a4ff-665900654c78"}
            src={"/a.js"}
            data-host-url={"https://analytics.dakotadebate.org"}
            data-domains={"dakotadebate.org"}
          />
          {/* eslint-disable-next-line @next/next/next-script-for-ga */}
          <script async src={"https://www.googletagmanager.com/gtag/js?id=AW-10862125283"} />
          {/* eslint-disable-next-line react/no-danger */}
          <script dangerouslySetInnerHTML={{ __html: gtm }} />

          <meta name={"theme-color"} content={"#000"} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
