"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
  useEffect,
} from "react";

interface User {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  role: string;
  created_at: string;
  updated_at: string;
}

interface SessionContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  checkSession: () => Promise<void>;
}

const SessionContext = createContext<SessionContextType | undefined>(undefined);

export const SessionProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const fetchUserById = async (userId: number) => {
    try {
      const response = await fetch(`http://localhost:3000/user/${userId}`);
      if (!response.ok) throw new Error("Failed to fetch user data");
      const userData: User = await response.json();
      setUser(userData);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const response = await fetch("http://localhost:3000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Login failed");
      }

      await fetchUserById(result.userId);
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      const response = await fetch("http://localhost:3000/user/logout", {
        method: "GET",
        credentials: "include",
      });
      if (response.ok) {
        setUser(null);
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const checkSession = async () => {
    try {
      const response = await fetch("http://localhost:3000/user/check-cookie", {
        method: "GET",
        credentials: "include",
      });
      const result = await response.json();
      if (response.ok) {
        await fetchUserById(result.userId);
      }
    } catch (error) {
      // console.error("Session check error:", error);
    }
  };

  useEffect(() => {
    checkSession();
  }, []);

  return (
    <SessionContext.Provider value={{ user, login, logout, checkSession }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error("useSession must be used within a SessionProvider");
  }
  return context;
};
