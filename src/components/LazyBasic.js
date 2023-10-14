import { Suspense, lazy } from "react";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const LazyButton = lazy(()=> sleep(2000).then(() => import('./LazyButton')))

const LazyBasic = () => {
    return (
        <Suspense fallback={<p>...Loading</p>}>
          <LazyButton />
        </Suspense>
    )

}

export default LazyBasic
