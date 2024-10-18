import React, { useState } from 'react';
import PricingOption from './PricingOption';

const PricingForm: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>('small');

  const options = [
    {
      id: 'small',
      label: 'Small',
      price: '$10/mo',
      features: ['Thing 1', 'Thing 2'],
    },
    {
      id: 'medium',
      label: 'Medium',
      price: '$40/mo',
      features: ['Thing 1', 'Thing 2'],
    },
    {
      id: 'big',
      label: 'Big',
      price: '$100/mo',
      features: ['Thing 1', 'Thing 2'],
    },
  ];

  return (
    <form className="grid w-full max-w-screen-sm grid-cols-3 gap-2">
      {options.map(option => (
        <PricingOption
          key={option.id}
          id={option.id}
          name="radio"
          label={option.label}
          price={option.price}
          features={option.features}
          isSelected={selectedOption === option.id}
          onSelect={setSelectedOption}
        />
      ))}
    </form>
  );
};

export default PricingForm;
