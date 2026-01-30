import Link from "next/link";
import { Button } from "../../../packages/ui/src/button";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">

            Excalidraw Landing page
            <div>
                <Link href={"/signup"}>
                    <Button className="bg-white text-black p-2 m-4 rounded ">Sign up</Button>
                </Link>
            </div>

            <div>
                <Link href={"/signin"}>
                    <Button className="bg-white text-black p-2 m-4 rounded ">Sign in</Button>
                </Link>
            </div>
        </div>
    );
}
