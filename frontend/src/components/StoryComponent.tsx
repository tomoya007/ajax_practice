import React from 'react';

interface StoryComponentProps {
    content: string;
}

const StoryComponent: React.FC<StoryComponentProps> = ({ content }) => {
    return (
        <div className="story-text">
            {content}
        </div>
    );
}

export default StoryComponent;
