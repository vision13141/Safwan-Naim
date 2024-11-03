import React, { useState, useEffect } from 'react'
import CommonSvgText from '../Component/CommonSvgText'
import CommonTitle from '../Component/CommonTitle'
import PImg from '../assets/PImg.png'
import { ProtfolioCard } from '../Component/ProtfolioCard'
import { FaArrowRightLong } from "react-icons/fa6";
import Product from '../../Prodect.json'

const Protfolio = () => {


    let [product, setproduct] = useState(Product)

    let [data, setdata] = useState(product)

    let [active, setactive] = useState(0)

    // For list part start
    let listArr = product.map((el) => el.catagory)
        .filter((el, idx, arr) => {
            return arr.indexOf(el) === idx
        })
    // For list part end


    // let list = 

    // Right Arro part start 
    const rightArro = () => {
        if (active == listArr.length) {
            setactive(0)
        } else {
            return setactive(active + 1)
        }
        // product.filter((el) => {
        //     // el.catagory
        // })

    }

    // Right Arro part end 

    // list part click start
    const liOnclick = (items, index) => {
        if (items == "All") {
            setdata(product)
            setactive(index)
            return
        }


        let update = product.filter((el) => {
            if (el.catagory == items) {
                return el
            }
        })

        setdata(update)
        setactive(index)
    }
    // list part click end

    return (
        <div className={`w-[100%] min-h-[100vh] pb-[6vw]`}>
            <CommonSvgText text={`My Portfolio`} className={`justify-center pt-[30px]`} />
            <CommonTitle text={`My Work Example`} className={`text-center pt-[15px]`} />

            <ul className='flex justify-center gap-[20px] pt-[20px]'>
                {
                    ["All", ...listArr].map((items, idx) => {
                        return (
                            <li key={idx} onClick={() => liOnclick(items, idx)} className={`text-[16px]  cursor-pointer text-[#00413D] font-Vollkorn leading-[22px] ${active === idx ? `border-b-[2px] border-[#00413D] ` : ""}`}>
                                {items}
                            </li>
                        )
                    })
                }
            </ul>

            <div className="pt-[30px] relative">
                <div className="grid grid-cols-2 gap-[20px]">
                    {
                        data.slice(0, 4).map((item) => <ProtfolioCard key={item.id} item={item} />)
                    }
                </div>

                <button onClick={rightArro} className='bg-[#e6e6e6] w-[70px] h-[70px] rounded-full flex items-center justify-center top-[50px] absolute right-[30px]' >
                    <FaArrowRightLong className='text-[#E5745D] text-[25px] font-normal' />
                </button>
            </div>
        </div >
    )
}

export default Protfolio