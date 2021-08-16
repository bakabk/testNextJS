import {useState, useEffect} from 'react';
import MainLayout from "../components/MainLayout";
import Link from 'next/link';

import {IPost} from '../interfaces/post'
import {NextPageContext} from "next";

interface PostProps {
    posts: IPost[]
}

export default function Posts({posts: serverPosts}: PostProps) {
    const [posts, setPosts] = useState(serverPosts);
    const preparePosts = (posts: IPost[]) => {
        return <ul>
            {posts.map(post => <li key={`${post.id}${post.name}`}>
                <p><Link href='/post/[id]' as={`/post/${post.id}`}>{post.name}</Link></p>
            </li>)}
        </ul>
    }

    useEffect(() => {
        const loadPosts = async () => {
            const res = await fetch('http://localhost:3001/posts');
            const data = await res.json();
            setPosts(data);
        }

        if (!serverPosts) loadPosts();
    }, [])

    const renderData = posts ? preparePosts(posts) : 'Loading ...';

    return <>
        <MainLayout title={'Posts page'}>
            <h2>Тут список постов:</h2>
            {renderData}
        </MainLayout>
    </>;
}

Posts.getInitialProps = async ({req}: NextPageContext) => {
    if (!req) return {posts: null};

    const res = await fetch('http://localhost:3001/posts');
    const posts: IPost[] = await res.json();
    return {posts}
}