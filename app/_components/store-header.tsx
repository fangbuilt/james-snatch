import Image from "next/image";
import Logo from "../_assets/logo-example.jpg"

export default function StoreHeader() {
    return (
        <div className="p-6 border border-red-500 h-fit">
            <div className="flex gap-6 border border-green-500 p-4 justify-center">
                <div className="relative aspect-[4/3] w-[400px] h-auto border border-blue-500">
                    <Image src={Logo} alt="logo" fill className="object-cover" />
                </div>
                <div className="flex flex-col gap-6 border border-blue-500 p-2">
                    <div className="flex flex-col border border-red-500 p-2">
                        <p className="font-bold text-2xl">Store Name</p>
                        <p className="text-xl">Owner Name</p>
                    </div>
                    <div className="flex flex-col gap-2 border border-red-500 p-2">
                        <p>Online/Offline/Hybrid</p>
                        <p>Social Media</p>
                        <p>Return/Refund Policy Link</p>
                        <p>Contact Support</p>
                    </div>
                </div>
            </div>
        </div>
    )
}