"use client";
import { useEffect, useState } from 'react'
import { useTheme } from "next-themes"


export const ThemeToggle = ({
    children,
}: {
    children?: React.ReactNode;
}) => {

    const { theme, setTheme } = useTheme();

    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    function titleCase(string: string) {
        return string[0].toUpperCase() + string.slice(1).toLowerCase();
    }

    return (
        <>
            <h1 className='text text-primary text-xl max-md:hidden mx-2'>{isClient ? titleCase(theme ?? "") : ''}</h1>
            <input type="checkbox" className="toggle mx-2" onClick={() => theme === "dark" ? setTheme("light") : setTheme("dark")} />
        </>
    )
}