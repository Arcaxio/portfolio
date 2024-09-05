import Link from 'next/link';
import { addCard } from '../serverFetch';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { NavLoggedIn, NavLoggedOut } from '@/components/ui/navbar';

export default async function Page() {
    const { isAuthenticated, getUser } = getKindeServerSession();
    let user;

    if (await isAuthenticated()){
        user = await getUser();
    }

    return (await isAuthenticated()) ? (
        <main>
            <NavLoggedIn user={user} />

            <div className='px-10 bg-base-300 py-4'>
                <div className="bg-base-100 text-primary flex flex-row justify-between h-20 card rounded-box place-items-center text-xl font-medium px-6 mb-4">
                    <p>Add New Card</p>
                </div>
                <form action={addCard}>
                    <div className='grid gap-4 place-items-center pb-4'>
                        <select className="text-base-content select select-bordered w-full max-w-xs" id='act' name='act'>
                            <option value="1">Act 1</option>
                            <option value="2">Act 2</option>
                            <option value="3">Act 3</option>
                        </select>
                        <input className="text-base-content input input-bordered w-full max-w-xs" type="text" placeholder="Title" id='title' name='title' />
                        <textarea className="text-base-content textarea textarea-bordered w-full max-w-xs h-36" placeholder="Description" id='text' name='text' />
                        <input className='hidden' value={user?.id} id='owner' name='owner' />
                        <div>
                            <Link href='/projects'>
                                <button className="btn btn-primary btn-outline me-16">Back</button>
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