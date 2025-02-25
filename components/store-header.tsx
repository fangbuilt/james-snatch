import Image from "next/image";

export default function StoreHeader() {
    return (
        <div className="p-6 h-fit">
            <div className="flex gap-6 p-4 justify-center">
                <div className="relative aspect-[4/3] w-[400px] h-auto">
                    <Image src={"/logo-example.jpg"} alt="logo" fill className="object-cover" />
                </div>
                <div className="flex flex-col gap-6 p-2">
                    <div className="flex flex-col p-2">
                        <p className="font-bold text-2xl">Store Name</p>
                        <p className="text-xl">Owner Name</p>
                    </div>
                    <div className="flex flex-col gap-2 p-2">
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