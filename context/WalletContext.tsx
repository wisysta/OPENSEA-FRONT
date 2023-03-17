import Web3 from "web3";
import { createContext, PropsWithChildren, useCallback, useState } from "react";
import Axios from "axios";

declare const window: any;

interface IWalletContext {
    web3: Web3 | null;
    account: string;
    login: () => void;
}

export const WalletContext = createContext<IWalletContext>({
    web3: null,
    account: "",
    login: () => {},
});

const axios = Axios.create({
    baseURL: "http://localhost:3000",
});

export const WalletContextProvider = ({ children }: PropsWithChildren) => {
    const [web3, setWeb3] = useState<Web3 | null>(null);
    const [account, setAccount] = useState("");
    const [accessToken, setAccessToken] = useState("");

    const login = useCallback(async () => {
        if (typeof window.ethereum === "undefined") {
            console.log("metamask not installed");
            return;
        }

        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
        });

        const account = accounts[0];

        const web3 = new Web3(window.ethereum);
        setWeb3(web3);

        const authRequest = await axios.get(
            `/auth/${account.replace("0x", "")}`
        );

        const result = await web3.eth.personal.sign(
            authRequest.data.message,
            account,
            ""
        );

        const authResult = await axios.post("/auth/verify", {
            id: authRequest.data.id,
            signature: result,
        });
        console.log(authResult.data);

        // 엑세스 토큰 만료, 리프레시 토큰 발급 및 저장 로직은 이번코딩에선 생략
        setAccessToken(authResult.data.accessToken);
        setAccount(account);
    }, []);

    return (
        <WalletContext.Provider value={{ web3, account, login }}>
            {children}
        </WalletContext.Provider>
    );
};
