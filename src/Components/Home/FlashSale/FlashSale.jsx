import { useLoaderData } from 'react-router-dom';

const FlashSale = () => {

    const products = useLoaderData()
    // console.log(products)

    return (
        <div className="w-11/12 mx-auto my-8">
            <h1 className="text-2xl font-medium my-3">Flash Sale</h1>
            <div className="grid grid-cols-3 lg:grid-cols-6 gap-1 md:gap-5">
                {
                    products?.slice(4, 10)?.map((product, idx) =>
                        <div key={idx} className='shadow-lg rounded hover:shadow-lg truncate'>
                            <img className="h-20 md:h-32 2xl:h-64 w-full" src={product?.photo} alt="" />
                            <div className=' p-1'>
                                <h4 className="text-[10px] md:text-base font-semibold md:my-1">{product?.name?.slice(0, 15)}...</h4>
                                    <span className="text-orange-500 my-0.5 font-semibold text-[10px] md:text-base"><del className='text-black mr-3'>${product?.price}</del> ${parseInt(product?.price*0.8)}</span>
                            </div>
                        </div>
                        )
                }
            </div>
        </div>
    );
};

export default FlashSale;