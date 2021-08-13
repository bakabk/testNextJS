import Link from 'next/link'
import Head from "next/head";

export default function MainLayout(props) {
    const {children, title = 'Next App'} = props;

    return <>
        <Head>
            <title>{title}</title>
            <meta name='keywords' content='next, javascript, nextjs, react'/>
            <meta name='descriptopn' content='this is test next project'/>
            <meta charSet='utf-8'/>
        </Head>
        <nav>
            <Link href={'/'}><a>Go to home</a></Link>
            <Link href={'/posts'}><a>Go to posts page</a></Link>
        </nav>
        <main>
            {children}
        </main>
        <footer>
            Footer
        </footer>
        <style jsx>{`
            nav {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                height: 30px;
                background-color: darkblue;
            }
            
            nav a {
              color: white;
              padding: 5px 10px;
              text-decoration: none; 
              line-height: 30px;
            } 
            
            main {
              margin-top: 30px;
              padding: 0.5rem;
            }
            
            footer {
              position: fixed;
              left: 0;
              right: 0;
              bottom: 0;
              height: 30px;
              background-color: darkred;
              color: white;
              line-height: 30px;
              text-align: center;
            }
        `}</style>
    </>;
}