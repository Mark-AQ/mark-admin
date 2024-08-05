import { defineStore } from "pinia";
import { ref } from "vue";

export const useVisitedRoutes = defineStore("visited-routes", () => {
  const routes = ref([
    {
      fullPath: "/dashboard",
      meta: { title: "首页", elIcon: "House" },
      isSele: true,
    },
  ]);

  const addRoute = (route) => {
    routes.value.push(route);
  };

  const deleRoute = (route) => {
    let index = routes.value.indexOf(route);
    if (!route.isSele) {
      routes.value.splice(index, 1);
    }
  };

  // 菜单栏是否伸缩
  const expand = ref(false);

  return {
    routes,
    addRoute,
    deleRoute,
    expand,
  };
});
