import { useLaunch } from '@tarojs/taro';
import type { PropsWithChildren } from 'react';
import '@nutui/nutui-react-taro/dist/style.css';
import './app.scss';

function App({ children }: PropsWithChildren<any>) {
  useLaunch(() => {
    console.log('App launched.');
  });

  // children 是将要会渲染的页面
  return children;
}

export default App;
