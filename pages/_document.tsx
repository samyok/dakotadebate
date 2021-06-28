import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Mate+SC&family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Aleo:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Merriweather+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap"
                        rel="stylesheet"
                    />
                    <script
                        async
                        defer
                        data-website-id="9581c235-7870-44ae-a4ff-665900654c78"
                        src="https://analytics.dakotadebate.org/umami.js"
                    />
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
