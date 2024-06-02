import UserBreadcrumb from "@/components/shared/breadcrumb";
import Link from "next/link";

function Cart() {
    return ( 
        <section>
            <section className='flex justify-between items-end relative mt-12'>
                    <hr className='w-full border-t-[3px] border-[#C6613D]' />
                    <div className='absolute left-0 py-2 text-[#C6613D]'><UserBreadcrumb /></div>
                    <h4 className='text-[24px] font-semibold uppercase text-[#C6613D] absolute right-0'>Giỏ hàng</h4>
            </section>
            <section className='flex flex-col justify-center items-center h-[80vh]'>
                {/* Empty Cart Situation */}
                {/* <div className='flex flex-col justify-center items-center gap-4'>
                    <h4 className='text-[#C6613D] text-[24px] font-bold'>Giỏ hàng của bạn đang trống</h4>
                    <Link href='/products'>
                        <button className='bg-[#C6613D] hover:bg-[#8d442a] text-white transition-colors ease-in-out duration-500 w-[200px] h-[40px] rounded-[8px]'>Mua sắm ngay</button>
                    </Link>
                </div> */}
    
                {/* Cart Has Item Situation */}
                <div className='flex flex-col justify-center items-center gap-4'>
                    <h4 className='text-[#C6613D] text-[24px] font-bold'>Giỏ hàng của bạn</h4>
                    <div className='flex flex-col gap-4'>
                        <div className='flex justify-between items-center w-[560px]'>
                            <div className='flex gap-4'>
                                <img src='/images/Product_Image.png' alt='Product Image' className='w-[100px] h-[100px] object-cover rounded-[8px]' />
                                <div className='flex flex-col gap-2'>
                                    <h4 className='text-[#C6613D] text-[24px] font-semibold'>Sample Product</h4>
                                    <p className='text-[#C6613D] text-[16px] font-semibold'>1000000 VND</p>
                                </div>
                            </div>
                            <div className='flex gap-4'>
                                <button className='w-[40px] h-[40px] bg-[#C6613D] hover:bg-[#8d442a] text-white transition-colors ease-in-out duration-500 rounded-[8px]'>-</button>
                                <span className='text-[#C6613D] text-[16px] font-semibold'>1</span>
                                <button className='w-[40px] h-[40px] bg-[#C6613D] hover:bg-[#8d442a] text-white transition-colors ease-in-out duration-500 rounded-[8px]'>+</button>
                            </div>
                        </div>
                        <div className='flex justify-between items-center w-[560px]'>
                            <div className='flex gap-4'>
                                <img src='/images/Product_Image.png' alt='Product Image' className='w-[100px] h-[100px] object-cover rounded-[8px]' />
                                <div className='flex flex-col gap-2'>
                                    <h4 className='text-[#C6613D] text-[24px] font-semibold'>Sample Product</h4>
                                    <p className='text-[#C6613D] text-[16px] font-semibold'>1000000 VND</p>
                                </div>
                            </div>
                            <div className='flex gap-4'>
                                <button className='w-[40px] h-[40px] bg-[#C6613D] hover:bg-[#8d442a] text-white transition-colors ease-in-out duration-500 rounded-[8px]'>-</button>
                                <span className='text-[#C6613D] text-[16px] font-semibold'>1</span>
                                <button className='w-[40px] h-[40px] bg-[#C6613D] hover:bg-[#8d442a] text-white transition-colors ease-in-out duration-500 rounded-[8px]'>+</button>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between w-[560px]'>
                        <h4 className='text-[#C6613D] text-[24px] font-semibold'>Tổng cộng:</h4>
                        <p className='text-[#C6613D] text-[24px] font-semibold'>2000000 VND</p>
                    </div>
                    <div className='flex justify-between w-[560px]'>
                        <button className='w-[200px] h-[40px] bg-[#C6613D] hover:bg-[#8d442a] text-white transition-colors ease-in-out duration-500 rounded-[8px]'>Thanh toán</button>
                        <button className='w-[200px] h-[40px] bg-none hover:bg-[#C6613D] border-[1px] border-[#C6613D] text-[#C6613D] hover:text-white transition-all ease-in-out duration-300 rounded-[8px]'>Xóa giỏ hàng</button>
                    </div>
                </div>
            </section>
        </section>
     );
}

export default Cart;