import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { fetchData } from './fetch';

export default async function Projects() {
    const data = await fetchData();

    return (
        <main>
            <div className="navbar justify-center bg-base-100">
                <Link href='/'>
                    <div className="btn btn-ghost text-xl">
                        Home
                    </div>
                </Link>
            </div>

            <div className='px-10'>
                <div className="flex flex-col w-full border-opacity-50">
                    <div className="grid h-20 card bg-base-300 rounded-box place-items-center my-4 text-xl font-medium">Act 1</div>
                    <div className="grid xl:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-4 mb-4">
                        {
                            data?.map((data) => (
                                data.act === 1 ?
                                    <Link key={data.id} href={`/projects/${data.id}`}>
                                        <Card title={data.title} text={data.text} />
                                    </Link>
                                    : null
                            ))
                        }
                        <Link href='/projects/create'>
                            <Card />
                        </Link>
                    </div>
                    <div className="grid h-20 card bg-base-300 rounded-box place-items-center my-4 text-xl font-medium">Act 2</div>
                    <div className="grid xl:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-4 mb-4">
                        {
                            data?.map((data) => (
                                data.act === 2 ?
                                    <Link key={data.id} href={`/projects/${data.id}`}>
                                        <Card title={data.title} text={data.text} />
                                    </Link>
                                    : null
                            ))
                        }
                        <Link href='/projects/create'>
                            <Card />
                        </Link>
                    </div>
                    <div className="grid h-20 card bg-base-300 rounded-box place-items-center my-4 text-xl font-medium">Act 3</div>
                    <div className="grid xl:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-4 mb-4">
                        {
                            data?.map((data) => (
                                data.act === 3 ?
                                    <Link key={data.id} href={`/projects/${data.id}`}>
                                        <Card title={data.title} text={data.text} />
                                    </Link>
                                    : null
                            ))
                        }
                        <Link href='/projects/create'>
                            <Card />
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}
