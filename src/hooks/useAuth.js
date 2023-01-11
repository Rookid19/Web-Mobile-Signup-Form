import { createContext, useContext, useMemo, useState, useEffect } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  //page index
  const [pageIndex, setPageIndex] = useState(1);

  const memoValue = useMemo(() => ({ pageIndex, setPageIndex }), [pageIndex]);
  return (
    <AuthContext.Provider value={memoValue}>{children}</AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
