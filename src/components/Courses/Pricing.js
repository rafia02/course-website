import React from 'react'

const Pricing = () => {
  return (
    <div className="py-16">
      <div className=" px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900">Our Pricing Plans</h2>
          <p className="text-lg text-gray-500">Choose the plan that fits your needs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <div className="setbg text-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-bold ">Basic</h3>
            <p className="mt-4 ">Perfect for individuals.</p>
            <p className="mt-6 text-4xl font-extrabold">$19<span className="text-lg font-normal">/mo</span></p>
            <ul className="mt-6 space-y-4">
              <li className="">10 Projects</li>
              <li className="">Basic Support</li>
              <li className="">100 GB Storage</li>
            </ul>
            <button className="mt-8 w-full bg-white text-secondary duration-500 font-bold py-2 px-4 rounded ">
              Choose Plan
            </button>
          </div>

          {/* Pro Plan */}
          <div className="setbg text-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-bold ">Pro</h3>
            <p className="mt-4">Ideal for small teams.</p>
            <p className="mt-6 text-4xl font-extrabold">$49<span className="text-lg font-normal">/mo</span></p>
            <ul className="mt-6 space-y-4">
              <li className="">Unlimited Projects</li>
              <li className="">Priority Support</li>
              <li className="">500 GB Storage</li>
            </ul>
            <button className="mt-8 w-full bg-white text-secondary font-bold py-2 px-4 rounded ">
              Choose Plan
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="setbg text-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-bold ">Enterprise</h3>
            <p className="mt-4">Best for large teams.</p>
            <p className="mt-6 text-4xl font-extrabold">$99<span className="text-lg font-normal">/mo</span></p>
            <ul className="mt-6 space-y-4">
              <li className="">Unlimited Projects</li>
              <li className="">24/7 Support</li>
              <li className="">1 TB Storage</li>
            </ul>
            <button className="mt-8 w-full bg-white text-secondary  font-bold py-2 px-4 rounded ">
              Choose Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing