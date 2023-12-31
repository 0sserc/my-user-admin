import {createBrowserRouter, RouterProvider, LoaderFunction, ActionFunction} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./redux/store";

interface RouteCommon {
  loader?: LoaderFunction;
  action?: ActionFunction;
  ErrorBoundary?: React.ComponentType<never>;
}

interface IRoute extends RouteCommon {
  path: string;

  Element: React.ComponentType<never>;
}

interface Pages {
  [key: string]: {
    default: React.ComponentType<never>;
  } & RouteCommon;
}

const pages: Pages = import.meta.glob("./pages/**/*.tsx", {eager: true});

const routes: IRoute[] = [];

for (const path of Object.keys(pages)) {
  const fileName = path.match(/\.\/pages\/(.*)\.tsx$/)?.[1];
  if (!fileName) {
    continue;
  }

  const normalizedPathName = fileName.includes("$") ? fileName.replace("$", ":") : fileName.replace(/\/index/, "");

  routes.push({
    path: fileName === "index" ? "/" : `/${normalizedPathName.toLowerCase()}`,
    Element: pages[path].default,
    loader: pages[path]?.loader as LoaderFunction | undefined,
    action: pages[path]?.action as ActionFunction | undefined,
    ErrorBoundary: pages[path]?.ErrorBoundary,
  });
}

const router = createBrowserRouter(
  routes.map(({Element, ErrorBoundary, ...rest}) => ({
    ...rest,
    element: <Element />,
    ...(ErrorBoundary && {errorElement: <ErrorBoundary />}),
  }))
);

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
