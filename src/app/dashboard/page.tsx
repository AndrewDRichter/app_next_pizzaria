import { cookies } from "next/headers";

export default async function Dashboard() {

    // const cookieStorage = await cookies();
    // if (cookieStorage.get('session')) {
    //     console.log(cookieStorage.get('session')?.value)
    // }


    return (
        <>
            <h1>Dashboard page</h1>
        </>
    )
}