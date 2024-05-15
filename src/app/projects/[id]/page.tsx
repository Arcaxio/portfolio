import { notFound } from 'next/navigation';
import Link from 'next/link';
import { fetchCardData, updateCard } from '../fetch';
import { revalidatePath } from 'next/cache';


export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const [data] = await Promise.all([
        fetchCardData(id)
    ]);
    const updateCardContents = updateCard.bind(null, id)
    revalidatePath(`/projects/${id}`);

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
                <form action={updateCardContents}>
                    <div className="grid h-20 card bg-base-300 rounded-box place-items-center my-4 text-xl font-medium">Edit Page {id}</div>
                    <div className='grid place-items-center'>
                        <input type="text" placeholder="Title" className="input input-bordered w-full max-w-xs" defaultValue={data[0].title} id='title' name='title'/>
                        <textarea className="textarea textarea-bordered w-full max-w-xs my-4" placeholder="Description" defaultValue={data[0].text} id='text' name='text'/>
                    </div>
                    <div className='flex justify-center flex-wrap'>
                        <Link href='/projects'>
                            <button className="btn btn-primary my-2 mx-4">Back</button>
                        </Link>
                        <button className="btn btn-primary my-2 mx-4" type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </main>
    );
}