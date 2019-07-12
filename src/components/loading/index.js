import React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';

const Circle = styled.div`
    width: 40px;
    height: 40px;
    background-color: red;
    margin: 30px;
    border-radius: 50%;
`;

const CircleAnimated = posed(Circle)({
    visible: { opacity: 1, scale: 4, transition: { duration: 2000 } },
    hidden: { opacity: 0.2, scale: 1, transition: { duration: 2000 } }
});

const CircleAnimatedDrag = posed(Circle)({
    /*hoverable: true,
    draggable: 'x',
    dragBounds: { left: '-100%', right: '100%' },
    init: { scale: 1 },
    hover: { scale: 1.9 },
    drag: { scale: 1.1 }*/

    left: { x: -100 },
    right: { x: 100 }
});

class Loading extends React.Component {

    state = {
        circleAnimation: 'visible'
    }

    componentDidMount() {
        this.animationInterval = setInterval(() => {
            this.setState({
                circleAnimation: this.state.circleAnimation === 'visible' ? 'hidden' : 'visible'
            });
        }, 2000);


    }

    componentWillMount() {
        clearInterval(this.animationInterval);
    }

    render() {

        return (<>
            <CircleAnimated pose={this.state.circleAnimation}></CircleAnimated>

        </>);
    }
}
//  <CircleAnimatedDrag pose={this.state.position}></CircleAnimatedDrag>
export default Loading;