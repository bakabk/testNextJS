import MainLayout from "../components/MainLayout";
import Link from 'next/link';

export default function Users() {
    return <>
        <MainLayout title={'404'}>
            <h1>404, page not found</h1>
            <Link href='/'><a className='error'>Go to main page</a></Link>
        </MainLayout>
        <style jsx>{`
                .error {
                  color: darkred;
                }
            `}</style>
    </>;
}