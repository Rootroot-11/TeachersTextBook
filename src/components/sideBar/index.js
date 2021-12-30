import React, {Component} from "react";

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        })
    }
    handleSubmit (event) {
        event.preventDefault()
        this.props.searchPhone(this.state.value);
    }
    render() {
        return (
            <div className="well blosd">

            </div>
        )
    }

    const mapDispatchToProps = {
        searchPhone
    }
}

export default connect(null, mapDispatchToProps)(Search)
