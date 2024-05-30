import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { fetchData } from './fetch';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

export default async function CardComponent() {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    const data = await fetchData();

    return (
        <div className='px-10 bg-base-300'>
            <div className="flex flex-col w-full border-opacity-50">
                <div className="bg-base-100 text-primary grid h-20 card rounded-box place-items-center text-xl font-medium my-4">Act 1</div>
                <div className="grid xl:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-4 mb-4">
                    {
                        data?.map((data) => (
                            data.act === 1 && user?.id === data.owner ?
                                <Link key={data.id} href={`/projects/${data.id}`}>
                                    <Card id={data.id} title={data.title} text={data.text} />
                                </Link>
                                : null
                        ))
                    }
                    <Link href='/projects/create'>
                        <Card />
                    </Link>
                </div>
                <div className="bg-base-100 text-primary grid h-20 card rounded-box place-items-center text-xl font-medium my-4">Act 2</div>
                <div className="grid xl:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-4 mb-4">
                    {
                        data?.map((data) => (
                            data.act === 2 && user?.id === data.owner ?
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
                <div className="bg-base-100 text-primary grid h-20 card rounded-box place-items-center text-xl font-medium my-4">Act 3</div>
                <div className="grid xl:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-4 mb-4">
                    {
                        data?.map((data) => (
                            data.act === 3 && user?.id === data.owner ?
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
    )
}