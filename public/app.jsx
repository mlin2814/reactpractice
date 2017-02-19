var GreeterMessage = React.createClass({
	render: function(){
		return(
			<div>
				<h1>Some Title</h1>
				<p>Some text</p>
			</div>
		)
	}
});

var GreeterForm = React.createClass({
	render: function(){
		return(
			<form>
				<input type="text" ref="name"/>
				<button>New Name</button>
			</form>
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
	onClick: function(e){
		e.preventDefault();

		var nameRef = this.refs.name;
		var name = nameRef.value;
		nameRef.value = '';
		
		if (typeof name === 'string' && name.length > 0) {
			this.setState({
				name: name
			});
		}
	},
		
	render: function(){
		var name = this.state.name;
		var message = this.props.message;
		return(
			<div>
				<h1>Hello React!</h1>
				<h2>From: {name}</h2>			
				<p>{message}</p>

				<GreeterMessage/>

				<form onSubmit={this.onClick}>
					<input type="text" ref="name"/>
					<button>New Name</button>
				</form>

				<GreeterForm/>
			</div>
		);
	}	
});

var fName = 'Matthew';
var message = 'Well, that worked';

ReactDOM.render(
	<Greeter name={fName} message={message}/>,
	document.getElementById('app')
);
	