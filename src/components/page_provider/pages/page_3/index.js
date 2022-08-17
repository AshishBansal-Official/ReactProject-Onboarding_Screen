import React, { useState } from "react";
import Header from "../components/header";
import { FilledButton } from "../components/FilledButton";
import { ReactComponent as Person } from "./person.svg";
import { ReactComponent as Group } from "./group.svg";
import { Card } from "./styles/page_3";
import { useDispatch } from "react-redux";
import { incrementPage } from "../../../../features/page/selectedPageSlice";

const PageFour = () => {
    const [selectedCard, setSelectedCard] = useState(1);
    const dispatch = useDispatch();

    return (
        <>
            <Header
                title="How are you planning to use Eren?"
                subtitle="We'll streamline your setup experience accordingle."
            ></Header>
            <div style={{ display: "flex", marginTop: "45px" }}>
                <Card
                    isActive={selectedCard === 1}
                    onClick={() => {
                        setSelectedCard(1);
                    }}
                >
                    <Person
                        height={30}
                        width={30}
                        style={{
                            fill:
                                selectedCard === 1
                                    ? "var(--color-primary)"
                                    : "black",
                        }}
                    />
                    <span>For myslef</span>
                    <span>Write better.Think more clearly. Stay organized</span>
                </Card>
                <Card
                    isActive={selectedCard === 2}
                    onClick={() => {
                        setSelectedCard(2);
                    }}
                >
                    <Group
                        height={30}
                        width={30}
                        style={{
                            fill:
                                selectedCard === 2
                                    ? "var(--color-primary)"
                                    : "black",
                            marginTop: "5px",
                        }}
                    />
                    <span>With my team</span>
                    <span>
                        Wikis, docs, tasks & projects, all in one place.
                    </span>
                </Card>
            </div>
            <FilledButton
                style={{
                    maxWidth: "350px",
                }}
                onClick={() => dispatch(incrementPage())}
            >
                Create Workspace
            </FilledButton>
        </>
    );
};

export default PageFour;
