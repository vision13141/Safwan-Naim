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

      <div className="w-[160px] h-[160px] mx-auto relative">
        <svg className='w-[160px] h-[160px]' viewBox={`0 0 160 160`}>

          <circle cx={160 / 2} cy={160 / 2} className='circle-bg' r={radius} fill='none' stroke='#DDD' strokeWidth={`10px`} />

          <circle cx={160 / 2} cy={160 / 2} className='circle-bg' r={radius} fill='none' stroke='#E5745D' strokeWidth={`10px`}
            strokeLinecap='round'
            strokeDasharray={strokeArr}
            strokeDashoffset={strokeOffset} />
        </svg>

        <h2
          className='text-[#E5745D] font-Vollkorn font-bold text-[30px] absolute top-[50%] left-[50%] translate-x-[-35%] translate-y-[-50%]'>{offsetNum}%</h2>
      </div>

      <h2 className='text-[26px] pt-[14px] font-Vollkorn text-[#00413D] font-semibold'>{text}</h2>

      {/* <div className="relative">
        <div className="w-[160px] h-[160px] relative">

          <div className="w-full h-full rounded-[50%] bg-gray-200"></div>

          <div className="w-[140px] h-[140px] rounded-[50%] bg-white absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
            <div className="font-bold text-[30px] h-full w-full flex items-center justify-center">
              <h2 className='text-[#E5745D] font-Vollkorn'>{per}%</h2>
            </div>
          </div>
        </div>

        <svg className='absolute top-0 left-0' height="160" width="160" >
          <circle r="75" cx="80" cy="80" stroke=' #E5745D' fill='none' strokeWidth={`10px`} strokeLinecap='round' strokeDasharray={`470`} strokeDashoffset={num} />
        </svg>
      </div> */}
    </div>
  )
}

export default Prog