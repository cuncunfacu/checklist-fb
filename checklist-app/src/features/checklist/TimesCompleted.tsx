import React from "react";
import { Badge} from "react-bootstrap";

interface TimesCompletedProps { 
    completedTimes: number
}
const TimesCompleted: React.FC<TimesCompletedProps> = ({ completedTimes }) => {
    let textToRender = '';

    switch (completedTimes) {
        case 0:
            textToRender = "Never completed"
            break;
        case 1:
            textToRender = "Completed only once"
            break;
        default:
            textToRender = `Completed ${completedTimes} times`
            break;
    }
    return <Badge bg="secondary" className="mb-4">{textToRender}</Badge>
}

export default TimesCompleted;