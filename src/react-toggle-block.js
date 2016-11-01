import React from 'react';

export class ToggleBlock extends React.Component {
    render() {
        const entryType = this.props.entry ? 'entry-' + this.props.entry : '';
        let visible = 'visible';
        if (this.props.visible !== undefined) {
            visible = this.props.visible ? 'visible' : '';
        }

        return (
            <div className={['react-toggle-block', this.props.className, entryType, visible].join(' ')}>
                <div className={['toggle-block-panel', this.props.blockClassName].join(' ')}>
                    { this.props.children }
                </div>
            </div>
        )
    }
}

export const ENTRY = {
    FROM_TOP: 'FROM_TOP',
    FROM_RIGHT: 'FROM_RIGHT',
    FROM_LEFT: 'FROM_LEFT',
    FROM_BOTTOM: 'FROM_BOTTOM'
}