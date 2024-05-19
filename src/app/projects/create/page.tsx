import Link from 'next/link';
import { addCard } from '../serverFetch';
import { LoginLink, LogoutLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs/components';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

export default async function Page() {
    const { isAuthenticated } = getKindeServerSession();

    return (await isAuthenticated()) ? (
        <main>
            <div className="navbar justify-center gap-4 bg-base-100">
                <Link href='/'>
                    <div className="btn btn-ghost text-xl">
                        Home
                    </div>
                </Link>
                <LogoutLink>
                    <div className="btn btn-secondary text-xl">
                        Logout
                    </div>
                </LogoutLink>
            </div>

            <div className='px-10'>
                <div className="flex flex-row justify-between h-20 card bg-base-300 rounded-box place-items-center text-xl font-medium my-4 px-6">
                    <p>Add New Card</p>
                </div>
                <form action={addCard}>
                    <div className='grid gap-4 place-items-center pb-4'>
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
            <div className="navbar justify-center gap-4 bg-base-100">
                <Link href='/'>
                    <div className="btn btn-ghost text-xl">
                        Home
                    </div>
                </Link>
                <LoginLink>
                    <div className="btn btn-secondary text-xl">
                        Login
                    </div>
                </LoginLink>
                <RegisterLink>
                    <div className="btn btn-secondary text-xl">
                        Register
                    </div>
                </RegisterLink>
            </div>

            <div className='h-96 grid place-content-center bg-primary'>
                <h1 className='text-5xl'>
                    This page is protected, please login to view it
                </h1>
            </div>
        </main>
    )
}