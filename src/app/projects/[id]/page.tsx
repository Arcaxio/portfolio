import { notFound } from 'next/navigation';
import Link from 'next/link';
import { fetchCardData, updateCard } from '../fetch';
import { DeleteButton } from '@/components/ui/buttons';
import { LoginLink, LogoutLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs/components';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';


export default async function Page({ params }: { params: { id: string } }) {
    const { isAuthenticated } = getKindeServerSession();
    const id = params.id;
    const [data] = await Promise.all([
        fetchCardData(id)
    ]);
    const updateCardContents = updateCard.bind(null, id)

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