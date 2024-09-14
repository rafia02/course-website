import React from 'react'

const Quality = () => {
  return (
    <div className=" mb-10 mx-5 md:mx-8 rounded-xl px-5 py-10 bg-gradient-to-r from-fuchsia-900 via-primary to-fuchsia-900">
    <div className="flex flex-col md:flex-row gap-5 md:gap-0 justify-between items-center">
      <div className="flex flex-col text-white items-center gap-2">
        {/* <Image src={img1} height={80} width={80} alt=""></Image> */}
        <div>
          <h1 className="font-semibold mb-1 text-lg">Enjoy Lifetime Access</h1>
          <p>Watch Video Anywhere</p>
        </div>
      </div>
      <div className="flex text-white items-center gap-3">
        {/* <Image src={img2} height={80} width={80} alt=""></Image> */}
        <div>
          <h1 className="font-semibold mb-1 text-lg">Top Instructor in over World</h1>
          <p>Watch Video Anywhere</p>
        </div>
      </div>
      <div className="flex text-white items-center gap-3">
        {/* <Image src={img3} height={80} width={80} alt=""></Image> */}
        <div>
          <h1 className="font-semibold mb-1 text-lg">Made your own Career</h1>
          <p>Watch Video Anywhere</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Quality