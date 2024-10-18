import React from 'react';

interface PricingOptionProps {
  id: string;
  name: string;
  label: string;
  price: string;
  features: string[];
  isSelected: boolean;
  onSelect: (value: string) => void;
}

const PricingOption: React.FC<PricingOptionProps> = ({
  id,
  name,
  label,
  price,
  features,
  isSelected,
  onSelect,
}) => {
  return (
    <div>
      <input
        className="hidden"
        id={id}
        type="radio"
        name={name}
        value={id}
        checked={isSelected}
        onChange={() => onSelect(id)}
      />
      <label
        className={`flex cursor-pointer flex-col border-2 p-4 ${
          isSelected ? 'border-blue-500' : 'border-gray-400'
        }`}
        htmlFor={id}
      >
        <span className="text-xs font-semibold uppercase">{label}</span>
        <span className="mt-2 text-xl font-bold">{price}</span>
        <ul className="mt-2 text-sm">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </label>
    </div>
  );
};

export default PricingOption;
