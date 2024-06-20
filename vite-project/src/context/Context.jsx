import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);

const ContextProvider = ({ children }) => {
    const [token, setToken] = useState("");

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setVisible(true);
        }, 100);
    }, []);

    const contextValue = {
        token,
        setToken,
        visible,
        setVisible,
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    );
};

export default ContextProvider;
