import Link from 'next/link';

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

            <div className='px-10 py-2'>
                <div className="grid h-20 card bg-base-300 rounded-box place-items-center my-4 text-xl font-medium">Create</div>
            </div>
        </main>
    );
  }