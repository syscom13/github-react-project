import React from 'react'
import PropTypes from 'prop-types'

const styles = {
    content: {
        fontSize: '35px',
        position: 'absolute',
        left: '0',
        right: '0',
        marginTop: '20px',
        textAlign: 'center'
    }
}

class Loading extends React.Component {
    constructor(props) {
        super(props)

        this.initialState = {
            content: props.text
        }

        this.state = this.initialState
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState(prevState => {
                if (prevState.content === `${this.initialState.content}...`) {
                    return {
                        content: this.initialState.content
                    }
                }

                return {
                    content: prevState.content + '.'
                }
            })
        }, this.props.speed);
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        return (
            <p style={styles.content}>
                {this.state.content}
            </p>
        )
    }
}

Loading.propTypes = {
    text: PropTypes.string,
    speed: PropTypes.number
}

Loading.defaultProps = {
    text: 'Loading',
    speed: 300
}

export default Loading