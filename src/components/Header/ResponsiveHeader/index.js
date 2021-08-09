import React from 'react';
import HeaderItems from '../HeaderItems';
import { MobileMenu } from './styles';

import { Button, Badge } from 'antd';
import { ShoppingOutlined } from '@ant-design/icons';

function ResponsiveHeader({ isOpen }) {
  return (
    <MobileMenu isOpen={isOpen}>
      <HeaderItems isMobileMenu={true} />
      <Button style={{ margin: 10 }} type="link">
        <Badge size="small" count={5}>
          <ShoppingOutlined style={{ fontSize: 20, color: '#efefef' }} />
        </Badge>
      </Button>
    </MobileMenu>
  );
};

export default ResponsiveHeader;