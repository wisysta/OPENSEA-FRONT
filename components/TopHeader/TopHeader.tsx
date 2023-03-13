import React, { useContext } from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import { Autocomplete, TextField } from "@mui/material";
import WalletIcon from "@mui/icons-material/Wallet";
import { WalletContext } from "@/context";

export const TopHeader = () => {
    const { login } = useContext(WalletContext);

    return (
        <TopHeaderView>
            <Image src="/logo.svg" alt="logo" width={40} height={40} />
            <Title>OpenSea</Title>
            <SearchView>
                <Autocomplete
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label={"Search items, collections, and accounts"}
                        />
                    )}
                    options={[]}
                />
            </SearchView>
            <MenuView>
                <Menu>Explore</Menu>
                <Menu>Create</Menu>
            </MenuView>
            <IconView onClick={login}>
                <WalletIcon />
            </IconView>
        </TopHeaderView>
    );
};

const TopHeaderView = styled.div`
    padding: 16px 32px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const Title = styled.div`
    font-size: 24px;
    font-weight: 700;
    margin-left: 8px;
`;

const SearchView = styled.div`
    flex: 1;
    margin-left: 64px;
`;

const MenuView = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 64px;
`;

const Menu = styled.div`
    padding: 0 16px;
    font-weight: 700;
`;

const IconView = styled.div`
    margin-left: 32px;
`;
