export interface NavConfig {
  name: string;
  path: string;
}

export interface NavGroupConfig extends NavConfig {
  children: NavConfig[];
}

export const NUT_UI_LOGO =
  'https://img14.360buyimg.com/imagetools/jfs/t1/117879/25/28831/6279/6329723bE66715a2f/5f099b8feca9e8cc.png';

export const navs: NavGroupConfig[] = [];
