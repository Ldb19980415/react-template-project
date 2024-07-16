import { useCallback, useState } from "react";

export const useCalcLoading = (defaultLoading = false) :[boolean, (v?:boolean)=>void, number]=> {
    const [loading, setLoadingState] = useState(defaultLoading);
    const [loadingCount, setLoadingCount] = useState(Number(defaultLoading));
  
    const setLoading = useCallback((value?:boolean) => {
      setLoadingCount((prevCount) => {
        const newCount = value ? prevCount + 1 : prevCount - 1;
        setLoadingState(newCount > 0);
        return newCount;
      });
    }, []);
  
    return [loading, setLoading, loadingCount];
  };