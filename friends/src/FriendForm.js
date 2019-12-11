import React from "react";
import { axiosWithAuth } from './axiosWithAuth';
//Update Branch

class FriendForm extends React.Component {

        state={
            friend:{
                id:"",
                name:"",
                age:"",
                email:"",
            }
        }

     addFriend = e => {
        axiosWithAuth().post('/friends', this.state.friend)
        .then (res => {console.log('adding friend', res.data);
        this.setState ({
            id: res.data.id,
            name: res.data.name,
            age:res.data.age,
            email:res.data.email
        });
     })
            .catch(err => console.log(err))
       
    };
     handleChange = e => {
            this.setState({
        friend: {
          ...this.state.friend,
          [e.target.name]: e.target.value,
            }
        })
    };
   

    render(){
    return (
        <div className='FForm'>
            <form>
                <input
                    type='text'
                    name='name'
                    placeholder='name'
                    value={this.state.friend.name}
                    onChange={this.handleChange}
                />
                <input
                    type='text'
                    name='age'
                    placeholder='age'
                    value={this.state.friend.age}
                    onChange={this.handleChange}
                />
                <input
                    type='text'
                    name='email'
                    placeholder='email'
                    value={this.state.friend.email}
                    onChange={this.handleChange}
                />
                <button type='submit' onClick={this.addFriend}>Add Friend</button>
            </form>
        </div>
    );
};
}

export default FriendForm;
