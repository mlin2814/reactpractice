var GreeterMessage = React.createClass({
	render: function(){
		var name = this.props.name;
		var message = this.props.message;

		return(
			<div>
				<h1>Hello {name}</h1>
				<p>{message}</p>
			</div>
		)
	}
});

var GreeterFormName = React.createClass({
	onFormSubmit: function(e){
		e.preventDefault();

		var name = this.refs.name.value;

	    if (name.length > 0) {
	      this.refs.name.value = '';
	      this.props.onNewName(name);
	    }
	},
	render: function(){
		return(
			<div>
				<form onSubmit={this.onFormSubmit}>
					<input type="text" ref="name"/>
					<button>New Name</button>
				</form>
			</div>
		);
	},
})

var GreeterFormMessage = React.createClass({
	onFormSubmit: function(e){
		e.preventDefault();

	    var message = this.refs.message.value;

	    if (message.length > 0) {
	      this.refs.message.value = '';
	      this.props.onNewMessage(message);
	    }
	},
	render: function(){
		return (
	      <div>
	      	<form onSubmit={this.onFormSubmit}>
	        	<textarea ref="message"></textarea>
	        	<button>Set Message</button>
	      	</form>
	      </div>
    	);
	}
})

var Greeter = React.createClass({
	getDefaultProps: function(){
		return {
			name: 'Dirtbag',
			message: 'You have made a terrible mistake'
		};
	},
	getInitialState: function() {
		return {
			name: this.props.name
		}
	},
	getInitialState: function() {
		return {
			message: this.props.message
		}
	},
	handleNewName: function(name){
		this.setState({
			name: name
		});
	},
	handleNewMessage: function (message) {
	    this.setState({
	      message: message
	    });
	},
	render: function(){
		var name = this.state.name;
		var message = this.state.message;
		return(
			<div>
				<GreeterMessage name={name} message={message}/>
				<GreeterFormName onNewName={this.handleNewName} />
				<GreeterFormMessage onNewMessage={this.handleNewMessage}/>
			</div>
		);
	}	
});

var fName = 'Matthew';

ReactDOM.render(
	<Greeter name={fName}/>,
	document.getElementById('app')
);
	