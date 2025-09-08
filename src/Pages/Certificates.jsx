import Carousel from "../Components/Carousel";

const Certificates = ()=>{
    return(
        <>
            <div className="flex flex-col justify-center items-center text-white py-7.5">
                <div className="text-bold sm:text-2xl md:text-3xl hover:tracking-widest transition-all duration-300 origin-left cursor-pointer p-4">
                    Certificates
                    <span className='text-red-500 m-1'>
                    .
                    </span>
                </div>
                <Carousel/>
            </div>
        </>
    );
}
export default Certificates;    