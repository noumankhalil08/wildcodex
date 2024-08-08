
import React from 'react';
import PricingCard from './PricingCard';

const pricingPlans = [
  {
    planName: 'Silver',
    price: '29.99',
    features: [
      { text: 'Powerful Admin Panel', included: true },
      { text: '1 Native Android App', included: true },
      { text: 'Multi-Language Support', included: false },
      { text: 'Support via Email and Phone', included: true },
    ],
    highlight: false,
    icon: './Components/img/1-1.png'
  },
  {
    planName: 'Gold',
    price: '39.99',
    features: [
      { text: 'Powerful Admin Panel', included: true },
      { text: '2 Native Android Apps', included: true },
      { text: 'Multi-Language Support', included: true },
      { text: 'Support via Email and Phone', included: true },
    ],
    highlight: true,
    icon: './Components/img/0002.png'
  },
  {
    planName: 'Platinum',
    price: '79.99',
    features: [
      { text: 'Powerful Admin Panel', included: true },
      { text: '3 Native Android Apps', included: true },
      { text: 'Multi-Language Support', included: true },
      { text: 'Support via Email and Phone', included: true },
    ],
    highlight: false,
    icon: 'path_to_platinum_icon.png'
  },
];

const PricePlan = () => {
  return (
    <>
    <div className='backgroundservices py-5 mt-5 '>
    <div className='container-fluid py-5 mt-5'>
    <div className=' py-5 mt-5 '>

    <div className='  mt-5 '>
    <div className=" mt-5 ">
      <div className="mt-5 text-center">
        <p className='numWorProcess'>Pricing</p>
        <h1><b>Our Pricing Plan</b></h1>
      </div>
      <div className="row">
        {pricingPlans.map((plan, index) => (
          <div className="col-md-4 " key={index}>
            <PricingCard
              planName={plan.planName}
              price={plan.price}
              features={plan.features}
              highlight={plan.highlight}
              icon={plan.icon}
            
            />
          </div>
        ))}
      </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </>
  );
};

export default PricePlan;
