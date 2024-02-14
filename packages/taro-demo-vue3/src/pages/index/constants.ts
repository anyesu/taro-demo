interface Nav {
  name: string;
  path: string;
}

interface NavGroup extends Nav {
  children: Nav[];
}

export const navs = ref([] as NavGroup[]);
