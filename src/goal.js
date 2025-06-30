import React from 'react';

function MadeGoal(){
    console.log('Rendering MadeGoal');
    return <h2> Goal!!!!!!</h2>;
}

function MissedGoal(){
    console.log('Rendering MissGoal');
    return <h2> Missed the Goal.....</h2>;
}

function Goal(props){
    const isGoal = props.isGoal;

    console.log('Goal component.isGoal =', isGoal);

    if(isGoal){
        return <MadeGoal/>;
    }
    {
        return <MissedGoal/>;
    }
}

export default Goal;