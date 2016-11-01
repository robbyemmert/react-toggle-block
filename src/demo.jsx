import React from 'react';

import { ToggleBlock, ENTRY } from './react-toggle-block';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fromLeftVisible: false,
            fromTopVisible: false,
            fromRightVisible: false,
            fromBottomVisible: false
        }
    }
    render() {
        return (
            <div className="demo">
                <div className="controls">
                    <button onClick={() => this.setState({ fromLeftVisible: !this.state.fromLeftVisible })}>
                        Toggle From Left
                    </button>
                    <button onClick={() => this.setState({ fromRightVisible: !this.state.fromRightVisible })}>
                        Toggle From Right
                    </button>
                    <button onClick={() => this.setState({ fromTopVisible: !this.state.fromTopVisible })}>
                        Toggle From Top
                    </button>
                    <button onClick={() => this.setState({ fromBottomVisible: !this.state.fromBottomVisible })}>
                        Toggle From Bottom
                    </button>
                </div>
                <div className="wrapper">
                    <div className="col">
                        <ToggleBlock visible={this.state.fromLeftVisible} entry={ENTRY.FROM_LEFT}>
                            <div className="from-left block-large">From Left</div>
                        </ToggleBlock>
                    </div>
                    <div className="col">
                        <ToggleBlock visible={this.state.fromTopVisible} entry={ENTRY.FROM_TOP}>
                            <div className="from-top block-small">From Top</div>
                        </ToggleBlock>
                        <ToggleBlock visible={this.state.fromBottomVisible} entry={ENTRY.FROM_BOTTOM}>
                            <div className="from-bottom block-small">From Bottom</div>
                        </ToggleBlock>
                    </div>
                    <div className="col">
                        <ToggleBlock visible={this.state.fromRightVisible} entry={ENTRY.FROM_RIGHT}>
                            <div className="from-right block-large">From Right</div>
                        </ToggleBlock>
                    </div>
                </div>
            </div>
        )
    }
}