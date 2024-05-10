import { notFound } from 'next/navigation';
import Link from 'next/link';

export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;

    if (!true) {
        notFound();
    }

    return (
        <main>
            <div className="navbar justify-center bg-base-100">
                <Link href='/'>
                    <div className="btn btn-ghost text-xl">
                        Home
                    </div>
                </Link>
            </div>

            <div className='px-10 py-2'>
                <div className="grid h-20 card bg-base-300 rounded-box place-items-center my-4 text-xl font-medium">Edit Page {id}</div>
            </div>
        </main>
    );
}