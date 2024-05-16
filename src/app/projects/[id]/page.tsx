import { notFound } from 'next/navigation';
import Link from 'next/link';
import { fetchCardData, updateCard } from '../fetch';
import { DeleteButton } from '@/components/ui/buttons';

export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const [data] = await Promise.all([
        fetchCardData(id)
    ]);
    const updateCardContents = updateCard.bind(null, id)

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
                <div className="flex flex-row justify-between h-20 card bg-base-300 rounded-box place-items-center text-xl font-medium my-4 px-6">
                    <p>Edit Card</p>
                    <DeleteButton id={id}></DeleteButton>
                </div>
                <form action={updateCardContents}>
                    <div className='grid gap-4 place-items-center pb-4'>
                        <input type="text" placeholder="Title" className="input input-bordered w-full max-w-xs" defaultValue={data[0].title} id='title' name='title' />
                        <textarea className="textarea textarea-bordered w-full max-w-xs" placeholder="Description" defaultValue={data[0].text} id='text' name='text' />
                        <div>
                            <Link href='/projects'>
                                <button className="btn btn-primary me-16">Back</button>
                            </Link>
                            <button className="btn btn-primary ms-16">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    );
}