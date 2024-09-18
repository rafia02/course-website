import React from 'react'
import { benifitData } from '../datas/benifitData'
import Image from 'next/image'
// import ig from "../../Assets/Landing/benifit/choose.png"

const Benifites = () => {
  return (
    <div className="p-12 bg-gradient-to-r text-white from-fuchsia-900 via-primary to-fuchsia-900">
    <h1 className="text-2xl mb-7 font-semibold">
      What benefits will you get from us?
    </h1>

    <div className="grid mt-10 md:grid-cols-5 gap-10">

      {
        benifitData.map(b => <div className="flex text-gray-200 flex-col gap-3 items-center">
          <Image width={200} height={100} src={b.img} className=" h-14 w-14" alt=""></Image>
          <p className="  mt-5 leading-3 text-center">{b.title1} </p>
          <p className=" mt-0 leading-3 text-center">{b.title2} </p>
        </div>)
      }
      

    </div>
  </div> 
  )
}

export default Benifites