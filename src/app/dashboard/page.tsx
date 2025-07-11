import { cookies } from "next/headers";
import { Orders } from "./components/orders";

export default async function Dashboard() {

    // const cookieStorage = await cookies();
    // if (cookieStorage.get('session')) {
    //     console.log(cookieStorage.get('session')?.value)
    // }


    return (
        <>
            <Orders />
        </>
    )
}