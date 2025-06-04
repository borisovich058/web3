import { routerConfig } from "@/shared/config/routerConfig/routerConfig";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";



const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {Object.values(routerConfig).map(({ element, path }) => (
          <><Route key={path} element={(
            <Suspense fallback={<div>Loading...</div>}>
              <div className="page-wrapper">
                {element}
              </div>
            </Suspense>
          )} path={path} /><></></>
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
