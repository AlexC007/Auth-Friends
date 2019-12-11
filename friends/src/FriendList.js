import React from 'react';
import { axiosWithAuth } from './axiosWithAuth';
import FriendForm from './FriendForm';
import Friend from './Friend'; 

class FriendsList extends React.Component {
    state = {
        friendsData: []
    }
    componentDidMount() {
        this.getData();
    }

    getData = () => {
        axiosWithAuth().get('/friends')
            .then(res => {
                this.setState({
                    friendsData: [res.data] 
                })
            })
            .catch(err => console.log(err))
    };

    render() {
        return (
            <div>
                <FriendForm />
                {this.state.friendsData.map(friends => (
                    friends.map(friend => {
                        return <Friend
                            key={friend.id}
                            id={friend.id}
                            name={friend.name}
                            age={friend.age}
                            email={friend.email}
                             />
                    })
                ))}
            </div>
        );
    }
}

export default FriendsList; 