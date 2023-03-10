// Utilities
import { createPinia } from 'pinia'
import piniaPluginPersitedstate from 'pinia-plugin-persistedstate';

const pinia = createPinia();

pinia.use(piniaPluginPersitedstate);
export default pinia;
