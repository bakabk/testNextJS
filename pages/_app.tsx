import NextNprogress from 'nextjs-progressbar';

export default function MyApp({ Component, pageProps }) {
    return <>
            <NextNprogress />
            <Component {...pageProps} />
            <style jsx global>{`
              body {
                font-family: 'Roboto', sans-serif;
              }
            `}</style>
        </>
}