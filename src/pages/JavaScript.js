import React, { useState } from "react";
import questions from "../questions/javascript";
import Question from "../ui/Question/Question";
import QuestionsHeader from "../ui/QuestionsHeader/QuestionsHeader";
import createPersistedState from "use-persisted-state";
const useItemsState = createPersistedState("jsitems");
const useHideState = createPersistedState("js-hideCompleted");

const Home = () => {
    const [jsitems, setItems] = useItemsState([]);
    const [hideCompleted, setHideCompleted] = useHideState(false);

    const handleItems = questionId => {
        if (jsitems && jsitems.find(item => item == questionId)) {
            setItems(jsitems.filter(item => item != questionId));
        } else {
            setItems([...jsitems, questionId]);
        }
    };

    const resetItems = () => {
        setItems([]);
    };

    const toggleHideCompleted = () => {
        setHideCompleted(!hideCompleted);
    };

    return (
        <main className="container">


            <QuestionsHeader
                items={jsitems}
                questions={questions}
                resetItems={resetItems}
                toggleHideCompleted={toggleHideCompleted}
                hideCompleted={hideCompleted}
            />
            <QuestionsHeader
                items={jsitems}
                questions={questions}
                isFixed
                resetItems={resetItems}
                toggleHideCompleted={toggleHideCompleted}
                hideCompleted={hideCompleted}
            />
            <ol>
                {questions.map(question => (
                    <Question
                        key={question.id}
                        question={question}
                        handleItems={handleItems}
                        items={jsitems}
                        hideCompleted={hideCompleted}
                    />
                ))}
            </ol>
        </main>
    );
};

export default Home;
