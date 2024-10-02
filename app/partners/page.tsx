import Image from "next/image";
import { InfiniteMovingCardsDemo } from "../components/InfiniteMovingCardsDemo";
import Loader from "../components/ui/Loader";



export default function Partners() {

    return (
        <div className="w-full mx-auto justify-center items-center overflow-x-hidden">
            <Loader />
            <h1 className="text-6xl  mt-32 text-center" >Нашите Партньори</h1>
        <div className="">
            <InfiniteMovingCardsDemo />
        </div>
        
        </div>
    );
}