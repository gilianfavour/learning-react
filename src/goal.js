import React from 'react';
import './Goal.css'

function MadeGoal(){
    console.log('Rendering MadeGoal');
    return <h2 className='goal-made'> Goal!!!!!!</h2>;
}

function MissedGoal(){
    console.log('Rendering MissGoal');
    return <h2 className='goal-missed'> Missed the Goal.....</h2>;
}

function Goal(props){
    const isGoal = props.isGoal;

    console.log('Goal component.isGoal =', isGoal);

    return(
        <div className='goal-section'>
            {isGoal ? <MadeGoal/> : <MissedGoal/>}
        </div>
    )
}

export default Goal;