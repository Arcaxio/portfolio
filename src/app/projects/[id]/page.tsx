import Link from 'next/link';
import { fetchCardData, updateCard } from '../fetch';
import { DeleteButton } from '@/components/ui/buttons';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { NavLoggedIn, NavLoggedOut } from '@/components/ui/navbar';


export default async function Page({ params }: { params: { id: string } }) {
    const { isAuthenticated, getUser } = getKindeServerSession();
    let user;

    if (await isAuthenticated()){
        user = await getUser();
    }
    
    const id = params.id;
    const [data] = await Promise.all([
        fetchCardData(id)
    ]);
    const updateCardContents = updateCard.bind(null, id)

    return (await isAuthenticated()) ? (
        <main>
            <NavLoggedIn user={user} />

            <div className='px-10 bg-base-300 py-4'>
                <div className="bg-base-100 text-primary flex flex-row justify-between h-20 card rounded-box place-items-center text-xl font-medium px-6 mb-4">
                    <p>Edit Card</p>
                    <DeleteButton id={id}></DeleteButton>
                </div>
                <form action={updateCardContents}>
                    <div className='grid gap-4 place-items-center pb-4'>
                        <input className="text-base-content input input-bordered w-full max-w-xs" type="text" placeholder="Title" defaultValue={data[0].title} id='title' name='title' />
                        <textarea className="text-base-content textarea textarea-bordered w-full max-w-xs" placeholder="Description" defaultValue={data[0].text} id='text' name='text' />
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
    ) : (
        <main>
            <NavLoggedOut/>
        </main>
    )
}