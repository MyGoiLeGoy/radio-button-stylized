import React, { useState, ChangeEvent } from 'react';

// Définir les options disponibles dans un type
type Option = 'small' | 'medium' | 'big';

const PricingOptions: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<Option>('small'); // Typage de l'état

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value as Option); // S'assurer que la valeur est un type Option
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      {/* Component Start */}
      <form className="grid w-full max-w-screen-sm grid-cols-3 gap-2">
        <div>
          <input
            className="hidden"
            id="radio_1"
            type="radio"
            name="radio"
            value="small"
            checked={selectedOption === 'small'}
            onChange={handleChange}
          />
          <label
            className={`flex cursor-pointer flex-col border-2 p-4 ${
              selectedOption === 'small' ? 'border-blue-500' : 'border-gray-400'
            }`}
            htmlFor="radio_1"
          >
            <span className="text-xs font-semibold uppercase">Small</span>
            <span className="mt-2 text-xl font-bold">$10/mo</span>
            <ul className="mt-2 text-sm">
              <li>Thing 1</li>
              <li>Thing 2</li>
            </ul>
          </label>
        </div>

        <div>
          <input
            className="hidden"
            id="radio_2"
            type="radio"
            name="radio"
            value="medium"
            checked={selectedOption === 'medium'}
            onChange={handleChange}
          />
          <label
            className={`flex cursor-pointer flex-col border-2 p-4 ${
              selectedOption === 'medium' ? 'border-blue-500' : 'border-gray-400'
            }`}
            htmlFor="radio_2"
          >
            <span className="text-xs font-semibold uppercase">Medium</span>
            <span className="mt-2 text-xl font-bold">$40/mo</span>
            <ul className="mt-2 text-sm">
              <li>Thing 1</li>
              <li>Thing 2</li>
            </ul>
          </label>
        </div>

        <div>
          <input
            className="hidden"
            id="radio_3"
            type="radio"
            name="radio"
            value="big"
            checked={selectedOption === 'big'}
            onChange={handleChange}
          />
          <label
            className={`flex cursor-pointer flex-col border-2 p-4 ${
              selectedOption === 'big' ? 'border-blue-500' : 'border-gray-400'
            }`}
            htmlFor="radio_3"
          >
            <span className="text-xs font-semibold uppercase">Big</span>
            <span className="mt-2 text-xl font-bold">$100/mo</span>
            <ul className="mt-2 text-sm">
              <li>Thing 1</li>
              <li>Thing 2</li>
            </ul>
          </label>
        </div>
      </form>
      {/* Component End */}
    </div>
  );
};

export default PricingOptions;
