import MainLayout from "../../components/MainLayout";
import {useState, useEffect} from "react";
import {useRouter} from "next/router";
import Link from 'next/link';

import {IPost} from '../../interfaces/post'
import {NextPageContext} from "next";

interface IPostPageProps {
    post: IPost | null
};

export default function Post({post: serverPost}: IPostPageProps) {
    const [post, setPost] = useState(serverPost);
    const router = useRouter();

    useEffect(() => {
        const load = async () => {
            const {id} = router.query;
            const res = await fetch(`${process.env.API_URL}/posts/${id}`);
            const data = await res.json();
            setPost(data);
        }

        if (!serverPost) load();
    }, [])

    if (!post) {
        return <MainLayout title={'Post data'}>
            <p>Loading ...</p>
        </MainLayout>
    }

    return <MainLayout title={'Post data'}>
        <h1>{post.name}</h1>
        <hr/>
        <p>{post.text}</p>
        <Link href='/posts'><a>Back to posts</a></Link>
    </MainLayout>;
}

interface PostNextPageContext extends NextPageContext {
    query: {
        id: string
    }
}

Post.getInitialProps = async ({query, req}: PostNextPageContext) => {
    if (!req) return {post: null};

    const {id} = query;
    const res = await fetch(`${process.env.API_URL}/posts/${id}`);
    const post: IPost = await res.json();
    return {post}
}