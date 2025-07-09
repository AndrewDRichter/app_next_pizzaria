import { cookies } from "next/headers";

export default function Dashboard() {

    const cookieStorage = await cookies();
    if (cookieStorage.get('session')) {
        console.log(cookieStorage.get('session'))
    }

    return (
        <>
            <h1>Dashboard page</h1>
        </>
    )
}