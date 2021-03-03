import { createApp } from '../client/index';

export default context => {
  // return new Promise((resolve, reject) => {
  const { app } = createApp(context);
  // router.push(context.url);
  // router.onReady(() => {
  // resolve(app);
  // }, reject);
  // });
  return app;
};
