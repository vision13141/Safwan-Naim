import React, { useEffect, useState } from 'react'

const Prog = ({ stp, text }) => {
  // const [offsetNum, setoffsetNum] = useState(num)

  let [offsetNum, setoffsetNum] = useState(0)
  let stopNumber = stp

  let radius = 75
  let strokeArr = radius * Math.PI * 2
  let strokeOffset = strokeArr - (strokeArr * offsetNum) / 100

  useEffect(() => {
    setInterval(() => {
      if (offsetNum == stopNumber) {
        clearInterval()
      }
      if (offsetNum <= stopNumber) {
        setoffsetNum(offsetNum++)
      }

    }, 1000 / stp);
  }, [])

  return (
    <div>

      <div className="lg:w-[160px] lg:h-[160px] w-[30vw] h-[30vw] mx-auto relative">

        <svg className='lg:w-[160px] lg:h-[160px] w-[30vw] h-[30vw]' viewBox={`0 0 160 160`}>

          <circle cx={160 / 2} cy={160 / 2} className='circle-bg' r={radius} fill='none' stroke='#DDD' strokeWidth={`10px`} />

          <circle cx={160 / 2} cy={160 / 2} className='circle-bg' r={radius} fill='none' stroke='#E5745D' strokeWidth={`10px`}
            strokeLinecap='round'
            strokeDasharray={strokeArr}
            strokeDashoffset={strokeOffset} />

        </svg>

        <h2
          className='text-[#E5745D] font-Vollkorn font-bold lg:text-[30px] text-[7vw] absolute top-[50%] left-[50%] translate-x-[-35%] translate-y-[-50%]'>{offsetNum}%</h2>
      </div>

      <h2 className='lg:text-[26px] text-base pt-[14px] text-center font-Vollkorn text-[#00413D] font-semibold'>{text}</h2>
    </div>
  )
}

export default Prog