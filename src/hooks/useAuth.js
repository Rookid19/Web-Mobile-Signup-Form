import { createContext, useContext, useMemo, useState, useEffect } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  //page index
  const [pageIndex, setPageIndex] = useState(1);
  const [userData] = useState({});

  useEffect(() => {
    console.log(userData);
  }, [userData, pageIndex]);

  const memoValue = useMemo(
    () => ({ pageIndex, setPageIndex, userData }),
    [pageIndex,userData]
  );
  return (
    <AuthContext.Provider value={memoValue}>{children}</AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
