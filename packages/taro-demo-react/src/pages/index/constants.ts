export interface NavConfig {
  name: string;
  path: string;
}

export interface NavGroupConfig extends NavConfig {
  children: NavConfig[];
}

export const navs: NavGroupConfig[] = [];
