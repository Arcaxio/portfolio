"use client";

import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import { LoginLink, LogoutLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs/components';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import Link from 'next/link';
import CIcon from "@coreui/icons-react";
import { cilAccountLogout, cilHome } from "@coreui/icons";

export const NavLoggedIn = ({
    children,
    user,
}: {
    children?: React.ReactNode;
    user?: KindeUser | null;
}) => {
    return (
        <div className="bg-base-100 navbar grid grid-cols-4 gap-2 px-12">
            <Link href='/' className="justify-self-start">
                <button className="btn btn-circle">
                    <CIcon icon={cilHome} height={24} className="text-neutral" />
                </button>
            </Link>
            <div className="justify-self-start">
                <ThemeToggle />
            </div>
            <div className='avatar justify-self-end'>
                <div className='w-12 rounded-full mx-2'>
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
                <h1 className='text-xl text-primary mx-2 max-md:hidden'>Welcome, {user?.given_name}</h1>
            </div>
            <div className="justify-self-end">
                <LogoutLink>
                    <button className="btn btn-primary">
                        <CIcon icon={cilAccountLogout} height={24} />
                        <h1 className="max-md:hidden text-base">Logout</h1>
                    </button>
                </LogoutLink>
            </div>
        </div>
    )
}

export const NavLoggedOut = ({
    children,
}: {
    children?: React.ReactNode;
}) => {
    return (
        <>
            <div className="bg-base-100 navbar grid grid-cols-2 gap-2 px-12">
                <Link href='/' className="justify-self-start">
                    <button className="btn btn-circle">
                        <CIcon icon={cilHome} height={24} className="text-neutral" />
                    </button>
                </Link>
                <div className="justify-self-end">
                    <LoginLink>
                        <div className="btn btn-primary text-xl">
                            Login
                        </div>
                    </LoginLink>
                    <RegisterLink>
                        <div className="btn btn-primary text-xl ms-4">
                            Register
                        </div>
                    </RegisterLink>
                </div>
            </div>

            <div className='h-96 grid place-content-center bg-base-300 px-6'>
                <h1 className='text-5xl text-neutral'>
                    This page is protected, please login to view it
                </h1>
            </div>
        </>
    )
}