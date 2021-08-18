import React from 'react';

import {
  TextCard,
  IconShape,
  CardText,
  CardTitle,
  CardInfo,
  CardIcon
} from './styles';

function InfoCard({ icon, title, info }) {
  return (
    <TextCard>
      <IconShape>
        <CardIcon>
          {icon}
        </CardIcon>
      </IconShape>
      <CardText>
        <CardTitle>
          {title}
        </CardTitle>
        <CardInfo>
          {info}
        </CardInfo>
      </CardText>
    </TextCard>
  );
};

export default InfoCard;