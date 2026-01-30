"use client"
export function AuthPage({ isSignin }: {
    isSignin: boolean
}) {

    return <div className="w-screen h-screen flex justify-center items-center">
        <div className="p-4 m-2 bg-amber-500 rounded">
            <div className="p-2 m-2">
                <input type="text" placeholder="Email" />

            </div>
            <div className="p-2 m-2">
                <input type="password" placeholder="Password" />

            </div>
            <div className="p-2 m-2">
                <button className="bg-red-400 rounded p-2" onClick={() => {

                }}>{isSignin ? "Sign in" : "Sign up"}</button>

            </div>

        </div>
    </div>
}
