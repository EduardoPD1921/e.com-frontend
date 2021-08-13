import React from 'react';

import Header from '../../components/Header';

import {
  RegisterTypeSelectorSection,
  OptionCardSection,
  OptionCard
} from './styles';

function RegisterTypeSelector() {
  return (
    <RegisterTypeSelectorSection>
      <Header />

      <OptionCardSection>
        <OptionCard>
          test
        </OptionCard>
      </OptionCardSection>
    </RegisterTypeSelectorSection>
  );
};

export default RegisterTypeSelector;