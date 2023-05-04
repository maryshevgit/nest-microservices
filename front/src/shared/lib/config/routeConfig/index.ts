interface IRouteConfig {
  url: string;
  title: string;
}

export const routeConfig: IRouteConfig[] = [
  {
    url: '/web',
    title: 'Web Development',
  },
  {
    url: '/astronomy',
    title: 'Astronomy',
  },
  {
    url: '/sports',
    title: 'Sports',
  },
  {
    url: '/education',
    title: 'Education',
  },
  {
    url: '/photography',
    title: 'Photography',
  },
];
