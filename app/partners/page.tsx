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
        <div
    className="sticky top-0 w-full h-[2688px]"
    style={{
      backgroundSize: "cover",
      backgroundImage:
        "url(https://cdn.jsdelivr.net/gh/Ethereumistic/chistota-smurt-assets/cover/bg-s.png)",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  />

        </div>
    );
}