import React, { useState } from "react";
import { NextPage } from "next";
import { TopHeader } from "@/components";
import styled from "@emotion/styled";
import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";

const Create: NextPage = () => {
    const [properties, setProperties] = useState([
        {
            trait_type: "",
            value: "",
        },
    ]);

    const addProperty = () => {
        setProperties((properties) => [
            ...properties,
            {
                trait_type: "",
                value: "",
            },
        ]);
    };
    return (
        <div>
            <TopHeader />
            <CreatePageWrapper>
                <CreateView>
                    <Title>Create New Items</Title>
                    <Box>
                        <FieldTitle>Image URI</FieldTitle>
                        <Helper>
                            File types: JPG, PNG, GIF, SVG, MP4, WEBP, MP3, WAW,
                            OGG, GLB, GLTF, max-size: 100MB
                        </Helper>
                        <TextField
                            required
                            fullWidth
                            margin="dense"
                            id="image-url"
                        ></TextField>

                        <FieldTitle>Token Name</FieldTitle>
                        <TextField
                            required
                            fullWidth
                            margin="dense"
                            id="token-name"
                        ></TextField>

                        <FieldTitle>Description</FieldTitle>
                        <Helper>
                            The description will be included on the item's
                            detail page underneath its images.
                        </Helper>
                        <TextField
                            required
                            multiline
                            rows={4}
                            fullWidth
                            margin="dense"
                            id="description"
                        ></TextField>

                        <FieldTitle>Properties</FieldTitle>
                        <Helper>
                            Textual traits that show up as rectangles
                        </Helper>
                        <PropertyBox>
                            {properties.map(({ trait_type, value }, index) => (
                                <PropertyRow key={`property-${index}`}>
                                    <PropertyKeyField
                                        id={`property-${index}-key`}
                                        label="key"
                                    >
                                        {trait_type}
                                    </PropertyKeyField>
                                    <PropertyValueField
                                        id={`property-${index}-value`}
                                        label="value"
                                    >
                                        {value}
                                    </PropertyValueField>
                                </PropertyRow>
                            ))}
                        </PropertyBox>

                        <Button
                            variant="outlined"
                            fullWidth
                            onClick={addProperty}
                        >
                            Add Property
                        </Button>
                        <CreateButtonView>
                            <Button variant="contained" fullWidth size="large">
                                Create
                            </Button>
                        </CreateButtonView>
                    </Box>
                </CreateView>
            </CreatePageWrapper>
        </div>
    );
};

const CreatePageWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

const CreateView = styled.div`
    width: 100%;
    max-width: 640px;
    padding: 24px;
`;

const Title = styled.div`
    font-size: 40px;
    font-weight: 800;
    margin-top: 32px;
`;

const FieldTitle = styled.div`
    font-size: 18px;
    font-weight: 800;
    margin-top: 20px;
    margin-bottom: 4px;
`;

const PropertyBox = styled.div`
    margin-bottom: 8px;
`;

const PropertyRow = styled.div`
    display: flex;
    margin-top: 8px;
`;

const PropertyKeyField = styled(TextField)`
    flex: 1;
`;

const PropertyValueField = styled(TextField)`
    flex: 2;
`;

const CreateButtonView = styled.div`
    margin-top: 12px; ;
`;

const Helper = styled.div`
    font-size: 12px;
    color: rgb(112, 122, 131);
`;

export default Create;
