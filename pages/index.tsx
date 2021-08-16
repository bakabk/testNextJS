import Router from 'next/router'
import MainLayout from "../components/MainLayout";

export default function Main() {
    const handleGoToPosts = () => {
        Router.push('/posts');
    }

    const handleGoHome = () => {
        Router.push('/');
    }

    return <>
        <MainLayout title={'Main page'}>
            <div>
                <button onClick={handleGoHome}>Go home</button>
                <button onClick={handleGoToPosts}>Go to posts</button>
            </div>
        </MainLayout>
    </>;
}