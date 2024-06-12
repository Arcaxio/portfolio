import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { fetchData } from './fetch';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

export default async function CardComponent() {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    const data = await fetchData();

    return (
        <div className='px-10 bg-base-300'>
            <div className="flex flex-col w-full border-opacity-50">
                {/* First Drawer */}
                <div className="drawer">
                    <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        <label htmlFor="my-drawer-1" className="drawer-button bg-base-100 text-primary hover:bg-primary hover:text-white grid h-20 card rounded-box place-items-center text-xl font-medium cursor-pointer my-4">Act 1</label>
                        <div className="grid xl:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-4 mb-4">
                            {
                                data?.map((data) => (
                                    data.act === 1 && user?.id === data.owner ?
                                        <Link key={data.id} href={`/projects/${data.id}`}>
                                            <Card id={data.id} title={data.title} text={data.text} />
                                        </Link>
                                        : null
                                ))
                            }
                            <Link href='/projects/create'>
                                <Card />
                            </Link>
                        </div>

                        {/* Second Drawer */}
                        <div className="drawer">
                            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content">
                                <label htmlFor="my-drawer-2" className="drawer-button bg-base-100 text-primary hover:bg-primary hover:text-white grid h-20 card rounded-box place-items-center text-xl font-medium cursor-pointer my-4">Act 2</label>
                                <div className="grid xl:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-4 mb-4">
                                    {
                                        data?.map((data) => (
                                            data.act === 2 && user?.id === data.owner ?
                                                <Link key={data.id} href={`/projects/${data.id}`}>
                                                    <Card id={data.id} title={data.title} text={data.text} />
                                                </Link>
                                                : null
                                        ))
                                    }
                                    <Link href='/projects/create'>
                                        <Card />
                                    </Link>
                                </div>

                                {/* Third Drawer */}
                                <div className="drawer">
                                    <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                                    <div className="drawer-content">
                                        <label htmlFor="my-drawer-3" className="drawer-button bg-base-100 text-primary hover:bg-primary hover:text-white grid h-20 card rounded-box place-items-center text-xl font-medium cursor-pointer my-4">Act 3</label>
                                        <div className="grid xl:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-4 mb-4">
                                            {
                                                data?.map((data) => (
                                                    data.act === 3 && user?.id === data.owner ?
                                                        <Link key={data.id} href={`/projects/${data.id}`}>
                                                            <Card id={data.id} title={data.title} text={data.text} />
                                                        </Link>
                                                        : null
                                                ))
                                            }
                                            <Link href='/projects/create'>
                                                <Card />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="drawer-side">
                                        <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                                        <ul className="menu p-4 w-10/12 sm:w-4/5 md:w-9/12 xl:w-2/5 min-h-full bg-base-200 text-base-content text-xl">
                                            {/* Sidebar drawer3 here */}
                                            <li className='p-4'>
                                                BREAK INTO 3 (80%)
                                                <br></br>
                                                The “aha!” moment. The hero realizes what they must do to not only fix all of the problems created in Act 2, but more important, fix themselves. The arc is nearly complete.
                                            </li>
                                            <li className='p-4'>
                                                FINALE (80% TO 99%)
                                                <br></br>
                                                The hero proves they have truly learned the theme and enacts the plan they came up with in the Break Into 3. Bad guys are destroyed, flaws are conquered, lovers are reunited. Not only is the hero’s world saved, but it’s a better place than it was before.

                                            </li>
                                            <li className='p-4'>
                                                FINAL IMAGE (99% TO 100%)
                                                <br></br>
                                                A mirror to the Opening Image, this is the “after” snapshot of who the hero is after going through this epic and satisfying transformation.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="drawer-side">
                                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                                <ul className="menu p-4 w-10/12 sm:w-4/5 md:w-9/12 xl:w-2/5 min-h-full bg-base-200 text-base-content text-xl">
                                    {/* Sidebar drawer2 here */}
                                    <li className='p-4'>
                                        BREAK INTO 2 (20%)
                                        <br></br>
                                        The moment the hero decides to accept the call to action, leave their comfort zone, try something new, or venture into a new world or new way of thinking. It's a decisive action beat that separates the status quo world of Act 1 from the new “upside-down” world of Act 2.
                                    </li>
                                    <li className='p-4'>
                                        B STORY (22%)
                                        <br></br>
                                        The introduction of a new character or characters who will ultimately serve to help the hero learn the theme. Also referred to as a helper character, this can be a love interest, a nemesis, a mentor, a family member, or a friend.

                                    </li>
                                    <li className='p-4'>
                                        FUN AND GAMES (20% TO 50%)
                                        <br></br>
                                        This is where we see the hero in their new world. They’re either loving it or hating it. Succeeding or floundering. Also called the promise of the premise, this section represents the “hook” of the story (why the reader picked up the novel in the first place).
                                    </li>
                                    <li className='p-4'>
                                        MIDPOINT (50%)
                                        <br></br>
                                        Literally the middle of the novel, where the Fun and Games culminates in either a false victory (the hero has thus far been succeeding) or a false defeat (the hero has thus far been floundering). Something should happen here to raise the stakes and push the hero toward real change.
                                    </li>
                                    <li className='p-4'>
                                        BAD GUYS CLOSE IN (50% TO 75%)
                                        <br></br>
                                        If the Midpoint was a false victory, this section will be a downward path where things get progressively worse for the hero. If the Midpoint was a false defeat, this section will be an upward path where things seem to get progressively better for the hero. But regardless of path, the hero’s deep-rooted flaws (or internal bad guys) are closing in.
                                    </li>
                                    <li className='p-4'>
                                        ALL IS LOST (75%)
                                        <br></br>
                                        The lowest point of the novel. An action beat where something happens to the hero that, combined with the internal bad guys, pushes the hero to rock bottom.
                                    </li>
                                    <li className='p-4'>
                                        DARK NIGHT OF THE SOUL (75% TO 80%)
                                        <br></br>
                                        A reaction beat where the hero takes time to process everything that’s happened thus far. The hero should be worse off than at the start of the novel. The darkest hour—just before the dawn—is the moment right before the hero figures out the solution to their big problem and learns the theme or life lesson.

                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-1" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-10/12 sm:w-4/5 md:w-9/12 xl:w-2/5 min-h-full bg-base-200 text-base-content text-xl">
                            {/* Sidebar drawer1 here */}
                            <li className='p-4'>
                                OPENING IMAGE (0 TO 1%)
                                <br></br>
                                A "before" snapshot of your hero and their world.
                            </li>
                            <li className='p-4'>
                                THEME STATED (5%)
                                <br></br>
                                A statement made by a character (typically not the hero) that hints at what the hero's arc will be (that is, what the hero must learn/discover before the end of the book). Also referred to as a life lesson.
                            </li>
                            <li className='p-4'>
                                SETUP (1% TO 10%)
                                <br></br>
                                An exploration of the hero's status quo life and all its flaws, where we learn what the hero's life looks like before its epic transformation. Here we also introduce other supporting characters and the hero's primary goal. But most important, we show the hero's reluctance to change (aka learn the theme) while also hinting at the stakes at risk should the hero not change.
                            </li>
                            <li className='p-4'>
                                CATALYST (10%)
                                <br></br>
                                An inciting incident (or life-changing event) that happens to the hero, which will catapult them into a new world or new way of thinking. An action beat that should be big enough to prevent the hero from being able to return to their status quo Setup world.
                            </li>
                            <li className='p-4'>
                                DEBATE (10% TO 20%)
                                <br></br>
                                A reaction sequence in which the hero debates what they will do next. It's usually presented in the form of a question (such as “Should I go?”). The purpose of this beat is to show the hero's reluctance to change.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}