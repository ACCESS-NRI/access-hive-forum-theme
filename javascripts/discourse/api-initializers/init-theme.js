import { apiInitializer } from "discourse/lib/api";

export default apiInitializer((api) => {
    api.replaceIcon('right-to-bracket', 'access-nri-aaf-icon-32x32');
});
