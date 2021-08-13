import MainLayout from "../components/MainLayout";
import Link from 'next/link';

import style from '/pages/404.module.css';

export default function Users() {
    return <>
        <MainLayout title={'404'}>
            <h1>404, page not found</h1>
            <Link href='/'><a className={style.error}>Go to main page</a></Link>
        </MainLayout>
    </>;
}