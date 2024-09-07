"use client";

import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import { LoginLink, LogoutLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs/components';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import Link from 'next/link';
import CIcon from "@coreui/icons-react";
import { cilAccountLogout, cilHome } from "@coreui/icons";
import Image from 'next/image'

export const NavLoggedIn = ({
    children,
    user,
}: {
    children?: React.ReactNode;
    user?: KindeUser<any> | null;   //Added any
}) => {
    return (
        <div className="bg-base-100 navbar grid grid-cols-4 gap-2 px-12">
            <Link href='/' className="justify-self-start">
                <button className="btn btn-primary btn-circle">
                    <CIcon icon={cilHome} height={24} />
                </button>
            </Link>
            <div className="justify-self-start btn btn-primary btn-circle">
                <ThemeToggle />
            </div>
            <div className='avatar justify-self-end'>
                <div className='w-12 rounded-full mx-2'>
                    {user?.picture ? (
                        <Image
                            className="avatar-picture"
                            src={user?.picture}
                            alt="user profile avatar"
                            referrerPolicy="no-referrer"
                            width={48}
                            height={48}
                            />
                        ) : (
                            <Image
                            className="avatar-picture"
                            src="https://www.publicdomainpictures.net/pictures/30000/velka/plain-white-background.jpg"
                            alt="user profile avatar"
                            referrerPolicy="no-referrer"
                            width={48}
                            height={48}
                        />
                    )}
                </div>
                <h1 className='text-xl text-primary mx-2 max-md:hidden'>Welcome, {user?.given_name}</h1>
            </div>
            <div className="justify-self-end">
                <LogoutLink>
                    <button className="btn btn-primary">
                        <CIcon icon={cilAccountLogout} height={24} />
                        <h1 className="max-md:hidden">Logout</h1>
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
            <div className="bg-base-100 navbar grid grid-cols-4 gap-2 px-12">
                <Link href='/' className="justify-self-start">
                    <button className="btn btn-circle">
                        <CIcon icon={cilHome} height={24} />
                    </button>
                </Link>
                <div className="justify-self-start">
                    <ThemeToggle />
                </div>
                <div>

                </div>
                <div className="justify-self-end">
                    <LoginLink>
                        <div className="btn btn-primary">
                            Login
                        </div>
                    </LoginLink>
                    <RegisterLink>
                        <div className="btn btn-primary ms-4">
                            Register
                        </div>
                    </RegisterLink>
                </div>
            </div>

            <div className='h-96 grid place-content-center bg-base-300 px-6'>
                <h1 className='text-5xl text-base-content'>
                    This page is protected, please login to view it
                </h1>
            </div>
        </>
    )
}