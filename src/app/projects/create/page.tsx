import Link from 'next/link';
import { addCard } from '../serverFetch';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { NavLoggedIn, NavLoggedOut } from '@/components/ui/navbar';

export default async function Page() {
    const { isAuthenticated, getUser } = getKindeServerSession();
    const user = await getUser();

    return (await isAuthenticated()) ? (
        <main>
            <NavLoggedIn user={user} />

            <div className='px-10 bg-base-300 py-4'>
                <div className="bg-base-100 text-primary flex flex-row justify-between h-20 card rounded-box place-items-center text-xl font-medium px-6 mb-4">
                    <p>Add New Card</p>
                </div>
                <form action={addCard}>
                    <div className='text-neutral grid gap-4 place-items-center pb-4'>
                        <select className="select select-bordered w-full max-w-xs" id='act' name='act'>
                            <option value="1">Act 1</option>
                            <option value="2">Act 2</option>
                            <option value="3">Act 3</option>
                        </select>
                        <input type="text" placeholder="Title" className="input input-bordered w-full max-w-xs" id='title' name='title' />
                        <textarea className="textarea textarea-bordered w-full max-w-xs" placeholder="Description" id='text' name='text' />
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