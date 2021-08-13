import MainLayout from "../../components/MainLayout";
import {useState, useEffect} from "react";
import {useRouter} from "next/router";

export default function Post({post: serverPost}) {
    console.log('serverPost', serverPost);
    const [post, setPost] = useState(serverPost);
    const router = useRouter();

    useEffect(() => {
        const load = async () => {
            console.log('load');
            const {id} = router.query;
            const res = await fetch(`http://localhost:3001/posts/${id}`);
            const data = await res.json();
            setPost(data);
        }

        if (!serverPost) {
            load();
        }
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
    </MainLayout>;
}

Post.getInitialProps = async ({query, req}) => {
    if (!req) return {
        post: null
    };

    const {id} = query;
    const res = await fetch(`http://localhost:3001/posts/${id}`);
    const post = await res.json();
    return {post}
}