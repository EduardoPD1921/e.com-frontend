import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { MobileOutlined, ShopOutlined, MessageOutlined } from '@ant-design/icons';

import {
  SignUpSection,
  FormSection,
  FormShape,
  FormMarketingInfo,
  FormInputs,
  MarketingSection,
  TextCard,
  IconShape,
  CardTitle,
  CardText,
  CardInfo
} from './styles';

function SignUp() {
  return (
    <SignUpSection>
      <Header />

      <FormSection>
        <FormShape>
          <FormMarketingInfo>
            <MarketingSection>
              <TextCard>
                <IconShape>
                  <MobileOutlined style={{ fontSize: 40, color: 'white', margin: 15 }} />
                </IconShape>
                <CardText>
                  <CardTitle>
                    Baixe nosso app
                  </CardTitle>
                  <CardInfo>
                    Faça o download do nosso app, disponível na app store e na play store.
                  </CardInfo>
                </CardText>
              </TextCard>
              <TextCard>
                <IconShape>
                  <ShopOutlined style={{ fontSize: 40, color: 'white', margin: 15 }} />
                </IconShape>
                <CardText>
                  <CardTitle>
                    Produtos internacionais
                  </CardTitle>
                  <CardInfo>
                    Compre produtos dentro e fora do país em lojas verificadas.
                  </CardInfo>
                </CardText>
              </TextCard>
              <TextCard>
                <IconShape>
                  <MessageOutlined style={{ fontSize: 40, color: 'white', margin: 15 }} />
                </IconShape>
                <CardText>
                  <CardTitle>
                    Converse com nosso suporte
                  </CardTitle>
                  <CardInfo>
                    Caso tenha qualquer dúvida, nosso suporte estará disponível para ajudá-lo.
                  </CardInfo>
                </CardText>
              </TextCard>
            </MarketingSection>
          </FormMarketingInfo>
          <FormInputs>
            test
          </FormInputs>
        </FormShape>
      </FormSection>

      <Footer />
    </SignUpSection>
  );
};

export default SignUp;