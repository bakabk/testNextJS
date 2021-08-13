import {useState, useEffect} from 'react';
import MainLayout from "../components/MainLayout";
import Link from 'next/link';

export default function Posts({posts}) {
    const preparePosts = (posts) => {
        return <ul>
            {posts.map(post => <li key={`${post.id}${post.name}`}>
                <p><Link href='/post/[id]' as={`/post/${post.id}`}>{post.name}</Link></p>
                <p>{post.text}</p>
            </li>)}
        </ul>
    }

    // useEffect(() => {
    //     const loadPosts = async () => {
    //         const res = await fetch('http://localhost:3001/posts');
    //         const json = await res.json();
    //         console.log(json);
    //         setPosts(json);
    //     }
    //
    //     loadPosts();
    // }, [])

    return <>
        <MainLayout title={'Posts page'}>
            Тут скоро появятся пользователи
            {preparePosts(posts)}
        </MainLayout>
    </>;
}

Posts.getInitialProps = async (ctx) => {
    const res = await fetch('http://localhost:3001/posts');
    const posts = await res.json();
    return {posts}
}