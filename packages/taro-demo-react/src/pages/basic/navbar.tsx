import { Text } from '@tarojs/components';
import { useState } from 'react';
import { Button, Popup } from '@nutui/nutui-react-taro';
import { BizPage } from '@/components';

export default function Page() {
  const [show, setShow] = useState(false);
  return (
    <BizPage title="NavBar 头部导航">
      <Button block type="primary" onClick={() => setShow(true)}>
        Hello world!
      </Button>
      <Popup visible={show} onClose={() => setShow(false)} style={{ padding: '30px' }}>
        <Text>正文</Text>
      </Popup>
    </BizPage>
  );
}
