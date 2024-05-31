import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import CardComponent from './CardComponent';
import { NavLoggedIn, NavLoggedOut } from '@/components/ui/navbar';
import LandingPage from './landingPage';

export const dynamic = 'force-dynamic'

export default async function Projects() {
    const { isAuthenticated, getUser } = getKindeServerSession();
    let user;

    if (await isAuthenticated()){
        user = await getUser();
    }

    return (await isAuthenticated()) ? (
        <main>
            <NavLoggedIn user={user}/>
            <CardComponent/>
        </main>
    ) : (
        <main>
            {/* <NavLoggedOut/> */}
            <LandingPage/>
        </main>
    )
}
