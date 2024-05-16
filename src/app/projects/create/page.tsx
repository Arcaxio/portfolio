import Link from 'next/link';
import { addCard } from '../serverFetch';

export default async function Page() {
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
    );
}