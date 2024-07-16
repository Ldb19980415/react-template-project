import { Loading } from "@/components";
import { matchMenuIcon, ResponseRespMenus, routesData } from "@/config/router";
import { allRouters } from "@/pages";
import Page404 from "@/pages/page404";
import { ItemType, MenuItemType } from "antd/es/menu/interface";
import { Suspense, useEffect, useMemo, useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouteObject,
  Routes,
} from "react-router-dom";

interface RouterType extends ResponseRespMenus {
  component: React.LazyExoticComponent<() => JSX.Element>;
}

// 路由扁平化
const handleRouterItem = (
  routerMenu: ResponseRespMenus[],
  routerItem: RouterType[]
) => {
  routerMenu.forEach((item) => {
    if (item.children) {
      handleRouterItem(item.children, routerItem);
    } else {
      routerItem.push({
        ...item,
        component: allRouters[item.key ?? ""],
      });
    }
  });
};
// 路由转菜单
const handleMenuItem = (value?: ResponseRespMenus[]): ItemType[] => {
  const collection: ItemType[] = [];
  value?.forEach((item) => {
    if (item.hidden) {
      // 啥也不干
    } else {
      const { label, key, children } = item;
      if (children) {
        const tempV: ItemType = {
          label,
          key,
          children: handleMenuItem(children),
          type: "submenu",
        };
        collection.push(tempV);
      } else {
        const tempV: ItemType = {
          label,
          key: key,
          type: "item",
        };
        collection.push(tempV);
      }
    }
  });
  return collection;
};

export const useRouter = () => {
  const frontedRouter = routesData;

  const [routerItem, setRouterItem] = useState<RouterType[]>([]);
  useEffect(() => {
    const tmp: RouterType[] = [];
    handleRouterItem(frontedRouter, tmp);
    setRouterItem(tmp);
  }, [frontedRouter]);
  // 获取后端提供的路由；如果对于路由的控制放在前端，则不需要获取后端提供的路由
  // const { data: routerMenu, run: handleTree } = useRequest(async () => {
  //   let res = await loginApis?.getUserMenu();
  //   let newRes = [
  //     ...structuredClone(res?.menus || []),
  //     ...structuredClone(frontedRouter),
  //   ];

  //   const routerItem: RouterType[] = [];
  //   handleRouterItem(newRes, routerItem);
  //   return { newRes, routerItem, buttonAuthList: res?.button || [] };
  // });

  const routers = useMemo<React.ReactElement>(() => {
    return (
      <Routes>
        {routerItem.map((item) => (
          <Route
            key={item.key}
            path={item.key}
            element={
              <Suspense fallback={<Loading />}>
                <item.component />
              </Suspense>
            }
          />
        ))}
        <Route path="*" element={<Page404 />} />
      </Routes>
    );
  }, [routerItem]);

  const menuItems: ItemType[] = useMemo(() => {
    const resMenu: ItemType[] = handleMenuItem(frontedRouter);
    resMenu?.forEach((item: any) => {
      item.icon = matchMenuIcon(item.key);
    });
    return resMenu;
  }, [frontedRouter]);

  return [routers, menuItems];
};
