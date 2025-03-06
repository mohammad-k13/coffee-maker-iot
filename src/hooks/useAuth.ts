// import jwtDecode from "jwt-decode";
import { useEffect, useRef, useState } from "react";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
import { useAuthStore } from "~/store";
import {
  // API_BASE_URL,
  TOKEN_KEY,
  // myAxios, uploadAxios
} from "~/store/constants";
// import { toast } from "react-toastify";

interface AuthData {
  isAuthenticated: boolean;
  isLoading: boolean;
  socketClient: any;
}

export function useAuth(): AuthData {
  const myRef = useRef<any>();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const token = useAuthStore.getState()[TOKEN_KEY];
    if (token) {
      setIsAuthenticated(true);
      setLoading(false);
    }
  }, []);

  return { isAuthenticated, isLoading, socketClient: myRef.current };
}
