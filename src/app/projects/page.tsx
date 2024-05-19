import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { fetchData } from './fetch';
import { LoginLink, LogoutLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs/components';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import CardComponent from './CardComponent';

export const dynamic = 'force-dynamic'

export default async function Projects() {
    const { isAuthenticated, getUser } = getKindeServerSession();
    const user = await getUser();

    return (await isAuthenticated()) ? (
        <main>
            <div className="navbar justify-center gap-4 bg-base-100">
                <div className='avatar'>
                    <div className='w-12 rounded-full'>
                        {user?.picture ? (
                            <img
                                className="avatar-picture"
                                src={user?.picture}
                                alt="user profile avatar"
                                referrerPolicy="no-referrer"
                            />
                        ) : (
                            <img
                                className="avatar-picture"
                                src="https://www.publicdomainpictures.net/pictures/30000/velka/plain-white-background.jpg"
                                alt="user profile avatar"
                                referrerPolicy="no-referrer"
                            />
                        )}
                    </div>
                </div>
                <h1 className='text-xl'>Welcome, {user?.given_name}</h1>
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

            <CardComponent />
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
